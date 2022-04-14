import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Sizes = 'small' | 'large';

type InputsContainerProps = PropsWithChildren<{
  idQa?: string;
  id?: string;
  label?: string;
  size?: Sizes;
  description?: string;
}>;

export function InputsContainer({ children, id, size = 'large', label, description, idQa }: InputsContainerProps) {
  return (
    <div id-qa={idQa} className="gkit-inputs-container">
      {label && (
        <label htmlFor={id} className={classNames('inputs-container-label', size)}>
          {label}
        </label>
      )}
      {children}
      {description && <label className="inputs-container-description">{description}</label>}
    </div>
  );
}
