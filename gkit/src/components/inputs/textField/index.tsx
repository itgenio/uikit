import './style.less';
import classNames from 'classnames';
import React, { HTMLInputTypeAttribute, useMemo } from 'react';
import { generateId } from '../../utils/generateId';
import { InputsContainer } from '../components/inputsContainer';

type Sizes = 'small' | 'large';

type Props = React.PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  error?: boolean;
  className?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  size?: Sizes;
  fullWidth?: boolean;
  label?: string;
  helperText?: string;
  inputType?: HTMLInputTypeAttribute;
  required?: boolean;
  idQa?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  dataList?: string[];
  maxLength?: number;
}>;

export function TextField({
  value,
  size = 'large',
  fullWidth,
  placeholder,
  hover,
  disabled,
  active,
  focus,
  error,
  className,
  onChange,
  label,
  helperText,
  inputType = 'text',
  required,
  idQa,
  name,
  autoComplete,
  autoFocus,
  dataList,
  maxLength,
}: Props) {
  const id = useMemo(() => generateId(), []);

  return (
    <InputsContainer {...{ id, size, fullWidth, label, idQa, helperText }}>
      <input
        type={inputType}
        className={classNames('gkit-text-field', className, size, { hover, active, focus, error })}
        list={id + 'list'}
        {...{ value, required, id, placeholder, maxLength, disabled, onChange, autoFocus, name, autoComplete }}
      />
      {dataList && (
        <datalist id={id + 'list'}>
          {dataList.map(value => (
            <option key={value} value={value} />
          ))}
        </datalist>
      )}
    </InputsContainer>
  );
}
