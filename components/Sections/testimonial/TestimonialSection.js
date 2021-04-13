// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :

// #hooks :
import { useImageUrl } from "utils/useImageUrl";
// #components :
import { BwSectionName } from "components/UI";
import { BwTestimonialCard } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  CssBaseline,
  Typography,
  Container,
} from "@material-ui/core";

// #other :

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: (props) => props.bgImage,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const TestimonialSection = (props) => {
  const {
    classes,
    testimonial: { title, cover },
    testimonials,
  } = props;
  const localClasses = useStyles({ bgImage: `url('${useImageUrl(cover)}')` });

  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={4}>
        <Box
          aria-label="about-description-area"
          width="100%"
          height={400}
          maxHeight={400}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={{ xl: 20, xs: 2 }}
        >
          <Box paddingBottom={2}>
            <BwSectionName color="secondary">{title}</BwSectionName>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box
          aria-label="about-description-area"
          width="100%"
          height={400}
          maxHeight={400}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={{ xs: 2, xl: 5 }}
        >
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={340}
          >
            <Swiper spaceBetween={50} slidesPerView={1}>
              {testimonials.map((item, i) => (
                <SwiperSlide key={i}>
                  <BwTestimonialCard
                    author={item.author}
                    position={item.position}
                    body={item.body}
                    company={item.company}
                    rating={item.rating}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(TestimonialSection);
