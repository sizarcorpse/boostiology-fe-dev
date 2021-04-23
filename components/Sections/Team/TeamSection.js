// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :

// #components :
import { BwSectionName, BwTeamCard, BwSeparator } from "components/UI";

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

const TeamSection = (props) => {
  const {
    classes,
    width,
    contentOnly,
    team: { title, excerpt },
    teams,
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
            paddingTop={contentOnly ? 0 : 20}
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
            flexDirection={
              width === "xs" ? "column" : width === "sm" ? "column" : "row"
            }
            justifyContent="center"
            alignItems={
              width === "xs" ? "center" : width === "sm" ? "center" : undefined
            }
            mt={3}
          >
            {teams.map((item, i) => (
              <BwTeamCard
                key={i}
                photo={item.photo}
                name={item.name}
                position={item.position}
                details={item.about}
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
  )(TeamSection)
);
