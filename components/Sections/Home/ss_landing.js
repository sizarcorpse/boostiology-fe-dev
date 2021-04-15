import { BwSeparator } from "components/UI";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Typography,
  withWidth,
} from "@material-ui/core";

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
    textAlign: "center",
  },
  span: {
    margin: theme.spacing(0, 1),
    fontSize: 50,
    fontWeight: 1,
    fontStyle: "normal",
    fontVariant: "normal",
    lineHeight: "1em",
    letterSpacing: 1,
    wordSpacing: 0,
  },

  title_mobile: {
    fontSize: 30,
    textTransform: "none",
    textAlign: "center",
  },

  span_mobile: {
    margin: theme.spacing(0, 1),
    fontSize: 30,
    fontWeight: 1,
    fontStyle: "normal",
    fontVariant: "normal",
    lineHeight: "1em",
    letterSpacing: 1,
    wordSpacing: 0,
  },

  subtile_mobile: {
    fontSize: 14,
  },
}));

const Ss_Landing = (props) => {
  const { classes, width, landing } = props;
  const localClasses = useStyles();

  return (
    <Box aria-label="landing" className={localClasses.root}>
      <Box aria-label="subtile" my={1}>
        <Typography
          variant="h4"
          color="secondary"
          className={width === "xs" ? localClasses.subtile_mobile : undefined}
        >
          {landing.subtitle}
        </Typography>
      </Box>

      <Box aria-label="title" my={1.5}>
        <Typography
          aria-label="title"
          variant="h3"
          color="secondary"
          className={
            width === "xs" ? localClasses.title_mobile : localClasses.title
          }
        >
          {landing.title.split(" ")[0]}
          <span
            className={
              width === "xs" ? localClasses.span_mobile : localClasses.span
            }
          >
            {landing.title.split(" ")[1]}
          </span>
        </Typography>
      </Box>
      <BwSeparator
        size={width === "xs" ? "small" : "large"}
        marginY={1.5}
        color="secondary"
      />
      <Box
        aria-label="description"
        my={1.5}
        width={{
          xs: "90%",
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
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Ss_Landing)
);
