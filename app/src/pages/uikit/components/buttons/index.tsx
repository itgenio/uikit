import './style.less';
import React, { CSSProperties, Fragment } from 'react';
import { Button, ButtonProps } from '@itgenio/gkit/button';

const TestIcon = () => {
  return (
    <svg key="testIcon" width="1em" height="1em" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0.5C8 0.223858 7.77614 0 7.5 0C7.22386 0 7 0.223858 7 0.5V7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H7V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H8V0.5Z"
        fill="#ffffff"
      />
    </svg>
  );
};

type RequiredButtonProps = Required<ButtonProps>;

const SIZES: RequiredButtonProps['size'][] = ['small', 'normal', 'large'];
const TYPES: RequiredButtonProps['type'][] = [
  'primary',
  'secondary',
  'tertiaryPrimary',
  'tertiaryNeutral',
  'blue',
  'green',
  'purple',
  'orange',
  'danger',
  'dangerSecondary',
];

export function Buttons() {
  const renderState = (state: string, { children, ...props }: Omit<ButtonProps, 'color'> = {}) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>

        {TYPES.map(type => (
          <div key={`${state}${type}`} className="row">
            {SIZES.map(size => {
              return (
                <Button
                  key={`${state}${type}${size}`}
                  size={size}
                  type={type}
                  {...props}
                  onClick={() => console.log(`click on button`)}
                >
                  {children ?? size}
                </Button>
              );
            })}
          </div>
        ))}
      </Fragment>
    );
  };

  const states: { state: string; props?: ButtonProps }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Focused', props: { focus: true } },
    { state: 'Pressed', props: { active: true } },
    { state: 'Disabled', props: { disabled: true } },
    { state: 'As Icon', props: { asIcon: true, children: <TestIcon key="testIcon" /> } },
    { state: 'Text Button', props: { asTextButton: true } },
    { state: 'Text Button hover', props: { asTextButton: true, hover: true } },
    { state: 'Text Button focused', props: { asTextButton: true, focus: true } },
    { state: 'Text Button pressed', props: { asTextButton: true, active: true } },
    { state: 'Text Button disabled', props: { asTextButton: true, disabled: true } },
  ];

  return (
    <div className="buttons" style={{ ['--app-buttons-styles-count']: TYPES.length } as CSSProperties}>
      <div className="grid">
        <div>
          <span className="title">State</span>
        </div>

        {TYPES.map(type => (
          <div key={type}>
            <span className="title">{type}</span>
          </div>
        ))}

        {states.map(({ state, props }) => renderState(state, props))}
      </div>
    </div>
  );
}

Buttons.displayName = 'Buttons';
