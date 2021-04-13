// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {},
  rating: {
    "& .MuiRating-icon": {
      color: theme.palette.secondary.main,
    },
  },
}));

const BwTestimonialCard = (props) => {
  const { classes, author, body, position, company, rating } = props;
  const localClasses = useStyles();

  return (
    <Box
      width="100%"
      display="flex"
      height="100%"
      flexDirection="column"
      alignItems="center"
    >
      <Box my={1}>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.1}
          size="small"
          readOnly
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          className={localClasses.rating}
        />
      </Box>
      <Box my={2}>
        <Typography variant="body1" color="secondary">
          {body}
        </Typography>
      </Box>
      <Box my={1}>
        <Typography variant="h3" color="secondary">
          {author}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" color="secondary">
          {position} @ {company}
        </Typography>
      </Box>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BwTestimonialCard);
