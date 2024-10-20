import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Antelocode - Transforming Ideas into Websites",
  description: "We transform ideas into stunning websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Antelocode - Transforming Ideas into Websites"/>
        <meta property="og:description" content="Antelocode offers professional website development services using modern technologies such as Laravel, JavaScript, React.js, Next.js, TailwindCSS, Bootstrap, HTML, and CSS. We are ready to help you build a website that is fast, responsive, and tailored to your business needs." />
        <meta property="og:image" content="/img/promotion.png"/>
        <meta property="og:url" content="https://antelocode.vercel.app/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Antelocode - Transforming Ideas into Websites"/>
        <meta name="twitter:description" content="Antelocode offers professional website development services using modern technologies such as Laravel, JavaScript, React.js, Next.js, TailwindCSS, Bootstrap, HTML, and CSS. We are ready to help you build a website that is fast, responsive, and tailored to your business needs." />
        <meta name="twitter:image" content="/img/promotion.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
