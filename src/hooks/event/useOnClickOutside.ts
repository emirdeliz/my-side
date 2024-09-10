import { RefObject, useCallback, useMemo, useState } from 'react';
import { usePreventUpdateUnmounted } from '.';

export const useOnClickOutside = () => {
  const { preventUpdateUnmounted } = usePreventUpdateUnmounted();
  const [initialized, setInitialized] = useState<boolean>(false);
  const nameRef = 'ref-outside';
  const randomRef = useMemo(() => Math.random().toString(36).substring(7), []);

  const removeEventListener = useCallback((listener: (e: Event) => void) => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
  }, []);

  const appendEventOutsideOnWindow = useCallback((
    ref: RefObject<HTMLElement> | HTMLElement,
    callback: (e: Event) => void
  ) => {
    if (initialized) {
      return;
    }

    const container = ref instanceof HTMLElement ? ref : ref?.current;
    container && container.setAttribute(nameRef, randomRef);

    const listener = (e: Event) => {
      preventUpdateUnmounted(async () => {}, async () => {
        const target = e.target as HTMLElement;
        target.setAttribute(nameRef, randomRef);
        
        const isChildren = !!container?.querySelector(`[${nameRef}='${randomRef}']`);
        !isChildren && callback(e);
        target.removeAttribute(nameRef);
      });
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    setInitialized(true);
    return () => removeEventListener(listener)
  }, [initialized, preventUpdateUnmounted, randomRef, removeEventListener]);

  return { appendEventOutsideOnWindow };
};
