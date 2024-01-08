import './style.less';

import classNames from 'classnames';
import React, { Fragment, FunctionComponent, PropsWithChildren } from 'react';
import { CheckmarkCircleFilledIcon } from '../icons';

export const PROGRESS_BAR_MIN_PROGRESS = 0;
export const PROGRESS_BAR_MAX_PROGRESS = 100;

export const PROGRESS_BAR_CHECKPOINT_CN = 'progress-bar-checkpoint';
export const PROGRESS_BAR_CHECKPOINT_CSS_PREFIX = `--${PROGRESS_BAR_CHECKPOINT_CN}`;

export const PROGRESS_BAR_CHECKPOINT_BORDER_SIZE_REM = 0.25;

type IsAny<T> = 0 extends 1 & T ? true : false;

type AnyFC = FunctionComponent<any>;

type GetCheckpointProps<T extends ProgressBarCheckpointProps<AnyFC>> = T extends T
  ? ProgressBarCheckpointProps<IsAny<T['CheckpointComponent']> extends true ? undefined : T['CheckpointComponent']>
  : T;

type BaseProps = { className?: string; idQa?: string };

export type ProgressBarCheckpointInternalProps = { withoutProgressLine?: boolean; index: number; zIndex: number };

export type ProgressBarCheckpointProps<P extends AnyFC> = BaseProps & {
  CheckpointComponent?: P | null;
  CheckpointComponentProps?: P extends FunctionComponent<ProgressBarCustomCheckpointElementProps<infer R>> ? R : {};
  progress?: number;
  withoutBeforeSibling?: boolean;
  withoutAfterSibling?: boolean;
};

export type ProgressBarCustomCheckpointElementProps<T> = ProgressBarCheckpointProps<FunctionComponent<T>> &
  ProgressBarCheckpointInternalProps & { done: boolean } & T;

export type ProgressBarProps<S extends AnyFC, C extends ProgressBarCheckpointProps<AnyFC>> = BaseProps & {
  startCheckpoint?: ProgressBarCheckpointProps<S>;
  checkpoints: GetCheckpointProps<C>[];
  withSequentialProgress?: boolean;
};

const ProgressBarInternal = <S extends AnyFC, C extends ProgressBarCheckpointProps<AnyFC>>({
  className,
  checkpoints,
  startCheckpoint = {},
  withSequentialProgress = true,
  idQa,
}: ProgressBarProps<S, C>) => {
  const hasFirstCheckpointProgress = checkpoints[0]?.progress !== undefined;
  let isCheckpointsWithoutProgress = false;

  return (
    <div className={classNames('gkit-progress-bar', className)} id-qa={idQa}>
      <CheckpointInternal
        progress={hasFirstCheckpointProgress && PROGRESS_BAR_MAX_PROGRESS}
        CheckpointComponent={hasFirstCheckpointProgress ? undefined : ProgressBarCheckpointElementWrap}
        idQa={classNames({ [`${idQa}-checkpoint-0`]: !!idQa })}
        {...startCheckpoint}
        withoutProgressLine
        index={0}
        zIndex={checkpoints.length + 1}
      />

      {checkpoints.map(({ progress, ...checkpoint }, index) => {
        // Если прогресс последовательный, то убираем прогресс для чекпоинтов, которые идут после невыполненных
        if (withSequentialProgress) {
          const prevCheckpoint = checkpoints[index - 1];

          if (
            !isCheckpointsWithoutProgress &&
            prevCheckpoint &&
            (prevCheckpoint.progress === undefined || prevCheckpoint.progress < PROGRESS_BAR_MAX_PROGRESS)
          ) {
            isCheckpointsWithoutProgress = true;
          }
        }

        const checkpointIndex = index + 1;

        return (
          <CheckpointInternal
            key={index}
            idQa={classNames({ [`${idQa}-checkpoint-${checkpointIndex}`]: !!idQa })}
            {...checkpoint}
            progress={isCheckpointsWithoutProgress ? PROGRESS_BAR_MIN_PROGRESS : progress}
            index={checkpointIndex}
            zIndex={checkpoints.length - index}
          />
        );
      })}
    </div>
  );
};

type ProgressBarFunctionType = typeof ProgressBarInternal;
type ProgressBarFunctionComponentType = FunctionComponent<Parameters<ProgressBarFunctionType>[0]>;

type ProgressBarType = ProgressBarFunctionType & {
  [K in keyof ProgressBarFunctionComponentType]: ProgressBarFunctionComponentType[K];
};

export const ProgressBar: ProgressBarType = React.memo(ProgressBarInternal);

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
          [`${PROGRESS_BAR_CHECKPOINT_CSS_PREFIX}-z-index` as string]: zIndex,
          [`${PROGRESS_BAR_CHECKPOINT_CSS_PREFIX}-border-size` as string]: `${PROGRESS_BAR_CHECKPOINT_BORDER_SIZE_REM}rem`,
        }}
        data-checkpoint-index={index}
        id-qa={idQa}
      >
        {!withoutProgressLine && (
          <div className="progress-line" id-qa={classNames({ [`${idQa}-progress-line`]: !!idQa })}>
            {!withoutBeforeSibling && <div className={classNames('progress-before', { filled: !!progress })} />}

            <div
              className="progress-filled"
              style={{ [`${PROGRESS_BAR_CHECKPOINT_CSS_PREFIX}-width` as string]: progressWidth }}
              id-qa={classNames({ [`progress-bar-filled-line-${progressWidth}`]: !!idQa })}
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
          <ProgressBarCheckpointElementWrap done={isCheckpointDone} idQa={classNames({ [`${idQa}-goal`]: !!idQa })}>
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
