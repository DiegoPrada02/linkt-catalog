import { cn } from "../../lib/utils";

type BrandScrollCardProps = {
  img: string;
  altT: string;
};

export default function BrandScrollCard({ img, altT }: BrandScrollCardProps) {
  return (
    <figure
      className={cn(
        "relative group mx-3 flex h-28 w-44 items-center justify-center overflow-hidden",
        "rounded-2xl border border-(--ink-12) bg-white shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:shadow-lg hover:-translate-y-1 hover:border-(--ink-18)",
        "active:scale-95"
      )}
      aria-label={altT}
      title={altT}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-blue-50/30 opacity-60" />
      
      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-linear-to-t from-(--ink)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-blue-100/40 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Logo image */}
      <img
        src={img}
        alt={altT}
        className="relative z-10 h-16 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105 filter grayscale-20 group-hover:grayscale-0"
        loading="lazy"
        draggable={false}
      />
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-(--ink)/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </figure>
  );
}