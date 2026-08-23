// src/app/admin/gallery/edit/[id]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGalleryImageById } from '@/lib/supabase/gallery';
import { GalleryForm } from '@/components/admin/gallery/GalleryForm';
import { cache } from 'react';

export const metadata: Metadata = {
  title: 'Edit Gallery Image | LPM Admin',
  description: 'Edit gallery image details',
};

const getImage = cache(async (id: string) => {
  return await getGalleryImageById(id);
});

export default async function EditGalleryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const image = await getImage(id);

  if (!image) {
    notFound();
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Edit: {image.title}</h2>
          <p className="text-sm text-gray-500 mt-1">Update gallery image details</p>
        </div>
        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full font-mono">
          {image.id}
        </span>
      </div>
      <GalleryForm initialData={image} />
    </div>
  );
}