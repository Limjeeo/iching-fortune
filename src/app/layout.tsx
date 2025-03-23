import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "易经占卜",
  description: "基于易经的在线占卜系统",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CT9DWHWHF7"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CT9DWHWHF7');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-black min-h-screen text-white`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
