// src/components/vidimg.tsx
type VidimgProps = {
  source: string;
  isVideo: boolean;
  title?: string;
};

export default function Vidimg({ source, isVideo, title }: VidimgProps) {
  const safeTitle = typeof title === "string" ? title : "";

  if (isVideo) {
    return (
      <video
        src={source}
        className="w-full h-full object-cover rounded-3xl py-8"
        autoPlay
        muted
        loop
        playsInline
        aria-label={safeTitle}
      />
    );
  }

  return (
    <img
      src={source}
      alt={safeTitle}
      className="w-full h-full object-cover"
    />
  );
}
