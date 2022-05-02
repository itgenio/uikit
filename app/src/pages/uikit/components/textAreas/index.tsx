import './style.less';
import React, { Fragment } from 'react';
import { TextArea, TextAreaProps } from '@itgenio/gkit';

export function TextAreas() {
  const sizes = ['small', 'large'] as const;

  const renderState = (state: string, props: TextAreaProps, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        {sizes.map(size => {
          const p = { ...props, size };
          return <TextArea {...p} placeholder="Placeholder" key={size} label="Label" helperText="Desc" />;
        })}
      </Fragment>
    );
  };

  const states: { state: string; props?: TextAreaProps }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Focused', props: { focus: true } },
    { state: 'Filled', props: { filled: true } },
    { state: 'Error', props: { error: true } },
    { state: 'Disabled', props: { disabled: true } },
  ];

  return (
    <div className="textAreas">
      <div className="grid">{states.map(({ state, props = {} }, index) => renderState(state, props, index))}</div>
    </div>
  );
}

TextAreas.displayName = 'TextAreas';
