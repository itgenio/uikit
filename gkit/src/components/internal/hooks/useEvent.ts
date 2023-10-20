import { useRef, useLayoutEffect, useCallback } from 'react';

// https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md
export function useEvent<T extends (...args: any[]) => any>(handler: T): T {
  const handlerRef = useRef<T | null>(null);

  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args: Parameters<T>) => {
    const fn = handlerRef.current;

    return fn?.(...args);
  }, []) as T;
}
