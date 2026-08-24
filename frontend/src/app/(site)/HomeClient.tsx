'use client';

import { Suspense, lazy, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { getAllHomepageData } from '@/lib/supabase/homepage';

// Lazy load components
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
const UpcomingEvent = lazy(() => import('@/components/sections/UpcomingEvent'));
const VideoModal = lazy(() => import('@/components/ui/VideoModal'));

function SectionSkeleton({ height = "h-80" }: { height?: string }) {
  return <div className={`${height} w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700`} />;
}

export default function HomeClient() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getAllHomepageData();
        setData(result);
      } catch (error) {
        console.error('Error fetching homepage data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <Suspense fallback={<SectionSkeleton height="h-screen" />}>
        <HeroSection data={data?.hero} setVideoModalOpen={setVideoModalOpen} />
      </Suspense>

      {/* Partners Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <PartnersSection data={data?.partners} />
      </Suspense>

      {/* Get Involved Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <GetInvolvedSection data={data?.getInvolved} />
      </Suspense>

      {/* Mission Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <MissionSection data={data?.mission} />
      </Suspense>

      {/* Social Activities Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <SocialActivitiesSection data={data?.socialActivities} />
      </Suspense>

      {/* Call to Action Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <CallToActionSection data={data?.cta} setVideoModalOpen={setVideoModalOpen} />
      </Suspense>

      {/* Upcoming Events */}
      <Suspense fallback={<SectionSkeleton />}>
        <UpcomingEvent data={data?.upcomingEvents} />
      </Suspense>

      {/* Team Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <TeamSection data={data?.team} />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection data={data?.testimonials} />
      </Suspense>

      {/* Gallery Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <GallerySection data={data?.gallery} />
      </Suspense>

      {/* Blog Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <BlogSection data={data?.blog} />
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