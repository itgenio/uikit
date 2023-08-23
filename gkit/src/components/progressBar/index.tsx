import './style.less';

import classNames from 'classnames';
import React, { Fragment, FunctionComponent, PropsWithChildren } from 'react';
import { CheckmarkCircleFilledIcon } from '../icons';

export const PROGRESS_BAR_MIN_PROGRESS = 0;
export const PROGRESS_BAR_MAX_PROGRESS = 100;

export const PROGRESS_BAR_CHECKPOINT_CN = 'progress-bar-checkpoint';
export const PROGRESS_BAR_CHECKPOINT_CSS_PREFIX = `--${PROGRESS_BAR_CHECKPOINT_CN}`;

export const PROGRESS_BAR_CHECKPOINT_BORDER_SIZE_REM = 0.25;

type BaseProps = { className?: string; idQa?: string };

export type ProgressBarCheckpointInternalProps = { withoutProgressLine?: boolean; index: number; zIndex: number };

export type ProgressBarCheckpointProps<P extends FunctionComponent<any>> = BaseProps & {
  CheckpointComponent?: P | null;
  CheckpointComponentProps?: P extends FunctionComponent<ProgressBarCustomCheckpointElementProps<infer R>> ? R : {};
  progress?: number;
  withoutBeforeSibling?: boolean;
  withoutAfterSibling?: boolean;
};

export type ProgressBarCustomCheckpointElementProps<T> = ProgressBarCheckpointProps<FunctionComponent<T>> &
  ProgressBarCheckpointInternalProps & { done: boolean } & T;

export type ProgressBarProps<S extends FunctionComponent<any>, T extends FunctionComponent<any>> = BaseProps & {
  startCheckpoint?: ProgressBarCheckpointProps<S>;
  checkpoints: ProgressBarCheckpointProps<T>[];
  withSequentialProgress?: boolean;
};

export const ProgressBar = <S extends FunctionComponent<any>, T extends FunctionComponent<any>>({
  className,
  checkpoints,
  startCheckpoint = {},
  withSequentialProgress = true,
  idQa,
}: ProgressBarProps<S, T>) => {
  const hasFirstCheckpointProgress = checkpoints[0]?.progress !== undefined;

  return (
    <div className={classNames('gkit-progress-bar', className)} id-qa={idQa}>
      <CheckpointInternal
        progress={hasFirstCheckpointProgress && PROGRESS_BAR_MAX_PROGRESS}
        CheckpointComponent={hasFirstCheckpointProgress ? undefined : ProgressBarCheckpointElementWrap}
        {...startCheckpoint}
        withoutProgressLine
        index={0}
        zIndex={checkpoints.length + 1}
      />

      {checkpoints.map(({ progress, ...checkpoint }, index) => {
        if (withSequentialProgress) {
          const prevCheckpoint = checkpoints[index - 1];

          if (
            prevCheckpoint &&
            (prevCheckpoint.progress === undefined || prevCheckpoint.progress < PROGRESS_BAR_MAX_PROGRESS)
          ) {
            progress = PROGRESS_BAR_MIN_PROGRESS;
          }
        }

        return (
          <CheckpointInternal
            key={index}
            {...checkpoint}
            progress={progress}
            index={index + 1}
            zIndex={checkpoints.length - index}
          />
        );
      })}
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';

const CheckpointInternal = React.memo(
  <T extends FunctionComponent<ProgressBarCustomCheckpointElementProps<any>>>(
    props: ProgressBarCheckpointProps<T> & ProgressBarCheckpointInternalProps
  ) => {
    const {
      CheckpointComponent,
      CheckpointComponentProps = {},
      className,
      progress,
      withoutBeforeSibling,
      withoutAfterSibling,
      withoutProgressLine,
      index,
      zIndex,
      idQa,
    } = props;

    const progressWidth = `${Math.min(Math.max(PROGRESS_BAR_MIN_PROGRESS, progress ?? 0), PROGRESS_BAR_MAX_PROGRESS)}%`;
    const isCheckpointDone = progress === PROGRESS_BAR_MAX_PROGRESS;

    return (
      <div
        className={classNames(PROGRESS_BAR_CHECKPOINT_CN, className, {
          'without-progress-line': withoutProgressLine,
        })}
        style={{
          [`${PROGRESS_BAR_CHECKPOINT_CSS_PREFIX}-z-index`]: zIndex,
          [`${PROGRESS_BAR_CHECKPOINT_CSS_PREFIX}-border-size`]: `${PROGRESS_BAR_CHECKPOINT_BORDER_SIZE_REM}rem`,
        }}
        data-checkpoint-index={index}
        id-qa={idQa}
      >
        {!withoutProgressLine && (
          <div className="progress-line" id-qa={classNames({ [`${idQa}-progress-line`]: !!idQa })}>
            {!withoutBeforeSibling && <div className={classNames('progress-before', { filled: !!progress })} />}

            <div
              className="progress-filled"
              style={{ [`${PROGRESS_BAR_CHECKPOINT_CSS_PREFIX}-width`]: progressWidth }}
            />

            {!withoutAfterSibling && <div className={classNames('progress-after', { filled: isCheckpointDone })} />}
          </div>
        )}

        {CheckpointComponent !== undefined ? (
          // Checkpoint component can be null
          <Fragment>
            {CheckpointComponent && (
              <CheckpointComponent
                {...(CheckpointComponentProps as Parameters<T>[0])}
                {...props}
                done={isCheckpointDone}
              />
            )}
          </Fragment>
        ) : (
          <ProgressBarCheckpointElementWrap
            done={isCheckpointDone}
            idQa={classNames({ [`${idQa}-checkpoint-wrap`]: !!idQa })}
          >
            <ProgressBarCheckpointDefaultElement title={`${index}`} done={isCheckpointDone} />
          </ProgressBarCheckpointElementWrap>
        )}
      </div>
    );
  }
);

CheckpointInternal.displayName = 'CheckpointInternal';

export const ProgressBarCheckpointElementWrap = React.memo(
  ({ className, idQa, done, children }: PropsWithChildren<BaseProps & { done: boolean }>) => {
    return (
      <div
        className={classNames('progress-bar-checkpoint-element-wrap', className, {
          'progress-bar-checkpoint-element-done': done,
        })}
        id-qa={idQa}
      >
        {children}
      </div>
    );
  }
);

ProgressBarCheckpointElementWrap.displayName = 'ProgressBarCheckpointElementWrap';

export const ProgressBarCheckpointDefaultElement = React.memo(({ title, done }: { title: string; done: boolean }) => {
  return (
    <Fragment>
      {done ? (
        <CheckmarkCircleFilledIcon className="progress-bar-checkpoint-element-done-icon" />
      ) : (
        <span className="progress-bar-checkpoint-element-title">{title}</span>
      )}
    </Fragment>
  );
});

ProgressBarCheckpointDefaultElement.displayName = 'ProgressBarCheckpointDefaultElement';
