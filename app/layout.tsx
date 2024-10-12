import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
// import localFont from "next/font/local";

// const squareFont = localFont({ src: "./fonts/SQR721B.ttf" });
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: "--inter"
})

const square = localFont({
  src:[
    {
      path:'./fonts/SQR721B.woff',
      weight: "700"
    },
    {
      path:'./fonts/Square721N.otf',
      weight: "400"
    }
  ],
  display: 'swap',
  variable: "--square"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-inter ${inter.variable} ${square.variable} text-[#474747]`}>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
