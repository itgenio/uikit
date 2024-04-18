import React, { useState } from 'react';
import { TextField } from '@itgenio/gkit/textField';
import { DismissCircleIcon } from '@itgenio/icons/dismissCircleIcon';
import { EyeIcon } from '@itgenio/icons/eyeIcon';
import { EyeOffIcon } from '@itgenio/icons/eyeOffIcon';

export const TextFieldPassword = () => {
  const [value, setValue] = useState('');
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  return (
    <TextField
      placeholder="Введите пароль"
      label="Пароль"
      value={value}
      onChange={e => setValue(e.target.value)}
      inputType={isPasswordHidden ? 'password' : 'text'}
      endAdornment={
        <div className="icons-wrapper">
          {value && (
            <button onClick={() => setValue('')}>
              <DismissCircleIcon />
            </button>
          )}

          <button onClick={() => setPasswordHidden(!isPasswordHidden)}>
            {isPasswordHidden ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        </div>
      }
    />
  );
};
