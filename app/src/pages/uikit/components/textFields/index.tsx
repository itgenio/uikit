import './style.less';
import React, { Fragment, PropsWithChildren } from 'react';
import { TextField, TextFieldProps } from '@itgenio/gkit/textField';
import { TextFieldControlledFocus } from './advanced/controlledFocus';
import { TextFieldPassword } from './advanced/password';

const SIMPLE_STATES: { state: string; props: TextFieldProps }[] = [
  { state: 'Normal', props: { helperText: 'Helper text', idQaForInput: 'id-qa for input' } },
  { state: 'Normal with text', props: { value: 'Some text' } },
  { state: 'Hover', props: { hover: true, autoFocus: true } },
  { state: 'Focused', props: { focus: true } },
  { state: 'Active', props: { active: true } },
  { state: 'Active with text', props: { active: true, value: 'Some text' } },
  { state: 'Error', props: { error: true, helperText: 'Helper text', idQaForHelperText: 'id-qa-for-helper-text' } },
  { state: 'Disabled', props: { disabled: true } },
  { state: 'Disabled with text', props: { disabled: true, value: 'Some text' } },
  { state: 'Readonly', props: { readOnly: true, value: 'Some text' } },
  { state: 'Datalist', props: { dataList: ['Hello', 'World', 'Gavana'] } },
  { state: 'Required', props: { required: true } },
];

const Item = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <Fragment>
      <div>{title}</div>

      {children}
    </Fragment>
  );
};

export function TextFields() {
  return (
    <div className="textFields">
      <div className="grid">
        {SIMPLE_STATES.map(({ state, props }) => (
          <Item key={state} title={state}>
            <TextField {...props} onChange={e => console.log(e.target.value)} placeholder="Placeholder" label="Label" />
          </Item>
        ))}

        <Item title="Controlled focus">
          <TextFieldControlledFocus />
        </Item>

        <Item title="password">
          <TextFieldPassword />
        </Item>
      </div>
    </div>
  );
}

TextFields.displayName = 'TextFields';
