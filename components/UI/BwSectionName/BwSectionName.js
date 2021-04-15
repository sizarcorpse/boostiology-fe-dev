// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    padding: theme.spacing(3, 8),
    border: (props) =>
      props.color === "primary"
        ? `10px solid ${theme.palette.primary.main}`
        : props.color === "secondary"
        ? `10px solid ${theme.palette.secondary.main}`
        : `10px solid ${theme.palette.primary.main}`,
  },
  root_small: {
    display: "inline-block",
    padding: theme.spacing(2, 2),
    border: (props) =>
      props.color === "primary"
        ? `5px solid ${theme.palette.primary.main}`
        : props.color === "secondary"
        ? `5px solid ${theme.palette.secondary.main}`
        : `5px solid ${theme.palette.primary.main}`,
  },
}));

const BwSectionName = (props) => {
  const { classes, children, color, size } = props;
  const localClasses = useStyles({ color });

  return (
    <Typography
      variant={size === "small" ? "h6" : "h2"}
      color={color}
      className={size === "small" ? localClasses.root_small : localClasses.root}
    >
      {children}
    </Typography>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BwSectionName);
