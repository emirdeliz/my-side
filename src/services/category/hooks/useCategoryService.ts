import { getCategoriesApi } from '@api';
import { useService } from '../../hooks/useService';
import { useCallback } from 'react';

export const useCategoryService = () => {
  const { callApi } = useService();

  const getCategories = useCallback(async () => {
    const response = await callApi<Array<string>>(getCategoriesApi);
    return response;
  }, [callApi]);

  return {
    getCategories,
  };
};
