import "@/styles/globals.css";
import React from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Khaing Hsu Thwe</title>
        <link rel="icon" href="/name/white.svg" type="image/svg+xml" />
        <meta name="google-site-verification" content="googlef51540a66b88dfad.html" />
      </Head>
      <DefaultSeo
        titleTemplate="%s | Khaing Hsu Thwe"
        defaultTitle="Khaing Hsu Thwe - Portfolio"
        description="Portfolio of Khaing Hsu Thwe, showcasing projects, experience, and contact information."
        canonical="https://khaing-hsu-thwe.vercel.app" 
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.khaing-hsu-thwe.vercel.app",
          siteName: "Khaing Hsu Thwe Portfolio",
          title: "Khaing Hsu Thwe - Portfolio",
          description: "Portfolio of Khaing Hsu Thwe, showcasing projects, experience, and contact information.",
          images: [
            {
              url: "https://khaing-hsu-thwe.vercel.app/KHT.png", 
              width: 1200,
              height: 630,
              alt: "Khaing Hsu Thwe Portfolio",
            },
          ],
        }}
        
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
          {
            name: "keywords",
            content: "portfolio, Khaing Hsu Thwe, developer, projects, contact",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}