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
      </Head>
      <DefaultSeo
        titleTemplate="%s | Khaing Hsu Thwe"
        defaultTitle="Khaing Hsu Thwe - Portfolio"
        description="Portfolio of Khaing Hsu Thwe, showcasing projects, experience, and contact information."
        canonical="https://khainghsuthwe.vercel.app" // Replace with your Vercel domain
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.khainghsuthwe.vercel.app",
          siteName: "Khaing Hsu Thwe Portfolio",
          title: "Khaing Hsu Thwe - Portfolio",
          description: "Portfolio of Khaing Hsu Thwe, showcasing projects, experience, and contact information.",
          images: [
            {
              url: "https://khainghsuthwe.vercel.app/KHT.png", // Replace with your image path
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