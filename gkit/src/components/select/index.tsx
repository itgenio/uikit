import './style.less';
import * as SelectPrimitive from '@radix-ui/react-select';
import classNames from 'classnames';
import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { groupByPropertyToDict } from '@itgenio/utils';
import { CheckmarkIcon, ChevronUpFilledIcon, ChevronDownFilledIcon } from '../icons';
import { InputsContainer } from '../internal/components/inputsContainer';
import { generateId } from '../internal/utils/generateId';

type Sizes = 'small' | 'large';

type Values = string;

export type SelectOption = { label: string; value: Values; group?: string };

const DROPDOWN_PADDING = 20;

export type SelectProps = {
  label?: string;
  helperText?: React.ReactNode;
  idQa?: string;
  onChange?: (value: Values) => void;
  placeholder?: string;
  className?: string;
  size?: Sizes;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  filled?: boolean;
  error?: boolean;
  disabled?: boolean;
  options?: SelectOption[];
  value?: Values;
  divideByGroups?: boolean;
};

export const Select = React.memo(
  ({
    size = 'large',
    className,
    label,
    helperText,
    idQa,
    onChange,
    hover,
    focus,
    filled,
    error,
    disabled,
    placeholder,
    options,
    value,
    divideByGroups,
  }: SelectProps) => {
    const [open, setOpen] = useState(false);
    const id = useMemo(() => generateId(), []);
    const ref = useRef<HTMLDivElement>(null);
    // const dropdownRef = useRef<HTMLDivElement>(null);

    const canShowDropdown = open && !disabled;

    useOnClickOutside(ref, () => setOpen(false));

    // useLayoutEffect(() => {
    //   if (!open) return;
    //
    //   const dropdownElement = dropdownRef.current;
    //
    //   if (!dropdownElement) return;
    //
    //   const rect = dropdownElement.getBoundingClientRect();
    //
    //   if (rect.right > window.innerWidth) {
    //     dropdownElement.style.left = `-${rect.right - window.innerWidth + DROPDOWN_PADDING}px`;
    //   }
    //
    //   if (rect.bottom > window.innerHeight) {
    //     dropdownElement.style.top = `calc(100% - ${rect.bottom - window.innerHeight + DROPDOWN_PADDING}px)`;
    //   }
    // }, [open]);

    const renderOptionItem = (option: SelectOption, index: number) => (
      <SelectPrimitive.Item
        id-qa={classNames({ [`${idQa}-option-${option.value}`]: idQa })}
        className={classNames('gkit-select-option', size)}
        key={index}
        onClick={e => {
          e.stopPropagation();
          setOpen(!open);
          onChange(option.value);
        }}
        value={option.value}
        data-value={option.value}
      >
        <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
        {option.value === value && (
          <SelectPrimitive.ItemIndicator>
            <CheckmarkIcon />
          </SelectPrimitive.ItemIndicator>
        )}
      </SelectPrimitive.Item>
    );

    const renderOptionsByGroups = () => {
      const optionsByGroupDict = groupByPropertyToDict(
        options.filter(o => !!o.group),
        option => option.group
      );

      return Object.values(optionsByGroupDict).map((options, index, groupedOptions) => [
        options.map(renderOptionItem),

        index !== groupedOptions.length - 1 && (
          <SelectPrimitive.Separator key={`divider-${index}`} className="gkit-select-separator" />
        ),
      ]);
    };

    return (
      <InputsContainer {...{ id, size, label, helperText, idQa, className }}>
        <SelectPrimitive.Root value={value} onValueChange={onChange} open={disabled ? false : undefined}>
          <SelectPrimitive.Trigger
            className={classNames('gkit-select', 'input-wrapper', size, {
              hover,
              focus: focus || canShowDropdown,
              error,
              disabled,
            })}
            id-qa={classNames({ [`${idQa}-trigger`]: idQa })}
          >
            <SelectPrimitive.Value placeholder={placeholder} aria-label={value} />
            <SelectPrimitive.Icon className="select-chevron">
              {canShowDropdown ? <ChevronUpFilledIcon /> : <ChevronDownFilledIcon />}
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              className="gkit-select-dropdown"
              id-qa={classNames({ [`${idQa}-dropdown`]: idQa })}
            >
              <SelectPrimitive.Viewport>
                {divideByGroups ? renderOptionsByGroups() : options.map(renderOptionItem)}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
        {/*<div*/}
        {/*  ref={ref}*/}
        {/*  className={classNames('gkit-select', size, {*/}
        {/*    hover,*/}
        {/*    focus: focus || canShowDropdown,*/}
        {/*    error,*/}
        {/*    disabled,*/}
        {/*  })}*/}
        {/*  onClick={() => setOpen(!open)}*/}
        {/*>*/}
        {/*  <div className="input-wrapper">*/}
        {/*    <input*/}
        {/*      readOnly*/}
        {/*      className={classNames('select-input', size, { filled, error, disabled })}*/}
        {/*      {...{ id, placeholder, disabled }}*/}
        {/*      value={options.find(option => option.value === value)?.label}*/}
        {/*    />*/}

        {/*    <div className="select-chevron">*/}
        {/*      {canShowDropdown ? <ChevronUpFilledIcon /> : <ChevronDownFilledIcon />}*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  {canShowDropdown && (*/}
        {/*    <div className="select-dropdown" id-qa={classNames({ [`${idQa}-dropdown`]: idQa })} ref={dropdownRef}>*/}
        {/*      {divideByGroups ? renderOptionsByGroups() : options.map(renderOptionItem)}*/}
        {/*    </div>*/}
        {/*  )}*/}
        {/*</div>*/}
      </InputsContainer>
    );
  }
);

Select.displayName = 'Select';

// export const Select = React.forwardRef(
//   ({ children, ...props }, forwardedRef) => {
//     return (
//       <SelectPrimitive.Root {...props}>
//         <SelectPrimitive.Trigger ref={forwardedRef}>
//           <SelectPrimitive.Value />
//           <SelectPrimitive.Icon>
//             <ChevronDownIcon />
//           </SelectPrimitive.Icon>
//         </SelectPrimitive.Trigger>
//         <SelectPrimitive.Portal>
//           <SelectPrimitive.Content>
//             <SelectPrimitive.ScrollUpButton>
//               <ChevronUpIcon />
//             </SelectPrimitive.ScrollUpButton>
//             <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
//             <SelectPrimitive.ScrollDownButton>
//               <ChevronDownIcon />
//             </SelectPrimitive.ScrollDownButton>
//           </SelectPrimitive.Content>
//         </SelectPrimitive.Portal>
//       </SelectPrimitive.Root>
//     );
//   }
// );

// export const SelectItem = React.forwardRef(
//   ({ children, ...props }, forwardedRef) => {
//     return (
//       <SelectPrimitive.Item {...props} ref={forwardedRef}>
//         <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
//         <SelectPrimitive.ItemIndicator>
//           <CheckIcon />
//         </SelectPrimitive.ItemIndicator>
//       </SelectPrimitive.Item>
//     );
//   }
// );
