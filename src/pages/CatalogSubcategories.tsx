import { Link, Navigate, useParams } from "react-router-dom";
import AppShell from "../components/AppShell";
import Grid from "../components/Grid";
import PageTitle from "../components/PageTitle";
import CatalogCard from "../components/ui/CatalogCard";
import { CATEGORIES, pages } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

export default function CatalogSubcategories() {
  const { categoryId } = useParams();
  const { t } = useLanguage();

  const category = CATEGORIES.find((c) => c.id === categoryId);
  if (!category) return <Navigate to="/catalog" replace />;

  const catalogLabel = pages.find((p) => p.path === "/catalog")?.label ?? {
    en: "Catalog",
    es: "Catálogo",
  };

  const backLabel = {
    en: `Back to ${t(catalogLabel)}`,
    es: `Volver a ${t(catalogLabel)}`,
  };
  const detailsBadge = { en: "Details", es: "Detalles" };

  return (
    <div className="rounded-3xl bg-(--background-default)/80 backdrop-blur-md shadow-xl">
      <AppShell>
        <div className="body-style">
          <div className="mb-8">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-[rgba(13,27,42,0.72)]">
              <Link
                to="/catalog"
                className="font-extrabold text-(--primary-main) hover:underline underline-offset-4"
              >
                {t(catalogLabel)}
              </Link>

              <span className="opacity-50">/</span>

              <span className="font-extrabold text-(--ink)">
                {t(category.title)}
              </span>
            </div>

            <PageTitle
              title={t(category.title)}
              subtitle={t(category.description)}
              right={
                <Link
                  to={`/catalog/${category.title}`}
                  className="
                    rounded-xl
                    border border-(--primary-light)
                    bg-white/70 backdrop-blur
                    px-4 py-2
                    text-sm font-extrabold
                    text-(--ink)
                    transition
                    hover:bg-white/90
                  "
                >
                  {t(backLabel)}
                </Link>
              }
              extraContent={
                <Grid>
                  {category.subcategories.map((s) => (
                    <CatalogCard
                      key={s.id}
                      title={t(s.title)}
                      description={t(s.description)}
                      image={s.image}
                      href={`/catalog/${category.id}/${s.id}`}
                      badge={t(detailsBadge)}
                    />
                  ))}
                </Grid>
              }
            />
          </div>
        </div>
      </AppShell>
    </div>
  );
}
