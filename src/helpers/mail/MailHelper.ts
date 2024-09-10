import { replaceByIndex } from '@helpers';

export const hideMail = (mail: string) => {
  const mailIndex = mail.indexOf('@');
  return replaceByIndex(mail, '*****', 1, mailIndex);
};
