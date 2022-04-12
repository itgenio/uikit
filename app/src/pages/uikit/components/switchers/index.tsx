import './style.less';
import React, { Fragment } from 'react';
import { SwitcherContainer, SwitcherItem, SwitcherCircle, SwitcherItemProps } from '@itgenio/gkit';

const sizes = ['medium', 'large'] as const;

export function Switchers() {
  const renderState = (state: string, props: SwitcherItemProps, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>

        <div>
          {sizes.map(size => {
            const p = { size, ...props };

            return (
              <React.Fragment key={`${state}${size}`}>
                <SwitcherContainer type="single">
                  <SwitcherItem {...p}>Toggle Item</SwitcherItem>
                </SwitcherContainer>

                <SwitcherContainer type="single">
                  <SwitcherItem {...p}>
                    <SwitcherCircle className="switcher-circle" /> Toggle Item
                  </SwitcherItem>
                </SwitcherContainer>

                <SwitcherContainer type="single">
                  <SwitcherItem {...p}>
                    <SwitcherCircle />
                  </SwitcherItem>
                </SwitcherContainer>
              </React.Fragment>
            );
          })}
        </div>
      </Fragment>
    );
  };

  const states: { state: string; props?: SwitcherItemProps }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Active', props: { active: true } },
  ];

  return (
    <div className="switcher">
      <div className="grid">{states.map(({ state, props = {} }, index) => renderState(state, props, index))}</div>

      <div className="switcher-group">
        {sizes.map(size => (
          <SwitcherContainer key={size} type="single" defaultValue="left" onValueChange={e => console.log(e)}>
            <SwitcherItem size={size} value="left">
              Toggle Item
            </SwitcherItem>
            <SwitcherItem size={size} value="center">
              Toggle Item
            </SwitcherItem>
            <SwitcherItem size={size} value="right">
              Toggle Item
            </SwitcherItem>
          </SwitcherContainer>
        ))}
      </div>
    </div>
  );
}

Switchers.displayName = 'Switchers';
