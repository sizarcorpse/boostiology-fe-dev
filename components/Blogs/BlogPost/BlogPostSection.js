import Image from "next/image";
import { useImageUrl } from "utils/useImageUrl";
// #components :
import { BwSeparator } from "components/UI";
import Ss_Content from "./ss_content";
import Ss_CreateComment from "./ss_createComment";
import Ss_Comments from "./ss_comments";

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  withWidth,
  Divider,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({}));

const BlogPostSection = (props) => {
  const {
    width,
    blog: {
      cover,
      cover_alt,
      title,
      categories,
      createdAt,
      content,
      comments,
      commentsCount,
    },
    commentSection,
  } = props;

  const localClasses = useStyles();

  return (
    <Grid container aria-label="single-blog-post">
      <Grid item xs={12} aria-label="single-blog-post-content">
        <Box width="100%" pt={10} px={{ xs: 1, sm: 3, md: 5, lg: 5, xl: 5 }}>
          <Ss_Content
            cover={cover}
            alt={cover_alt}
            title={title}
            categories={categories}
            createdAt={createdAt}
            content={content}
          />
        </Box>
        <Box mt={10} mb={3} aria-label="divider">
          <Divider />
        </Box>
      </Grid>

      <Grid item xs={12} aria-label="single-blog-post-comment-form">
        <Box width="100%" pt={5}>
          <Ss_CreateComment commentSection={commentSection} />
        </Box>
      </Grid>
      <Grid item xs={12} aria-label="single-blog-post-comments">
        <Box width="100%" pt={3}>
          <Ss_Comments comments={comments} commentsCount={commentsCount} />
        </Box>
        {width === "xs" || width === "sm" ? (
          <Box mt={10} mb={3} aria-label="divider">
            <Divider />
          </Box>
        ) : null}
      </Grid>
    </Grid>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(BlogPostSection)
);
