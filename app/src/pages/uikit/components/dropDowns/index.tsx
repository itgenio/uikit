import './style.less';
import React from 'react';
import { DropdownMenu, DropdownTrigger, DropdownContent, DropdownCheckboxItem, Button } from '@itgenio/gkit';

export function Dropdowns() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="dropdown">
      <div className="grid">
        <DropdownMenu defaultOpen>
          <DropdownTrigger>
            <Button type="neutral">Dropdown Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <label className="dropdown-chapter">Раздел 1</label>
            <DropdownCheckboxItem
              checked={checked}
              onCheckedChange={setChecked}
              onSelect={e => console.log(e.target.innerText)}
            >
              Dropdown Option1
            </DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option1</DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option1</DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option1</DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option1</DropdownCheckboxItem>
            <label className="dropdown-chapter">Раздел 2</label>
            <DropdownCheckboxItem>Dropdown Option1</DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option1</DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option1</DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option1</DropdownCheckboxItem>
          </DropdownContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

Dropdowns.displayName = 'Dropdowns';
