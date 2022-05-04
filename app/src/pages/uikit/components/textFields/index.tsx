import './style.less';
import React, { Fragment, useState } from 'react';
import { TextField, TextFieldProps } from '@itgenio/gkit';

export function TextFields() {
  const [value, setValue] = useState('');

  const renderState = (state: string, props: TextFieldProps) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <TextField
          {...props}
          onChange={e => setValue(e.target.value)}
          onClear={() => setValue('')}
          placeholder="Placeholder"
          label="Label"
        />
      </Fragment>
    );
  };

  const states: { state: string; props: TextFieldProps }[] = [
    { state: 'Normal', props: { helperText: 'Helper text', idQaForInput: 'id-qa for input' } },
    { state: 'Normal with text', props: { value: 'Some text' } },
    { state: 'Hover', props: { hover: true, autoFocus: true } },
    { state: 'Focused', props: { focus: true } },
    { state: 'Active', props: { active: true } },
    { state: 'Active with text', props: { active: true, value: 'Some text' } },
    { state: 'Disabled', props: { disabled: true } },
    { state: 'Disabled with text', props: { disabled: true, value: 'Some text' } },
    { state: 'Datalist', props: { dataList: ['Hello', 'World', 'Gavana'] } },
    {
      state: 'Show password',
      props: { placeholder: 'Введите пароль', label: 'Пароль', inputType: 'password', value },
    },
  ];

  return (
    <div className="textFields">
      <div className="grid">{states.map(({ state, props }) => renderState(state, props))}</div>
    </div>
  );
}

TextFields.displayName = 'TextFields';
