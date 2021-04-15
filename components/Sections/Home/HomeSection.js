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
import Ss_Landing from "./ss_landing.js";
import Ss_Description from "./ss_description.js";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Grid,
  CssBaseline,
} from "@material-ui/core";

// #other :
import { Parallax, Background } from "react-parallax";

const useStyles = makeStyles({
  root: {},
  parallaxBackground: {
    position: "relative",
    backgroundPosition: "center",
  },
});

const HomeSection = (props) => {
  const { classes, landing, description } = props;
  const localClasses = useStyles();

  return (
    <Grid container component="main" aria-label="section-home">
      <CssBaseline />
      <Grid item xs={12} aria-label="subsection-landing">
        <Box aria-label="landing-area" width="100%">
          <Parallax bgImage={useImageUrl(landing.cover)} strength={500}>
            <Box
              height={640}
              width="100%"
              className={localClasses.parallaxBackground}
            >
              <Ss_Landing landing={landing} />
            </Box>
          </Parallax>
        </Box>
      </Grid>
      <Grid item xs={12} aria-label="subsection-description">
        <Box aria-label="description-area" width="100%">
          <Parallax bgImage={useImageUrl(description.cover)} strength={800}>
            <Box
              height={{ xs: 400, sm: 400, md: 320, lg: 320, xl: 320 }}
              width="100%"
              className={localClasses.parallaxBackground}
            >
              <Ss_Description description={description} />
            </Box>
          </Parallax>
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
)(HomeSection);
