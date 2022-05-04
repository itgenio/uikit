import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Sizes = 'small' | 'large';

type InputsContainerProps = PropsWithChildren<{
  idQa?: string;
  id?: string;
  label?: string;
  size?: Sizes;
  helperText?: React.ReactNode;
  className?: string;
}>;

export function InputsContainer({
  children,
  id,
  size = 'large',
  label,
  helperText,
  idQa,
  className,
}: InputsContainerProps) {
  return (
    <div id-qa={idQa} className={classNames('gkit-text-field', className)}>
      {label && (
        <label htmlFor={id} className={classNames('text-field-label', size)}>
          {label}
        </label>
      )}
      {children}
      {helperText && <span className="text-field-helper-text">{helperText}</span>}
    </div>
  );
}
