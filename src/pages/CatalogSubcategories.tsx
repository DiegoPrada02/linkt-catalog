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

    <div className="rounded-3xl bg-(--background-default)/80 backdrop-blur-md shadow-xl">
      <AppShell>
      <div className="body-style">
              <div className="mb-8">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Link
            to="/catalog"
            className="transition hover:underline underline-offset-4"
            style={{ color: "var(--dusk-blue)" }}
          >
            Catalog
          </Link>

          <span style={{ color: "var(--dusk-blue)" }}>/</span>

          <span style={{ color: "var(--dusk-blue)", fontWeight: 600 }}>
            {category.title}
          </span>
        </div>

        <PageTitle
          title={category.title}
          subtitle={category.description}
          right={
            <Link
              to="/catalog"
              className="rounded-xl border px-4 py-2 text-sm font-semibold transition"
              style={{
                borderColor: "var(--dusk-blue)",
                color: "var(--alabaster-grey)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--prussian-blue)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Back to categories
            </Link>
          }
        />
      </div>

      {/* Subcategory grid */}
      <Grid>
        {category.subcategories.map((s) => (
          <CatalogCard
            key={s.id}
            title={s.title}
            description={s.description}
            image={s.image}
            href={`/catalog/${category.id}/${s.id}`}
            badge="Details"
          />
        ))}
      </Grid>
      </div>
    </AppShell>

    </div>
  );
}
