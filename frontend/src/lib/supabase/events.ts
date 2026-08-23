
// src/lib/supabase/events.ts
import { supabase } from './client';

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  date_day: string;
  date_month: string;
  time: string;
  location: string;
  image_url: string;
  is_featured: boolean;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

// ----- GET ALL EVENTS -----
export async function getAllEvents(): Promise<Event[]> {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching events:', error);
      return [];
    }
    return data as Event[];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

// ----- GET ALL EVENTS FOR ADMIN -----
export async function getAllEventsAdmin(): Promise<Event[]> {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching events:', error);
      return [];
    }
    return data as Event[];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

// ----- GET FEATURED EVENTS -----
export async function getFeaturedEvents(): Promise<Event[]> {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('is_featured', true)
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching featured events:', error);
      return [];
    }
    return data as Event[];
  } catch (error) {
    console.error('Error fetching featured events:', error);
    return [];
  }
}

// ----- GET SINGLE EVENT -----
export async function getEventBySlug(slug: string): Promise<Event | null> {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching event:', error);
      return null;
    }
    return data as Event;
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
}

// ----- GET SINGLE EVENT BY ID -----
export async function getEventById(id: string): Promise<Event | null> {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching event:', error);
      return null;
    }
    return data as Event;
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
}

// ----- CREATE EVENT -----
export async function createEvent(data: Omit<Event, 'id' | 'created_at' | 'updated_at'>): Promise<Event | null> {
  try {
    const { data: created, error } = await supabase
      .from('events')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating event:', error);
      throw error;
    }
    return created as Event;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
}

// ----- UPDATE EVENT -----
export async function updateEvent(id: string, data: Partial<Event>): Promise<Event | null> {
  try {
    const { data: updated, error } = await supabase
      .from('events')
      .update({ ...data, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating event:', error);
      throw error;
    }
    return updated as Event;
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
}

// ----- DELETE EVENT -----
export async function deleteEvent(id: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
}

// ----- UPLOAD EVENT IMAGE -----
export async function uploadEventImage(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `events/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('events-images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: urlData } = supabase.storage
    .from('events-images')
    .getPublicUrl(filePath);

  return urlData.publicUrl;
}

// ----- DELETE EVENT IMAGE -----
export async function deleteEventImage(imageUrl: string): Promise<void> {
  try {
    const url = new URL(imageUrl);
    const pathParts = url.pathname.split('/');
    const bucketIndex = pathParts.indexOf('events-images');
    if (bucketIndex === -1) return;
    
    const filePath = pathParts.slice(bucketIndex + 1).join('/');
    
    const { error } = await supabase.storage
      .from('events-images')
      .remove([filePath]);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting image:', error);
  }
}

// ----- GENERATE SLUG -----
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}