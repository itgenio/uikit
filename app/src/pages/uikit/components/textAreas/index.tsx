import './style.less';
import React, { Fragment, useCallback, useState } from 'react';
import { Button } from '@itgenio/gkit/button';
import { TextArea, TextAreaProps } from '@itgenio/gkit/textArea';

type Settings = { controllable?: boolean; clearStateButton?: boolean };

export function TextAreas() {
  const sizes = ['small', 'large'] as const;
  const [value, setValue] = useState('text\ntext\ntext');

  const clearState = useCallback(() => setValue(''), []);

  const renderState = ({
    state,
    props,
    settings,
    index,
  }: {
    state: string;
    props: TextAreaProps;
    settings: Settings;
    index: number;
  }) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        {sizes.map(size => {
          const p = { ...props, size };
          const { controllable, clearStateButton } = settings;

          return (
            <div className="text-area-wrapper" key={`${index}${size}`}>
              <TextArea
                {...p}
                value={controllable ? value : p.value}
                onChange={p.onChange ? e => setValue(e.target.value) : undefined}
                placeholder="Placeholder"
                key={size}
                label="Label"
                helperText="Desc"
              />
              {clearStateButton && size === 'small' && (
                <Button size="small" onClick={clearState}>
                  Clear state
                </Button>
              )}
            </div>
          );
        })}
      </Fragment>
    );
  };

  const states: {
    state: string;
    props?: TextAreaProps;
    settings?: Settings;
  }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Filled', props: { filled: true } },
    { state: 'Focused', props: { focus: true } },
    { state: 'Error', props: { error: true } },
    { state: 'Disabled', props: { disabled: true, value: 'text', resize: 'none' } },
    { state: 'AutoFocus', props: { autoFocus: true, value: 'text', onChange: () => {} } },
    {
      state: 'With autoHeight (uncontrollable)',
      props: { withAutoHeight: true, onChange: () => {} },
    },
    {
      state: 'With autoHeight (controllable)',
      props: { withAutoHeight: true, onChange: () => {} },
      settings: { controllable: true, clearStateButton: true },
    },
  ];

  return (
    <div className="textAreas">
      <div className="grid">
        {states.map(({ state, props = {}, settings = {} }, index) => renderState({ state, props, settings, index }))}
      </div>
    </div>
  );
}

TextAreas.displayName = 'TextAreas';
