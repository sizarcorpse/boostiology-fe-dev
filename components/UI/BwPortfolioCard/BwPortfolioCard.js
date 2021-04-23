import { useImageUrl } from "utils/useImageUrl";
import Image from "next/image";
import { BwButton } from "components/UI";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";
import { size } from "lodash";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    "&:hover $details": {
      opacity: 1,
      background: "rgba(40,40,40,.7)",
      transition: "all 550ms ease 0ms",
    },
  },
  details: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "all 550ms ease 0ms",
    background: "rgba(40,40,40,0)",
  },
  title: {
    fontSize: 18,
    letterSpacing: 10,
    fontWeight: 900,
    textAlign: "center",
  },
  title_mobile: {
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 900,
    textAlign: "center",
  },
}));

const BwPortfolioCard = (props) => {
  const { classes, size, cover, isFeatured, title } = props;
  const localClasses = useStyles();

  return (
    <Box className={localClasses.root}>
      <Image
        src={useImageUrl(cover.formats.large)}
        height={475}
        width={635}
        layout="responsive"
        objectFit="cover"
      />

      <Box className={localClasses.details}>
        <Box p={1}>
          <Typography
            variant="h3"
            color="secondary"
            className={
              size === "small"
                ? localClasses.title_mobile
                : size === "large"
                ? localClasses.title
                : localClasses.title
            }
          >
            {title}
          </Typography>
        </Box>
        <Box p={1}>
          <BwButton color="secondary">More</BwButton>
        </Box>
      </Box>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BwPortfolioCard);
