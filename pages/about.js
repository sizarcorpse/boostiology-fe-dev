// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { FetchAboutPage } from "actions/FetchPage";
import { FetchAbout, FetchTestimonial, FetchTeam } from "actions/FetchContent";

// #components :
import {
  AboutSection,
  TeamSection,
  TestimonialSection,
} from "components/Sections";
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
  const aboutPage = await FetchAboutPage({ context: context });
  const abouts = await FetchAbout({ context: context });
  const teams = await FetchTeam({ context: context });
  const testimonials = await FetchTestimonial({ context: context });
  return {
    props: { aboutPage, abouts, teams, testimonials },
  };
}

const useStyles = makeStyles({
  root: {},
});

const AboutPage = (props) => {
  const {
    classes,
    aboutPage: { about, team, testimonial },
    abouts,
    teams,
    testimonials,
  } = props;
  const localClasses = useStyles();

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12}>
        <Paper>
          <BwPageHeader
            cover={about.cover}
            title={about.title}
            excerpt={about.excerpt}
          />
          <AboutSection about={about} abouts={abouts} contentOnly />
          <TeamSection team={team} teams={teams} contentOnly />
          <TestimonialSection
            testimonial={testimonial}
            testimonials={testimonials}
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
