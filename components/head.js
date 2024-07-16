import Head from "next/head";
import Script from "next/script";
import favicon from "public/favicon.ico";

export default function _Head() {
  return (
    <>
      <Head>
        <title>Orbit Model</title>
        <meta name="description" content="Build a high-gravity community" />
        <link rel="icon" href={favicon.src} />
        <meta property="og:site_name" content="Orbit Model" />
        <meta property="og:title" content="Orbit Model" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orbit.love/model/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="https://orbit.love/model/social-share.jpg"
        />
        <meta
          name="twitter:image"
          content="https://orbit.love/model/social-share.jpg"
        />
        <meta property="og:image:alt" content="Page image for Orbit Model" />
        <meta name="twitter:image:alt" content="Page image for Orbit Model" />
        <meta
          name="description"
          content="A framework for building high gravity communities."
        />
        <meta
          name="twitter:description"
          content="A framework for building high gravity communities."
        />
        <meta
          property="og:description"
          content="A framework for building high gravity communities."
        />
      </Head>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          !function(){
            var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://events.orbit.love/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="yGYwqp3KZ4c6R0uIGIJGA0D6pbZbRecm";;analytics.SNIPPET_VERSION="4.15.3";
            analytics.load("yGYwqp3KZ4c6R0uIGIJGA0D6pbZbRecm");
            analytics.page();
          }}();
          `}
      </Script>
    </>
  );
}
