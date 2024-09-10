export const isPdfFile = (file?: File) => {
	return file?.type.includes('pdf');
}