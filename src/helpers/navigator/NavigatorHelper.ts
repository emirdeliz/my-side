export const checkUserBrowser = () => {
	const vendor = navigator.vendor?.toLowerCase() || '';
	return {
		isChrome: vendor.match(/google/i),
		isSafari: vendor.match(/apple/i),
		isFirefox: vendor.match(/firefox\//i),
		isEdge: vendor.match(/edge\//i),
	}
}

export const downloadFile = async (url: string, fileName: string, type?: string) => {
	const response = await fetch(url);
	const objectURL = window.URL.createObjectURL(await response.blob());

	const link = document.createElement('a');
	link.href = objectURL;
	link.setAttribute('download', `${fileName}${type ? `.${type}` : ''}`);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};