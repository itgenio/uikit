import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Sizes = 'small' | 'large';

type InputsContainerProps = PropsWithChildren<{
  idQa?: string;
  id?: string;
  label?: string;
  size?: Sizes;
  helperText?: string;
  fullWidth?: boolean;
}>;

export function InputsContainer({
  children,
  id,
  size = 'large',
  label,
  helperText,
  fullWidth,
  idQa,
}: InputsContainerProps) {
  return (
    <div id-qa={idQa} className={classNames('gkit-inputs-container', { 'full-width': fullWidth })}>
      {label && (
        <label htmlFor={id} className={classNames('inputs-container-label', size)}>
          {label}
        </label>
      )}
      {children}
      {helperText && <span className="inputs-container-description">{helperText}</span>}
    </div>
  );
}
