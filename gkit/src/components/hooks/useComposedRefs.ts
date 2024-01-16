import type { MutableRefObject, Ref } from 'react';
import { useCallback } from 'react';

export const useComposedRefs = <T extends HTMLElement | null>(...refs: Ref<T>[]) => {
  return useCallback((node: T) => {
    refs.forEach(ref => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as MutableRefObject<T>).current = node;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
};
