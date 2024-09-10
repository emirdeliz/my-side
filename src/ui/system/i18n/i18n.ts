import i18nData from './pt-br.json';

export const t = (key: string) => {
	return i18nData[key as keyof typeof i18nData] || '';
}