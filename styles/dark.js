import { createMuiTheme } from "@material-ui/core/";

const dark = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#7986cb",
      main: "#fff",
      dark: "#303f9f",
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
    },
  },
  typography: {
    fontFamily: '"Roboto"',
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    body1: {},
    body2: {},
    subtitle1: {},
    subtitle2: {},
    button: {},
    caption: {},
    overline: {},
  },
});

dark.overrides = {};

dark.props = {};

export default dark;
