import './style.less';

import React, { PropsWithChildren } from 'react';
import FocusLock from 'react-focus-lock';

type Props = PropsWithChildren<{ element: HTMLDivElement }>;

export const BackdropFocusLockWrapperInternal = React.memo(({ element, children }: Props) => {
  return (
    <FocusLock
      className="backdrop-wrapper"
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
