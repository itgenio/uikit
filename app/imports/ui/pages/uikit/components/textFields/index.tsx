import './style.less';
import React, { Fragment } from 'react';
import { TextField } from '@itgenio/gkit';

export function TextFields() {
  const renderState = (state: string, props: any = {}, value?: string | number) => {
    return (
      <Fragment>
        <div>{state}</div>

        <TextField
          key={`${state}`}
          {...props}
          onChange={e => console.log(`onChange: ${e.target.value}`)}
          value={value}
        />
      </Fragment>
    );
  };

  const states = [
    ['Normal', { placeholder: 'Placeholder', label: 'Label', helperText: 'Helper text' }],
    ['Normal with text', { placeholder: 'Placeholder', label: 'Label' }, 'Some text'],
    ['Hover', { hover: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Focused', { focus: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Active', { active: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Active with text', { active: true, placeholder: 'Placeholder', label: 'Label' }, 'Some text'],
    ['Disabled', { disabled: true, placeholder: 'Placeholder', label: 'Label' }],
    ['Disabled with text', { disabled: true, placeholder: 'Placeholder', label: 'Label' }, 'Some text'],
  ] as const;

  return (
    <div className="textFields">
      <div className="grid">{states.map(([name, props, content]) => renderState(name, props, content))}</div>
    </div>
  );
}

TextFields.displayName = 'TextFields';
