import './style.less';
import React, { Fragment } from 'react';
import { SwitcherContainer, SwitcherItem, SwitcherCircle, SwitcherItemProps } from '@itgenio/gkit';

const sizes = ['medium', 'large'];

export function Switchers() {
  const renderState = (state: string, props: SwitcherItemProps, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        <div>
          {sizes.map(size => {
            const p = { ...props, size };
            return (
              <React.Fragment key={`${state}${size}`}>
                <SwitcherContainer>
                  <SwitcherItem {...p}>Toggle Item</SwitcherItem>
                </SwitcherContainer>
                <SwitcherContainer>
                  <SwitcherItem {...p}>
                    <SwitcherCircle className="switcher-circle" /> Toggle Item
                  </SwitcherItem>
                </SwitcherContainer>
                <SwitcherContainer>
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

  const states: [string, SwitcherItemProps][] = [
    ['Normal', {}],
    ['Hover', { hover: true }],
    ['Active', { active: true }],
  ];

  return (
    <div className="switcher">
      <div className="grid">{states.map(([name, props], index) => renderState(name, props, index))}</div>
      <div className="switcher-group">
        {sizes.map(size => {
          const p = { size };
          return (
            <SwitcherContainer key={`${size}`} defaultValue="left">
              <SwitcherItem {...p} value="left">
                Toggle Item
              </SwitcherItem>
              <SwitcherItem {...p} value="center">
                Toggle Item
              </SwitcherItem>
              <SwitcherItem {...p} value="right">
                Toggle Item
              </SwitcherItem>
            </SwitcherContainer>
          );
        })}
      </div>
    </div>
  );
}

Switchers.displayName = 'Switchers';
