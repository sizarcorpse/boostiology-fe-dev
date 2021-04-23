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
import Ss_Portfolio from "./ss_portfolio";
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

const PortfolioSection = (props) => {
  const {
    classes,
    width,
    contentOnly,
    portfolio: { title, cover },
    portfolios,
  } = props;
  const localClasses = useStyles({ bgImage: `url('${useImageUrl(cover)}')` });

  return (
    <Grid container>
      {contentOnly ? null : (
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
              <BwSectionName
                color="secondary"
                size={width === "xs" ? "small" : "large"}
              >
                {title}
              </BwSectionName>
            </Box>
          </Box>
        </Grid>
      )}

      <Grid item xs={12}>
        <Box width="100%">
          <Ss_Portfolio portfolios={portfolios} />
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
  )(PortfolioSection)
);
