import { createMuiTheme } from "@material-ui/core/";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#4c4c4c",
      main: "#282828",
      dark: "#333333",
    },
    secondary: {
      light: "#eee",
      main: "#ffffff",
      dark: "#c51162",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily: '"Roboto"',
    h1: {},
    h2: {
      fontSize: "2.1428em",
      letterSpacing: ".5em",
      textTransform: "uppercase",
      fontWeight: 700,
      lineHeight: "1.5em",
    },
    h3: {
      fontSize: "1.7142em",
      textTransform: "uppercase",
      fontWeight: 700,
      lineHeight: "1.1em",
      letterSpacing: 1,
    },
    h4: {
      fontSize: "1.4285em",
      fontWeight: 700,
      lineHeight: "1.1em",
      letterSpacing: 1,
    },
    h5: {},
    h6: {
      fontSize: "1.5em",
      letterSpacing: ".3em",
      textTransform: "uppercase",
      fontWeight: 700,
      lineHeight: "1em",
    },
    body1: {
      fontSize: "1em",
      fontWeight: 300,
      lineHeight: "1.7em",
    },
    body2: {},
    subtitle1: {},
    subtitle2: {},
    button: {},
    caption: {},
    overline: {},
  },
});

theme.overrides = {};

theme.props = {};

export default theme;
