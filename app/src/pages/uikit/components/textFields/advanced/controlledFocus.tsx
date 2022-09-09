import React, { useRef, useState } from 'react';
import { Button } from '@itgenio/gkit/button';
import { TextField } from '@itgenio/gkit/textField';

export const TextFieldControlledFocus = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [focused, setFocused] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <TextField
        ref={rootRef}
        inputRef={inputRef}
        focus={focused}
        onFocus={e => {
          e.stopPropagation();

          setFocused(true);
        }}
        onBlur={e => {
          e.stopPropagation();

          setFocused(false);
        }}
      />

      <Button
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        Click for focus
      </Button>
    </div>
  );
};
