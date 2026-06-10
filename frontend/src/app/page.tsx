
'use client';

import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionSkeleton from '@/components/ui/SectionSkeleton';

// Dynamic imports for code splitting
const HeroSection = lazy(() => import('@/components/sections/HeroSection'));
const PartnersSection = lazy(() => import('@/components/sections/PartnersSection'));
const GetInvolvedSection = lazy(() => import('@/components/sections/GetInvolvedSection'));
const MissionSection = lazy(() => import('@/components/sections/MissionSection'));
const SocialActivitiesSection = lazy(() => import('@/components/sections/SocialActivitiesSection'));
const CallToActionSection = lazy(() => import('@/components/sections/CallToActionSection'));
const TeamSection = lazy(() => import('@/components/sections/TeamSection'));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection'));
const GallerySection = lazy(() => import('@/components/sections/GallerySection'));
const BlogSection = lazy(() => import('@/components/sections/BlogSection'));
const VideoModal = lazy(() => import('@/components/ui/VideoModal'));

export default function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section - Critical, load immediately */}
      <Suspense fallback={<SectionSkeleton type="hero" />}>
        <HeroSection setVideoModalOpen={setVideoModalOpen} />
      </Suspense>

      {/* Partners Section */}
      <Suspense fallback={<SectionSkeleton type="partners" />}>
        <PartnersSection />
      </Suspense>

      {/* Get Involved Section */}
      <Suspense fallback={<SectionSkeleton type="grid" />}>
        <GetInvolvedSection />
      </Suspense>

      {/* Mission Section */}
      <Suspense fallback={<SectionSkeleton type="two-column" />}>
        <MissionSection />
      </Suspense>

      {/* Social Activities Section */}
      <Suspense fallback={<SectionSkeleton type="grid" />}>
        <SocialActivitiesSection />
      </Suspense>

      {/* Call to Action Section */}
      <Suspense fallback={<SectionSkeleton type="cta" />}>
        <CallToActionSection setVideoModalOpen={setVideoModalOpen} />
      </Suspense>

      {/* Team Section */}
      <Suspense fallback={<SectionSkeleton type="team" />}>
        <TeamSection />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<SectionSkeleton type="testimonials" />}>
        <TestimonialsSection />
      </Suspense>

      {/* Gallery Section */}
      <Suspense fallback={<SectionSkeleton type="gallery" />}>
        <GallerySection />
      </Suspense>

      {/* Blog Section */}
      <Suspense fallback={<SectionSkeleton type="blog" />}>
        <BlogSection />
      </Suspense>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <Suspense fallback={null}>
            <VideoModal 
              isOpen={videoModalOpen} 
              onClose={() => setVideoModalOpen(false)}
              videoUrl="https://www.youtube.com/embed/IUN664s7N-c?autoplay=1"
            />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
}