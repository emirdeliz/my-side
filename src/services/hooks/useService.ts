import { useCallback } from 'react';
import { GenericObject } from '@types';

export const useService = () => {
  const callApi = useCallback(
    async <T>(method: (...params: GenericObject) => Promise<T>, ...params: GenericObject) => {
      const response = await method(...params);
      return response;
    },
    []
  );
  return { callApi };
};
