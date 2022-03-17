import React, { Fragment } from 'react';
import './style.less';
import { DropdownItem } from '@itgenio/gkit/';

export function Dropdowns() {
  const renderState = (state: string, props: any = {}) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <DropdownItem {...props} />
      </Fragment>
    );
  };

  const states = [
    ['Normal', { label: 'Dropdown Option' }],
    ['Hover', { hover: true, label: 'Dropdown Option' }],
    ['Focus', { focus: true, label: 'Dropdown Option' }],
    ['Checked', { checked: true, label: 'Dropdown Option' }],
    ['Disabled', { disabled: true, label: 'Dropdown Option' }],
  ] as const;
  return (
    <div className="dropdown">
      <div className="grid">
        <div>
          <span className="title">State</span>
        </div>
        <div>
          <span className="title">Dropdown Menu Item</span>
        </div>
        {states.map(([name, props]) => renderState(name, props))}
      </div>
    </div>
  );
}

Dropdowns.displayName = 'Dropdowns';
