import { useLayoutEffect } from 'react';

export const usePreventBodyScroll = (isEnabled: boolean) => {
  useLayoutEffect(() => {
    if (!isEnabled) return;

    const currentOverflow = getComputedStyle(document.body).overflow;

    //Error: react-remove-scroll-bar: cannot calculate scrollbar size because it is removed (overflow:hidden on body)
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = currentOverflow;
    };
  }, [isEnabled]);
};
