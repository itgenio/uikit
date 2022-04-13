import './style.less';
import React, { Fragment } from 'react';
import { ContainerInputs, TextArea, Select, TextField, SelectMenuItemProps, StateProps } from '@itgenio/gkit';

export function TextAreas() {
  const sizes = ['small', 'large'] as const;

  const renderState = (state: string, props: StateProps, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        {sizes.map(size => {
          const p = { ...props, size };
          return (
            <ContainerInputs key={size} size={size} label="label" description={`${size} Desc`}>
              <TextField {...p} placeholder="placeholder" />
            </ContainerInputs>
          );
        })}
        {sizes.map(size => {
          const p = { ...props, size };
          return (
            <ContainerInputs key={size} size={size} label="label" description={`${size} Desc`}>
              <Select {...p} placeholder="placeholder" options={options} onChange={value => console.log(value)} />
            </ContainerInputs>
          );
        })}
        {sizes.map(size => {
          const p = { ...props, size };
          return (
            <ContainerInputs key={size} {...p} label="label" description={`${size} Desc`}>
              <TextArea {...p} placeholder="placeholder" />
            </ContainerInputs>
          );
        })}
      </Fragment>
    );
  };

  const states: { state: string; props?: StateProps }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Focused', props: { focus: true } },
    { state: 'Filled', props: { filled: true } },
    { state: 'Error', props: { error: true } },
    { state: 'Disabled', props: { disabled: true } },
  ];

  const options: [SelectMenuItemProps][] = [{ text: 'Option1' }, { text: 'Option2' }, { text: 'Option3' }];

  return (
    <div className="textAreas">
      <div className="grid">{states.map(({ state, props = {} }, index) => renderState(state, props, index))}</div>
    </div>
  );
}

TextAreas.displayName = 'TextAreas';
