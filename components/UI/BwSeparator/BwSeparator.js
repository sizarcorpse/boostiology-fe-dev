import Image from "next/image";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box } from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const BwSeparator = (props) => {
  const { classes, marginY, size, color } = props;
  const localClasses = useStyles();

  return (
    <Box aria-label="separator" my={parseInt(marginY)}>
      {color === "primary" ? (
        <Image
          src={"/separatorBlack.png"}
          height={size === "large" ? 12 : 8}
          width={size === "large" ? 170 : 120}
        />
      ) : color === "secondary" ? (
        <Image
          src={"/separatorWhite.png"}
          height={size === "large" ? 12 : 8}
          width={size === "large" ? 170 : 120}
        />
      ) : null}
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BwSeparator);
