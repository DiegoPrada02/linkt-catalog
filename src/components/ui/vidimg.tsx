// src/components/vidimg.tsx
type VidimgProps = {
  source: string;
  isVideo: boolean;
  title?: string;
  // Optional extras (won't break existing usage)
  poster?: string;
  className?: string;
  priority?: boolean; // if true, don't lazy-load images
};

export default function Vidimg({
  source,
  isVideo,
  title,
  poster,
  className = "",
  priority = false,
}: VidimgProps) {
  const safeTitle = typeof title === "string" ? title : "";
  
  if (isVideo) {
    return (
      <video
        src={source}
        poster={poster}
        className={`w-full h-full object-cover block ${className}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={safeTitle}
        style={{ objectPosition: 'center center' }}
      />
    );
  }
  
  return (
    <img
      src={source}
      alt={safeTitle}
      className={`w-full h-full object-contain block ${className}`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      style={{ objectPosition: 'center center' }}
    />
  );
}