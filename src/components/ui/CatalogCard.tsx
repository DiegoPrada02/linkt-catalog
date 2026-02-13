import { Link } from "react-router-dom";
import { Card, CardActionArea, CardContent } from "@mui/material";

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
        rounded-3xl
        border border-[rgba(13,27,42,0.12)]
        bg-white/70 backdrop-blur-md
        shadow-[0_12px_35px_rgba(13,27,42,0.10)]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(13,27,42,0.18)]
      "
    >
      <CardActionArea className="h-full flex flex-col">
        
        {/* IMAGE SECTION */}
        {image && (
          <div className="relative w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="
                block w-full
                h-44 sm:h-52 lg:h-60
                object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
              loading="lazy"
            />

            {/* Badge */}
            {badge && (
              <div className="absolute left-4 top-4">
                <span
                  className="
                    rounded-full
                    bg-(--secondary-main)
                    text-white
                    px-3 py-1
                    text-xs font-bold
                    shadow-md
                  "
                >
                  {badge}
                </span>
              </div>
            )}
          </div>
        )}

        {/* TEXT SECTION */}
        <CardContent
          className="
            flex flex-col justify-between
            grow
            p-5
            bg-(--ink)
          "
        >
          <div>
            <h3
              className="
                text-lg sm:text-xl
                font-extrabold
                tracking-tight
                text-(--background-paper)
                line-clamp-2
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-relaxed
                text-[rgba(224,225,221,0.85)]
                line-clamp-3
              "
            >
              {description}
            </p>
          </div>

          {/* CTA */}
          <div
            className="
              mt-6
              inline-flex items-center gap-2
              text-sm font-bold
              text-(--background-paper)
              transition-transform duration-200
              group-hover:translate-x-1
            "
          >
            View →
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
