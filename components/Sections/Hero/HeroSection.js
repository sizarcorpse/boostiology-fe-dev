// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { useImageUrl } from "utils/useImageUrl";
// #components :
import { BwButton } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Typography,
  CssBaseline,
  Box,
  Hidden,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    maxHeight: "500px",
  },
  bgImage: {
    backgroundImage: (props) => props.cover,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  bgWhite: {
    backgroundColor: "white",
  },
  title: {
    fontSize: 50,
    textTransform: "uppercase",
    fontWeight: 700,
    fontStyle: "normal",
    fontVariant: "normal",
    lineHeight: "1em",
    letterSpacing: "20px",
    wordSpacing: 0,
  },
}));

const HeroSection = (props) => {
  const { classes, hero } = props;
  const localClasses = useStyles({
    cover: `linear-gradient(90deg, rgba(212,55,164,0) 30%, rgba(255,255,255,1) 85%),url('${useImageUrl(
      hero.cover
    )}')`,
  });

  return (
    <Grid container component="main" className={localClasses.root}>
      <CssBaseline />
      <Grid item xs={12}>
        <Box
          width="100%"
          height="100%"
          aria-label="hero-area"
          height={500}
          display="flex"
          position="relative"
        >
          <Hidden xsDown>
            <Box
              className={localClasses.bgImage}
              width="60%"
              height="100%"
              aria-label="hero-cover"
              position="absolute"
              display="flex"
            ></Box>
          </Hidden>
          <Box
            className={localClasses.backgroundColor}
            width={{ xs: "100%", xl: "40%" }}
            height="100%"
            aria-label="hero-content-area"
            position="absolute"
            left={{ xs: "0%", xl: "50%" }}
          >
            <Box
              aria-label="hero-content"
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              px={5}
            >
              <Box aria-label="hero-title" my={2}>
                <Typography className={localClasses.title}>welcome</Typography>
              </Box>
              <Box aria-label="separator" my={2}>
                <img src="/separatorBlack.png" />
              </Box>
              <Box aria-label="hero-excerpt" my={2} textAlign="center">
                <Typography variant="body1" color="primary">
                  {hero.excerpt}
                </Typography>
              </Box>
              <Box aria-label="description" my={1}>
                <BwButton>Explore</BwButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(HeroSection);
