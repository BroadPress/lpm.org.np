import { supabase } from './client';

export interface ContactContent {
  id: string;
  section_key: string;
  title: string;
  data: {
    address: string;
    phone: string;
    email: string;
    map_embed_url: string;
    bg_image: string;
  };
  updated_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// ----- GET CONTACT CONTENT -----
export async function getContactContent(): Promise<ContactContent | null> {
  try {
    const { data, error } = await supabase
      .from('contact_content')
      .select('*')
      .eq('section_key', 'contact_page')
      .maybeSingle();

    if (error) {
      console.error('Error fetching contact content:', error);
      return null;
    }
    return data as ContactContent | null;
  } catch (error) {
    console.error('Error fetching contact content:', error);
    return null;
  }
}

// ----- UPDATE CONTACT CONTENT -----
export async function updateContactContent(data: any): Promise<ContactContent | null> {
  try {
    const { data: updated, error } = await supabase
      .from('contact_content')
      .update({ data, updated_at: new Date().toISOString() })
      .eq('section_key', 'contact_page')
      .select()
      .single();

    if (error) {
      console.error('Error updating contact content:', error);
      throw error;
    }
    return updated as ContactContent;
  } catch (error) {
    console.error('Error updating contact content:', error);
    throw error;
  }
}

// ----- SUBMIT CONTACT FORM -----
export async function submitContactForm(data: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at' | 'status'>): Promise<ContactSubmission | null> {
  try {
    const { data: created, error } = await supabase
      .from('contact_submissions')
      .insert([{ ...data, status: 'pending' }])
      .select()
      .single();

    if (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
    return created as ContactSubmission;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

// ----- GET ALL CONTACT SUBMISSIONS (ADMIN) -----
export async function getAllContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching contact submissions:', error);
      return [];
    }
    return data as ContactSubmission[];
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return [];
  }
}

// ----- UPDATE SUBMISSION STATUS -----
export async function updateSubmissionStatus(id: string, status: string): Promise<ContactSubmission | null> {
  try {
    const { data: updated, error } = await supabase
      .from('contact_submissions')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating submission status:', error);
      throw error;
    }
    return updated as ContactSubmission;
  } catch (error) {
    console.error('Error updating submission status:', error);
    throw error;
  }
}

// ----- DELETE CONTACT SUBMISSION -----
export async function deleteContactSubmission(id: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting contact submission:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error deleting contact submission:', error);
    throw error;
  }
}