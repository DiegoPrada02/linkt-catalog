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
        p-0
        group relative h-full
        rounded-3xl
        border border-(--background-paper)
        shadow-sm
        transition
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      <CardContent className="m-0 p-0 bg-(--background-paper)">
        <CardActionArea className="m-0 p-0 h-full">
          <CardMedia className="flex justify-center">
            {image ? (
              <img
                src={image}
                alt={title}
                className="
                  h-60 w-full
                  object-cover
                  shadow-xl
                "
              />
            ) : null}
          </CardMedia>


          <div className="mt-4 px-4 font-sans">
            <div className="text-xl font-semibold text-(--primary-main) bold">
              {title}
            </div>

            <div className="mt-1 line-clamp-2 text-md text-(--ink)">
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
