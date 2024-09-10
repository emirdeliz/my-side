import { ProductModel } from '@api';
import { Api } from '../../base/ApiBase';

const URL_API_BASE_PRODUCTS = 'products';

export const getProductsApi = async () => {
  return await Api<ProductModel>().all({
    url: `${URL_API_BASE_PRODUCTS}`
  }) as Array<ProductModel>;
};