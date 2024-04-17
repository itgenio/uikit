import './style.less';
import React, { Fragment, useState } from 'react';
import { Button, ButtonGroup } from '@itgenio/gkit/button';
import {
  Dropdown,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownItemIndicator,
  DropdownRadioGroup,
  DropdownRadioItem,
} from '@itgenio/gkit/dropdown';
import { CheckmarkIcon } from '@itgenio/icons/checkmarkIcon';
import { ChevronDownFilledIcon } from '@itgenio/icons/chevronDownFilledIcon';
import { CircleIcon } from '@itgenio/icons/circleIcon';

export function Dropdowns() {
  const content = (
    <Fragment>
      <DropdownItem onSelect={() => console.log('click')}>Option 1</DropdownItem>
      <DropdownItem>Option 2</DropdownItem>
    </Fragment>
  );

  return (
    <div className="dropdown">
      <div className="grid">
        <ButtonGroup>
          <Button>Кнопка</Button>
          <Dropdown asChild content={content} sideOffset={5} align="end">
            <Button asIcon type="primary">
              <ChevronDownFilledIcon />
            </Button>
          </Dropdown>
        </ButtonGroup>

        <DropdownCheckbox />

        <DropdownRadio />
      </div>
    </div>
  );
}

export function DropdownCheckbox() {
  const [checked, setChecked] = useState(false);

  const content = (
    <Fragment>
      <DropdownCheckboxItem checked={checked} onCheckedChange={setChecked}>
        Option
        <DropdownItemIndicator>
          <CheckmarkIcon />
        </DropdownItemIndicator>
      </DropdownCheckboxItem>
    </Fragment>
  );

  return <Dropdown content={content}>Checkbox</Dropdown>;
}

export function DropdownRadio() {
  const [color, setColor] = useState('blue');

  const content = (
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

  return <Dropdown content={content}>RadioBtn</Dropdown>;
}

Dropdowns.displayName = 'Dropdowns';
