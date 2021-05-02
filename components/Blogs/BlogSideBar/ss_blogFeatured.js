// #next :

// #contexts :

// #hooks :

// #components :
import { BwBlogThumb } from "components/UI";
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
  featured: {
    padding: theme.spacing(0, 1),
    flex: "0 0 100%",
    [theme.breakpoints.down("sm")]: {
      flex: "0 0 50%",
    },
    [theme.breakpoints.down("xs")]: {
      flex: "0 0 100%",
    },
  },
}));

const Ss_BlogFeatured = (props) => {
  const { classes, blogFeatured, name } = props;

  const localClasses = useStyles();

  return (
    <Box display="flex" flexDirection="column" width="100%" mt={5}>
      <Box mb={5}>
        <Typography variant="h3" color="primary" className={localClasses.name}>
          {name.title}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {blogFeatured.map((item, i) => (
          <Box mb={2} className={localClasses.featured}>
            <BwBlogThumb
              key={i}
              photo={item.cover}
              title={item.title}
              alt={item.cover_alt}
              slug={item.slug}
            />
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
)(Ss_BlogFeatured);
