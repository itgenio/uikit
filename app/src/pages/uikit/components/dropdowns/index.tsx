import './style.less';
import React, { Fragment } from 'react';
import {
  DropdownItemCheck,
  DropdownItemCheckbox,
  DropdownMenu,
  DropdownMenuChapter,
  DropdownMenuSeparator,
} from '@itgenio/gkit';

export function Dropdowns() {
  const renderState = (state: string, props: any = {}) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <DropdownItemCheck {...props} />
        <DropdownItemCheckbox {...props} />
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
        {states.map(([name, props]) => renderState(name, props))}
        <div className="dropdown-menu">
          <DropdownMenu label="Dropdown Menu">
            <DropdownMenuChapter>Раздел 1</DropdownMenuChapter>
            <DropdownItemCheck>Dropdown Option</DropdownItemCheck>
            <DropdownItemCheck>Dropdown Option</DropdownItemCheck>
            <DropdownItemCheck>Dropdown Option</DropdownItemCheck>
            <DropdownItemCheck>Dropdown Option</DropdownItemCheck>
            <DropdownItemCheck>Dropdown Option</DropdownItemCheck>
            <DropdownMenuChapter>Раздел 2</DropdownMenuChapter>
            <DropdownItemCheck>Dropdown Option</DropdownItemCheck>
            <DropdownItemCheck>Dropdown Option</DropdownItemCheck>
            <DropdownItemCheck>Dropdown Option</DropdownItemCheck>
            <DropdownMenuSeparator />
            <DropdownItemCheck>Dropdown Option</DropdownItemCheck>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

Dropdowns.displayName = 'Dropdowns';
