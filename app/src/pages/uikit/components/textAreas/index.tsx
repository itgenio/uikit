import './style.less';
import React, { Fragment } from 'react';
import { TextAreaContainer, TextArea, Selector, TextAreaProps } from '@itgenio/gkit';

export function TextAreas() {
  const sizes = ['small', 'large'];

  const renderState = (state: string, props: TextAreaProps) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        {sizes.map(size => {
          const p = { ...props, size };
          return (
            <TextAreaContainer key={size} {...p} description={`${size} Desc`}>
              <Selector {...p} placeholder="placeholder" options={options} />
            </TextAreaContainer>
          );
        })}
      </Fragment>
    );
  };

  const states: [string, TextAreaProps][] = [
    ['Normal', { label: 'Label1' }],
    ['Hover', { hover: true, label: 'Label2' }],
    ['Focused', { focus: true, label: 'Label3' }],
    ['Filled', { filled: true, label: 'Label4' }],
    ['Error', { error: true, label: 'Label5' }],
    ['Disabled', { disabled: true, label: 'Label6' }],
  ];

  const options = [{ text: 'Select Option1' }, { text: 'Select Option2' }, { text: 'Select Option3' }];

  return (
    <div className="textAreas">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

TextAreas.displayName = 'TextAreas';
