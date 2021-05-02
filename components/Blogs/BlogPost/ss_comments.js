// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Avatar,
  Typography,
} from "@material-ui/core";

// #other :
import { formatDistanceToNow } from "date-fns";

const useStyles = makeStyles({
  avatar: { borderRadius: 0, height: 40, width: 40 },
});

const Ss_Comments = (props) => {
  const { classes, comments } = props;

  const localClasses = useStyles();

  return (
    <Box aria-label="main-area" px={{ xs: 0, sm: 3, md: 3, lg: 5, xl: 5 }}>
      {comments.map((item, i) => (
        <Box aria-label="single-review" key={i} display="flex" mb={2}>
          <Box aria-label="avatar">
            <Avatar className={localClasses.avatar}>{item.commenter[0]}</Avatar>
          </Box>
          <Box aria-label="body" display="flex" flexDirection="column" mx={2}>
            <Box aria-label="name" alignItems="center">
              <Typography variant="h4" color="primary">
                {item.commenter}
              </Typography>
            </Box>
            <Box aria-label="date" alignItems="center" mb={1}>
              <Typography variant="body1" color="primary">
                {formatDistanceToNow(new Date(item.createdAt))} ago
              </Typography>
            </Box>
            <Box aria-label="content">
              <Typography variant="body1" color="primary">
                {item.comment}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Ss_Comments);
