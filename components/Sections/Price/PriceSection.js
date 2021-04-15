// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :

// #components :
import { BwSectionName, BwSeparator, BwPriceCard } from "components/UI";

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  withWidth,
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
    width,
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
            paddingTop={20}
          >
            <Box paddingTop={3} paddingBottom={2}>
              <BwSectionName size={width === "xs" ? "small" : "large"}>
                {title}
              </BwSectionName>
            </Box>

            <Box
              paddingTop={6}
              paddingBottom={10}
              textAlign="center"
              px={{ xs: 0, sm: 3, md: 10, lg: 18, xl: 20 }}
            >
              <Typography variant="body1" color="textPrimary">
                {excerpt}
              </Typography>
            </Box>

            <BwSeparator color="primary" size="large" marginY={3} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            aria-label="about-us"
            display="flex"
            flexDirection={
              width === "xs" ? "column" : width === "sm" ? "column" : "row"
            }
            justifyContent="space-around"
            alignItems={
              width === "xs" ? "center" : width === "sm" ? "center" : undefined
            }
            mt={3}
            mb={10}
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
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(PriceSection)
);
