import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const useImageUrl = (image) => {
  if (!image) {
    return "/separatorBlack.png";
  }
  if (image.url.indexOf("/") === 0) {
    return `${publicRuntimeConfig.ROOT_API_URL}${image.url}`;
  }
  return image.url;
};
