import getConfig from "next/config";

//Navigation

export const FetchFooter = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/footer`);
  const footer = await res.json();

  return footer;
};
