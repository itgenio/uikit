import './style.less';
import React, { Fragment, useState } from 'react';
import { Slider, SliderProps } from '@itgenio/gkit/slider';

export function Sliders() {
  const [value, setValue] = useState([4]);

  const renderState = (state: string, props: SliderProps) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <div>
          <Slider onValueChange={setValue} {...props} />
          {/* eslint-disable-next-line react/prop-types */}
          <span>{props.disabled ? props.defaultValue : value}</span>
        </div>
      </Fragment>
    );
  };

  const states: [string, SliderProps][] = [
    [
      'With max progress (8)',
      {
        value,
        idQa: 'slider normal',
        max: 8,
      },
    ],
    ['Disabled', { disabled: true, defaultValue: [8] }],
    ['With step (2)', { value, step: 2 }],
  ];

  return (
    <div className="sliders">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

Sliders.displayName = 'Sliders';
