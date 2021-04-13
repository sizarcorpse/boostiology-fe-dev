import PropTypes from "prop-types";

// #next :
import Router, { useRouter } from "next/router";
import { SWRConfig } from "swr";
import Head from "next/head";
// import getConfig from "next/config";

// #contexts :

// #hooks :
import { FetchNav } from "actions/FetchNav";

// #components :
import { Navigation } from "components/Navigation";

// #material-ui :
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "styles/theme";
import dark from "styles/dark";

// #other :
import "styles/styles.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

function MyApp({ Component, pageProps, navigation }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: (url) => fetch(url).then((r) => r.json()),
          }}
        >
          <Navigation navigation={navigation} />
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  const navigation = await FetchNav({ context: ctx });

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    navigation,
  };
};
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
