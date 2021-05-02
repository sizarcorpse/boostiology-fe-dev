import Image from "next/image";
import { useImageUrl } from "utils/useImageUrl";
// #components :

import Ss_CreateComment from "./ss_createComment";
import Ss_Comments from "./ss_comments";
import { format } from "date-fns";

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  withWidth,
  Typography,
  Divider,
} from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
const useStyles = makeStyles((theme) => ({
  root: { width: "100%", maxWidth: 900 },
  title: { letterSpacing: "0.2px", lineHeight: "1em" },
  categories: { fontWeight: 400, cursor: "pointer" },
  richText: {
    width: "100%",
    position: "relative",
    "& img": {
      width: "100%",
      height: "auto",
    },
    "& figure.image": {
      width: "100%",
      margin: "auto",

      "& figcaption": {
        fontSize: "1em",
        fontWeight: 300,
        lineHeight: "1.7em",
        textAlign: "center",
        fontStyle: "italic",
        color: theme.palette.primary.main,
      },
    },
    "& p": {
      fontSize: "1.1em",
      fontWeight: 300,
      lineHeight: "1.7em",
      color: theme.palette.primary.main,
    },
    "& a": {
      fontSize: "1em",
      fontWeight: 400,
      lineHeight: "1.7em",
      textDecoration: "none",
      color: theme.palette.primary.main,
      position: "relative",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  title_mobile: { fontSize: "1.2em", letterSpacing: 0, lineHeight: "1.2em" },
}));

const Ss_Content = (props) => {
  const {
    width,
    cover,
    cover_alt,
    title,
    categories,
    createdAt,
    content,
  } = props;

  const localClasses = useStyles();

  return (
    <Box className={localClasses.root}>
      <Box aria-label="cover-image">
        <Image
          src={`${useImageUrl(cover)}`}
          height={600}
          width={900}
          objectFit="cover"
          alt={cover_alt}
        />
      </Box>
      <Box aria-label="title" mt={3} mb={2}>
        <Typography
          variant="h2"
          color="primary"
          className={
            width === "xs" ? localClasses.title_mobile : localClasses.title
          }
        >
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
      <Box
        aria-label="body"
        dangerouslySetInnerHTML={{
          __html: `${content}`,
        }}
        className={localClasses.richText}
      />
    </Box>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Ss_Content)
);
