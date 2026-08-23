// src/app/admin/gallery/page.tsx
'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { getAllGalleryImagesAdmin, deleteGalleryImage, GalleryImage } from '@/lib/supabase/gallery';
import { Pencil, Trash2, Plus, Loader2, Eye } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const loadImages = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllGalleryImagesAdmin();
      setImages(data);
    } catch (error) {
      console.error('Error loading gallery images:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm('Delete this image? This action cannot be undone.')) return;
    
    setDeleting(id);
    try {
      await deleteGalleryImage(id);
      await loadImages();
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Failed to delete. Please try again.');
    } finally {
      setDeleting(null);
    }
  }, [loadImages]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Gallery</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Manage gallery images</p>
        </div>
        <Link
          href="/admin/gallery/create"
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap"
        >
          <Plus size={16} /> Add Image
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
        </div>
      ) : images.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500">No images in gallery yet.</p>
          <Link
            href="/admin/gallery/create"
            className="inline-block mt-4 text-orange-500 hover:underline"
          >
            Upload your first image →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="relative aspect-square overflow-hidden">
                <OptimizedImage
                  src={image.image_url}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href={`/admin/gallery/edit/${image.id}`}
                    className="p-1.5 bg-white rounded-lg text-gray-600 hover:text-blue-600 transition-colors shadow-md"
                    title="Edit"
                  >
                    <Pencil size={14} />
                  </Link>
                  <button
                    onClick={() => handleDelete(image.id)}
                    disabled={deleting === image.id}
                    className="p-1.5 bg-white rounded-lg text-gray-600 hover:text-red-600 transition-colors shadow-md disabled:opacity-50"
                    title="Delete"
                  >
                    {deleting === image.id ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Trash2 size={14} />
                    )}
                  </button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-800 truncate">{image.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}