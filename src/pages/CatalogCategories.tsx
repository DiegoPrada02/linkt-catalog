import { useMemo, useState } from "react";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CatalogCard from "../components/CatalogCard";
import { CATEGORIES } from "../data/catalog";
import { pageTitles } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

export default function CatalogCategories() {
  const [query, setQuery] = useState<string>("");
  const { t } = useLanguage();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATEGORIES;
    return CATEGORIES.filter(
      (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="rounded-3xl bg-(--background-default)/80 backdrop-blur-md shadow-xl">
          <AppShell>
      <div className="body-style">
        <PageTitle
        title={t(pageTitles[2].title)}
        subtitle={t(pageTitles[2].subtitle)}
        right={
          <div className="w-full sm:w-65">
            <label className="sr-only" htmlFor="search">
              {t(pageTitles[2].rightText) ? t(pageTitles[2].rightText) : "Search categories"}
            </label>
            <input
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search categories..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-(--ink) text-sm outline-none placeholder:text-black focus:border-(--secondary) focus:ring-1 focus:ring-(--secondary) transition"
            />
          </div>
        }
        extraContent={
          <Grid>
        {filtered.map((c) => (
          <CatalogCard
            key={c.id}
            title={c.title}
            description={c.description}
            href={`/catalog/${c.id}`}
            image = {c.image}
            badge={`${c.subcategories.length} items`}
          />
        ))}
      </Grid>
        }
      />

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
          No categories found. Try a different search.
        </div>
      ) : null}
      </div>
    </AppShell>
    </div>
  );
}
