import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon } from '@radix-ui/react-icons';
import React from 'react';
import './style.less';

export const DropdownMenuDemo = ({ label }) => {
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const menu = ['Dropdown', 'Dropdown', 'Dropdown', 'Dropdown', 'Dropdown'];

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button className="button-menu">{label}</button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content className="menu">
        <DropdownMenuPrimitive.Label className="label-menu">Раздел 1</DropdownMenuPrimitive.Label>
        {menu.map(item => (
          <DropdownMenuPrimitive.CheckboxItem
            className="checkboxItem"
            key={item.length}
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenuPrimitive.ItemIndicator className="itemIndicator">
              <CheckIcon />
            </DropdownMenuPrimitive.ItemIndicator>
            {item}
          </DropdownMenuPrimitive.CheckboxItem>
        ))}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
};
