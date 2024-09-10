import { getCategoriesApi, ProductModel } from '@api';
import { useService } from '../../hooks/useService';

export const useCategoryService = () => {
  const { callApi } = useService();

  const getCategories = async () => {
    const response = await callApi<Array<string>>(getCategoriesApi);
    return response;
  };

  return {
    getCategories,
  };
};
