import getConfig from "next/config";

//Home Section

export const FetchHomePage = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/home-page`);
  const scHome = await res.json();

  return scHome;
};
export const FetchContactPage = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/contact-page`);
  const scContact = await res.json();

  return scContact;
};
