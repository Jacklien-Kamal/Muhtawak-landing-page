import React from 'react';

import HeroSection from './src/components/HomeSections/HeroSection';
import OurFeatures from './src/components/HomeSections/OurFeatures';
import DownloadApp from './src/components/HomeSections/DownloadApp';
import HowAppWorkSection from './src/components/HomeSections/HowAppWorkSection';
import VideoSection from './src/components/HomeSections/VideoSection';
import Screenshots from './src/components/HomeSections/Screenshots';
import FaqSection from './src/components/HomeSections/FaqSection';
import NewsSection from './src/components/HomeSections/NewsSection';
import PricingSection from './src/components/HomeSections/PricingSection';
import Reviews from './src/components/HomeSections/Reviews';
import BlogsSection from './src/components/HomeSections/BlogsSection';
import { RoleProvider } from './src/hooks/roleContext';

const ChooseUs = () => (
  // ✅ Wrap everything in RoleProvider so every section can read the active role
  <RoleProvider>
    <main>
      {/* slider-area */}
      <HeroSection />
      {/* slider-area-end */}

   
      {/* choose-area */}
      <DownloadApp />
      {/* choose-area-end */}

      {/* how-app-work */}
      <HowAppWorkSection />
      {/* how-app-work-end */}

      {/* video-area */}
      <VideoSection />
      {/* video-area-end */}

      {/* screen-area */}
      <Screenshots />
      {/* screen-area-end */}

      {/* faq-area */}
      <FaqSection />
      {/* faq-area-end */}

      {/* newsletter-area */}
      <NewsSection />
      {/* newsletter-area-end */}

      {/* pricing-area */}
      <PricingSection />
      {/* pricing-area-end */}

      {/* testimonial-area */}
      <Reviews />
      {/* testimonial-area-end */}
   {/* services-area */}
      <OurFeatures />
      {/* services-area-end */}

      {/* blog-area */}
      <BlogsSection />
      {/* blog-area-end */}
    </main>
  </RoleProvider>
);

export default ChooseUs;