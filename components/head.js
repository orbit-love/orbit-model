import Head from "next/head";

export default function _Head() {
  return (
    <>
      <Head>
        <title>Orbit Model</title>
        <meta name="description" content="Build a high-gravity community" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="Orbit Model" />
        <meta property="og:title" content="Orbit Model" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orbitmodel.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="https://orbitmodel.com/om_social_share.jpg"
        />
        <meta
          name="twitter:image"
          content="https://orbitmodel.com/om_social_share.jpg"
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
    </>
  );
}
