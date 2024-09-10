import { useCallback } from 'react';
import { GenericObject } from '@types';
import { useLoading } from '@atoms';

export const useService = (doNotUseGlobalLoading?: boolean) => {
  const { appendLoadingOnStack, removeLoadingStack } = useLoading();

  const callApi = useCallback(
    async <T>(method: (...params: GenericObject) => Promise<T>, ...params: GenericObject) => {
      try {
        if (!doNotUseGlobalLoading) {
          appendLoadingOnStack();
        }
        const response = await method(...params);
        return response;
      } finally {
        if (!doNotUseGlobalLoading) {
          removeLoadingStack();
        }
      }
    },
    [appendLoadingOnStack, removeLoadingStack, doNotUseGlobalLoading]
  );
  return { callApi };
};
