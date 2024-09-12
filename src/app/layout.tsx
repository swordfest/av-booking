import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/components/providers";
import { Public_Sans } from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const openSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avangtur",
  description: "Maquetado",
};

// ${geistSans.variable} ${geistMono.variable}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${openSans.className}`}>
        <Providers>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
