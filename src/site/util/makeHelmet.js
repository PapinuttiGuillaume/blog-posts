import React from "react";
import Helmet from "react-helmet";

const makeHelmet = props =>
  <Helmet>
    <title>
      {`${props.page.title || "Blog"} | ${props.site.meta.author.name}`}
    </title>
    <meta charset="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width initial-scale=1" />
    <meta name="author" content="Julien Pradet" />
    <meta name="description" content={props.page.description} />
    <meta name="theme-color" content="#00C9C9" />
    <meta property="twitter:site" content="@JulienPradet" />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:creator" content="@JulienPradet" />
    <meta property="twitter:title" content={props.page.title} />
    <meta
      property="twitter:description"
      content={
        (props.page.twitter && props.page.twitter.description) ||
        props.page.description
      }
    />
    <meta
      property="twitter:image"
      content={
        props.page.image ||
        "https://pbs.twimg.com/profile_images/424964348461600768/aygHDGpF.png"
      }
    />
    <meta property="og:site_name" content={props.site.meta.site_name} />
    <meta property="og:type" content="page" />
    <meta property="og:title" content={props.page.title} />
    <meta
      property="og:url"
      content={`${props.site.meta.homepage}${props.path}`}
    />
    <meta
      property="og:image"
      content={
        props.page.image ||
        "https://pbs.twimg.com/profile_images/424964348461600768/aygHDGpF.png"
      }
    />
    <meta property="og:description" content={props.page.description} />
    <link rel="canonical" href={`${props.site.meta.homepage}${props.path}`} />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="manifest" href="/manifest.json" />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Le flux RSS de Julien Pradet"
      href={`${props.site.meta.homepage}/feed.xml`}
    />
  </Helmet>;

export default makeHelmet;