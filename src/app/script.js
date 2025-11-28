'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import $ from 'jquery';

export default function RootScripts() {
  useEffect(() => {
    // 1. Manually set global variables for legacy scripts
    if (typeof window !== 'undefined') {
      window.$ = window.jQuery = $;
    }
  }, []);

  return (
    <>
      {/* CHANGE STRATEGY: Use "afterInteractive".
               This loads the script immediately after the page becomes interactive
               (React hydrates), which fixes the "sync/defer" error.
            */}

      {/* JQuery Plugins */}
      <Script src="/assets/js/jquery.easing.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.countdown.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.marquee.min.js" strategy="afterInteractive" />

      {/* Main Logic: Keep as "lazyOnload" 
               This ensures it runs LAST, after the plugins above are ready.
            */}
      <Script src="/assets/js/main.js" strategy="lazyOnload" />
      <Script src="/assets/js/ajax-form.js" strategy="lazyOnload" />
    </>
  );
}
