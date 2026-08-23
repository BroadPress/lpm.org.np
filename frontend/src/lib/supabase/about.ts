// src/lib/supabase/about.ts
import { supabase } from './client';

export interface AboutSection {
  id: string;
  section_key: string;
  title: string;
  data: any;
  updated_at: string;
}

// ----- GET ABOUT SECTION -----
export async function getAboutSection(): Promise<AboutSection | null> {
  try {
    const { data, error } = await supabase
      .from('about_content')
      .select('*')
      .eq('section_key', 'about_page')
      .maybeSingle();

    if (error) {
      console.error('Error fetching about section:', error);
      return null;
    }
    return data as AboutSection | null;
  } catch (error) {
    console.error('Error fetching about section:', error);
    return null;
  }
}

// ----- UPDATE ABOUT SECTION -----
export async function updateAboutSection(data: any): Promise<AboutSection | null> {
  try {
    const { data: updated, error } = await supabase
      .from('about_content')
      .update({ data, updated_at: new Date().toISOString() })
      .eq('section_key', 'about_page')
      .select()
      .single();

    if (error) {
      console.error('Error updating about section:', error);
      throw error;
    }
    return updated as AboutSection;
  } catch (error) {
    console.error('Error updating about section:', error);
    throw error;
  }
}

// ----- UPLOAD ABOUT IMAGE -----
export async function uploadAboutImage(file: File, folder: string = 'core'): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `about/${folder}/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('about-images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: urlData } = supabase.storage
    .from('about-images')
    .getPublicUrl(filePath);

  return urlData.publicUrl;
}

// ----- DELETE ABOUT IMAGE -----
export async function deleteAboutImage(imageUrl: string): Promise<void> {
  try {
    const url = new URL(imageUrl);
    const pathParts = url.pathname.split('/');
    const bucketIndex = pathParts.indexOf('about-images');
    if (bucketIndex === -1) return;
    
    const filePath = pathParts.slice(bucketIndex + 1).join('/');
    
    const { error } = await supabase.storage
      .from('about-images')
      .remove([filePath]);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting image:', error);
  }
}