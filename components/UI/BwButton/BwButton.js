// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Button } from "@material-ui/core";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 50,
    maxHeight: 50,
    width: "auto",
    background: "transparent",
    borderRadius: 0,
    border: 0,
    fontWeight: 700,
    textTransform: "uppercase",
    position: "relative",
    lineHeight: "40px",
    padding: theme.spacing(0, 5),
    fontSize: 12,
    letterSpacing: "0.2em",
    borderTop: "2px solid transparent",
    borderBottom: "2px solid transparent",
    outline: "1px solid transparent",
    color: (props) =>
      props.color === "primary"
        ? theme.palette.primary.main
        : props.color === "secondary"
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    transition: "all 0.5s ease-in-out 0.25s",

    "&::before": {
      content: "''",
      position: "absolute",
      width: 2,
      height: "100%",
      background: (props) =>
        props.color === "primary"
          ? theme.palette.primary.main
          : props.color === "secondary"
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
      top: 0,
      left: -8,
      transition: "all 0.2s ease-in-out 0s",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: 2,
      height: "100%",
      background: (props) =>
        props.color === "primary"
          ? theme.palette.primary.main
          : props.color === "secondary"
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
      top: 0,
      right: -8,
      transition: "all 0.2s ease-in-out 0s",
    },

    "&:hover::before": {
      left: 0,
    },
    "&:hover::after": {
      right: 0,
    },
    "&:hover": {
      background: (props) =>
        props.color === "primary"
          ? theme.palette.primary.main
          : props.color === "secondary"
          ? theme.palette.secondary.main
          : theme.palette.primary.main,

      color: (props) =>
        props.color === "primary"
          ? theme.palette.secondary.main
          : props.color === "secondary"
          ? theme.palette.primary.main
          : theme.palette.secondary.main,
      borderTop: (props) =>
        props.color === "primary"
          ? `2px solid ${theme.palette.primary.main}`
          : props.color === "secondary"
          ? `2px solid ${theme.palette.secondary.main}`
          : `2px solid ${theme.palette.primary.main}`,
      borderBottom: (props) =>
        props.color === "primary"
          ? `2px solid ${theme.palette.primary.main}`
          : props.color === "secondary"
          ? `2px solid ${theme.palette.secondary.main}`
          : `2px solid ${theme.palette.primary.main}`,
    },
  },
}));

const BwButton = (props) => {
  const { classes, children, color, goto } = props;

  const localClasses = useStyles({ color });

  return (
    <Link href={goto ? `${goto}` : ``}>
      <Button className={localClasses.root}>{children}</Button>
    </Link>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BwButton);
