import { Metadata } from 'next';
import { GalleryForm } from '@/components/admin/gallery/GalleryForm';

export const metadata: Metadata = {
  title: 'Add Gallery Image | LPM Admin',
  description: 'Add a new image to gallery',
};

export default function CreateGalleryPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Add Gallery Image</h2>
          <p className="text-sm text-gray-500 mt-1">Upload a new image to gallery</p>
        </div>
      </div>
      <GalleryForm />
    </div>
  );
}