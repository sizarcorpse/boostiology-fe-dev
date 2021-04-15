import Image from "next/image";

import { useImageUrl } from "utils/useImageUrl";

import { BwButton, BwSeparator } from "components/UI";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

// #other :

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    maxHeight: 591,
    maxWidth: 360,
    border: "10px solid black",
    padding: theme.spacing(10, 5),
  },

  span: {
    fontSize: "1em",
    fontWeight: 300,
    lineHeight: "1.7em",
  },
  plan: {
    letterSpacing: ".1em",
  },
  price: { letterSpacing: "0em" },
  feature: {
    whiteSpace: "pre-wrap",
    textAlign: "center",
  },
  rating: {
    "& .MuiRating-icon": {
      color: "black",
    },
  },
}));

const BwPriceCard = (props) => {
  const { classes, children, plan, price, rating, feature, button } = props;
  const localClasses = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={localClasses.root}
    >
      <Box my={2}>
        <Typography variant="h2" className={localClasses.plan}>
          {plan}
        </Typography>
      </Box>

      <BwSeparator color="primary" size="small" marginY={2} />

      <Box my={2} display="flex" alignItems="flex-end">
        <Typography variant="h2" className={localClasses.price}>
          {price}$
        </Typography>
        <Typography variant="body1">/month</Typography>
      </Box>

      <Box>
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

      <BwSeparator color="primary" size="small" marginY={2} />

      <Box aria-label="separator" my={2}>
        <Typography variant="body1" className={localClasses.feature}>
          {feature}
        </Typography>
      </Box>

      <Box aria-label="separator" marginTop={3}>
        <BwButton>{button.title}</BwButton>
      </Box>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(BwPriceCard);
