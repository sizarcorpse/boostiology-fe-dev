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

export const FetchBlogPage = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/blog-page`);
  const scBlog = await res.json();

  return scBlog;
};

export const FetchSingleBlogPage = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/blog-post-page`);
  const scBlog = await res.json();

  return scBlog;
};

export const FetchSearchPage = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/search-page`);
  const scSearch = await res.json();

  return scSearch;
};

export const FetchCategoryPage = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/category-page`);
  const scCat = await res.json();

  return scCat;
};
