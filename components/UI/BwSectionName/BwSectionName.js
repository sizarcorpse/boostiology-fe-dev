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
}));

const BwSectionName = (props) => {
  const { classes, children, color } = props;
  const localClasses = useStyles({ color });

  return (
    <Typography variant="h2" color={color} className={localClasses.root}>
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
