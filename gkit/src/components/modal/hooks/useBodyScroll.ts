import { useLayoutEffect } from 'react';

export const usePreventBodyScroll = (isEnabled: boolean) => {
  useLayoutEffect(() => {
    if (!isEnabled) return;

    const currentOverflow = getComputedStyle(document.body).overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = currentOverflow;
    };
  }, [isEnabled]);
};
