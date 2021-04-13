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
  CssBaseline,
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

            <Box aria-label="separator" mb={3}>
              <img src="/separatorBlack.png" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box my={5} p={5} display="flex" justifyContent="center">
            <Grid container>
              <Grid item xs={6}>
                <Ss_Address address={address} />
              </Grid>
              <Grid item xs={6}>
                <Ss_ContactForm form={form} submit={submit} />
              </Grid>
            </Grid>
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
)(ContactSection);
