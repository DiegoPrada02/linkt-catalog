import { Link } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

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
    <Card
      elevation={0}
      className="
        group h-full overflow-hidden
        rounded-2xl sm:rounded-3xl
        border border-[rgba(13,27,42,0.12)]
        bg-white/70 backdrop-blur-md
        shadow-[0_10px_30px_rgba(13,27,42,0.10)]
        transition
        hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(13,27,42,0.16)]
      "
    >
      <CardActionArea className="h-full">
        {/* IMAGE */}
        <CardMedia className="relative">
          {image ? (
            <img
              src={image}
              alt={title}
              className="
                block w-full
                h-40 sm:h-52 lg:h-56
                object-cover
              "
              loading="lazy"
            />
          ) : null}

          {/* Subtle top gradient so text/badge can sit above if you want later */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-linear-to-b from-black/10 to-transparent" />

          {/* BADGE (secondary) */}
          {badge ? (
            <div className="absolute left-3 top-3">
              <span
                className="
                  inline-flex items-center
                  rounded-full
                  border border-(--secondary-main)
                  bg-white/80 backdrop-blur
                  px-2.5 py-1
                  text-xs font-extrabold
                  text-(--secondary-main)
                  shadow-sm
                "
              >
                {badge}
              </span>
            </div>
          ) : null}
        </CardMedia>

        {/* BODY */}
        <CardContent className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <h3
              className="
                text-base sm:text-lg
                font-extrabold tracking-tight
                text-(--ink)
                line-clamp-2
              "
              title={title}
            >
              {title}
            </h3>
          </div>

          <p
            className="
              mt-2
              text-sm sm:text-[0.95rem]
              leading-relaxed
              text-[rgba(13,27,42,0.72)]
              line-clamp-2
            "
            title={description}
          >
            {description}
          </p>

          <div
            className="
              mt-4
              inline-flex items-center gap-2
              text-sm font-extrabold
              text-(--ink)
            "
          >
            View
            <span className="transition-transform duration-150 group-hover:translate-x-0.5">
              →
            </span>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  return href ? (
    <Link to={href} className="block h-full">
      {content}
    </Link>
  ) : (
    <div className="h-full">{content}</div>
  );
}
