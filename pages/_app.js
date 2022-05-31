import "styles/globals.css";
import { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import Layout from "components/mdx/layout";
import Placeholder from "components/mdx/placeholder";
import Graph from "components/mdx/graph";
import Pagination from "components/mdx/pagination";
import Callout from "components/mdx/callout";
import Blockquote from "components/mdx/blockquote";
import Code from "components/mdx/code";
import Button from "components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faYinYang,
  faHeartCircleCheck,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBars,
  faXmark,
  faSolarSystem,
  faPlanetMoon,
  faPlanetRinged,
  faRocketLaunch,
  faCircleNodes,
  faFaceSadCry,
  faTrafficCone,
  faDrawCircle,
  faChartNetwork,
  faChartMixed,
  faTire,
  faBoxCheck,
  faStairs,
} from "@fortawesome/pro-solid-svg-icons";

// add to library
library.add(
  faBars,
  faXmark,
  faSpinner,
  faYinYang,
  faSolarSystem,
  faPlanetRinged,
  faPlanetMoon,
  faRocketLaunch,
  faCircleNodes,
  faHeartCircleCheck,
  faTrafficCone,
  faFaceSadCry,
  faDrawCircle,
  faChartNetwork,
  faChartMixed,
  faBuildingColumns,
  faTire,
  faBoxCheck,
  faStairs
);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const components = {
  wrapper: Layout,
  code: Code,
  blockquote: Blockquote,
  FontAwesomeIcon,
  Blockquote,
  Callout,
  Placeholder,
  Graph,
  Pagination,
  Button,
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load("XEYVCUXY", {
      url: "https://dog.orbit.love/script.js",
      includedDomains: ["orbitmodel.com", "next.orbitmodel.com"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  });

  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
