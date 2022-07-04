import './style.less';

import classNames from 'classnames';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { ChevronDownFilledIcon, ChevronUpFilledIcon } from 'components/icons';
import { Checkbox } from 'components/checkbox';

type Sizes = 'small' | 'large';

export type DropdownProps = {
  size?: Sizes;
  label?: string;
  helperText?: string;
  idQa?: string;
  className?: string;
  placeholder?: string;
  filled?: boolean;
  error?: boolean;
  focus?: boolean;
  hover?: boolean;
  disabled?: boolean;
  values?: string[];
  options?: { label: string; value: string }[];
  onChange?: (selectedValues: string[]) => void;
  textBtnSelectAll?: string;
  isShowBtnSelectAll?: boolean;
};

export const Dropdown = React.memo(
  ({
    hover,
    options,
    onChange,
    filled,
    error,
    disabled,
    size,
    focus,
    label,
    idQa,
    values,
    className,
    textBtnSelectAll,
    isShowBtnSelectAll,
  }: DropdownProps) => {
    const [selectedValues, setSelectedValues] = useState(values ?? []);
    const [open, setOpen] = useState(false);

    const ref = useRef(null);
    useOnClickOutside(ref, () => setOpen(false));

    const popupRef = useRef<HTMLUListElement>(null);

    const [selectedAll, setSelectedAll] = useState<boolean | undefined>(undefined);

    useEffect(() => {
      onChange(selectedValues);

      if (selectedValues.length === options.length) {
        setSelectedAll(true);
      } else if (selectedValues.length === 0) {
        setSelectedAll(undefined);
      } else {
        setSelectedAll(false);
      }
    }, [selectedValues, options.length, onChange]);

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

          {!!selectedValues.length && <div className="dropdown-select-count">{selectedValues.length}</div>}

          <div className="dropdown-chevron">{open ? <ChevronUpFilledIcon /> : <ChevronDownFilledIcon />}</div>
        </div>

        {open && !disabled && (
          <ul ref={popupRef} className="dropdown-popup">
            {isShowBtnSelectAll && (
              <li
                className="dropdown-option selected-all"
                onClick={() =>
                  setSelectedAll(prevState => {
                    const newStateAll = prevState === undefined ? true : undefined;

                    setSelectedValues(
                      selectedValues.length === options.length ? [] : options.map(({ value }) => value)
                    );

                    return newStateAll;
                  })
                }
              >
                <span
                  className={classNames(
                    'box-selected-all',
                    selectedAll !== undefined ? (selectedAll ? 'plus' : 'minus') : null
                  )}
                ></span>
                {textBtnSelectAll ?? 'Выбрать все'}
              </li>
            )}

            {options.map(({ label, value }) => (
              <li
                className="dropdown-option"
                key={value}
                onChange={e => {
                  e.stopPropagation();

                  setSelectedValues(prevState =>
                    prevState.includes(value) ? prevState.filter(state => state !== value) : [...prevState, value]
                  );
                }}
              >
                <Checkbox checked={selectedValues.includes(value)} onChange={() => {}}>
                  {label}
                </Checkbox>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
