import { supabase } from './client';

export interface HomeSection {
  id: string;
  section_key: string;
  title: string;
  data: any;
  updated_at: string;
}

// Section keys constants
export const HOME_SECTIONS = {
  HERO: 'home_hero',
  MISSION: 'home_mission',
  PARTNERS: 'home_partners',
  GET_INVOLVED: 'home_get_involved',
  SOCIAL_ACTIVITIES: 'home_social_activities',
  CTA: 'home_cta',
  UPCOMING_EVENTS: 'home_upcoming_events',
  TEAM: 'home_team',
  TESTIMONIALS: 'home_testimonials',
  GALLERY: 'home_gallery',
  BLOG: 'home_blog',
} as const;

export type HomeSectionKey = typeof HOME_SECTIONS[keyof typeof HOME_SECTIONS];

// ----- GET SINGLE SECTION -----
export async function getHomeSection(sectionKey: string): Promise<HomeSection | null> {
  try {
    const { data, error } = await supabase
      .from('homepage_content')
      .select('*')
      .eq('section_key', sectionKey)
      .maybeSingle();

    if (error) {
      console.error(`Error fetching home section ${sectionKey}:`, error);
      return null;
    }
    return data as HomeSection | null;
  } catch (error) {
    console.error(`Error fetching home section ${sectionKey}:`, error);
    return null;
  }
}

// ----- GET ALL SECTIONS -----
export async function getAllHomeSections(): Promise<HomeSection[]> {
  try {
    const { data, error } = await supabase
      .from('homepage_content')
      .select('*')
      .order('section_key');

    if (error) {
      console.error('Error fetching home sections:', error);
      return [];
    }
    return data as HomeSection[];
  } catch (error) {
    console.error('Error fetching home sections:', error);
    return [];
  }
}

// ----- GET ALL HOMEPAGE SECTIONS AT ONCE -----
export async function getAllHomepageData() {
  try {
    const [hero, mission, partners, getInvolved, socialActivities, cta, upcomingEvents, team, testimonials, gallery, blog] =
      await Promise.all([
        getHomeSection(HOME_SECTIONS.HERO),
        getHomeSection(HOME_SECTIONS.MISSION),
        getHomeSection(HOME_SECTIONS.PARTNERS),
        getHomeSection(HOME_SECTIONS.GET_INVOLVED),
        getHomeSection(HOME_SECTIONS.SOCIAL_ACTIVITIES),
        getHomeSection(HOME_SECTIONS.CTA),
        getHomeSection(HOME_SECTIONS.UPCOMING_EVENTS),
        getHomeSection(HOME_SECTIONS.TEAM),
        getHomeSection(HOME_SECTIONS.TESTIMONIALS),
        getHomeSection(HOME_SECTIONS.GALLERY),
        getHomeSection(HOME_SECTIONS.BLOG),
      ]);

    return {
      hero: hero?.data || null,
      mission: mission?.data || null,
      partners: partners?.data || null,
      getInvolved: getInvolved?.data || null,
      socialActivities: socialActivities?.data || null,
      cta: cta?.data || null,
      upcomingEvents: upcomingEvents?.data || null,
      team: team?.data || null,
      testimonials: testimonials?.data || null,
      gallery: gallery?.data || null,
      blog: blog?.data || null,
    };
  } catch (error) {
    console.error('Error fetching all homepage data:', error);
    return null;
  }
}

// ----- UPDATE SECTION -----
export async function updateHomeSection(sectionKey: string, data: any): Promise<HomeSection | null> {
  try {
    const { data: updated, error } = await supabase
      .from('homepage_content')
      .update({ data, updated_at: new Date().toISOString() })
      .eq('section_key', sectionKey)
      .select()
      .single();

    if (error) {
      console.error(`Error updating home section ${sectionKey}:`, error);
      throw error;
    }
    return updated as HomeSection;
  } catch (error) {
    console.error(`Error updating home section ${sectionKey}:`, error);
    throw error;
  }
}

// ----- UPLOAD IMAGE -----
export async function uploadHomeImage(file: File, folder: string = 'hero'): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `homepage/${folder}/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('homepage-images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: urlData } = supabase.storage
    .from('homepage-images')
    .getPublicUrl(filePath);

  return urlData.publicUrl;
}

// ----- DELETE IMAGE -----
export async function deleteHomeImage(imageUrl: string): Promise<void> {
  try {
    const url = new URL(imageUrl);
    const pathParts = url.pathname.split('/');
    const bucketIndex = pathParts.indexOf('homepage-images');
    if (bucketIndex === -1) return;
    
    const filePath = pathParts.slice(bucketIndex + 1).join('/');
    
    const { error } = await supabase.storage
      .from('homepage-images')
      .remove([filePath]);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting image:', error);
  }
}



export async function uploadEventImage(file: File, eventId: string): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${eventId}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `homepage/events/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('homepage-images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: urlData } = supabase.storage
    .from('homepage-images')
    .getPublicUrl(filePath);

  return urlData.publicUrl;
}

export async function deleteEventImage(imageUrl: string): Promise<void> {
  try {
    const url = new URL(imageUrl);
    const pathParts = url.pathname.split('/');
    const bucketIndex = pathParts.indexOf('homepage-images');
    if (bucketIndex === -1) return;
    
    const filePath = pathParts.slice(bucketIndex + 1).join('/');
    
    const { error } = await supabase.storage
      .from('homepage-images')
      .remove([filePath]);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting event image:', error);
  }
}