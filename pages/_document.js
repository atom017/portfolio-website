import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Khaing Hsu Thwe",
              url: "https://khaing-hsu-thwe.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/khaing-hsu-thwe", 
                "https://github.com/khainghsuthwe",
                
              ],
              jobTitle: "Software Engineer | Developer",
              description:
                "Portfolio of Khaing Hsu Thwe, showcasing projects, experience, and contact information.",
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}