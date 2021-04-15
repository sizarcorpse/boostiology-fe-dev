import { useColumns } from "utils/useColumns";
import { BwPortfolioCard } from "components/UI";
import lodash from "lodash";
// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  withWidth,
} from "@material-ui/core";

// #other :
import Masonry from "react-masonry-css";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Ss_Portfolio = (props) => {
  const { classes, width, portfolios } = props;
  const localClasses = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box width="100%">
          <Masonry
            breakpointCols={useColumns}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {portfolios.map((item, i) => (
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
