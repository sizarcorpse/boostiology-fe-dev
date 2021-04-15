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
import Ss_Services from "./ss_services";

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  CssBaseline,
  Typography,
  Container,
} from "@material-ui/core";

// #other :
import { Parallax, Background } from "react-parallax";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: (props) => props.bgImage,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  parallaxBackground: {
    position: "relative",
    backgroundPosition: "center",
  },
}));

const ServiceSection = (props) => {
  const {
    classes,
    service: { title, cover },
    services,
  } = props;
  const localClasses = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={4} lg={5} xl={5}>
        <Box aria-label="about-description-area" width="100%">
          <Parallax bgImage={useImageUrl(cover)} strength={100}>
            <Box
              height={470}
              width="100%"
              className={localClasses.parallaxBackground}
            ></Box>
          </Parallax>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={7} xl={7}>
        <Ss_Services services={services} />
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(ServiceSection);
