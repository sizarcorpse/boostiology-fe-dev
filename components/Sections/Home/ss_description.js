// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Typography,
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
}));

const Ss_Description = (props) => {
  const { classes, description } = props;
  const localClasses = useStyles();

  return (
    <Box
      aria-label="description-area"
      width="100%"
      height="100%"
      px="64px"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
    >
      <CssBaseline />
      <Box aria-label="title" my={1.5}>
        <Typography
          aria-label="title-main"
          variant="h2"
          color="secondary"
          className={localClasses.title}
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
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Ss_Description);
