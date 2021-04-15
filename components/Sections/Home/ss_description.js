// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Typography,
  withWidth,
  CssBaseline,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {},
  parallaxBackground: {
    position: "relative",
    backgroundPosition: "center",
  },
  title: {
    letterSpacing: 10,
  },
  title_mobile: {
    letterSpacing: 5,
  },
}));

const Ss_Description = (props) => {
  const { classes, width, description } = props;
  const localClasses = useStyles();

  return (
    <Box
      aria-label="description"
      width="100%"
      height="100%"
      px={width === "xs" ? 7 : 8}
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
    >
      <Box aria-label="title" my={2}>
        <Typography
          variant={width === "xs" ? "h4" : "h2"}
          color="secondary"
          className={
            width === "xs" ? localClasses.title_mobile : localClasses.title
          }
        >
          {description.title}
        </Typography>
      </Box>
      <Box aria-label="separator" my={1.5}>
        <img src="/lineSeparatorWhite.png" />
      </Box>
      <Box
        aria-label="description"
        my={1.5}
        width={{
          xs: "100%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
        }}
      >
        <Typography variant="body1" color="secondary">
          {description.description}
        </Typography>
      </Box>
    </Box>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Ss_Description)
);
