// src/components/ui/vidimg.tsx
type VidimgProps = {
  source: string;
  isVideo: boolean;
  title?: string;
  poster?: string;
  className?: string;
  priority?: boolean;
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

  // Both video and img fill the parent box completely via object-cover.
  // The parent (Hero) is the one that sets the fixed width + height.
  const base = `w-full h-full object-cover block ${className}`;

  if (isVideo) {
    return (
      <video
        src={source}
        poster={poster}
        className={base}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={safeTitle}
      />
    );
  }

  return (
    <img
      src={source}
      alt={safeTitle}
      className={base}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
    />
  );
}
