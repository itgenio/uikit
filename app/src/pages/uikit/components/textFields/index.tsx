import './style.less';
import React, { Fragment, useState } from 'react';
import { TextField, DismissCircleIcon, EyeIcon, EyeOffIcon, TextFieldProps } from '@itgenio/gkit';

export function TextFields() {
  const [value, setValue] = useState('');
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const handleClearField = () => {
    setValue('');
    setPasswordHidden(!isPasswordHidden);
  };

  const renderState = (state: string, props: TextFieldProps) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <TextField {...props} onChange={e => console.log(e.target.value)} placeholder="Placeholder" label="Label" />
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
  ];

  return (
    <div className="textFields">
      <div className="grid">{states.map(({ state, props }) => renderState(state, props))}</div>
      <TextField
        placeholder="Введите пароль"
        label="Пароль"
        value={value}
        onChange={e => setValue(e.target.value)}
        inputType={isPasswordHidden ? 'password' : 'text'}
        endAdornment={
          <div className="icons-wrapper">
            {value && (
              <button onClick={handleClearField}>
                <DismissCircleIcon />
              </button>
            )}
            <button onClick={() => setPasswordHidden(!isPasswordHidden)}>
              {isPasswordHidden ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
        }
      />
    </div>
  );
}

TextFields.displayName = 'TextFields';
