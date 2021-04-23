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

export const FetchAboutPage = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/about-page`);
  const scAbout = await res.json();

  return scAbout;
};

export const FetchPortfolioPage = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/portfolio-page`);
  const scPortfolio = await res.json();

  return scPortfolio;
};
