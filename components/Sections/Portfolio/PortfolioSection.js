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
  CssBaseline,
  Typography,
  Container,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: (props) => props.bgImage,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

const PortfolioSection = (props) => {
  const {
    classes,
    portfolio: { title, cover },
  } = props;
  const localClasses = useStyles({ bgImage: `url('${useImageUrl(cover)}')` });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          aria-label="about-description-area"
          width="100%"
          height={300}
          maxHeight={300}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={{ xl: 20, xs: 2 }}
          className={localClasses.root}
        >
          <Box paddingTop={3} paddingBottom={2}>
            <BwSectionName color="secondary">{title}</BwSectionName>
          </Box>
        </Box>
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
)(PortfolioSection);
