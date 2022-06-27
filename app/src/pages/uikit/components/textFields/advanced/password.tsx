import React, { useState } from 'react';
import { TextField, DismissCircleIcon, EyeIcon, EyeOffIcon } from '@itgenio/gkit';

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
