// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
import Head from "next/head";
// #contexts :

// #hooks :
import { FetchBlogPage } from "actions/FetchPage";
import {
  FetchBlog,
  FetchBlogFeatured,
  FetchCategoryList,
} from "actions/FetchBlog";

// #components :
import { BwPageHeader } from "components/UI";
import { BlogSection, BlogSideBar } from "components/Blogs";

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
  const page = 1;
  const limit = 1;
  const blogPage = await FetchBlogPage({
    context: context,
  });

  const blogs = await FetchBlog({
    context: context,
    _page: page,
    _limit: limit,
  });
  const blogFeatured = await FetchBlogFeatured({
    context: context,
    _limit: limit,
  });
  const categoryList = await FetchCategoryList({
    context: context,
  });

  return {
    props: { blogPage, blogs, blogFeatured, categoryList },
  };
}

const useStyles = makeStyles({
  root: {},
});

const BlogPage = (props) => {
  const {
    classes,
    blogPage: { blog, readMore, search, sidebarFeatured, sidebarCategories },
    blogs,
    blogFeatured,
    categoryList,
  } = props;
  const localClasses = useStyles();

  return (
    <Grid container component="main">
      <Head>
        <title>{blog.meta.meta__title}</title>
        <meta name="description" content={blog.meta.meta__description} />
      </Head>

      <CssBaseline />
      <Grid item xs={12} xl={12}>
        <Paper>
          <BwPageHeader
            cover={blog.cover}
            title={blog.title}
            excerpt={blog.excerpt}
          />
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
                <BlogSection blogs={blogs} button={readMore} />
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
)(BlogPage);
