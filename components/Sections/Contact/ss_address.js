import { BwButton } from "components/UI";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
// #other :

const useStyles = makeStyles((theme) => ({
  title: { fontWeight: "bold", fontSize: "1.1em" },
  location: { whiteSpace: "pre-wrap" },
  iconButton: {
    backgroundColor: "black",
    borderRadius: 0,
    margin: theme.spacing(0, 0.5),
  },
  icon: {
    color: "white",
  },
}));

const Ss_Address = (props) => {
  const {
    classes,
    address: { title, excerpt, location, phone, email, social },
  } = props;
  const localClasses = useStyles();

  return (
    <Box
      py={5}
      px={{ xs: 1, sm: 3, md: 5, lg: 4, xl: 5 }}
      maxWidth={600}
      mx={"auto"}
    >
      <Box>
        <Typography variant="body1" className={localClasses.title}>
          {title}
        </Typography>
      </Box>
      <Box my={1}>
        <Typography variant="body1">{excerpt}</Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" my={6}>
        <Box display="flex">
          <Box mx={1}>
            <LocationOnIcon fontSize="small" />
          </Box>
          <Box>
            {" "}
            <Typography variant="body1" className={localClasses.location}>
              {location}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box display="flex">
            <Box mx={1}>
              <PhoneIcon fontSize="small" />
            </Box>
            <Box>
              {phone.map((item, i) => (
                <Typography key={i} variant="body1">
                  {item.number}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" my={6}>
        <Box>
          <Box display="flex">
            <Box mx={1}>
              <EmailIcon fontSize="small" />
            </Box>
            <Box>
              {email.map((item, i) => (
                <Typography key={i} variant="body1">
                  {item.email}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" my={6}>
        {social.map((item, i) =>
          item.provider === "Facebook" ? (
            <Box key={i}>
              <IconButton className={localClasses.iconButton}>
                <FacebookIcon className={localClasses.icon} />
              </IconButton>
            </Box>
          ) : item.provider === "Instagram" ? (
            <Box key={i}>
              <IconButton className={localClasses.iconButton}>
                <InstagramIcon className={localClasses.icon} />
              </IconButton>
            </Box>
          ) : item.provider === "Twitter" ? (
            <Box key={i}>
              <IconButton className={localClasses.iconButton}>
                <TwitterIcon className={localClasses.icon} />
              </IconButton>
            </Box>
          ) : null
        )}
      </Box>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Ss_Address);
