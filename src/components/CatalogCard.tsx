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
  const Inner = (
    <Card
      className="
        group relative h-full
        rounded-3xl
        border border-(--background-paper)
        bg-(--background-paper)
        shadow-sm
        transition
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      <CardContent className="p-0">
        <CardActionArea>
          <CardMedia className="flex justify-center">
            {image ? (
              <img
                src={image}
                alt={title}
                className="
                  h-40 w-full
                  rounded-2xl
                  object-cover
                  shadow-2xl
                "
              />
            ) : null}
          </CardMedia>

          <div className="mt-4 px-4">
            <div className="text-base font-semibold text-(--primary-main)">
              {title}
            </div>

            <div className="mt-1 line-clamp-2 text-sm text-[rgba(2,62,138,0.64)]">
              {description}
            </div>
          </div>

          <div className="mt-4 px-4 pb-4 text-sm font-medium text-(--primary-main)">
            <span className="inline-flex items-center gap-2">
              View
              <span className="transition group-hover:translate-x-0.5">→</span>

              {badge ? (
                <span
                  className="
                    rounded-full
                    border border-(--secondary-main)
                    bg-(--background-default)
                    px-2.5 py-1
                    text-xs
                    text-(--secondary-main)
                  "
                >
                  {badge}
                </span>
              ) : null}
            </span>
          </div>
        </CardActionArea>
      </CardContent>
    </Card>
  );

  return href ? (
    <Link to={href} className="block h-full">
      {Inner}
    </Link>
  ) : (
    <div className="h-full">{Inner}</div>
  );
}
