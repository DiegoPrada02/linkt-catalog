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
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 active:scale-95",
      )}
      style={{
        borderRadius: "18px",
        border: "1px solid var(--ink-12)",
        background:
          "linear-gradient(160deg, #ffffff 0%, var(--background-default) 100%)",
        boxShadow: "0 4px 16px var(--ink-12)",
      }}
      aria-label={altT}
      title={altT}
    >
      {/* Banner-style background slab */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-18%",
          top: "-40%",
          width: "55%",
          height: "180%",
          background:
            "linear-gradient(135deg, var(--gradient-blue-light), var(--gradient-blue-soft))",
          transform: "rotate(-12deg)",
          borderRadius: "10px",
          opacity: 0.3,
          pointerEvents: "none",
          transition: "opacity 0.3s ease",
        }}
        className="group-hover:opacity-50"
      />

      {/* Logo */}
      <img
        src={img}
        alt={altT}
        className="relative z-10 h-16 w-auto max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
        style={{
          filter: "grayscale(15%)",
          transition: "transform 0.3s ease, filter 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(15%)")}
        loading="lazy"
        draggable={false}
      />

      {/* Bottom streak — hover only */}
      <div
        aria-hidden="true"
        className="group-hover:opacity-100"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          borderRadius: "0 0 18px 18px",
          background:
            "linear-gradient(90deg, transparent, var(--ink-18) 40%, var(--ink-18) 60%, transparent)",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </figure>
  );
}
