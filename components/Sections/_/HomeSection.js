// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box } from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  root: {},
});

const HomeSection = (props) => {
  const { classes } = props;
  const localClasses = useStyles();

  return <Box></Box>;
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(HomeSection);
