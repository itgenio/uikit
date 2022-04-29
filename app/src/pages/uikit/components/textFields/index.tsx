import './style.less';
import React, { Fragment } from 'react';
import { TextField } from '@itgenio/gkit';

export function TextFields() {
  const renderState = (state: string, props: any = {}, value?: string | number) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>

        <TextField {...props} onChange={e => console.log(`onChange: ${e.target.value}`)} value={value} />
      </Fragment>
    );
  };

  const states = [
    [
      'Normal',
      { placeholder: 'Placeholder', label: 'Label', helperText: 'Helper text', idQaForInput: 'id-qa for input' },
    ],
    ['Normal with text', { placeholder: 'Placeholder', label: 'Label' }, 'Some text'],
    ['Hover', { hover: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Focused', { focus: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Active', { active: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Active with text', { active: true, placeholder: 'Placeholder', label: 'Label' }, 'Some text'],
    ['Disabled', { disabled: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Disabled with text', { disabled: true, placeholder: 'Placeholder', label: 'Label' }, 'Some text'],
    ['Datalist', { placeholder: 'Placeholder', label: 'Label', dataList: ['Hello', 'World', 'Gavana'] }],
    ['ShowPassword', { placeholder: 'Введите пароль', label: 'Пароль', inputType: 'password' }],
  ] as const;

  return (
    <div className="textFields">
      <div className="grid">{states.map(([name, props, content]) => renderState(name, props, content))}</div>
    </div>
  );
}

TextFields.displayName = 'TextFields';
