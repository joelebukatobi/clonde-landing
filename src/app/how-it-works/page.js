'use client';

// Components
import HowItWorks from '../components/HowItWorks';

export default function Section() {
  return (
    <>
      {/* Scroll-top (Simple implementation, can be enhanced later) */}
      <button className="scroll__top scroll-to-target" onClick={() => window.scrollTo(0, 0)}>
        <i className="fas fa-arrow-up"></i>
      </button>

      <HowItWorks />
    </>
  );
}
