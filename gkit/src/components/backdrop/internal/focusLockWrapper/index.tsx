import classNames from 'classnames';
import './style.less';

import React, { PropsWithChildren } from 'react';
import FocusLock from 'react-focus-lock';

type Props = PropsWithChildren<{ className?: string; element: HTMLDivElement }>;

export const BackdropFocusLockWrapperInternal = React.memo(({ className, element, children }: Props) => {
  return (
    <FocusLock
      className={classNames('backdrop-wrapper', className)}
      whiteList={node => !document.getElementById('dynamic-react')?.contains(node)}
      // https://github.com/theKashey/react-focus-lock/issues/94#issuecomment-589330581
      shards={[element]}
      //https://github.com/theKashey/react-focus-lock/issues/318
      focusOptions={{ preventScroll: true }}
    >
      {children}
    </FocusLock>
  );
});

BackdropFocusLockWrapperInternal.displayName = 'BackdropFocusLockWrapperInternal';
