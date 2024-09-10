import { ProductModel } from '@api';
import { Api } from '../../base/ApiBase';

const URL_API_BASE_PRODUCTS = 'products';

const URL_API_BASE_PRODUCTS_BY_CATEGORY = `${URL_API_BASE_PRODUCTS}/category`;

export const getProductsApi = async (filterCategory?: string, filterName?: string) => {
  const url = filterCategory && filterCategory !== 'todos'
    ? `${URL_API_BASE_PRODUCTS_BY_CATEGORY}?type=${filterCategory}`
    : `${URL_API_BASE_PRODUCTS}`;
  
  const result = (await Api<ProductModel>().all({ url }))?.products as Array<ProductModel>;
  return result?.filter((p) => {
    return !filterName || p.title?.toLowerCase().includes(filterName.toLowerCase())
  })
};

export const getProductApi = async (id: number) => {
  return (await Api<ProductModel>().get({ url: `${URL_API_BASE_PRODUCTS}/${id}` }))?.product as ProductModel;
}