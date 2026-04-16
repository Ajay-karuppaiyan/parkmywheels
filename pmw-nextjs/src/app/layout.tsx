import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ScriptsHandler from "@/components/ScriptsHandler";
import FloatingContactMenu from "@/components/FloatingContactMenu";

export const metadata: Metadata = {
  title: "ParkMyWheels - Smart Parking Management Solutions",
  description: "ParkMyWheels revolutionizes the way you park by offering a seamless pre-booking system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zxx">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        
        {/* CSS Files */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/flatpickr.min.css" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link href="/css/all.css" rel="stylesheet" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link href="/css/custom.css" rel="stylesheet" />
      </head>
      <body>
        <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon" style={{ textAlign: 'center' }}>
              <img 
                src="/images/loader-logo.png" 
                alt="Loading..." 
                style={{ 
                  maxWidth: '160px',
                  height: 'auto'
                }} 
              />
            </div>
          </div>
        </div>
        
        <FloatingContactMenu />
        {children}
        <ScriptsHandler />

        {/* Scripts */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-ui.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/validator.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/SmoothScroll.js" strategy="afterInteractive" />
        <Script src="/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/magiccursor.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.js" strategy="afterInteractive" />
        <Script src="/js/function.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
