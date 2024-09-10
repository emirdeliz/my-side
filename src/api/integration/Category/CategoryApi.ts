import { Api } from '../../base/ApiBase';

const URL_API_BASE_CATEGORIES = 'products/category';

export const getCategoriesApi = async () => {
  return (await Api<Array<string>>().all({
    url: `${URL_API_BASE_CATEGORIES}`,
  }))?.categories as Array<string>;
};