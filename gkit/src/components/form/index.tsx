import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ className?: string }>;

export const Form = React.memo(({ className, children }: Props) => {
  return (
    <form className={classNames('gkit-form', className)} onSubmit={e => e.preventDefault()}>
      {children}
    </form>
  );
});

Form.displayName = 'Form';
