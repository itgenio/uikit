import './style.less';
import classNames from 'classnames';
import React, { forwardRef, PropsWithChildren } from 'react';

type Sizes = 'small' | 'large';

type InputsContainerProps = PropsWithChildren<{
  idQa?: string;
  id?: string;
  label?: string;
  size?: Sizes;
  helperText?: React.ReactNode;
  className?: string;
}>;

export const InputsContainer = forwardRef<HTMLDivElement, InputsContainerProps>(function InputsContainer(
  { children, id, size = 'large', label, helperText, idQa, className },
  ref
) {
  return (
    <div ref={ref} id-qa={idQa} className={classNames('gkit-inputs-container', className)}>
      {label && (
        <label htmlFor={id} className={classNames('inputs-container-label', size)}>
          {label}
        </label>
      )}
      {children}
      {helperText && <span className="inputs-container-helper-text">{helperText}</span>}
    </div>
  );
});
