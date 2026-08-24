'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for each section form
const HeroForm = dynamic(() => import('./HeroForm'), { ssr: false });
const MissionForm = dynamic(() => import('./MissionForm'), { ssr: false });
const PartnersForm = dynamic(() => import('./PartnersForm'), { ssr: false });
const GetInvolvedForm = dynamic(() => import('./GetInvolvedForm'), { ssr: false });
const SocialActivitiesForm = dynamic(() => import('./SocialActivitiesForm'), { ssr: false });
const CTAForm = dynamic(() => import('./CTAForm'), { ssr: false });
const UpcomingEventsForm = dynamic(() => import('./UpcomingEventsForm'), { ssr: false });
const TeamForm = dynamic(() => import('./TeamForm'), { ssr: false });
const TestimonialsForm = dynamic(() => import('./TestimonialsForm'), { ssr: false });
const GalleryForm = dynamic(() => import('./GalleryForm'), { ssr: false });
const BlogForm = dynamic(() => import('./BlogForm'), { ssr: false });

interface HomepageFormProps {
  sectionKey: string;
  initialData: any;
}

const HomepageForm = memo(function HomepageForm({ sectionKey, initialData }: HomepageFormProps) {
  // Return the appropriate form based on section key
  switch (sectionKey) {
    case 'home_hero':
      return <HeroForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_mission':
      return <MissionForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_partners':
      return <PartnersForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_get_involved':
      return <GetInvolvedForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_social_activities':
      return <SocialActivitiesForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_cta':
      return <CTAForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_upcoming_events':
      return <UpcomingEventsForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_team':
      return <TeamForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_testimonials':
      return <TestimonialsForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_gallery':
      return <GalleryForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_blog':
      return <BlogForm sectionKey={sectionKey} initialData={initialData} />;
    default:
      return <div className="text-red-500">Unknown section: {sectionKey}</div>;
  }
});

HomepageForm.displayName = 'HomepageForm';
export default HomepageForm;