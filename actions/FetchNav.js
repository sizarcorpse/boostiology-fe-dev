import getConfig from "next/config";

//Navigation

export const FetchNav = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/navigation`);
  const navigation = await res.json();

  return navigation.item;
};
