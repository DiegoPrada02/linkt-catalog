import { useMemo, useState } from "react";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CatalogCard from "../components/CatalogCard";
import { CATEGORIES } from "../data/catalog";

export default function CatalogCategories() {
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATEGORIES;
    return CATEGORIES.filter(
      (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <AppShell>
      <PageTitle
        title="Catalog"
        subtitle="Choose a category to see its subcategories."
        right={
          <div className="w-full sm:w-65">
            <label className="sr-only" htmlFor="search">
              Search
            </label>
            <input
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search categories..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none placeholder:text-slate-400 focus:border-slate-300"
            />
          </div>
        }
      />

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

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
          No categories found. Try a different search.
        </div>
      ) : null}
    </AppShell>
  );
}
