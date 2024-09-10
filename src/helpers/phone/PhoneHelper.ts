import * as mask from '../mask/MaskHelper';
import { replaceByIndex } from '@helpers';

export const hidePhone = (phoneNumber: string) => {
  const phone = mask.maskPhone(phoneNumber);
  return replaceByIndex(phone, '*****', 5, 10);
};
