import { supabase } from './client';

export interface Donation {
  id: string;
  amount: number;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  case_description: string;
  payment_method: string;
  card_holder_name: string;
  card_last_four: string;
  status: string;
  transaction_id: string;
  created_at: string;
  updated_at: string;
}

// ----- CREATE DONATION -----
export async function createDonation(data: Omit<Donation, 'id' | 'created_at' | 'updated_at'>): Promise<Donation | null> {
  try {
    // Generate a simple transaction ID
    const transaction_id = `TXN-${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    
    const { data: created, error } = await supabase
      .from('donations')
      .insert([{ ...data, transaction_id, status: 'pending' }])
      .select()
      .single();

    if (error) {
      console.error('Error creating donation:', error);
      throw error;
    }
    return created as Donation;
  } catch (error) {
    console.error('Error creating donation:', error);
    throw error;
  }
}

// ----- GET ALL DONATIONS (ADMIN) -----
export async function getAllDonationsAdmin(): Promise<Donation[]> {
  try {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching donations:', error);
      return [];
    }
    return data as Donation[];
  } catch (error) {
    console.error('Error fetching donations:', error);
    return [];
  }
}

// ----- GET DONATION BY ID -----
export async function getDonationById(id: string): Promise<Donation | null> {
  try {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching donation:', error);
      return null;
    }
    return data as Donation;
  } catch (error) {
    console.error('Error fetching donation:', error);
    return null;
  }
}

// ----- UPDATE DONATION STATUS -----
export async function updateDonationStatus(id: string, status: string): Promise<Donation | null> {
  try {
    const { data: updated, error } = await supabase
      .from('donations')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating donation status:', error);
      throw error;
    }
    return updated as Donation;
  } catch (error) {
    console.error('Error updating donation status:', error);
    throw error;
  }
}

// ----- DELETE DONATION -----
export async function deleteDonation(id: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('donations')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting donation:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error deleting donation:', error);
    throw error;
  }
}

// ----- GET DONATION STATS -----
export async function getDonationStats() {
  try {
    const { data, error } = await supabase
      .from('donations')
      .select('status, amount');

    if (error) {
      console.error('Error fetching donation stats:', error);
      return null;
    }

    const total = data.reduce((sum, d) => sum + d.amount, 0);
    const count = data.length;
    const pending = data.filter(d => d.status === 'pending').length;
    const completed = data.filter(d => d.status === 'completed').length;
    const failed = data.filter(d => d.status === 'failed').length;

    return { total, count, pending, completed, failed };
  } catch (error) {
    console.error('Error fetching donation stats:', error);
    return null;
  }
}