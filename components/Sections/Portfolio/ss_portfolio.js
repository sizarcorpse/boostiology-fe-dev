import { useState } from "react";
import PropTypes from "prop-types";
import { useColumns } from "utils/useColumns";
import { BwPortfolioCard } from "components/UI";
import _ from "lodash";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  withWidth,
  useTheme,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core";

import { BwButton } from "components/UI";

// #other :
import Masonry from "react-masonry-css";
import SwipeableViews from "react-swipeable-views";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F5F5F5",
    width: "auto",
  },
  appBar: {
    height: 70,
    backgroundColor: "none",
    color: "none",
  },
  tabs: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",

    "& .MuiButtonBase-root": {
      margin: theme.spacing(0, 1),
      height: 50,
      maxHeight: 50,
      width: "auto",
      background: "transparent",
      borderRadius: 0,
      border: 0,
      fontWeight: 700,
      textTransform: "uppercase",
      position: "relative",
      lineHeight: "40px",
      padding: theme.spacing(0, 5),
      fontSize: 12,
      letterSpacing: "0.2em",
      borderTop: "2px solid transparent",
      borderBottom: "2px solid transparent",
      outline: "1px solid transparent",
      color: theme.palette.primary.main,
      transition: "all 0.5s ease-in-out 0.25s",

      "&::before": {
        content: "''",
        position: "absolute",
        width: 2,
        height: "100%",
        background: theme.palette.primary.main,
        top: 0,
        left: -8,
        transition: "all 0.2s ease-in-out 0s",
      },
      "&::after": {
        content: "''",
        position: "absolute",
        width: 2,
        height: "100%",
        background: theme.palette.primary.main,
        top: 0,
        right: -8,
        transition: "all 0.2s ease-in-out 0s",
      },
      "&:hover::before": {
        left: 0,
      },
      "&:hover::after": {
        right: 0,
      },
      "&:hover": {
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        borderTop: `2px solid ${theme.palette.primary.main}`,
        borderBottom: `2px solid ${theme.palette.primary.main}`,
      },
    },

    "& .MuiTabs-indicator": { background: "none" },
    "& .Mui-selected": {
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      borderTop: `2px solid ${theme.palette.primary.main}`,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    // "& .MuiTabScrollButton-root": {
    //   margin: theme.spacing(0, 0),
    //   height: 50,
    //   maxHeight: 50,
    //   width: "auto",
    //   background: "transparent",
    //   borderRadius: 0,
    //   border: 0,
    //   fontWeight: 700,
    //   textTransform: "uppercase",
    //   position: "relative",
    //   lineHeight: "40px",
    //   padding: theme.spacing(0, 1),
    //   fontSize: 12,
    //   letterSpacing: "0.2em",
    //   color: theme.palette.primary.main,
    //   "&::before": {
    //     content: "",
    //   },
    //   "&::after": {
    //     content: "",
    //   },
    //   "&:hover::before": {
    //     left: 0,
    //   },
    //   "&:hover::after": {
    //     right: 0,
    //   },
    //   "&:hover": {
    //     background: "none",
    //     color: "none",
    //     borderTop: "none",
    //     borderBottom: "none",
    //   },
    // },
  },
}));

const Ss_Portfolio = (props) => {
  const { classes, contentOnly, width, portfolios } = props;
  const localClasses = useStyles();

  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className={localClasses.root}>
          <AppBar
            elevation={0}
            position="static"
            color="default"
            className={localClasses.appBar}
          >
            <Tabs
              dis
              value={value}
              onChange={handleChange}
              variant={width === "xs" ? "scrollable" : undefined}
              centered={width === "xs" ? undefined : true}
              className={localClasses.tabs}
            >
              <Tab
                label="All"
                {...a11yProps(0)}
                disableFocusRipple
                disableRipple
              />
              {_.union(_.map(portfolios, "category")).map((item, i) => (
                <Tab
                  label={item}
                  key={i}
                  {...a11yProps(parseInt(i + 1))}
                  disableFocusRipple
                  disableRipple
                />
              ))}
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Box width="100%">
                <Masonry
                  breakpointCols={useColumns}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {_.slice(
                    portfolios,
                    0,
                    contentOnly ? portfolios.length : 9
                  ).map((item, i) => (
                    <BwPortfolioCard
                      key={i}
                      size={width === "xs" ? "small" : "large"}
                      cover={item.cover}
                      isFeatured={item.isFeatured}
                      title={item.title}
                    />
                  ))}
                </Masonry>
              </Box>
            </TabPanel>
            {_.union(_.map(portfolios, "category")).map((portfolio, i) => (
              <TabPanel
                value={value}
                key={i}
                index={parseInt(i + 1)}
                dir={theme.direction}
              >
                <Box width="100%">
                  <Masonry
                    breakpointCols={useColumns}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {portfolios.map((item, i) =>
                      item.category === portfolio ? (
                        <BwPortfolioCard
                          key={i}
                          size={width === "xs" ? "small" : "large"}
                          cover={item.cover}
                          isFeatured={item.isFeatured}
                          title={item.title}
                        />
                      ) : null
                    )}
                  </Masonry>
                </Box>
              </TabPanel>
            ))}
          </SwipeableViews>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Ss_Portfolio)
);
