import './style.less';
import React from 'react';
import { Dropdown, DropdownItem, Button } from '@itgenio/gkit';

export function Dropdowns() {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);

  const content = (
    <div>
      <label className="dropdown-chapter">Раздел 1</label>
      <DropdownItem checked={checked1} onCheckedChange={setChecked1}>
        Option1
      </DropdownItem>
      <DropdownItem checked={checked2} onCheckedChange={setChecked2}>
        Option2
      </DropdownItem>
      <DropdownItem checked={checked3} onCheckedChange={setChecked3}>
        Option3
      </DropdownItem>
      <DropdownItem checked={checked4} onCheckedChange={setChecked4}>
        Option4
      </DropdownItem>
    </div>
  );

  return (
    <div className="dropdown">
      <div className="grid">
        <Dropdown defaultOpen content={content}>
          <Button type="neutral">Dropdown Menu</Button>
        </Dropdown>
      </div>
    </div>
  );
}

Dropdowns.displayName = 'Dropdowns';
