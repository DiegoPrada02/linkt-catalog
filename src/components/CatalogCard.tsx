import { Link } from "react-router-dom";
import Card from "@mui/material/card"
import { CardActionArea, CardContent, CardMedia } from "@mui/material";

type CatalogCardProps = {
  title: string;
  description: string;
  href?: string;
  badge?: string;
  image: string;
};

export default function CatalogCard({ title, description, href, badge, image }: CatalogCardProps) {
  const Inner = (
    <Card className="group relative h-full rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <CardContent className="p-0">
        <CardActionArea>
            <CardMedia className="flex justify-center">
              {image ? ( <img src={image} alt={title} className="h-40 w-full object-cover rounded-2xl
              shadow-2xl"/>) : null}
            </CardMedia>

        <div className="mt-4">
          <div className="text-base font-semibold">{title}</div>
          <div className="mt-1 line-clamp-2 text-sm text-slate-600">{description}</div>
        </div>

        <div className="mt-4 text-sm font-medium text-slate-900">
          <span className="inline-flex items-center gap-2">
            View <span className="transition group-hover:translate-x-0.5">→</span>
            {badge ? (
            <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600">
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
