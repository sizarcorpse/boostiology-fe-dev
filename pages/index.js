// #next :
// import getConfig from 'next/config';
// import Link from 'next/link';
// import Image from 'next/image';
import Head from "next/head";

// #contexts :

// #hooks :
import { FetchHomePage, FetchContactPage } from "actions/FetchPage";
import {
  FetchAbout,
  FetchTeam,
  FetchService,
  FetchPrice,
  FetchTestimonial,
  FetchPortfolio,
} from "actions/FetchContent";

// #components :
import {
  HomeSection,
  HeroSection,
  AboutSection,
  PortfolioSection,
  TeamSection,
  ClientSection,
  ServiceSection,
  TimerSection,
  PriceSection,
  TestimonialSection,
  ContactSection,
} from "components/Sections";

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
  const homePage = await FetchHomePage({ context: context });
  const abouts = await FetchAbout({ context: context });
  const teams = await FetchTeam({ context: context });
  const services = await FetchService({ context: context });
  const portfolios = await FetchPortfolio({ context: context });
  const prices = await FetchPrice({ context: context });
  const testimonials = await FetchTestimonial({ context: context });
  const ContactPage = await FetchContactPage({ context: context });

  return {
    props: {
      homePage,
      abouts,
      teams,
      services,
      prices,
      testimonials,
      ContactPage,
      portfolios,
    },
  };
}

const useStyles = makeStyles({
  root: {},
});

const HomePage = (props) => {
  const {
    classes,
    homePage: {
      landing,
      description,
      hero,
      about,
      team,
      portfolio,
      client,
      service,
      timer,
      price,
      testimonial,
    },
    abouts,
    teams,
    portfolios,
    services,
    prices,
    testimonials,
    ContactPage: { contact, address, form, submit },
  } = props;
  const localClasses = useStyles();

  return (
    <Grid container component="main">
      <CssBaseline />
      <Head>
        <title>Home Page</title>
        <meta name="description" content="" />
      </Head>

      <Grid item xs={12}>
        <Paper>
          <HomeSection landing={landing} description={description} />
          <HeroSection hero={hero} />
          <AboutSection about={about} abouts={abouts} />
          <PortfolioSection portfolio={portfolio} portfolios={portfolios} />
          <TeamSection team={team} teams={teams} />
          <ClientSection client={client} />
          <ServiceSection service={service} services={services} />
          <TimerSection timer={timer} />
          <PriceSection price={price} prices={prices} />
          <TestimonialSection
            testimonial={testimonial}
            testimonials={testimonials}
          />
          <ContactSection
            contact={contact}
            form={form}
            submit={submit}
            address={address}
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
)(HomePage);
