import './style.less';
import React, { Fragment } from 'react';
import { SwitcherContainer, SwitcherItem, SwitcherIcon } from '@itgenio/gkit';

const sizes = ['medium', 'large'];
const types = ['normal'];

export function Switchers() {
  const renderState = (state: string, props: any = {}) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        {types.map(type => (
          <div key={`${state}${type}`}>
            {sizes.map(size => {
              const p = { ...props, size, type };
              return (
                <React.Fragment key={`${state}${size}${type}`}>
                  <SwitcherContainer key={`${size}`} {...p}>
                    <SwitcherItem {...p}>Toggle Item</SwitcherItem>
                  </SwitcherContainer>
                  <SwitcherContainer key={`${size}`} {...p}>
                    <SwitcherItem {...p}>
                      <SwitcherIcon /> Toggle Item
                    </SwitcherItem>
                  </SwitcherContainer>
                  <SwitcherContainer key={`${size}`} {...p}>
                    <SwitcherItem {...p}>
                      <SwitcherIcon />
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

  const states = [
    ['Normal', { normal: true }],
    ['Hover', { hover: true }],
    ['Active', { active: true }],
  ] as const;

  return (
    <div className="switcher">
      <div className="grid">
        <div className="switcher">
          <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
        </div>
      </div>
      <div className="switcher-group">
        {sizes.map(size => {
          const p = { size };
          return (
            <SwitcherContainer key={`${size}`} {...p}>
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
