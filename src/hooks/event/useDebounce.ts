import { useEffect, useRef, useState } from 'react';

const DEBOUNCE_DELAY = 3000;

export const useDebounce = <T>(debouncedItem: () => T) => {
  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout>();
  const debouncedValue = useRef<() => T>(debouncedItem);
  useEffect(() => {
    debouncedValue.current = debouncedItem;
  }, [debouncedItem]);

  useEffect(() => () => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
  });

  return () => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    const newTimeoutId = setTimeout(() => {
      debouncedValue.current();
    }, DEBOUNCE_DELAY);

    setTimeOutId(newTimeoutId);
  };
};