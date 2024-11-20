import './style.less';
import * as SelectPrimitive from '@radix-ui/react-select';
import classNames from 'classnames';
import React, { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CheckmarkIcon } from '@itgenio/icons/checkmarkIcon';
import { ChevronDownFilledIcon } from '@itgenio/icons/chevronDownFilledIcon';
import { ChevronUpFilledIcon } from '@itgenio/icons/chevronUpFilledIcon';
import { SearchIcon } from '@itgenio/icons/searchIcon';
import { groupByPropertyToDict } from '@itgenio/utils';
import { InputsContainer } from '../internal/components/inputsContainer';
import { useComposedRefs } from '../internal/hooks';
import { generateId } from '../internal/utils/generateId';
import { TextField, TextFieldProps } from '../textField';

export const SELECT_DROPDOWN_CN = 'gkit-select-dropdown';

type Sizes = 'small' | 'large';
type Values = string | number;

export type SelectOption = {
  label: string;
  value: Values;
  group?: string;
  customDropdownOption?: React.ReactNode;
  customLabel?: React.ReactNode;
};

export type GroupsConfig = {
  hideLabel?: boolean;
  hideSeparator?: boolean;
  separateNotGrouped?: boolean;
};

export type GroupConfig = Record<string, { label?: React.ReactNode } & Omit<GroupsConfig, 'separateNotGrouped'>>;

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
  disabledList?: Values[];
  options?: SelectOption[];
  value?: Values;
  valuePrefix?: string;
  groupsConfig?: GroupsConfig;
  groupConfig?: GroupConfig;
  portalProps?: SelectPrimitive.SelectPortalProps;
  dropdownProps?: SelectPrimitive.SelectContentProps;
  idQaForHelperText?: string;
  inline?: boolean;
  required?: boolean;
  startAdornment?: React.ReactNode;
  search?: { active: boolean; props?: TextFieldProps };
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
    disabledList = [],
    placeholder,
    options,
    value,
    portalProps = {},
    dropdownProps = {},
    groupsConfig,
    groupConfig,
    valuePrefix = '',
    idQaForHelperText,
    inline,
    required,
    startAdornment,
    search,
  }: SelectProps) => {
    const [open, setOpen] = useState(false);
    const [searchValueLocal, setSearchValue] = useState<string | undefined>(undefined);
    const id = useMemo(() => generateId(), []);
    const ref = useRef<HTMLDivElement>(null);
    const selectSearchRef = useRef<HTMLInputElement | null>(null);
    const composedSearchRef = useComposedRefs(selectSearchRef, search?.props?.inputRef);
    const canShowDropdown = open && !disabled;

    const searchValue = search?.props?.value?.toString() ?? searchValueLocal;
    const hasValueInSearch = searchValue && searchValue.length > 0;

    useEffect(() => {
      if (!search?.active) return;

      if (!open && hasValueInSearch) {
        setSearchValue('');
      }
    }, [open, hasValueInSearch, search?.active]);

    if (search?.active && hasValueInSearch) {
      options = options.filter(option => option.label.toLowerCase().includes(searchValue.toLowerCase()));
    }

    useEffect(() => {
      if (!search?.active || !open) return;

      const portalElement = ref.current?.querySelector(`.${SELECT_DROPDOWN_CN}`)?.parentElement;
      if (!portalElement) return;

      portalElement.className = 'gkit-select-portal-with-search';
    }, [search?.active, open]);

    const renderOptionItem = (option: SelectOption, index: number) => {
      return (
        <SelectPrimitive.Item
          id-qa={classNames({ [`${idQa}-option-${option.value}`]: idQa })}
          className={classNames('gkit-select-option', size)}
          key={index}
          value={String(option.value)}
          data-value={option.value}
          disabled={disabledList.includes(option.value)}
        >
          <SelectPrimitive.ItemText>
            {open && option.customDropdownOption ? option.customDropdownOption : option.label}
          </SelectPrimitive.ItemText>

          {option.value === value && (
            <SelectPrimitive.ItemIndicator>
              <CheckmarkIcon />
            </SelectPrimitive.ItemIndicator>
          )}
        </SelectPrimitive.Item>
      );
    };

    const renderOptionsByGroups = () => {
      const optionsByGroupDict = groupByPropertyToDict(
        options.filter(o => !!o.group),
        option => option.group
      );

      const groupedOptions = Object.entries(optionsByGroupDict);
      const optionsWithoutGroup = options.filter(o => !o.group);

      const showNotGroupedSeparator =
        groupsConfig?.separateNotGrouped && groupedOptions.length > 0 && optionsWithoutGroup.length > 0;

      return [
        ...optionsWithoutGroup.map(renderOptionItem),

        showNotGroupedSeparator && <SelectPrimitive.Separator className="gkit-select-separator" />,

        ...Object.entries(optionsByGroupDict).map(([group, options], index, groupedOptions) => {
          const configForGroup = { ...(groupsConfig ?? {}), ...(groupConfig?.[group] ?? {}) };

          return [
            <SelectPrimitive.Group className="gkit-select-group" key={group}>
              {!configForGroup?.hideLabel && (
                <Fragment>
                  {configForGroup?.label ? (
                    <SelectPrimitive.Label className="text-xs gkit-select-group-text">
                      {configForGroup.label}
                    </SelectPrimitive.Label>
                  ) : (
                    <SelectPrimitive.Label className="text-xs gkit-select-group-text">{group}</SelectPrimitive.Label>
                  )}
                </Fragment>
              )}
            </SelectPrimitive.Group>,

            options.map(renderOptionItem),

            index !== groupedOptions.length - 1 && !configForGroup?.hideSeparator && (
              <SelectPrimitive.Separator className="gkit-select-separator" />
            ),
          ];
        }),
      ];
    };

    const renderOptions = () => {
      // Оптимизация. Когда селект закрыт, то нужно отрисовывать только выбранный элемент
      if (!open) {
        return options.map((option, index) => {
          if (option.value !== value) return null;

          return renderOptionItem(option, index);
        });
      }

      return options.some(({ group }) => !!group) ? renderOptionsByGroups() : options.map(renderOptionItem);
    };

    const onValueChange = (newValue: string) => {
      const option = options.find(option => String(option.value) === newValue);

      if (!option) {
        throw new Error(`no option???: ${newValue}`);
      }

      onChange(option.value);
    };

    const onSearchValueChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);

        search.props?.onChange?.(e);
      },
      [search?.props]
    );

    const onKeyDownContent = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (search?.active) {
          const node = e.target as HTMLInputElement;

          if (node.nodeName === 'INPUT') {
            //return focus when typing https://github.com/radix-ui/primitives/blob/main/packages/react/select/src/Select.tsx#L529
            setTimeout(() => node.focus(), 1);
          }
        }

        dropdownProps.onKeyDown?.(e);
      },
      [dropdownProps, search?.active]
    );

    const onOpenChange = useCallback(
      (newOpen: boolean) => {
        if (!open && disabled) return;

        setOpen(newOpen);
      },
      [disabled, open]
    );

    return (
      <InputsContainer {...{ ref, id, size, label, required, helperText, idQa, className, error, idQaForHelperText }}>
        <SelectPrimitive.Root
          value={value != null ? String(value) : undefined}
          onValueChange={onValueChange}
          open={disabled ? false : open}
          onOpenChange={onOpenChange}
        >
          <SelectPrimitive.Trigger
            className={classNames(inline ? 'gkit-inline-select' : 'gkit-select', 'input-wrapper', size, {
              hover,
              focus,
              error,
              disabled,
              filled,
            })}
            id={id}
            onPointerDown={e => {
              // https://github.com/radix-ui/primitives/issues/1641#issuecomment-2110760141
              if (e.pointerType === 'touch') {
                e.preventDefault();
              }
            }}
            onPointerUp={e => {
              // https://github.com/radix-ui/primitives/issues/1641#issuecomment-2110760141
              if (e.pointerType === 'touch') {
                setOpen(o => !o);
              }
            }}
            id-qa={classNames({ [`${idQa}-trigger`]: idQa })}
          >
            {startAdornment}

            <SelectPrimitive.Value
              placeholder={placeholder}
              aria-label={value != null ? valuePrefix + value : undefined}
            >
              {options.find(option => option.value === value)?.customLabel}
            </SelectPrimitive.Value>

            <SelectPrimitive.Icon className="select-chevron">
              {canShowDropdown ? <ChevronUpFilledIcon /> : <ChevronDownFilledIcon />}
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal
            {...portalProps}
            container={portalProps.container ?? (search && ref?.current ? ref.current : undefined)}
          >
            <Fragment>
              <Overlay open={canShowDropdown} />

              <SelectPrimitive.Content
                {...dropdownProps}
                className={classNames(SELECT_DROPDOWN_CN, dropdownProps.className)}
                id-qa={classNames({ [`${idQa}-dropdown`]: idQa })}
                onKeyDown={onKeyDownContent}
              >
                <SelectPrimitive.Viewport
                  className="gkit-select-viewport"
                  id-qa={classNames({ [`${idQa}-viewport`]: idQa })}
                >
                  {search?.active && (
                    <TextField
                      startAdornment={<SearchIcon />}
                      {...(search.props ?? {})}
                      inputRef={composedSearchRef}
                      className={classNames('gkit-select-search', search.props?.className)}
                      value={searchValue ?? ''}
                      onChange={onSearchValueChange}
                    />
                  )}

                  {renderOptions()}
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </Fragment>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </InputsContainer>
    );
  }
);

Select.displayName = 'Select';

/* Workaround for touch events propagating to underlying elements https://github.com/radix-ui/primitives/issues/1658 */
const Overlay = ({ open }: { open: boolean }) => {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 10);
      return () => {
        clearTimeout(timer);
      };
    }

    setVisible(true);

    return () => {};
  }, [open]);

  return visible ? <div className="gkit-select-overlay" onClick={e => e.stopPropagation()} /> : null;
};
