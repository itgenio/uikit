import './style.less';
import { Label } from '@radix-ui/react-label';
import classNames from 'classnames';
import React, { forwardRef, MouseEventHandler, PropsWithChildren } from 'react';

type Sizes = 'small' | 'large';

type InputsContainerProps = PropsWithChildren<{
  idQa?: string;
  id?: string;
  label?: string;
  size?: Sizes;
  helperText?: React.ReactNode;
  className?: string;
  error?: boolean;
  idQaForHelperText?: string;
  required?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}>;

export const InputsContainer = forwardRef<HTMLDivElement, InputsContainerProps>(function InputsContainer(
  { children, id, size = 'large', label, required, helperText, idQa, className, onClick, error, idQaForHelperText },
  ref
) {
  return (
    <div ref={ref} id-qa={idQa} className={classNames('gkit-inputs-container', className, size)} onClick={onClick}>
      {label && (
        <Label htmlFor={id} className={classNames('inputs-container-label', size)}>
          {label}

          {required && '*'}
        </Label>
      )}

      {children}

      {helperText && (
        <span
          id-qa={idQaForHelperText || 'helper-text'}
          className={classNames('inputs-container-helper-text', { error })}
        >
          {helperText}
        </span>
      )}
    </div>
  );
});
