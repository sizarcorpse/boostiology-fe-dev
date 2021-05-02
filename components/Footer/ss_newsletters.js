import { BwButton } from "components/UI";
import Image from "next/image";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Grid,
  TextField,
  FormControl,
  Typography,
  withWidth,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  title: { textTransform: "capitalize" },
  subtitle: { color: "#f9f9f9" },
  TextField: {
    "& .Mui-focused .MuiOutlinedInput-notchedOutline,.MuiOutlinedInput-notchedOutline": {
      borderRadius: 0,
      border: 0,
      borderLeft: "5px solid white",
      borderBottom: "5px solid white",
    },
    "& .MuiInputBase-input": {
      fonSize: "10px",
      textTransform: "uppercase",
      fontWeight: "bold",
      color: theme.palette.secondary.light,
      letterSpacing: 1,
    },
  },
}));

const Ss_Newsletters = (props) => {
  const {
    classes,
    width,
    subscribe: { subscribe, submit, title, subtitle },
  } = props;
  const localClasses = useStyles();

  return (
    <Box maxWidth={600} mx={"auto"} mb={4}>
      <form>
        <Grid container>
          <Grid item xs={12}>
            <Box aria-label="address" width="100%" mb={width === "xs" ? 2 : 4}>
              <Box aria-label="title" mb={width === "xs" ? 1 : 3}>
                <Typography
                  variant="h4"
                  color="secondary"
                  className={localClasses.title}
                >
                  {title}
                </Typography>
              </Box>
              <Box aria-label="separator" my={2}>
                <Image
                  src="/lineSeparatorWhite.png"
                  height={20}
                  width={40}
                  alt="separator"
                />
              </Box>
              <Box aria-label="info">
                <Typography variant="body1" className={localClasses.subtitle}>
                  {subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex">
              <FormControl fullWidth>
                <TextField
                  InputLabelProps={{
                    shrink: false,
                  }}
                  disableunderline="true"
                  variant={subscribe.variant}
                  name={subscribe.name}
                  required
                  id={subscribe.idName}
                  autoComplete="off"
                  placeholder={subscribe.placeholder}
                  className={localClasses.TextField}
                />
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Ss_Newsletters)
);
