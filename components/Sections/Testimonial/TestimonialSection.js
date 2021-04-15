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
import { BwSectionName, BwTestimonialCard } from "components/UI";

// #validations :

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
    width,
    testimonial: { title, cover },
    testimonials,
  } = props;
  const localClasses = useStyles({ bgImage: `url('${useImageUrl(cover)}')` });

  return (
    <Grid container className={localClasses.root}>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={4}>
        <Box
          aria-label="about-description-area"
          width="100%"
          height={width === "xs" ? 100 : width === "sm" ? 100 : 400}
          maxHeight={400}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={width === "xs" ? 10 : width === "sm" ? 10 : undefined}
        >
          <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <BwSectionName
              color="secondary"
              size={
                width === "xs"
                  ? "small"
                  : width === "sm"
                  ? "small"
                  : width === "md"
                  ? "small"
                  : "large"
              }
            >
              {title}
            </BwSectionName>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={7} xl={8}>
        <Box
          aria-label="about-description-area"
          width="100%"
          height={400}
          maxHeight={400}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          px={{ xs: 3, sm: 4, md: 4, lg: 5, xl: 5 }}
          mb={width === "xs" ? 5 : width === "sm" ? 5 : undefined}
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
export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(TestimonialSection)
);
