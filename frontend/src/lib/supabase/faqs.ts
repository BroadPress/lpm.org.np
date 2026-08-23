import { supabase } from './client';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ----- GET ALL FAQs -----
export async function getAllFaqs(): Promise<FAQ[]> {
  try {
    const { data, error } = await supabase
      .from('faqs')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching FAQs:', error);
      return [];
    }
    return data as FAQ[];
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

// ----- GET ALL FAQs FOR ADMIN -----
export async function getAllFaqsAdmin(): Promise<FAQ[]> {
  try {
    const { data, error } = await supabase
      .from('faqs')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching FAQs:', error);
      return [];
    }
    return data as FAQ[];
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

// ----- GET FAQ BY ID -----
export async function getFaqById(id: string): Promise<FAQ | null> {
  try {
    const { data, error } = await supabase
      .from('faqs')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching FAQ:', error);
      return null;
    }
    return data as FAQ;
  } catch (error) {
    console.error('Error fetching FAQ:', error);
    return null;
  }
}

// ----- CREATE FAQ -----
export async function createFaq(data: Omit<FAQ, 'id' | 'created_at' | 'updated_at'>): Promise<FAQ | null> {
  try {
    const { data: created, error } = await supabase
      .from('faqs')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating FAQ:', error);
      throw error;
    }
    return created as FAQ;
  } catch (error) {
    console.error('Error creating FAQ:', error);
    throw error;
  }
}

// ----- UPDATE FAQ -----
export async function updateFaq(id: string, data: Partial<FAQ>): Promise<FAQ | null> {
  try {
    const { data: updated, error } = await supabase
      .from('faqs')
      .update({ ...data, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating FAQ:', error);
      throw error;
    }
    return updated as FAQ;
  } catch (error) {
    console.error('Error updating FAQ:', error);
    throw error;
  }
}

// ----- DELETE FAQ -----
export async function deleteFaq(id: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('faqs')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting FAQ:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    throw error;
  }
}