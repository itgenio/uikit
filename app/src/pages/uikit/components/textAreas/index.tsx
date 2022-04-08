import './style.less';
import React, { Fragment } from 'react';
import { TextArea, TextAreaProps } from '@itgenio/gkit';

export function TextAreas() {
  const sizes = ['small', 'large'];

  const renderState = (state: string, props: TextAreaProps) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        {sizes.map(size => {
          const p = { ...props, size };
          return <TextArea key={size} {...p} description={`${size} Desc`} />;
        })}
      </Fragment>
    );
  };

  const states: [string, TextAreaProps][] = [
    ['Normal', { placeholder: 'placeholder', label: 'Label1' }],
    ['Hover', { hover: true, placeholder: 'placeholder', label: 'Label2' }],
    ['Focused', { focus: true, placeholder: 'placeholder', label: 'Label3' }],
    ['Filled', { filled: true, placeholder: 'placeholder', label: 'Label4' }],
    ['Error', { error: true, placeholder: 'placeholder', label: 'Label5' }],
    ['Disabled', { disabled: true, placeholder: 'placeholder', label: 'Label6' }],
  ];

  return (
    <div className="textAreas">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

TextAreas.displayName = 'TextAreas';
