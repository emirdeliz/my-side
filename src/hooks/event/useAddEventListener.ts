import { useCallback } from 'react';

export const useAddEventListener = () => {
  const addEventListener = useCallback((
		target: HTMLElement | Window,
		eventKey: string,
		event: (e: Event) => void
	) => {
		target.addEventListener(eventKey, event);
		return () => target.removeEventListener(eventKey, event);
	}, []);
  return { addEventListener };
};
