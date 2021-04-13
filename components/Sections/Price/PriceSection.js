// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :

// #components :
import { BwSectionName } from "components/UI";
import { BwTeamCard } from "components/UI";
import { BwPriceCard } from "components/UI";
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

const useStyles = makeStyles({
  root: {},
});

const PriceSection = (props) => {
  const {
    classes,
    price: { title, excerpt },
    prices,
  } = props;
  const localClasses = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Box
            aria-label="about-description-area"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            pt={20}
            px={{ xl: 20, xs: 2 }}
          >
            <Box paddingTop={3} paddingBottom={2}>
              <BwSectionName>{title}</BwSectionName>
            </Box>

            <Box
              paddingTop={6}
              paddingBottom={10}
              textAlign="center"
              px={{ xs: 2, xl: 20 }}
            >
              <Typography variant="body1" color="textPrimary">
                {excerpt}
              </Typography>
            </Box>

            <Box aria-label="separator" my={3}>
              <img src="/separatorBlack.png" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            aria-label="about-us"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            marginTop={4}
            width="100%"
            px={6}
            pb={20}
          >
            {prices.map((item, i) => (
              <BwPriceCard
                plan={item.plan}
                key={i}
                price={item.price}
                rating={item.rating}
                feature={item.feature}
                button={item.subscribe}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PriceSection);
