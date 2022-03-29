import './style.less';
import React, { Fragment } from 'react';
import { SwitcherContainer, SwitcherItem, SwitcherCircle } from '@itgenio/gkit';

type SwitcherProps = Parameters<typeof SwitcherContainer>[0];

const sizes = ['medium', 'large'];
const types = ['normal'];

export function Switchers() {
  const renderState = (state: string, props: SwitcherProps, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        {types.map(type => (
          <div key={`${state}${type}`}>
            {sizes.map(size => {
              const p = { ...props, size, type };
              return (
                <React.Fragment key={`${state}${size}${type}`}>
                  <SwitcherContainer {...p}>
                    <SwitcherItem {...p}>Toggle Item</SwitcherItem>
                  </SwitcherContainer>
                  <SwitcherContainer {...p}>
                    <SwitcherItem {...p}>
                      <SwitcherCircle /> Toggle Item
                    </SwitcherItem>
                  </SwitcherContainer>
                  <SwitcherContainer {...p}>
                    <SwitcherItem {...p}>
                      <SwitcherCircle />
                    </SwitcherItem>
                  </SwitcherContainer>
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </Fragment>
    );
  };

  const states: [string, SwitcherProps][] = [
    ['Normal', { normal: true }],
    ['Hover', { hover: true }],
    ['Active', { active: true }],
  ];

  return (
    <div className="switcher">
      <div className="grid">
        <div className="switcher">
          <div className="grid">{states.map(([name, props], index) => renderState(name, props, index))}</div>
        </div>
      </div>
      <div className="switcher-group">
        {sizes.map(size => {
          const p = { size };
          return (
            <SwitcherContainer key={`${size}`}>
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
