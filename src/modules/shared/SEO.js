import React from "react";
import { Helmet } from "react-helmet";

function SEO({ title, description, url }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />

      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="robots" content="all" />
      <meta
        name="keywords"
        content="events, lagos, what, nigeria, happening, popping, fun, weekend, weekends"
      />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="geo.region" content="Lagos" />
      <meta name="geo.position" content="37.4067052,-121.996402" />
      <meta name="ICBM" content="37.4067052,-121.996402" />
      <meta name="geo.placename" content="What's Popping?" />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_us" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://paystack.com/public/opengraph.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={title} />
      <meta property="og:see_also" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://paystack.com/public/opengraph.png"
      />
    </Helmet>
  );
}
export default SEO;
