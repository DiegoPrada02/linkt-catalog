// src/components/vidimg.tsx
type VidimgProps = {
  source: string;
  isVideo: boolean;
  title?: string;

  // Optional extras (won’t break existing usage)
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

  const base =
    "w-full h-full object-cover block"; // consistent sizing + no inline gaps

  if (isVideo) {
    return (
      <video
        src={source}
        poster={poster}
        className={[base, className].join(" ")}
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
      className={[base, className].join(" ")}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
    />
  );
}
