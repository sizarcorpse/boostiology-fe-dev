// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :

// #components :
import { BwSectionName, BwSeparator, BwIconText } from "components/UI";
import {} from "components/UI";

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

const AboutSection = (props) => {
  const {
    classes,
    width,
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
            aria-label="about-us"
            display="flex"
            flexDirection={width === "xs" ? "column" : "row"}
            justifyContent="center"
            alignItems={width === "xs" ? "center" : undefined}
            my={3}
          >
            {abouts.map((item, i) => (
              <BwIconText title={item.title} icon={item.icon} key={i}>
                {item.excerpt}
              </BwIconText>
            ))}
          </Box>
          <Box display="flex" justifyContent="center">
            <BwSeparator color="primary" size="large" marginY={10} />
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
  )(AboutSection)
);
