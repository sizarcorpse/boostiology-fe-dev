// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
import Image from "next/image";
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { useImageUrl } from "utils/useImageUrl";

// #components :
import Ss_Newsletters from "./ss_newsletters";
import { BwSeparator } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  withWidth,
  Grid,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// #other :

const useStyles = makeStyles((theme) => ({
  root: {},
  area: {
    backgroundColor: "#1D1D1D",
    padding: theme.spacing(10, 0),
  },
  address: {
    whiteSpace: "pre-wrap",
    color: "#f9f9f9",
  },
  title: { textTransform: "capitalize" },
  subtitle: {
    color: "#f9f9f9",
  },
  iconButton: {
    backgroundColor: "black",
    borderRadius: 0,
    margin: theme.spacing(0, 0.5),
  },
  icon: {
    color: "white",
  },

  address_mobile: {
    color: "#f9f9f9",
  },
}));

const Footer = (props) => {
  const {
    classes,
    width,
    footer: { address, subscribe, payment, connect },
  } = props;

  const localClasses = useStyles();

  return (
    <Grid
      container
      justify="center"
      aria-label="section-home"
      className={localClasses.area}
    >
      <Grid
        item
        xs={12}
        sm={10}
        md={12}
        lg={7}
        xl={8}
        aria-label="subsection-landing"
      >
        <Box
          aria-label="landing-area"
          width="100%"
          height="100%"
          display="flex"
          textAlign={width === "xs" ? "center" : undefined}
          justifyContent="center"
          px={{ xs: 1, sm: 0, md: 1, lg: 1, xl: 1 }}
        >
          <Grid
            container
            aria-label="section-home"
            spacing={width === "xs" ? undefined : 3}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              lg={2}
              xl={2}
              aria-label="column-1"
            >
              <Box aria-label="address" width="100%" mb={4}>
                <Box aria-label="title" mb={4}>
                  <Typography
                    variant="h4"
                    color="secondary"
                    className={localClasses.title}
                  >
                    {address.title}
                  </Typography>
                </Box>
                <Box aria-label="info">
                  <Typography
                    variant="body1"
                    color="secondary"
                    className={
                      width === "xs"
                        ? localClasses.address_mobile
                        : localClasses.address
                    }
                  >
                    {address.address}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
              xl={3}
              aria-label="column-2"
            >
              <Box aria-label="address" width="100%" mb={4}>
                <Box aria-label="title" mb={4}>
                  <Typography
                    variant="h4"
                    color="secondary"
                    className={localClasses.title}
                  >
                    {payment.title}
                  </Typography>
                </Box>
                <Box
                  aria-label="info"
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="center"
                  alignItems="center"
                >
                  {payment.payment.map((item, i) => (
                    <Box
                      key={i}
                      flex={width === "xs" ? undefined : "21%"}
                      my={0.5}
                      mx={width === "xs" ? 0.7 : undefined}
                    >
                      <Image
                        src={useImageUrl(item.icon)}
                        height={35}
                        width={60}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              aria-label="column-3"
            >
              <Ss_Newsletters subscribe={subscribe} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
              xl={3}
              aria-label="column-4"
            >
              <Box aria-label="address" width="100%" mb={4}>
                <Box aria-label="title" mb={width === "xs" ? 1 : 4}>
                  <Typography
                    variant="h4"
                    color="secondary"
                    className={localClasses.title}
                  >
                    {connect.title}
                  </Typography>
                </Box>
                <Box aria-label="info">
                  <Typography
                    variant="body1"
                    color="secondary"
                    className={localClasses.subtitle}
                  >
                    {connect.excerpt}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent={width === "xs" ? "center" : undefined}
                  my={width === "xs" ? 2 : 1}
                >
                  {connect.social.map((item, i) =>
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
                    ) : item.provider === "LinkedIn" ? (
                      <Box key={i}>
                        <IconButton className={localClasses.iconButton}>
                          <LinkedInIcon className={localClasses.icon} />
                        </IconButton>
                      </Box>
                    ) : null
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Footer)
);
