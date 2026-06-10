'use client';


interface SectionSkeletonProps {
  type?: 'hero' | 'partners' | 'grid' | 'two-column' | 'cta' | 'team' | 'testimonials' | 'gallery' | 'blog';
}

export default function SectionSkeleton({ type = 'grid' }: SectionSkeletonProps) {
  


  if (type === 'hero') {
    return (
      <div className="relative min-h-[90vh] flex items-center justify-center bg-gray-900">
        <div className="text-center space-y-6 px-4">
          <div className="w-32 h-8 bg-gray-700 rounded-full mx-auto animate-pulse" />
          <div className="w-80 h-16 bg-gray-700 rounded-xl mx-auto animate-pulse" />
          <div className="w-96 h-12 bg-gray-700 rounded-lg mx-auto animate-pulse" />
          <div className="flex gap-4 justify-center">
            <div className="w-32 h-12 bg-gray-700 rounded-xl animate-pulse" />
            <div className="w-32 h-12 bg-gray-700 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'partners') {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto animate-pulse" />
            <div className="w-64 h-4 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mt-2 animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'two-column') {
    return (
      <div className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="w-80 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="w-full h-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                ))}
              </div>
            </div>
            <div className="h-[400px] bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'cta') {
    return (
      <div className="relative py-24 bg-gradient-to-r from-orange-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="w-32 h-4 bg-white/20 rounded animate-pulse" />
              <div className="w-96 h-12 bg-white/20 rounded animate-pulse" />
              <div className="w-full h-16 bg-white/20 rounded animate-pulse" />
              <div className="w-40 h-12 bg-white/20 rounded animate-pulse" />
            </div>
            <div className="h-96 bg-white/10 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'team') {
    return (
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
            <div className="w-64 h-10 bg-gray-200 dark:bg-gray-700 rounded mx-auto mt-2 animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6 bg-white dark:bg-gray-800 rounded-2xl p-6">
                <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <div className="flex-1 space-y-2">
                  <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="w-full h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'testimonials') {
    return (
      <div className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-6 space-y-4">
                  <div className="w-full h-20 bg-white/20 rounded animate-pulse" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 animate-pulse" />
                    <div className="w-32 h-4 bg-white/20 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="w-32 h-4 bg-white/20 rounded animate-pulse" />
              <div className="w-64 h-10 bg-white/20 rounded animate-pulse" />
              <div className="w-full h-24 bg-white/20 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'gallery') {
    return (
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
            <div className="w-48 h-10 bg-gray-200 dark:bg-gray-700 rounded mx-auto mt-2 animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'blog') {
    return (
      <div className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
            <div className="w-48 h-10 bg-gray-200 dark:bg-gray-700 rounded mx-auto mt-2 animate-pulse" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                <div className="h-56 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="w-full h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="flex justify-between">
                    <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Default grid skeleton
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
          <div className="w-64 h-10 bg-gray-200 dark:bg-gray-700 rounded mx-auto mt-2 animate-pulse" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}