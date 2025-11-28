'use client';

// React
import { useEffect } from 'react';

// AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      // offset: 50, // Optional: triggers animation earlier/later
    });
  }, []);

  return null; // This component doesn't render anything visible
}
