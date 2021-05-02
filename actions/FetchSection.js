import getConfig from "next/config";

export const FetchCommentSection = async () => {
  const { publicRuntimeConfig } = getConfig();

  const res = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/comment-section`
  );
  const scCatForm = await res.json();

  return scCatForm;
};
