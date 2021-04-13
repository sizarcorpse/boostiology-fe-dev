import Image from "next/image";

import { useImageUrl } from "utils/useImageUrl";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 460,
    maxWidth: 360,
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    "&:hover $InfoArea": {
      bottom: 0,
    },
  },
  InfoArea: {
    position: "absolute",
    height: "100%",
    width: "100%",
    bottom: "-100%",
    background: " rgb(255,255,255)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,.65) 35%, rgba(255,255,255,1) 70%)",
    transition: "all .5s ease-in-out 0s",
    padding: theme.spacing(5, 5),
  },

  positionTeam: {
    fontSize: 12,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "3px",
    lineHeight: "1.4em",
    border: `1px solid ${theme.palette.primary.light}`,
    padding: theme.spacing(0.7),
  },
  detailsTeam: {
    textAlign: "center",
    color: theme.palette.primary.light,
  },
}));

const BwTeamCard = (props) => {
  const { classes, children, photo, name, position, details } = props;
  const localClasses = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={localClasses.root}
    >
      <Image
        src={`${useImageUrl(photo)}`}
        height={460}
        width={360}
        objectFit="cover"
      />
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="column"
        aria-label="team-info"
        className={localClasses.InfoArea}
      >
        <Box aria-label="name" my={1}>
          <Typography variant="h3">{name}</Typography>
        </Box>
        <Box aria-label="position" my={1}>
          <Typography variant="body1" className={localClasses.positionTeam}>
            {position}
          </Typography>
        </Box>
        <Box aria-label="details" my={1}>
          <Typography variant="body1" className={localClasses.detailsTeam}>
            {details}
          </Typography>
        </Box>
        <Box aria-label="separator" my={1}>
          <Image src="/separatorBlack.png" height={8} width={113} />
        </Box>
        <Box aria-label="social-logo" my={1}></Box>
      </Box>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BwTeamCard);
