// src/lib/supabase/team.ts
import { supabase } from './client';

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image_url: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// ----- GET ALL TEAM MEMBERS -----
export async function getAllTeamMembers(): Promise<TeamMember[]> {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching team members:', error);
      return [];
    }
    return data as TeamMember[];
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

// ----- GET ALL TEAM MEMBERS FOR ADMIN -----
export async function getAllTeamMembersAdmin(): Promise<TeamMember[]> {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching team members:', error);
      return [];
    }
    return data as TeamMember[];
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

// ----- GET SINGLE TEAM MEMBER -----
export async function getTeamMemberById(id: string): Promise<TeamMember | null> {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching team member:', error);
      return null;
    }
    return data as TeamMember;
  } catch (error) {
    console.error('Error fetching team member:', error);
    return null;
  }
}

// ----- CREATE TEAM MEMBER -----
export async function createTeamMember(data: Omit<TeamMember, 'id' | 'created_at' | 'updated_at'>): Promise<TeamMember | null> {
  try {
    const { data: created, error } = await supabase
      .from('team_members')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating team member:', error);
      throw error;
    }
    return created as TeamMember;
  } catch (error) {
    console.error('Error creating team member:', error);
    throw error;
  }
}

// ----- UPDATE TEAM MEMBER -----
export async function updateTeamMember(id: string, data: Partial<TeamMember>): Promise<TeamMember | null> {
  try {
    const { data: updated, error } = await supabase
      .from('team_members')
      .update({ ...data, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating team member:', error);
      throw error;
    }
    return updated as TeamMember;
  } catch (error) {
    console.error('Error updating team member:', error);
    throw error;
  }
}

// ----- DELETE TEAM MEMBER -----
export async function deleteTeamMember(id: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting team member:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error deleting team member:', error);
    throw error;
  }
}

// ----- UPLOAD TEAM IMAGE -----
export async function uploadTeamImage(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `team/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('team-images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: urlData } = supabase.storage
    .from('team-images')
    .getPublicUrl(filePath);

  return urlData.publicUrl;
}

// ----- DELETE TEAM IMAGE -----
export async function deleteTeamImage(imageUrl: string): Promise<void> {
  try {
    const url = new URL(imageUrl);
    const pathParts = url.pathname.split('/');
    const bucketIndex = pathParts.indexOf('team-images');
    if (bucketIndex === -1) return;
    
    const filePath = pathParts.slice(bucketIndex + 1).join('/');
    
    const { error } = await supabase.storage
      .from('team-images')
      .remove([filePath]);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting image:', error);
  }
}