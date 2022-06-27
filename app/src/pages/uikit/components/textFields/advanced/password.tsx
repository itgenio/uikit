import React, { useState } from 'react';
import { TextField, DismissCircle24Icon, Eye24Icon, EyeOff24Icon } from '@itgenio/gkit';

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
              <DismissCircle24Icon />
            </button>
          )}

          <button onClick={() => setPasswordHidden(!isPasswordHidden)}>
            {isPasswordHidden ? <Eye24Icon /> : <EyeOff24Icon />}
          </button>
        </div>
      }
    />
  );
};
