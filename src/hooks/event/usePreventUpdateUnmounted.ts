import { GenericObject } from '@types';
import { useCallback, useEffect, useRef } from 'react';

export const usePreventUpdateUnmounted = <T>() => {
  const mountedRef = useRef<boolean>(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const preventUpdateUnmounted = useCallback(
    async (
      asyncFn: (...params: GenericObject) => Promise<T>,
      callback: (result: T) => void
    ) => {
      const result = await asyncFn();
      if (mountedRef.current) {
        callback(result);
      }
    },
    []
  );

  return { preventUpdateUnmounted };
};
