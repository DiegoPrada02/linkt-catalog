import { Link, Navigate, useParams } from "react-router-dom";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CatalogCard from "../components/CatalogCard";
import { CATEGORIES } from "../data/catalog";

export default function CatalogSubcategories() {
  const { categoryId } = useParams();
  const category = CATEGORIES.find((c) => c.id === categoryId);

  if (!category) return <Navigate to="/catalog" replace />;

  return (
    <AppShell>
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <Link className="hover:text-slate-900" to="/catalog">
            Catalog
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900">{category.title}</span>
        </div>

        <PageTitle
          title={category.title}
          subtitle={category.description}
          right={
            <Link
              to="/catalog"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Back to categories
            </Link>
          }
        />
      </div>

      <Grid>
        {category.subcategories.map((s) => (
          <CatalogCard
            key={s.id}
            title={s.title}
            description={s.description}
            image={s.image}
            href="#"
            badge="Subcategory"
          />
        ))}
      </Grid>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
        <div className="font-semibold text-slate-900">Next step</div>
        <p className="mt-1">
          When you’re ready, we can add a third level (products/items page) at{" "}
          <span className="font-mono">/catalog/:categoryId/:subcategoryId</span>, pull data
          from a CMS, and add SEO.
        </p>
      </div>
    </AppShell>
  );
}
