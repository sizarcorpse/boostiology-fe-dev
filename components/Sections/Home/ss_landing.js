// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: 50,
    textTransform: "none",
  },
  span: {
    fontSize: 50,
    fontWeight: 200,
    fontStyle: "normal",
    fontVariant: "normal",
    lineHeight: "1em",
    letterSpacing: 1,
    wordSpacing: 0,
  },
}));

const Ss_Landing = (props) => {
  const { classes, landing } = props;
  const localClasses = useStyles();

  return (
    <Box aria-label="cover-info" className={localClasses.root}>
      <Box aria-label="subtile" my={1}>
        <Typography variant="h4" color="secondary">
          {landing.subtitle}
        </Typography>
      </Box>

      <Box aria-label="title" my={1.5}>
        <Typography
          aria-label="title-main"
          variant="h3"
          color="secondary"
          className={localClasses.title}
        >
          {landing.title.split(" ")[0]}
          <span className={localClasses.span}>
            {" "}
            {landing.title.split(" ")[1]}
          </span>
        </Typography>
      </Box>
      <Box aria-label="separator" my={1.5}>
        <img src="/separatorWhite.png" />
      </Box>
      <Box
        aria-label="description"
        my={1.5}
        width={{
          xs: "100%",
          sm: "70%",
          md: "50%",
          lg: "40%",
          xl: "30%",
        }}
        textAlign="center"
      >
        <Typography aria-label="title-main" variant="body1" color="secondary">
          {landing.excerpt}
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
)(Ss_Landing);
