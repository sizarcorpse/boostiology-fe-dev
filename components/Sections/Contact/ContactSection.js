// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :

// #components :
import { BwSectionName, BwSeparator } from "components/UI";

import Ss_ContactForm from "./ss_contactForm";
import Ss_Address from "./ss_address";
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

const ContactSection = (props) => {
  const {
    classes,
    width,
    contact: { title, excerpt },
    form,
    submit,
    address,
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
              <BwSectionName size={width === "xs" ? "small" : undefined}>
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
            my={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Ss_Address address={address} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Ss_ContactForm form={form} submit={submit} />
              </Grid>
            </Grid>
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
  )(ContactSection)
);
