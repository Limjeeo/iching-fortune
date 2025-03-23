'use client';

import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function Analytics() {
  useEffect(() => {
    // 确保在客户端执行
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-CT9DWHWHF7');
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-CT9DWHWHF7`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CT9DWHWHF7', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
} 