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
import { BwButton, BwSeparator } from "components/UI";
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
  withWidth,
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
    border: "1px solid red",
  },
  title: {
    fontSize: 50,
    letterSpacing: "20px",
    textTransform: "uppercase",
    fontWeight: 700,
    fontStyle: "normal",
    fontVariant: "normal",
    lineHeight: "1em",
    wordSpacing: 0,
  },
  title_mobile: {
    fontSize: "1.5em",
    fontWeight: 700,
    lineHeight: "1.1em",
    letterSpacing: 10,
    textTransform: "uppercase",
  },
  title_tablet: {
    fontSize: "2em",
    fontWeight: 700,
    lineHeight: "1.1em",
    letterSpacing: 10,
    textTransform: "uppercase",
  },
}));

const HeroSection = (props) => {
  const { classes, width, hero } = props;
  const localClasses = useStyles({
    cover: `linear-gradient(90deg, rgba(212,55,164,0) 30%, rgba(255,255,255,1) 85%),url('${useImageUrl(
      hero.cover
    )}')`,
  });

  console.log(width);

  return (
    <Grid container className={localClasses.root}>
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
              width={{ xs: "0%", sm: "0%", md: "50%", lg: "60%", xl: "60%" }}
              height="100%"
              aria-label="hero-cover"
              position="absolute"
              display="flex"
            ></Box>
          </Hidden>
          <Box
            width={{ xs: "100%", sm: "100%", md: "50%", lg: "40%", xl: "40%" }}
            height="100%"
            aria-label="content-area"
            position="absolute"
            display="flex"
            justifyContent="center"
            left={{ xs: "0%", sm: "0%", md: "45%", lg: "55%", xl: "55%" }}
          >
            <Box
              aria-label="content"
              width={width === "sm" ? "80%" : "100%"}
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              px={width === "sm" ? 6 : 3}
            >
              <Box aria-label="title" my={2}>
                <Typography
                  className={
                    width === "xs"
                      ? localClasses.title_mobile
                      : width === "sm"
                      ? localClasses.title_tablet
                      : localClasses.title
                  }
                >
                  {hero.title}
                </Typography>
              </Box>
              <BwSeparator color="primary" marginY={2} size="small" />
              <Box aria-label="excerpt" my={2} textAlign="center">
                <Typography variant="body1" color="primary">
                  {hero.excerpt}
                </Typography>
              </Box>
              <Box aria-label="description" my={2}>
                <BwButton>Explore</BwButton>
              </Box>
            </Box>
          </Box>
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
  )(HeroSection)
);
