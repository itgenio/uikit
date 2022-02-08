import './style.less';
import React, { Fragment } from 'react';
import { Button } from '@itgenio/gkit';

export function Buttons() {
  const sizes = ['small', 'normal', 'large'];
  const types = ['primary', 'secondary', 'danger', 'linkSecondary', 'neutral', 'linkNeutral'];

  const renderState = (state: string, props: any = {}, content?: any) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        {types.map(type => (
          <div key={`${state}${type}`} className="row">
            {sizes.map(size => {
              const p = { ...props, type, size };
              return (
                <Button key={`${state}${type}${size}`} {...p} onClick={() => console.log(`click on button`)}>
                  {content ?? size}
                </Button>
              );
            })}
          </div>
        ))}
      </Fragment>
    );
  };

  const states = [
    ['Normal', {}],
    ['Hover', { hover: true }],
    ['Focused', { focus: true }],
    ['Pressed', { active: true }],
    ['Disabled', { disabled: true }],
    [
      'As Icon',
      { asIcon: true },
      <svg key="testicon" width="1em" height="1em" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 0.5C8 0.223858 7.77614 0 7.5 0C7.22386 0 7 0.223858 7 0.5V7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H7V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H8V0.5Z"
          fill="#ffffff"
        />
      </svg>,
    ],
  ] as const;

  return (
    <div className="buttons">
      <div className="grid">
        <div>
          <span className="title">State</span>
        </div>
        <div>
          <span className="title">Primary</span>
        </div>
        <div>
          <span className="title">Secondary</span>
        </div>
        <div>
          <span className="title">Danger</span>
        </div>
        <div>
          <span className="title">LinkSecondary</span>
        </div>
        <div>
          <span className="title">Neutral</span>
        </div>
        <div>
          <span className="title">LinkNeutral</span>
        </div>
        {states.map(([name, props, content]) => renderState(name, props, content))}
      </div>
    </div>
  );
}

Buttons.displayName = 'Buttons';
