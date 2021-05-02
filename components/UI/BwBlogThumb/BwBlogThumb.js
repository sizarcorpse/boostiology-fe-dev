import { useImageUrl } from "utils/";
import Image from "next/image";
import Link from "next/link";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";
// #other :

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    "&:hover $title": { textDecoration: "underline" },
  },
  title: { fontWeight: "bold", lineHeight: "1em" },
}));

const BwBlogThumb = (props) => {
  const { classes, photo, title, alt, slug } = props;
  const localClasses = useStyles();

  return (
    <Link href={`/blog/${slug}`}>
      <Box width="100%" maxWidth={420} className={localClasses.root}>
        <Image
          src={useImageUrl(photo)}
          height={180}
          width={300}
          layout="responsive"
          objectFit="cover"
          alt={alt}
        />
        <Box my={1}>
          <Typography variant="body1" className={localClasses.title}>
            {title}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BwBlogThumb);
