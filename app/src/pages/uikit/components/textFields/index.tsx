import './style.less';
import React, { Fragment, useState } from 'react';
import { TextField } from '@itgenio/gkit';

export function TextFields() {
  const [value, setValue] = useState('');

  const renderState = (state: string, props: any = {}) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>

        <TextField {...props} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} value={value} />
      </Fragment>
    );
  };

  const states = [
    [
      'Normal',
      { placeholder: 'Placeholder', label: 'Label', helperText: 'Helper text', idQaForInput: 'id-qa for input' },
    ],
    ['Normal with text', { placeholder: 'Placeholder', label: 'Label' }],
    ['Hover', { hover: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Focused', { focus: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Active', { active: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Active with text', { active: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Disabled', { disabled: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Disabled with text', { disabled: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Datalist', { placeholder: 'Placeholder', label: 'Label', dataList: ['Hello', 'World', 'Gavana'] }],
    ['ShowPassword', { placeholder: 'Введите пароль', label: 'Пароль', inputType: 'password' }],
  ] as const;

  return (
    <div className="textFields">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

TextFields.displayName = 'TextFields';
