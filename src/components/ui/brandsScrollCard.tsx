import { cn } from "../../lib/utils";

type BrandScrollCardProps = {
  img: string;
  altT: string;
};

export default function BrandScrollCard({ img, altT }: BrandScrollCardProps) {
  return (
    <figure
      className={cn(
        "mx-3 flex h-24 w-40 items-center justify-center",
        "rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md",
        "shadow-[0_10px_30px_rgba(13,27,42,0.10)]",
        "transition hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(13,27,42,0.16)]"
      )}
      aria-label={altT}
      title={altT}
    >
      <img
        src={img}
        alt={altT}
        className="h-20 w-auto object-contain"
        loading="lazy"
        draggable={false}
      />
    </figure>
  );
}
