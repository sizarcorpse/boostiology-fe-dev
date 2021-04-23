import PropTypes from "prop-types";
// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
import Link from "next/link";
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  Container,
  Button,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Grow from "@material-ui/core/Grow";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// #other :

const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    height: 90,
    maxHeight: 90,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0, 5),
    transition: "all .3s ease-in-out 0.2s",
  },
  onScroll: {
    background: theme.palette.primary.main,
    height: 75,
    maxHeight: 75,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0, 5),
    transition: "all .3s ease-in-out 0.1s",
  },
  item: {},
  button: {
    color: "#777",
    fontSize: 11,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 1.1,
    transition: "all .2s ease 0s",
    "&:hover": {
      color: theme.palette.secondary.main,
      transition: "all .2s ease 0s",
    },
  },
}));

const Navigation = (props) => {
  const { classes, navigation } = props;
  const localClasses = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return (
    <>
      <AppBar
        elevation={0}
        className={!trigger ? localClasses.root : localClasses.onScroll}
      >
        <Toolbar className={localClasses.toolbar}>
          <Box aria-label="navigation-area" width="100%" display="flex">
            <Box
              aria-label="website-logo"
              display="flex"
              flexGrow={1}
              alignItems="center"
            >
              <Typography variant="h4">BOOSTIOLOGY</Typography>
            </Box>
            <Box aria-label="navigation-menu" display="flex">
              {navigation.map((item, i) => (
                <Box key={i} mx={2} display="flex">
                  <Link href={item.path ? `${item.path}` : `/`}>
                    <Button
                      disableRipple
                      disableFocusRipple
                      disableElevation
                      size="small"
                      endIcon={
                        item.subitem.length > 0 ? <ExpandMoreIcon /> : undefined
                      }
                      className={localClasses.button}
                    >
                      {item.label}
                    </Button>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Navigation);
