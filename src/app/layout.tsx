import { Poppins } from "next/font/google";
import Script from "next/script";
import dynamic from "next/dynamic";
import "./globals.scss";

const Header = dynamic(() => import("@/components/header"), {loading: () => <>...loading</>})

const poppins = Poppins({ 
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"]
});

const TAGMANAGER_ID = process.env.TAGMANAGER_ID as string;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-script"
          strategy="afterInteractive" // Recommended for better performance
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${TAGMANAGER_ID}');
            `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body className={poppins.className}>
        {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${TAGMANAGER_ID}`} height="0" width="0" style={{display:"none",visibility:"hidden"}} />
          </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Header />
        {children}
        <footer>
          <p>Copyright © 2024</p>
          <p>Blue Belgravia Hospitality Ltd</p>
        </footer>
      </body>
    </html>
  );
}
