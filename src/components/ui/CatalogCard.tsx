import { Link } from "react-router-dom";
import { BorderBeam } from "./border-beam";

type CatalogCardProps = {
  title: string;
  description: string;
  href?: string;
  badge?: string;
  image: string;
};

export default function CatalogCard({
  title,
  description,
  href,
  badge,
  image,
}: CatalogCardProps) {
  const content = (
    <article
      className="
        group relative h-full overflow-hidden
        rounded-2xl
        bg-white
        shadow-[0_2px_20px_rgba(0,0,0,0.08)]
        transition-all duration-500 ease-out
        hover:shadow-[0_8px_40px_rgba(0,0,0,0.16)]
        hover:-translate-y-2
        border border-slate-200/60
      "
    >
      {/* Image Container with Overlay Effect */}
      <div className="relative aspect-4/3 overflow-hidden bg-linear-to-br from-slate-100 to-slate-50">
        <img
          src={image}
          alt={title}
          className="
            absolute inset-0 w-full h-full
            object-cover object-center
            transition-all duration-700 ease-out
            group-hover:scale-110 group-hover:rotate-1
          "
          loading="lazy"
        />

        {/* Gradient overlay that fades on hover */}
        <div
          className="
            absolute inset-0
            bg-linear-to-t from-slate-900/40 via-slate-900/10 to-transparent
            transition-opacity duration-500
            group-hover:opacity-0
          "
        />

        {/* Badge */}
        {badge && (
          <div className="absolute right-3 top-3 z-10">
            <span
              className="
                inline-block
                rounded-full
                bg-linear-to-r from-orange-500 to-pink-500
                px-4 py-1.5
                text-xs font-bold uppercase tracking-wider
                text-white
                shadow-lg
                backdrop-blur-sm
                transition-transform duration-300
                group-hover:scale-105
              "
            >
              {badge}
            </span>
          </div>
        )}

        {/* Decorative corner accent */}
        <div
          className="
            absolute left-0 bottom-0 w-20 h-20
            bg-linear-to-tr from-slate-900/20 to-transparent
            transition-all duration-500
            group-hover:w-24 group-hover:h-24
          "
        />
      </div>

      {/* Content Section */}
      <div className="relative p-6 bg-(--ink) flex flex-col h-full min-h-45">
        {/* Subtle top border accent */}
        <div
          className="
            absolute top-0 left-6 right-6 h-px
            bg-linear-to-r from-transparent via-white/20 to-transparent
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Title */}
            <h3
              className="
                font-bold text-xl leading-tight tracking-tight
                text-(--background-paper)
                transition-colors duration-300
                group-hover:text-(--background-paper)/90
                line-clamp-2
              "
              style={{ fontFamily: "'Sora', 'system-ui', sans-serif" }}
            >
              {title}
            </h3>

            {/* Description - fixed height */}
            <p
              className="
                text-sm leading-relaxed
                text-(--background-paper)/85
                line-clamp-3
                min-h-18
              "
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {description}
            </p>
          </div>

          {/* CTA with animated arrow */}
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-(--background-paper)">
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Explore Details
            </span>
            <svg
              className="
                w-4 h-4
                transition-all duration-300
                group-hover:translate-x-1 group-hover:text-orange-400
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>

        {/* Animated bottom accent bar */}
        <div
          className="
            absolute bottom-0 left-0 h-1
            bg-linear-to-r from-orange-500 via-pink-500 to-purple-500
            w-0 transition-all duration-500 ease-out
            group-hover:w-full
          "
        />
      </div>
      <BorderBeam size={120} duration={8} className="pointer-events-none" />
    </article>
  );

  return href ? (
    <Link
      to={href}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-2xl"
    >
      {content}
    </Link>
  ) : (
    <div className="h-full">{content}</div>
  );
}
