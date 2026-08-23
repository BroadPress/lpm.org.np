// src/lib/supabase/gallery.ts
import { supabase } from './client';

export interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
  alt_text: string;
  category: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ----- GET ALL GALLERY IMAGES -----
export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  try {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching gallery images:', error);
      return [];
    }
    return data as GalleryImage[];
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}

// ----- GET ALL GALLERY IMAGES FOR ADMIN -----
export async function getAllGalleryImagesAdmin(): Promise<GalleryImage[]> {
  try {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching gallery images:', error);
      return [];
    }
    return data as GalleryImage[];
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}

// ----- GET GALLERY IMAGE BY ID -----
export async function getGalleryImageById(id: string): Promise<GalleryImage | null> {
  try {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching gallery image:', error);
      return null;
    }
    return data as GalleryImage;
  } catch (error) {
    console.error('Error fetching gallery image:', error);
    return null;
  }
}

// ----- CREATE GALLERY IMAGE -----
export async function createGalleryImage(data: Omit<GalleryImage, 'id' | 'created_at' | 'updated_at'>): Promise<GalleryImage | null> {
  try {
    const { data: created, error } = await supabase
      .from('gallery')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating gallery image:', error);
      throw error;
    }
    return created as GalleryImage;
  } catch (error) {
    console.error('Error creating gallery image:', error);
    throw error;
  }
}

// ----- UPDATE GALLERY IMAGE -----
export async function updateGalleryImage(id: string, data: Partial<GalleryImage>): Promise<GalleryImage | null> {
  try {
    const { data: updated, error } = await supabase
      .from('gallery')
      .update({ ...data, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating gallery image:', error);
      throw error;
    }
    return updated as GalleryImage;
  } catch (error) {
    console.error('Error updating gallery image:', error);
    throw error;
  }
}

// ----- DELETE GALLERY IMAGE -----
export async function deleteGalleryImage(id: string): Promise<void> {
  try {
    // First get the image to delete from storage
    const { data: image } = await supabase
      .from('gallery')
      .select('image_url')
      .eq('id', id)
      .single();

    if (image?.image_url) {
      await deleteGalleryImageFromStorage(image.image_url);
    }

    const { error } = await supabase
      .from('gallery')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting gallery image:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    throw error;
  }
}

// ----- UPLOAD GALLERY IMAGE -----
export async function uploadGalleryImage(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `gallery/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('gallery-images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: urlData } = supabase.storage
    .from('gallery-images')
    .getPublicUrl(filePath);

  return urlData.publicUrl;
}

// ----- DELETE GALLERY IMAGE FROM STORAGE -----
export async function deleteGalleryImageFromStorage(imageUrl: string): Promise<void> {
  try {
    const url = new URL(imageUrl);
    const pathParts = url.pathname.split('/');
    const bucketIndex = pathParts.indexOf('gallery-images');
    if (bucketIndex === -1) return;
    
    const filePath = pathParts.slice(bucketIndex + 1).join('/');
    
    const { error } = await supabase.storage
      .from('gallery-images')
      .remove([filePath]);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting gallery image from storage:', error);
  }
}