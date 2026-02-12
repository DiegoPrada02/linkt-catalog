import { useMemo, useState } from "react";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CatalogCard from "../components/CatalogCard";
import { CATEGORIES, pageTitles } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

export default function CatalogCategories() {
  const [query, setQuery] = useState("");
  const { t } = useLanguage();

  const ui = {
    searchLabel: { en: "Search categories", es: "Buscar categorías" },
    searchPlaceholder: { en: "Search categories...", es: "Buscar categorías..." },
    items: { en: "items", es: "artículos" },
    empty: {
      en: "No categories found. Try a different search.",
      es: "No se encontraron categorías. Intenta otra búsqueda.",
    },
  } as const;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATEGORIES;

    return CATEGORIES.filter((c) => {
      const title = t(c.title).toLowerCase();
      const desc = t(c.description).toLowerCase();
      return title.includes(q) || desc.includes(q);
    });
  }, [query, t]);

  return (
    <div className="rounded-3xl bg-(--background-default)/80 backdrop-blur-md shadow-xl ">
      <AppShell>
        <div className="body-style">
          <PageTitle
            title={t(pageTitles[2].title)}
            subtitle={t(pageTitles[2].subtitle)}
            right={
              <div className="w-full sm:w-72">
                <label className="sr-only" htmlFor="search">
                  {t(ui.searchLabel)}
                </label>

                <input
                  id="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t(ui.searchPlaceholder)}
                  className="
                    w-full
                    rounded-2xl
                    border border-(--background-paper)
                    bg-white/70 backdrop-blur
                    px-4 py-2
                    text-(--ink) text-sm
                    outline-none
                    placeholder:text-[rgba(13,27,42,0.55)]
                    focus:border-(--secondary-main)
                    focus:ring-1 focus:ring-(--secondary-main)
                    transition
                  "
                />
              </div>
            }
            extraContent={
              <Grid>
                {filtered.map((c) => (
                  <CatalogCard
                    key={c.id}
                    title={t(c.title)}
                    description={t(c.description)}
                    href={`/catalog/${c.id}`}
                    image={c.image}
                    badge={`${c.subcategories.length} ${t(ui.items)}`}
                  />
                ))}
              </Grid>
            }
          />

          {filtered.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-(--background-paper) bg-white/60 p-6 text-sm text-(--ink)">
              {t(ui.empty)}
            </div>
          ) : null}
        </div>
      </AppShell>
    </div>
  );
}
