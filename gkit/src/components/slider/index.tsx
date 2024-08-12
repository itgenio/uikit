import './style.less';

import * as SliderPrimitive from '@radix-ui/react-slider';
import classNames from 'classnames';
import React from 'react';

export type SliderProps = {
  idQa?: string;
  idQaThumb?: string;
  className?: string;
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (val: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
};

export const Slider = React.memo(
  ({ idQa, idQaThumb, className, value, onValueChange, defaultValue, min, max, step, disabled }: SliderProps) => {
    return (
      <SliderPrimitive.Root
        id-qa={idQa}
        className={classNames('gkit-slider', className)}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        onValueChange={onValueChange}
        value={value}
        disabled={disabled}
      >
        <SliderPrimitive.Track className="gkit-slider-track">
          <SliderPrimitive.Range className="gkit-slider-range" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="gkit-slider-thumb" id-qa={idQaThumb} />
      </SliderPrimitive.Root>
    );
  }
);

Slider.displayName = 'Slider';
