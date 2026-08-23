// 'use client';

// import { memo, useState, useCallback, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { updateHomeSection, uploadHomeImage, deleteHomeImage } from '@/lib/supabase/homepage';
// import { Loader2, Save, X, Plus, Trash2, Upload, Image as ImageIcon } from 'lucide-react';
// import OptimizedImage from '@/components/ui/OptimizedImage';

// interface HomepageFormProps {
//   sectionKey: string;
//   initialData: any;
// }

// const HomepageForm = memo(function HomepageForm({ sectionKey, initialData }: HomepageFormProps) {
//   const router = useRouter();
//   const [formData, setFormData] = useState(initialData || {});
//   const [loading, setLoading] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleChange = useCallback((field: string, value: any) => {
//     setFormData((prev: any) => ({ ...prev, [field]: value }));
//   }, []);

//   const handleArrayChange = useCallback((field: string, index: number, value: string) => {
//     setFormData((prev: any) => {
//       const newArray = [...(prev[field] || [])];
//       newArray[index] = value;
//       return { ...prev, [field]: newArray };
//     });
//   }, []);

//   const addArrayItem = useCallback((field: string) => {
//     setFormData((prev: any) => ({
//       ...prev,
//       [field]: [...(prev[field] || []), ''],
//     }));
//   }, []);

//   const removeArrayItem = useCallback((field: string, index: number) => {
//     setFormData((prev: any) => ({
//       ...prev,
//       [field]: prev[field].filter((_: any, i: number) => i !== index),
//     }));
//   }, []);

//   // Handle image upload - 15MB limit
//   const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     // Validate file type
//     if (!file.type.startsWith('image/')) {
//       setError('Please upload an image file');
//       return;
//     }

//     // Validate file size (max 15MB) - UPDATED
//     if (file.size > 15 * 1024 * 1024) {
//       setError('Image size should be less than 15MB');
//       return;
//     }

//     setUploading(true);
//     setError('');

//     try {
//       const url = await uploadHomeImage(file, sectionKey.replace('home_', ''));
//       handleChange('image_url', url);
//       setSuccess('Image uploaded successfully! 🎉');
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (err) {
//       setError('Failed to upload image. Please try again.');
//       console.error('Upload error:', err);
//     } finally {
//       setUploading(false);
//       if (fileInputRef.current) {
//         fileInputRef.current.value = '';
//       }
//     }
//   }, [sectionKey, handleChange]);

//   // Handle image removal
//   const handleRemoveImage = useCallback(async () => {
//     if (formData.image_url) {
//       try {
//         await deleteHomeImage(formData.image_url);
//         handleChange('image_url', '');
//         setSuccess('Image removed successfully! 🎉');
//         setTimeout(() => setSuccess(''), 3000);
//       } catch (err) {
//         setError('Failed to remove image. Please try again.');
//         console.error('Delete error:', err);
//       }
//     } else {
//       handleChange('image_url', '');
//     }
//   }, [formData.image_url, handleChange]);

//   const handleSubmit = useCallback(async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       await updateHomeSection(sectionKey, formData);
//       setSuccess('Content updated successfully! 🎉');
//       router.refresh();
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (err) {
//       setError('Failed to update content. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   }, [sectionKey, formData, router]);

//   const hasPoints = sectionKey === 'home_mission';

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm space-y-6 max-w-4xl">
//       <div className="border-b border-gray-200 pb-4">
//         <h3 className="text-lg font-semibold text-orange-600">Section Content</h3>
//         <p className="text-sm text-gray-500 mt-1">Edit the content below and click Save</p>
//       </div>

//       {/* Title */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Title</label>
//         <input
//           type="text"
//           value={formData.title || ''}
//           onChange={(e) => handleChange('title', e.target.value)}
//           className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
//           placeholder="Enter title..."
//         />
//       </div>

//       {/* Subtitle (Hero only) */}
//       {sectionKey === 'home_hero' && (
//         <div>
//           <label className="block text-sm font-medium mb-1">Subtitle</label>
//           <input
//             type="text"
//             value={formData.subtitle || ''}
//             onChange={(e) => handleChange('subtitle', e.target.value)}
//             className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
//             placeholder="Enter subtitle..."
//           />
//         </div>
//       )}

//       {/* Description */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Description</label>
//         <textarea
//           value={formData.description || ''}
//           onChange={(e) => handleChange('description', e.target.value)}
//           rows={4}
//           className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
//           placeholder="Enter description..."
//         />
//       </div>

//       {/* Points (Mission only) */}
//       {hasPoints && (
//         <div>
//           <label className="block text-sm font-medium mb-1">Mission Points</label>
//           {(formData.points || []).map((point: string, index: number) => (
//             <div key={index} className="flex gap-2 mb-2">
//               <input
//                 type="text"
//                 value={point}
//                 onChange={(e) => handleArrayChange('points', index, e.target.value)}
//                 className="flex-1 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
//                 placeholder={`Point ${index + 1}`}
//               />
//               <button
//                 type="button"
//                 onClick={() => removeArrayItem('points', index)}
//                 className="p-2 text-red-500 hover:text-red-700 transition-colors"
//               >
//                 <Trash2 size={18} />
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => addArrayItem('points')}
//             className="flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium"
//           >
//             <Plus size={16} /> Add Point
//           </button>
//         </div>
//       )}

//       {/* Image Upload - UPDATED text to show 15MB */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Image</label>
        
//         {formData.image_url ? (
//           <div className="relative w-full max-w-xs">
//             <div className="relative h-48 rounded-lg overflow-hidden border">
//               <OptimizedImage
//                 src={formData.image_url}
//                 alt="Preview"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex gap-2 mt-2">
//               <button
//                 type="button"
//                 onClick={handleRemoveImage}
//                 className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors flex items-center gap-1"
//               >
//                 <X size={14} /> Remove
//               </button>
//               <label className="px-3 py-1.5 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors cursor-pointer flex items-center gap-1">
//                 <Upload size={14} /> Change
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                   disabled={uploading}
//                 />
//               </label>
//             </div>
//           </div>
//         ) : (
//           <label className="flex flex-col items-center justify-center w-full max-w-xs h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
//             <div className="flex flex-col items-center justify-center pt-5 pb-6">
//               <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
//               <p className="text-sm text-gray-500">Click to upload image</p>
//               <p className="text-xs text-gray-400">PNG, JPG, WEBP (max 15MB)</p>
//             </div>
//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="hidden"
//               disabled={uploading}
//             />
//           </label>
//         )}
//         {uploading && (
//           <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
//             <Loader2 className="w-4 h-4 animate-spin" />
//             Uploading...
//           </div>
//         )}
//       </div>

//       {error && (
//         <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2">
//           <span>❌</span> {error}
//         </div>
//       )}
//       {success && (
//         <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm flex items-center gap-2">
//           <span>✅</span> {success}
//         </div>
//       )}

//       <div className="flex gap-3 pt-4 border-t border-gray-200">
//         <button
//           type="submit"
//           disabled={loading || uploading}
//           className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center gap-2"
//         >
//           {loading && <Loader2 className="w-4 h-4 animate-spin" />}
//           {loading ? 'Saving...' : <><Save size={16} /> Save Changes</>}
//         </button>
//         <button
//           type="button"
//           onClick={() => router.push('/admin/homepage')}
//           className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
//         >
//           <X size={16} /> Cancel
//         </button>
//       </div>
//     </form>
//   );
// });

// HomepageForm.displayName = 'HomepageForm';
// export default HomepageForm;


// src/components/admin/homepage/HomepageForm.tsx
'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for each section form
const HeroForm = dynamic(() => import('./HeroForm'), { ssr: false });
const MissionForm = dynamic(() => import('./MissionForm'), { ssr: false });
const PartnersForm = dynamic(() => import('./PartnersForm'), { ssr: false });
const GetInvolvedForm = dynamic(() => import('./GetInvolvedForm'), { ssr: false });
const SocialActivitiesForm = dynamic(() => import('./SocialActivitiesForm'), { ssr: false });
const CTAForm = dynamic(() => import('./CTAForm'), { ssr: false });
const UpcomingEventsForm = dynamic(() => import('./UpcomingEventsForm'), { ssr: false });
const TeamForm = dynamic(() => import('./TeamForm'), { ssr: false });
const TestimonialsForm = dynamic(() => import('./TestimonialsForm'), { ssr: false });
const GalleryForm = dynamic(() => import('./GalleryForm'), { ssr: false });
const BlogForm = dynamic(() => import('./BlogForm'), { ssr: false });

interface HomepageFormProps {
  sectionKey: string;
  initialData: any;
}

const HomepageForm = memo(function HomepageForm({ sectionKey, initialData }: HomepageFormProps) {
  // Return the appropriate form based on section key
  switch (sectionKey) {
    case 'home_hero':
      return <HeroForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_mission':
      return <MissionForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_partners':
      return <PartnersForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_get_involved':
      return <GetInvolvedForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_social_activities':
      return <SocialActivitiesForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_cta':
      return <CTAForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_upcoming_events':
      return <UpcomingEventsForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_team':
      return <TeamForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_testimonials':
      return <TestimonialsForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_gallery':
      return <GalleryForm sectionKey={sectionKey} initialData={initialData} />;
    case 'home_blog':
      return <BlogForm sectionKey={sectionKey} initialData={initialData} />;
    default:
      return <div className="text-red-500">Unknown section: {sectionKey}</div>;
  }
});

HomepageForm.displayName = 'HomepageForm';
export default HomepageForm;