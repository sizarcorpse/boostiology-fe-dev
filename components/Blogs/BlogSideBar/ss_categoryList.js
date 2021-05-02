// #next :
import Link from "next/link";
// #contexts :

// #hooks :

// #components :
import { BwButton } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box, Typography } from "@material-ui/core";

// #other :

const useStyles = makeStyles((theme) => ({
  name: {
    textTransform: "uppercase",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      height: 2,
      width: "30%",
      bottom: 0,
      left: 0,
      margin: theme.spacing(-2, 0),
      background: theme.palette.primary.main,
    },
  },
  categories: {
    cursor: "pointer",
  },
}));

const Ss_CategoryList = (props) => {
  const { classes, categoryList, name } = props;

  const localClasses = useStyles();

  return (
    <Box display="flex" flexDirection="column" mt={3}>
      <Box mb={5}>
        <Typography variant="h3" color="primary" className={localClasses.name}>
          {name.title}
        </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap">
        {categoryList.map((item, i) => (
          <Box my={1} mx={1}>
            <Link href={`/blog/categories/${item.slug}`}>
              <Typography
                variant="h4"
                key={i}
                color="primary"
                className={localClasses.categories}
              >
                {item.name}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Ss_CategoryList);
