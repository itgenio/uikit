import './style.less';
import React, { Fragment } from 'react';
import {
  Dropdown,
  DropdownItem,
  Button,
  ChevronDownFilledIcon,
  ButtonGroup,
  DropdownCheckboxItem,
  DropdownItemIndicator,
  CheckmarkIcon,
  DropdownRadioGroup,
  DropdownRadioItem,
  CircleIcon,
} from '@itgenio/gkit';

export function Dropdowns() {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [color, setColor] = React.useState('blue');

  const content = (
    <Fragment>
      <DropdownItem onSelect={() => console.log('click')}>Option 1</DropdownItem>
      <DropdownItem>Option 2</DropdownItem>
    </Fragment>
  );

  const contentCheckbox = (
    <Fragment>
      <DropdownCheckboxItem checked={checked1} onCheckedChange={setChecked1}>
        Option 1
        <DropdownItemIndicator>
          <CheckmarkIcon />
        </DropdownItemIndicator>
      </DropdownCheckboxItem>
      <DropdownCheckboxItem checked={checked2} onCheckedChange={setChecked2}>
        Option 2
        <DropdownItemIndicator>
          <CheckmarkIcon />
        </DropdownItemIndicator>
      </DropdownCheckboxItem>
    </Fragment>
  );

  const contentRadioBtn = (
    <DropdownRadioGroup value={color} onValueChange={setColor}>
      <DropdownRadioItem value="red">
        red
        <DropdownItemIndicator>
          <CircleIcon />
        </DropdownItemIndicator>
      </DropdownRadioItem>

      <DropdownRadioItem value="blue">
        blue
        <DropdownItemIndicator>
          <CircleIcon />
        </DropdownItemIndicator>
      </DropdownRadioItem>

      <DropdownRadioItem value="green">
        green
        <DropdownItemIndicator>
          <CircleIcon />
        </DropdownItemIndicator>
      </DropdownRadioItem>
    </DropdownRadioGroup>
  );

  return (
    <div className="dropdown">
      <div className="grid">
        <ButtonGroup>
          <Button>Попросить перенос</Button>
          <Dropdown asIcon content={content} sideOffset={5} align="end">
            <ChevronDownFilledIcon />
          </Dropdown>
        </ButtonGroup>

        <Dropdown content={contentCheckbox}>Checkbox</Dropdown>

        <Dropdown content={contentRadioBtn}>RadioBtn</Dropdown>
      </div>
    </div>
  );
}

Dropdowns.displayName = 'Dropdowns';
