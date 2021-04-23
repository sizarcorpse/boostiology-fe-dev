// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
import Image from "next/image";
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { useImageUrl } from "utils/useImageUrl";
// #components :
import { BwSectionName, BwSeparator } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  withWidth,
  Typography,
} from "@material-ui/core";
// #other :

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: 50,
    textTransform: "capitalize",
    textAlign: "center",
  },

  title_mobile: {
    fontSize: 30,

    textTransform: "capitalize",
    textAlign: "center",
  },
});

const BwPageHeader = (props) => {
  const { classes, width, title, excerpt, cover } = props;
  const localClasses = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          aria-label="about-description-area"
          position="relative"
          maxHeight={420}
          width="100%"
          height="100%"
        >
          <Box width="100%" height="100%" height={420}>
            <Image src={useImageUrl(cover)} layout="fill" objectFit="cover" />
          </Box>

          <Box
            display="flex"
            position="absolute"
            width="100%"
            height="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bottom={0}
          >
            <Box aria-label="title" my={1.5}>
              <Typography
                aria-label="title"
                variant="h3"
                color="secondary"
                className={
                  width === "xs"
                    ? localClasses.title_mobile
                    : localClasses.title
                }
              >
                {title}
              </Typography>
            </Box>
            <BwSeparator
              size={width === "xs" ? "small" : "large"}
              marginY={1.5}
              color="secondary"
            />
            <Box
              aria-label="description"
              my={1.5}
              width={{
                xs: "90%",
                sm: "70%",
                md: "50%",
                lg: "40%",
                xl: "30%",
              }}
              textAlign="center"
            >
              <Typography
                aria-label="title-main"
                variant="body1"
                color="secondary"
              >
                {excerpt}
              </Typography>
            </Box>
          </Box>
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
  )(BwPageHeader)
);
