import { useState } from "react";
import PropTypes from "prop-types";

// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
import Image from "next/image";
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { useImageUrl } from "utils/useImageUrl";
// #components :
import { BwButton } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Tab,
  Tabs,
  AppBar,
  Box,
  Typography,
  withWidth,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",

    padding: theme.spacing(5, 5),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(5, 1),
    },
    backgroundColor: "white",
  },
  appBar: {
    backgroundColor: "white",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const Ss_Services = (props) => {
  const { classes, width, services } = props;
  const [value, setValue] = useState(0);
  const localClasses = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={localClasses.root} maxHeight={width === "xs" ? 650 : 470}>
      <AppBar
        position="static"
        color="secondary"
        elevation={0}
        className={localClasses.appBar}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="on"
          textColor="primary"
        >
          {services.map((item, i) => (
            <Tab
              key={i}
              disableRipple
              label={item.name}
              icon={
                <Image
                  src={`${useImageUrl(item.icon)}`}
                  height={75}
                  width={75}
                />
              }
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </AppBar>
      {services.map((item, i) => (
        <TabPanel value={value} index={i} key={i}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Box aria-label="separator" my={2}>
              <Image src="/separatorBlack.png" height={8} width={113} />
            </Box>
            <Box my={2} textAlign="center">
              <Typography variant="body1">{item.description}</Typography>
            </Box>
            <Box my={1}>
              <BwButton>{item.more.title}</BwButton>
            </Box>
          </Box>
        </TabPanel>
      ))}
    </Box>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      //   ...(theme)
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Ss_Services)
);
