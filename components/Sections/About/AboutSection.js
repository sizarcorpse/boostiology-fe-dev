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

const useStyles = makeStyles({
  root: {},
});

const AboutSection = (props) => {
  const {
    classes,
    about: { title, excerpt },
    abouts,
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

            <Box aria-label="separator" my={3}>
              <img src="/separatorBlack.png" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            aria-label="about-us"
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            my={4}
            paddingBottom={20}
          >
            {abouts.map((item, i) => (
              <BwIconText title={item.title} icon={item.icon} key={i}>
                {item.excerpt}
              </BwIconText>
            ))}
            <Box aria-label="separator" marginTop={10}>
              <img src="/separatorBlack.png" />
            </Box>
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
)(AboutSection);
