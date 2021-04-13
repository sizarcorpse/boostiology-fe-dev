import getConfig from "next/config";

//About Section

export const FetchAbout = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/abouts`);
  const abouts = await res.json();

  return abouts;
};

export const FetchTeam = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/teams`);
  const teams = await res.json();

  return teams;
};

export const FetchService = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/services`);
  const services = await res.json();

  return services;
};

export const FetchPrice = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/prices`);
  const prices = await res.json();

  return prices;
};
export const FetchTestimonial = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/testimonials
  `);
  const testimonials = await res.json();

  return testimonials;
};
