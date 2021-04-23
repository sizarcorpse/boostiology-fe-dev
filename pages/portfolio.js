// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { FetchPortfolioPage } from "actions/FetchPage";
import { FetchPortfolio } from "actions/FetchContent";

// #components :
import { PortfolioSection } from "components/Sections";
import { BwPageHeader } from "components/UI";

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Paper,
  CssBaseline,
} from "@material-ui/core";

// #other :

export async function getStaticProps(context) {
  const portfolioPage = await FetchPortfolioPage({ context: context });

  const portfolios = await FetchPortfolio({ context: context });
  return {
    props: { portfolioPage, portfolios },
  };
}

const useStyles = makeStyles({
  root: {},
});

const AboutPage = (props) => {
  const {
    classes,
    portfolioPage: { portfolio },
    portfolios,
  } = props;
  const localClasses = useStyles();

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12}>
        <Paper>
          <BwPageHeader
            cover={portfolio.cover}
            title={portfolio.title}
            excerpt={portfolio.excerpt}
          />
          <PortfolioSection
            portfolios={portfolios}
            portfolio={portfolio}
            contentOnly
          />
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(AboutPage);
