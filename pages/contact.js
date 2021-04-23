// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { FetchContactPage } from "actions/FetchPage";
import {} from "actions/FetchContent";

// #components :
import { ContactSection } from "components/Sections";
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
  const contactPage = await FetchContactPage({ context: context });

  return {
    props: { contactPage },
  };
}

const useStyles = makeStyles({
  root: {},
});

const ContactPage = (props) => {
  const {
    classes,
    contactPage: { contact, address, form, submit },
  } = props;
  const localClasses = useStyles();

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12}>
        <Paper>
          <BwPageHeader
            cover={contact.cover}
            title={contact.title}
            excerpt={contact.excerpt}
          />
          <ContactSection
            contact={contact}
            form={form}
            submit={submit}
            address={address}
            formOnly
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
)(ContactPage);
