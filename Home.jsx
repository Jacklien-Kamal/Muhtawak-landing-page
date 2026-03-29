import React from 'react';
import { motion } from 'framer-motion';

import HeroSection        from './src/components/HomeSections/HeroSection';
import OurFeatures        from './src/components/HomeSections/OurFeatures';
import DownloadApp        from './src/components/HomeSections/DownloadApp';
import HowAppWorkSection  from './src/components/HomeSections/HowAppWorkSection';
import VideoSection       from './src/components/HomeSections/VideoSection';
import Screenshots        from './src/components/HomeSections/Screenshots';
import PricingSection     from './src/components/HomeSections/PricingSection';
import Reviews            from './src/components/HomeSections/Reviews';
import BlogsSection       from './src/components/HomeSections/BlogsSection';
import ContactSection     from './src/components/HomeSections/ContactSection';
import CreatorShowcase    from './src/components/HomeSections/PrevWorks';
import { useRole }        from './src/hooks/roleContext';

/* ─── Reusable animated wrapper ─── */
// استبدل FadeInSection بالكود ده

const FadeInSection = ({ children, direction = 'up', delay = 0 }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up'   ?  50 :
         direction === 'down' ? -50 : 0,
      x: direction === 'left'  ?  50 :
         direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
};

/* ─── Home ─── */
const Home = () => {
  const { role } = useRole();

  return (
    <main>

      {/* Hero — fade in from bottom */}
      <FadeInSection direction="up">
        <HeroSection />
      </FadeInSection>

      {/* Creator Showcase — fade from right */}
      <FadeInSection direction="right" delay={0.05}>
        <CreatorShowcase />
      </FadeInSection>

      {/* Download / Choose — fade from left */}
      <FadeInSection direction="left">
        <DownloadApp />
      </FadeInSection>

      {/* How it works — fade from right */}
      <FadeInSection direction="right">
        <HowAppWorkSection />
      </FadeInSection>

      {/* Video — fade up */}
      <FadeInSection direction="up">
        <VideoSection />
      </FadeInSection>

      {/* Screenshots — fade up */}
      <FadeInSection direction="up">
        <Screenshots />
      </FadeInSection>

      {/* Pricing — only Agency, fade up */}
      {role === 'Agency' && (
        <FadeInSection direction="up">
          <PricingSection />
        </FadeInSection>
      )}



      {/* Features — fade from right */}
      <FadeInSection direction="right">
        <OurFeatures />
      </FadeInSection>
      {/* Reviews — fade from left */}
      <FadeInSection direction="left">
        <Reviews />
      </FadeInSection>
      {/* Blogs — fade up */}
      <FadeInSection direction="up">
        <BlogsSection />
      </FadeInSection>

      {/* Contact — fade up */}
      <FadeInSection direction="up">
        <ContactSection />
      </FadeInSection>

    </main>
  );
};

export default Home;