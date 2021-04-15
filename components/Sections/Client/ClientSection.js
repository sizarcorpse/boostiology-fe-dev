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
import { BwSectionName } from "components/UI";
import { BwIconText } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  withWidth,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: (props) => props.bgImage,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

const ClientSection = (props) => {
  const {
    classes,
    width,
    client: { title, cover },
  } = props;
  const localClasses = useStyles({ bgImage: `url('${useImageUrl(cover)}')` });

  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
        <Box
          aria-label="about-description-area"
          width="100%"
          height={285}
          maxHeight={285}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <BwSectionName
              color="secondary"
              size={width === "xs" ? "small" : "large"}
            >
              {title}
            </BwSectionName>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
        <Box
          aria-label="about-description-area"
          width="100%"
          height={{ xs: 0, sm: 0, md: 285 }}
          maxHeight={285}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box paddingBottom={2}></Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      //   ...(theme)
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(ClientSection)
);
