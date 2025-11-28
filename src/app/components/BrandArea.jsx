'use client';
// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function SectionDivider() {
  // 1. Define the brands list
  const brandList = ['brand_01', 'brand_02', 'brand_03', 'brand_04', 'brand_05', 'brand_06'];

  // 2. DUPLICATE the list.
  // Since slidesPerView goes up to 6, we need at least 12 items for a smooth loop.
  const sliderItems = [...brandList, ...brandList];

  // Brand Slider Configuration
  const brandSliderOptions = {
    modules: [Autoplay],
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    speed: 1000, // Smooth transition speed
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 5 },
      1200: { slidesPerView: 6 },
    },
  };
  return (
    <>
      {/* Brand Area (Using React Swiper) */}
      <div className="brand__area">
        <div className="container">
          <div className="brand__item-wrap">
            <Swiper {...brandSliderOptions} className="brand-active">
              {/* 3. Map over the DUPLICATED list (sliderItems) instead of the original list */}
              {sliderItems.map((brand, index) => (
                <SwiperSlide key={index}>
                  <div className="brand__item">
                    <img
                      src={`/assets/images/brand/${brand}.svg`}
                      alt="brand"
                      style={{ maxWidth: '100%', height: 'auto' }} // Added safe styling
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
