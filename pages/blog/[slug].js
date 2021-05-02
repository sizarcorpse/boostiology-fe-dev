// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
import Head from "next/head";
// #contexts :

// #hooks :
import { FetchSingleBlogPage } from "actions/FetchPage";
import { FetchCommentSection } from "actions/FetchSection";
import {
  FetchSingleBlogPost,
  FetchBlogFeatured,
  FetchCategoryList,
} from "actions/FetchBlog";

// #components :
import { BwPageHeader } from "components/UI";
import { BlogPostSection, BlogSideBar } from "components/Blogs";

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Paper,
  CssBaseline,
  Container,
  Box,
} from "@material-ui/core";

// #other :

export async function getServerSideProps(context) {
  const limit = 10;

  const blogPostPage = await FetchSingleBlogPage({
    context: context,
  });

  const blogPost = await FetchSingleBlogPost({
    context: context,
  });
  const commentSection = await FetchCommentSection({
    context: context,
  });

  const blogFeatured = await FetchBlogFeatured({
    context: context,
    _limit: limit,
  });
  const categoryList = await FetchCategoryList({
    context: context,
  });

  return {
    props: {
      blogPostPage,
      blogPost,
      commentSection,
      blogFeatured,
      categoryList,
    },
  };
}

const useStyles = makeStyles({
  root: {},
});

const SingleBlogPage = (props) => {
  const {
    classes,
    blogPostPage: {
      posts,
      readMore,
      search,
      sidebarFeatured,
      sidebarCategories,
    },
    blogPost,
    commentSection,
    blogFeatured,
    categoryList,
  } = props;
  const localClasses = useStyles();

  return (
    <Grid container component="main">
      <Head>
        <title>{blogPost.meta.meta__title}</title>
        <meta name="description" content={blogPost.meta.meta__description} />
      </Head>

      <CssBaseline />
      <Grid item xs={12} xl={12}>
        <Paper>
          <BwPageHeader
            cover={posts.cover}
            title={posts.title}
            excerpt={posts.excerpt}
            alt={posts.cover_alt}
          />
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
                <BlogPostSection
                  blog={blogPost}
                  commentSection={commentSection}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
                <BlogSideBar
                  search={search}
                  blogFeatured={blogFeatured}
                  categoryList={categoryList}
                  sidebarFeatured={sidebarFeatured}
                  sidebarCategories={sidebarCategories}
                />
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(SingleBlogPage);
