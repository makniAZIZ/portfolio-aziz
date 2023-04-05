// import "bootstrap/dist/css/bootstrap.min.scss";
import "../styles/customTheme.scss";
import "bootstrap-icons/font/bootstrap-icons.scss"
import "../styles/globals.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;