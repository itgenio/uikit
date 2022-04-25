import './style.less';
import React from 'react';
import { DropdownContainer, DropdownTrigger, DropdownContent, DropdownCheckboxItem, Button } from '@itgenio/gkit';

export function Dropdowns() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="dropdown">
      <div className="grid">
        <DropdownContainer defaultOpen>
          <DropdownTrigger>
            <Button type="neutral">Dropdown Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <label className="dropdown-chapter">Раздел 1</label>
            <DropdownCheckboxItem checked={checked} onCheckedChange={setChecked}>
              Dropdown Option1
            </DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option1</DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option2</DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option3</DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option4</DropdownCheckboxItem>
            <label className="dropdown-chapter">Раздел 2</label>
            <DropdownCheckboxItem>Dropdown Option5</DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option6</DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option7</DropdownCheckboxItem>
            <DropdownCheckboxItem>Dropdown Option8</DropdownCheckboxItem>
          </DropdownContent>
        </DropdownContainer>
      </div>
    </div>
  );
}

Dropdowns.displayName = 'Dropdowns';
