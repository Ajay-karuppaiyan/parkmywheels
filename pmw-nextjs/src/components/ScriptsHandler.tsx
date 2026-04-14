'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScriptsHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Show preloader immediately on route change
    if (typeof window !== 'undefined') {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        // Use jQuery to match the original animation style if possible, 
        // but simple DOM works too.
        (preloader as HTMLElement).style.display = 'flex';
        (preloader as HTMLElement).style.opacity = '1';
      }
    }

    // Delay initialization to ensure the new page content is rendered
    // and to show the preloader for a moment.
    const timeout = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).initApp) {
        (window as any).initApp();
      }
    }, 600); // 600ms matches the fadeOut speed in function.js

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
