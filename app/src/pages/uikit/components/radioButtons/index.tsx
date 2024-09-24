import './style.less';
import React, { Fragment, useState } from 'react';
import { RadioButton, RadioButtonProps } from '@itgenio/gkit/radioButton';

enum Fruit {
  apple = 'apple',
  banana = 'banana',
  kiwi = 'kiwi',
}

export function RadioButtons() {
  const [currentFruit, setFruit] = useState<string>(Fruit.apple);

  const renderState = (state: string, props: RadioButtonProps, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        <RadioButton {...props} onChange={() => console.log('click on radio button')}>
          label
        </RadioButton>
      </Fragment>
    );
  };

  const states: { state: string; props?: RadioButtonProps }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Checked', props: { checked: true, idQa: 'checked' } },
    { state: 'Disabled', props: { disabled: true, checked: false } },
    { state: 'Disabled+Checked', props: { disabled: true, checked: true } },
  ];

  return (
    <div className="radioButtons">
      <div className="grid">
        <Fragment>
          <div>Example</div>

          <div className="fruit">
            {Object.values(Fruit).map(fruit => (
              <RadioButton
                key={fruit}
                name="fruit"
                checked={currentFruit === fruit}
                value={fruit}
                onChange={e => {
                  const value = e.target.value;

                  console.log(`${value} new fruit`);

                  setFruit(value);
                }}
              >
                {fruit}
              </RadioButton>
            ))}
          </div>
        </Fragment>

        {states.map(({ state, props = {} }, index) => renderState(state, props, index))}
      </div>
    </div>
  );
}

RadioButtons.displayName = 'RadioButtons';
