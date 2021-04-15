import Image from "next/image";

import { useImageUrl } from "utils/useImageUrl";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover $iconArea": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  iconArea: {
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: 100,
    padding: theme.spacing(3, 3),
    transition: "all 0.25s ease 0s",
  },
  title: {
    color: theme.palette.primary.light,
  },
}));

const BwIconText = (props) => {
  const { classes, icon, title, children } = props;
  const localClasses = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="auto"
      maxWidth={390}
      width="100%"
      px={3}
      py={1}
      className={localClasses.root}
    >
      <Box
        aria-label="icon-area"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={localClasses.iconArea}
        my={1}
      >
        <Image
          src={`${useImageUrl(icon)}`}
          alt="Picture of the author"
          width={50}
          height={50}
          layout="intrinsic"
        />
      </Box>
      <Box aria-label="title-area" textAlign="center" my={1}>
        <Typography variant="h4" className={localClasses.title}>
          {title}
        </Typography>
      </Box>
      <Box aria-label="title-area" textAlign="center" my={1}>
        <Typography variant="body1">{children}</Typography>
      </Box>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BwIconText);
