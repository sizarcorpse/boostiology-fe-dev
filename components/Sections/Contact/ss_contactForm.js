import { BwButton } from "components/UI";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Grid,
  TextField,
  FormControl,
  TextareaAutosize,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {},
  TextField: {
    "& .Mui-focused .MuiOutlinedInput-notchedOutline,.MuiOutlinedInput-notchedOutline": {
      borderRadius: 0,
      border: 0,
      borderLeft: "5px solid black",
      borderBottom: "5px solid black",
    },
    "& .MuiInputBase-input": {
      fonSize: "10px",
      textTransform: "uppercase",
      fontWeight: "bold",
      color: theme.palette.primary.light,
      letterSpacing: 1,
    },
  },
  TextArea: {
    width: "100%",
    fontFamily: '"Roboto"',
    maxHeight: 400,
    fonSize: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: theme.palette.primary.light,
    letterSpacing: 1,
    borderRadius: 0,
    border: 0,
    borderLeft: "5px solid black",
    borderBottom: "5px solid black",
    outline: "none",
    padding: 10,
  },
}));

const Ss_ContactForm = (props) => {
  const { classes, form, submit } = props;
  const localClasses = useStyles();

  return (
    <Box px={5}>
      <form>
        <Grid container spacing={3}>
          {form.map((item, i) =>
            item.inputMehod === "text" ? (
              <Grid item xs={12} key={i}>
                <FormControl fullWidth>
                  <TextField
                    InputLabelProps={{
                      shrink: false,
                    }}
                    disableunderline="true"
                    variant={item.variant}
                    name={item.name}
                    required
                    id={item.idName}
                    autoComplete="off"
                    placeholder={item.placeholder}
                    className={localClasses.TextField}
                  />
                </FormControl>
              </Grid>
            ) : item.inputMehod === "content" ? (
              <Grid item xs={12} key={i}>
                <FormControl fullWidth>
                  <TextareaAutosize
                    name={item.name}
                    required
                    id={item.idName}
                    rowsMin={12}
                    rowsMax={12}
                    autoComplete="off"
                    placeholder={item.placeholder}
                    className={localClasses.TextArea}
                  />
                </FormControl>
              </Grid>
            ) : null
          )}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" width="100%">
              <BwButton>{submit.title}</BwButton>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Ss_ContactForm);
