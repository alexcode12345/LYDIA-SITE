import { useState } from 'react';
import { Home } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  containerClassName = '',
  loading = 'lazy',
  fetchPriority = 'auto',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F3EDE3] via-[#EAE0D2] to-[#DDD0BE] p-6 text-center text-[#635950] ${containerClassName}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#9A763A]/30 bg-white/60 text-[#9A763A]">
          <Home className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="font-editorial text-lg font-medium text-[#1D1B19]">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#ECE4D8] ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ease-out ${
          loaded ? 'opacity-100' : 'opacity-90'
        } ${className}`}
      />
    </div>
  );
}
