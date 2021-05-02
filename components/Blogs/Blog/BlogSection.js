import { useState } from "react";
// #next :
import getConfig from "next/config";
import { useRouter } from "next/router";

import useSWR, { useSWRInfinite } from "swr";

// #components :
import { BwBlogCard } from "components/UI";

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
});

const BlogSection = (props) => {
  const { classes, blogs, button, notFound } = props;
  const localClasses = useStyles();

  const { publicRuntimeConfig } = getConfig();

  let items = 1;
  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    (index) =>
      `${publicRuntimeConfig.ROOT_API_URL}/blogs/page?_limit=${items}&_page=${
        index + 1
      }`,

    {
      revalidateOnFocus: false,
      initialData: blogs,
    }
  );
  const concatPostsData = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < items);

  return (
    <Grid container>
      {/* <Grid item xs={12}>
        <Box width="100%" pt={10} px={5}>
          {blogs.length != 0 && blogs ? (
            blogs.map((item, i) => (
              <BwBlogCard
                key={i}
                slug={item.slug}
                photo={item.cover}
                title={item.title}
                excerpt={item.excerpt}
                alt={item.cover_alt}
                button={button}
                categories={item.categories}
                createdAt={item.createdAt}
              />
            ))
          ) : (
            <Typography variant="h3" color="primary">
              {notFound.text}
            </Typography>
          )}
        </Box>
      </Grid> */}
      <Grid item xs={12}>
        <Box width="100%" pt={10} px={5}>
          {concatPostsData.length != 0 && blogs ? (
            concatPostsData.map((item, i) => (
              <BwBlogCard
                key={i}
                slug={item.slug}
                photo={item.cover}
                title={item.title}
                excerpt={item.excerpt}
                alt={item.cover_alt}
                button={button}
                categories={item.categories}
                createdAt={item.createdAt}
              />
            ))
          ) : (
            <Typography variant="h3" color="primary">
              {notFound.text}
            </Typography>
          )}
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box
          height={50}
          width="100%"
          display="flex"
          justifyContent="center"
          my={2}
        >
          <Button
            onClick={() => {
              setSize(size + 1);
            }}
            disabled={isReachingEnd}
          >
            {isLoadingMore ? (
              "Loding More"
            ) : isReachingEnd ? (
              <Typography variant="h2" color="primary">
                No More Post
              </Typography>
            ) : (
              "more"
            )}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BlogSection);
