// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
import Head from "next/head";
// #contexts :

// #hooks :
import { FetchCategoryPage } from "actions/FetchPage";
import {
  FetchCategoryDetails,
  FetchBlogsByCategory,
  FetchBlogFeatured,
  FetchCategoryList,
} from "actions/FetchBlog";

// #components :
import { BwPageHeader } from "components/UI";
import { BlogByCategoriesSection, BlogSideBar } from "components/Blogs";

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
  const limit = 2;
  const categoryPage = await FetchCategoryPage({
    context: context,
  });
  const categoryDetails = await FetchCategoryDetails({
    context: context,
  });

  const blogs = await FetchBlogsByCategory({
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
    props: { categoryPage, blogs, categoryDetails, blogFeatured, categoryList },
  };
}

const useStyles = makeStyles({
  root: {},
});

const CategoryPage = (props) => {
  const {
    classes,
    categoryPage: { readMore, search, sidebarFeatured, sidebarCategories },
    blogs,
    categoryDetails,
    blogFeatured,
    categoryList,
  } = props;
  const localClasses = useStyles();

  return (
    <Grid container component="main">
      <Head>
        <title>{categoryDetails.meta.meta__title}</title>
        <meta
          name="description"
          content={categoryDetails.meta.meta__description}
        />
      </Head>

      <CssBaseline />
      <Grid item xs={12} xl={12}>
        <Paper>
          <BwPageHeader
            cover={categoryDetails.cover}
            title={categoryDetails.name}
            excerpt={categoryDetails.excerpt}
            alt={categoryList.cover_alt}
          />
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
                <BlogByCategoriesSection blogs={blogs} button={readMore} />
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
)(CategoryPage);
