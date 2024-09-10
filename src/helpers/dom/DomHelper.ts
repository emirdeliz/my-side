export const convertImageBase64ToImage = (base64?: string) => {
  const img = new Image();
  img.src = base64 || '';
  return img;
};

export const getImageDimensions = (img: HTMLImageElement) => {
  return new Promise<{ width: number; height: number }>((resolved) => {
    img.onload = () => {
      resolved({ width: img.naturalWidth, height: img.naturalHeight });
    };
  });
};

export const fileToImage = (file: File) => {
  return new Promise<HTMLImageElement>((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (file) {
        const result = new Image();
        result.src = reader.result as string;
        resolve(result);
      }
    };
    reader.readAsDataURL(file);
  });
};

export const fileImageToCanvas = async (
  file: File,
  imgWidth: number = 1920,
  imgHeight: number = 2716
) => {
  const img = await fileToImage(file);

  const sx = 0;
  const sy = 0;
  const canvas = document.createElement('canvas');
  canvas.width = imgWidth;
  canvas.height = imgHeight;
  canvas.getContext('2d')?.drawImage(img, sx, sy, imgWidth, imgHeight);
  return canvas;
};

export const urlToFile = async(url: string, fileType: string) => {
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.blob();
  const metadata = {  type: fileType };
  return new File([data], "test.jpg", metadata);
}
