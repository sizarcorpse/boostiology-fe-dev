// #components :
import { BwButton, BwSectionName, BwSeparator } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Typography,
  FormControl,
  TextField,
  Grid,
  TextareaAutosize,
  withWidth,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
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
}));

const Ss_CreateComment = (props) => {
  const {
    width,
    commentSection: {
      form,
      submit,
      comment: { title, excerpt },
    },
  } = props;
  const localClasses = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box paddingTop={3} paddingBottom={3}>
            <BwSectionName size={width === "xs" ? "small" : undefined}>
              {title}
            </BwSectionName>
          </Box>

          <Box
            paddingTop={6}
            paddingBottom={6}
            textAlign="center"
            px={{ xs: 0, sm: 3, md: 10, lg: 18, xl: 20 }}
          >
            <Typography variant="body1" color="textPrimary">
              {excerpt}
            </Typography>
          </Box>

          <BwSeparator color="primary" size="large" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          px={{ xs: 1, sm: 3, md: 3, lg: 4, xl: 5 }}
          maxWidth={600}
          mt={6}
          mx="auto"
        >
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
                <Box display="flex" justifyContent="center" width="100%" my={2}>
                  <BwButton>{submit.title}</BwButton>
                </Box>
              </Grid>
            </Grid>
          </form>
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
  )(Ss_CreateComment)
);
