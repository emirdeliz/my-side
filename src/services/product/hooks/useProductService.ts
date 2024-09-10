import { getProductsApi, ProductModel } from '@api';
import { useService } from '../../hooks/useService';

export const useProductService = () => {
  const { callApi } = useService();

  const getProducts = async (page: number, limit: number, filterCategory?: string) => {
    const response = await callApi<Array<ProductModel>>(getProductsApi, page, limit, filterCategory);
    return response;
  };

  return {
    getProducts,
  };
};
