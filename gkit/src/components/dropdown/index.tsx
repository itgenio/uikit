import './style.less';
import classNames from 'classnames';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { Checkbox } from '../checkbox';
import { CheckmarkFilledIcon, ChevronDownFilledIcon, ChevronUpFilledIcon, SubtractIcon } from '../icons';

type Sizes = 'small' | 'large';

export type DropdownProps = {
  size?: Sizes;
  label?: string;
  idQa?: string;
  className?: string;
  filled?: boolean;
  error?: boolean;
  focus?: boolean;
  hover?: boolean;
  disabled?: boolean;
  values?: (string | number)[];
  options?: { label: string; value: string }[];
  onChange?: (selectedValues: (string | number)[]) => void;
  selectAllOptionLabel?: string;
  hasSelectAllOption?: boolean;
};

export const Dropdown = React.memo(
  ({
    options,
    onChange,
    size,
    filled,
    error,
    disabled,
    hover,
    focus,
    label,
    idQa,
    values,
    className,
    selectAllOptionLabel,
    hasSelectAllOption,
  }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const [isAllSelected, setAllSelected] = useState<boolean>(false);

    const ref = useRef(null);
    const popupRef = useRef<HTMLUListElement>(null);

    useOnClickOutside(ref, () => setOpen(false));

    useEffect(() => {
      if (values.length === options.length) {
        setAllSelected(true);
      } else {
        setAllSelected(false);
      }
    }, [values.length, options.length]);

    useLayoutEffect(() => {
      if (!open) return;

      const popup = popupRef.current;

      if (!popup) return;

      const popupRect = popup.getBoundingClientRect();

      if (popupRect.right > window.innerWidth) {
        popup.style.insetInline = 'auto 0%';
      }

      if (popupRect.bottom > window.innerHeight) {
        popup.style.insetBlock = 'auto 100%';
      }
    }, [open]);

    return (
      <div
        id-qa={idQa}
        ref={ref}
        className={classNames('gkit-dropdown', className, size, {
          hover,
          focus,
          error,
          disabled,
        })}
      >
        <div className={classNames('content-wrapper', size)} onClick={() => setOpen(!open)}>
          <div className={classNames('dropdown-label', size, { filled, error, disabled })}>{label}</div>

          {values.length !== 0 && <div className="dropdown-select-count">{values.length}</div>}

          <div className="dropdown-chevron">{open ? <ChevronUpFilledIcon /> : <ChevronDownFilledIcon />}</div>
        </div>

        {open && !disabled && (
          <ul ref={popupRef} className="dropdown-popup">
            {hasSelectAllOption && (
              <li
                className="dropdown-option selected-all"
                onClick={() => {
                  setAllSelected(prevState => !prevState);

                  onChange(values.length === options.length ? [] : options.map(({ value }) => value));
                }}
              >
                <Checkbox
                  checked={values.length !== 0}
                  onChange={({ target: { checked } }) => {
                    setAllSelected(!checked);

                    onChange(!checked ? options.map(({ value }) => value) : []);
                  }}
                  icon={isAllSelected ? <CheckmarkFilledIcon /> : <SubtractIcon />}
                >
                  {selectAllOptionLabel}
                </Checkbox>
              </li>
            )}

            {options.map(({ label, value }) => (
              <li
                className="dropdown-option"
                key={value}
                onChange={() =>
                  onChange(values.includes(value) ? values.filter(state => state !== value) : [...values, value])
                }
              >
                <Checkbox checked={values.includes(value)}>{label}</Checkbox>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
