import Image from "next/image";
import { useImageUrl } from "utils/useImageUrl";
import { BwButton, BwSeparator } from "components/UI";

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Typography, Box } from "@material-ui/core";

// #other :
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%", height: "auto", maxWidth: 900 },
  title: { letterSpacing: "0.2px", lineHeight: "1em" },
  categories: { fontWeight: 400, cursor: "pointer" },
}));

const BwBlogCard = (props) => {
  const {
    classes,
    button,
    photo,
    alt,
    title,
    excerpt,
    categories,
    createdAt,
    slug,
  } = props;
  const localClasses = useStyles();

  return (
    <Box className={localClasses.root} aria-label="blog-card">
      <Box aria-label="blog-post-cover-image">
        <Image
          src={`${useImageUrl(photo)}`}
          height={600}
          width={900}
          objectFit="cover"
          alt={alt}
        />
      </Box>
      <Box aria-label="title" mt={3} mb={2}>
        <Typography variant="h2" color="primary" className={localClasses.title}>
          {title}
        </Typography>
      </Box>
      <Box
        aria-label="categories"
        display="flex"
        mb={2}
        flexDirection="row"
        flexWrap="wrap"
      >
        <Typography variant="body1">Posted by Admin in &nbsp;</Typography>
        {!categories || categories.length === 0 ? (
          <Typography variant="body1">uncategorized</Typography>
        ) : (
          categories.map((item, i) => (
            <Box mx={0.2}>
              <Typography
                key={i}
                variant="body1"
                className={localClasses.categories}
              >
                {item.name}
                {categories.length - 1 === i ? "" : ","}
              </Typography>
            </Box>
          ))
        )}
        <Typography variant="body1">
          &nbsp; on {format(new Date(createdAt), "d MMMM yyyy")}
        </Typography>
      </Box>

      <Box aria-label="separator" my={1}>
        <Image
          src="/lineSeparatorBlack.png"
          height={20}
          width={40}
          alt="separator"
        />
      </Box>
      <Box aria-label="excerpt" mt={1} mb={2}>
        <Typography variant="body1" color="primary">
          {excerpt}
        </Typography>
      </Box>
      <Box aria-label="button" mx={1}>
        <BwButton color="primary" goto={`/blog/${slug}`}>
          {button.title}
        </BwButton>
      </Box>

      <Box display="flex" justifyContent="center">
        <BwSeparator marginY={10} color="primary" size="large" />
      </Box>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BwBlogCard);
