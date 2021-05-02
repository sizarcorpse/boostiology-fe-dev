import getConfig from "next/config";

export const FetchBlog = async ({ context, _page, _limit }) => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/blogs/page?_page=${_page}&_limit=${_limit}`
  );
  const blogs = await res.json();

  return blogs;
};

export const FetchBlogFeatured = async ({ context, _limit }) => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/blogs/p/f?&_limit=${_limit}`
  );
  const blogs = await res.json();

  return blogs;
};

export const FetchSingleBlogPost = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const slug = context.query.slug;
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/blogs?slug=${slug}`
  );
  const data = await response.json();

  return data[0];
};

// categories

export const FetchCategoryList = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/categories/all`);
  const cats = await res.json();

  return cats;
};

export const FetchCategoryDetails = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const category = context.query.slug;
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/categories/${category}`
  );
  const cat = await response.json();
  return cat;
};

export const FetchBlogsByCategory = async ({ context, _page, _limit }) => {
  const { publicRuntimeConfig } = getConfig();
  let category = context.query.slug;
  const res = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/categories/${category}/contents?_page=${_page}&_limit=${_limit}`
  );
  const blogs = await res.json();

  return blogs;
};

// search

export const FetchSearchResult = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const slug = context.query.slug;
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/blogs?title_contains=${slug}&_sort=title:DESC&_limit=12`
  );
  const data = await response.json();

  return data;
};
