import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getContactContent } from '@/lib/supabase/contact';
import ContactForm  from '@/components/admin/contact/ContactForm';
import { cache } from 'react';

export const metadata: Metadata = {
  title: 'Edit Contact Us | LPM Admin',
  description: 'Edit Contact Us page content',
};

const getContactData = cache(async () => {
  return await getContactContent();
});

export default async function EditContactPage() {
  const section = await getContactData();

  if (!section) {
    notFound();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Edit Contact Us Page</h2>
          <p className="text-sm text-gray-500 mt-1">Update contact information</p>
        </div>
        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full font-mono">
          contact_page
        </span>
      </div>
      <ContactForm sectionKey="contact_page" initialData={section.data} />
    </div>
  );
}