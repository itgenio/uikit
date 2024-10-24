import React, { PropsWithChildren, useState } from 'react';
import { usePreventBodyScroll } from '../internal/hooks';
import { Portal } from '../portal';
import { BackdropInternal } from './internal/backdrop';
import { BackdropContentInternal } from './internal/backdropContent';
import { BackdropFocusLockWrapperInternal } from './internal/focusLockWrapper';
import { BackdropOverlayInternal, BackdropOverlayProps } from './internal/overlay';

export type BackdropProps = PropsWithChildren<{
  className?: string;
  classNameWrapper?: string;
  classNameOverlay?: string;
  onClick?: BackdropOverlayProps['onClick'];
  preventBodyScroll?: boolean;
  ignoreOverlayClick?: boolean;
  idQa?: string;
}>;

export const Backdrop = ({
  className,
  classNameWrapper,
  classNameOverlay,
  onClick,
  preventBodyScroll = true,
  ignoreOverlayClick,
  idQa,
  children,
}: BackdropProps) => {
  const [element, setElement] = useState<HTMLDivElement>(null);

  usePreventBodyScroll(preventBodyScroll);

  return (
    <Portal>
      <BackdropInternal className={className} setElement={setElement} idQa={idQa}>
        <BackdropFocusLockWrapperInternal className={classNameWrapper} element={element}>
          <BackdropOverlayInternal className={classNameOverlay} onClick={!ignoreOverlayClick ? onClick : undefined} />

          <BackdropContentInternal>{children}</BackdropContentInternal>
        </BackdropFocusLockWrapperInternal>
      </BackdropInternal>
    </Portal>
  );
};
