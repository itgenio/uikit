import './style.less';

import * as SliderPrimitive from '@radix-ui/react-slider';
import classNames from 'classnames';
import React from 'react';

export type SliderProps = {
  idQa?: string;
  idQaThumb?: string;
} & SliderPrimitive.SliderProps;

const SLIDER_CN = 'gkit-slider';

export const Slider = React.memo(({ idQa, idQaThumb, className, ...props }: SliderProps) => {
  return (
    <SliderPrimitive.Root {...props} id-qa={idQa} className={classNames(SLIDER_CN, className)}>
      <SliderPrimitive.Track className={`${SLIDER_CN}-track`}>
        <SliderPrimitive.Range className={`${SLIDER_CN}-range`} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={`${SLIDER_CN}-thumb`} id-qa={idQaThumb} />
    </SliderPrimitive.Root>
  );
});

Slider.displayName = 'Slider';