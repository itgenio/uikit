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
export type ProgressBarCheckpointProps = BaseProps & {
  CheckpointElement?: FunctionComponent<ProgressBarCustomCheckpointElementProps> | null;
  progress?: number;
  withoutBeforeSibling?: boolean;
  withoutAfterSibling?: boolean;
};

export type ProgressBarCustomCheckpointElementProps = ProgressBarCheckpointProps &
  ProgressBarCheckpointInternalProps & { done: boolean };

export type ProgressBarProps = BaseProps & {
  startCheckpoint?: ProgressBarCheckpointProps;
  checkpoints: ProgressBarCheckpointProps[];
  withSequentialProgress?: boolean;
};

export const ProgressBar = React.memo(
  ({ className, checkpoints, startCheckpoint = {}, withSequentialProgress = true, idQa }: ProgressBarProps) => {
    const hasFirstCheckpointProgress = checkpoints[0]?.progress !== undefined;

    return (
      <div className={classNames('gkit-progress-bar', className)} id-qa={idQa}>
        <CheckpointInternal
          progress={hasFirstCheckpointProgress && PROGRESS_BAR_MAX_PROGRESS}
          CheckpointElement={hasFirstCheckpointProgress ? undefined : ProgressBarCheckpointElementWrap}
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
  }
);

ProgressBar.displayName = 'ProgressBar';

const CheckpointInternal = React.memo(
  ({ CheckpointElement, ...props }: ProgressBarCheckpointProps & ProgressBarCheckpointInternalProps) => {
    const { className, progress, withoutBeforeSibling, withoutAfterSibling, withoutProgressLine, index, zIndex, idQa } =
      props;

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

        {CheckpointElement !== undefined ? (
          // Checkpoint element can be null
          <Fragment>{CheckpointElement && <CheckpointElement {...props} done={isCheckpointDone} />}</Fragment>
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
