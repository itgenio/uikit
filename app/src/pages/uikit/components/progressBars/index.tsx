import './style.less';

import React, { Fragment } from 'react';
import { ArrowRightIcon, ArrowCircleRightFilledIcon } from '@itgenio/gkit/icons';
import {
  ProgressBar,
  ProgressBarCheckpointElementWrap,
  ProgressBarCustomCheckpointElementProps,
  ProgressBarProps,
} from '@itgenio/gkit/progressBar';

const CustomCheckpointElement = ({ done, asd }: ProgressBarCustomCheckpointElementProps<{ asd: string }>) => {
  return (
    <ProgressBarCheckpointElementWrap done={done}>
      {done ? (
        <ArrowCircleRightFilledIcon
          style={{
            width: '2rem',
            height: '2rem',
            fontSize: '2rem',
            color: `var(--gkit-color-primary-400)`,
          }}
        />
      ) : (
        <ArrowRightIcon
          style={{
            width: '1rem',
            height: '1rem',
            fontSize: '1rem',
            color: `var(--gkit-color-neutral-400)`,
          }}
        />
      )}

      {asd}
    </ProgressBarCheckpointElementWrap>
  );
};

export function ProgressBars() {
  // @ts-expect-error generic type
  const states: { state: string; props: ProgressBarProps }[] = [
    { state: 'No progress', props: { checkpoints: [{}, {}, {}] } },
    { state: 'First progress', props: { checkpoints: [{ progress: 40 }, {}, {}] } },
    { state: 'First done, second progress', props: { checkpoints: [{ progress: 100 }, { progress: 40 }, {}] } },
    { state: 'All done', props: { checkpoints: [{ progress: 100 }, { progress: 100 }, { progress: 100 }] } },
    {
      state: 'Checkpoints with custom elements',
      props: {
        checkpoints: [
          { CheckpointElement: CustomCheckpointElement, CheckpointComponentProps: { asd: 'qwe' }, progress: 100 },
          { CheckpointElement: CustomCheckpointElement, progress: 50 },
          { CheckpointElement: CustomCheckpointElement },
        ],
      },
    },
    {
      state: 'CheckpointElement === null, for second checkpoint',
      props: { checkpoints: [{ progress: 100 }, { progress: 100 }, { progress: 50 }] },
    },
    {
      state: 'withSequentialProgress === true, (by default). [100, 100, undefined, 100, 100]',
      props: {
        checkpoints: [
          { progress: 100 },
          { progress: 100 },
          { progress: undefined },
          { progress: 100 },
          { progress: 100 },
        ],
        withSequentialProgress: true,
      },
    },
    {
      state: 'withSequentialProgress === false. [100, 100, undefined, 100, 100]',
      props: {
        checkpoints: [
          { progress: 100 },
          { progress: 100 },
          { progress: undefined },
          { progress: 100 },
          { progress: 100 },
        ],
        withSequentialProgress: false,
      },
    },
  ];

  return (
    <div className="progress-bars">
      {states.map(({ state, props }, index) => {
        return (
          <Fragment key={state}>
            <div className="progress-bar-state">
              <div>{state}</div>

              <ProgressBar key={`progress-bar-${index}`} {...props} />
            </div>

            {index < states.length - 1 && <hr />}
          </Fragment>
        );
      })}
    </div>
  );
}

ProgressBars.displayName = 'ProgressBars';
