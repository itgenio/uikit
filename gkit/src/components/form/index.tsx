import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ className?: string; disablePrevent?: boolean; idQa?: string }>;

export const Form = ({ className, disablePrevent, idQa, children }: Props) => {
  return (
    <form
      className={classNames('gkit-form', className)}
      id-qa={idQa}
      onSubmit={e => !disablePrevent && e.preventDefault()}
    >
      {children}
    </form>
  );
};
