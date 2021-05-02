// #components :
import Ss_Search from "./ss_search";
import Ss_BlogFeatured from "./ss_blogFeatured";
import Ss_CategoryList from "./ss_categoryList";

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, search } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
});

const BlogSideBar = (props) => {
  const {
    classes,
    search,
    blogFeatured,
    categoryList,
    sidebarCategories,
    sidebarFeatured,
  } = props;
  const localClasses = useStyles();

  return (
    <Box pt={{ xs: 2, md: 10, xl: 10 }} px={0} mb={5}>
      <Ss_Search search={search} />
      <Ss_BlogFeatured blogFeatured={blogFeatured} name={sidebarFeatured} />
      <Ss_CategoryList categoryList={categoryList} name={sidebarCategories} />
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BlogSideBar);
