import { getProductsApi, ProductModel } from '@api';
import { useService } from '../../hooks/useService';

export const useProductService = () => {
  const { callApi } = useService();

  const getProducts = async () => {
    const response = await callApi<Array<ProductModel>>(getProductsApi);
    return response;
  };

  return {
    getProducts,
  };
};
