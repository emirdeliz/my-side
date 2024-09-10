import { ProductModel } from '@api';
import { Api } from '../../base/ApiBase';

const URL_API_BASE_PRODUCTS = 'products';

const URL_API_BASE_PRODUCTS_BY_CATEGORY = `${URL_API_BASE_PRODUCTS}/category`;

export const getProductsApi = async (page: number, limit: number, filterCategory?: string) => {
  const urlParams = `&page=${page}&limit=${limit}`;
  const url = filterCategory && filterCategory !== 'todos'
    ? `${URL_API_BASE_PRODUCTS_BY_CATEGORY}?type=${filterCategory}${urlParams}`
    : `${URL_API_BASE_PRODUCTS}?${urlParams}`;
  
  return (await Api<ProductModel>().all({ url }))?.products as Array<ProductModel>;
};