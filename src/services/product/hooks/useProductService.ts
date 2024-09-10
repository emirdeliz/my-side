import { getProductApi, getProductsApi, ProductModel } from '@api';
import { useCallback } from 'react';
import { useService } from '../../hooks/useService';

export const useProductService = () => {
  const { callApi } = useService();

  const getProducts = useCallback(async (filterCategory?: string, filterName?: string) => {
    const response = await callApi<Array<ProductModel>>(getProductsApi, filterCategory, filterName);
    return response;
  }, []);

  const getProduct = useCallback(async (id: string) => {
    const response = await callApi<ProductModel>(getProductApi, id);
    return response;
  }, []);

  return {
    getProduct,
    getProducts,
  };
};
