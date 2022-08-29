import './style.less';

import React from 'react';
import { Button } from '@itgenio/gkit/button';

export const STEP = 2;

type Props = {
  onClickMinus: () => void;
  onClickPlus: () => void;
  value: number;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Slider({ onClickMinus, onClickPlus, value, onChangeInput }: Props) {
  return (
    <div className="slider">
      <Button onClick={onClickMinus} size="small" asIcon>
        -
      </Button>

      <input value={value} type="range" min="1" max="200" onChange={onChangeInput} />

      <Button onClick={onClickPlus} size="small" asIcon>
        +
      </Button>
    </div>
  );
}
