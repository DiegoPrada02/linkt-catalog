import { useMemo, useState } from "react";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CatalogCard from "../components/ui/CatalogCard";
import { CATEGORIES, pageTitles } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";
import { Search, X, PackageSearch } from "lucide-react";

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
    showingResults: { en: "Showing", es: "Mostrando" },
    of: { en: "of", es: "de" },
    categories: { en: "categories", es: "categorías" },
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

  const handleClearSearch = () => {
    setQuery("");
  };

  return (
    <div className="rounded-3xl bg-(--background-default)/80 backdrop-blur-md shadow-xl">
      <AppShell>
        <div className="body-style">
          <PageTitle
            title={t(pageTitles[2].title)}
            subtitle={t(pageTitles[2].subtitle)}
            right={
              <div className="w-full sm:w-80">
                <label className="sr-only" htmlFor="search">
                  {t(ui.searchLabel)}
                </label>
                <div className="relative">
                  {/* Search Icon */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Search className="w-4 h-4 text-(--ink-60)" strokeWidth={2.5} />
                  </div>

                  {/* Search Input */}
                  <input
                    id="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t(ui.searchPlaceholder)}
                    className="
                      w-full
                      rounded-2xl
                      border border-(--ink-14)
                      bg-white shadow-sm
                      pl-11 pr-11 py-3
                      text-(--ink) text-sm font-medium
                      outline-none
                      placeholder:text-(--ink-60)
                      placeholder:font-normal
                      focus:border-(--ink-60)
                      focus:ring-2 focus:ring-(--ink)/10
                      transition-all duration-300
                    "
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />

                  {/* Clear Button */}
                  {query && (
                    <button
                      onClick={handleClearSearch}
                      className="
                        absolute right-3 top-1/2 -translate-y-1/2
                        w-7 h-7 rounded-full
                        flex items-center justify-center
                        bg-(--ink-12) hover:bg-(--ink-18)
                        transition-all duration-200
                        hover:scale-110 active:scale-95
                      "
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4 text-(--ink-72)" strokeWidth={2.5} />
                    </button>
                  )}
                </div>
              </div>
            }
            extraContent={
              <div className="space-y-6">
                {/* Results Counter */}
                {query && (
                  <div className="flex items-center justify-between px-2">
                    <p 
                      className="text-sm font-semibold text-(--ink-72)"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t(ui.showingResults)} {filtered.length} {t(ui.of)} {CATEGORIES.length} {t(ui.categories)}
                    </p>
                    {filtered.length > 0 && (
                      <button
                        onClick={handleClearSearch}
                        className="
                          text-xs font-bold text-(--ink-60) 
                          hover:text-(--ink) 
                          transition-colors duration-200
                          underline underline-offset-2
                        "
                      >
                        Clear search
                      </button>
                    )}
                  </div>
                )}

                {/* Grid */}
                {filtered.length > 0 ? (
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
                ) : (
                  /* Empty State */
                  <div className="mt-12 mb-8">
                    <div className="max-w-md mx-auto text-center">
                      <div className="mb-6 flex justify-center">
                        <div className="rounded-full bg-(--ink)/5 p-6">
                          <PackageSearch className="w-12 h-12 text-(--ink-60)" strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 
                        className="text-xl font-bold text-(--ink) mb-2"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {t({ en: "No Results Found", es: "No Se Encontraron Resultados" })}
                      </h3>
                      <p 
                        className="text-sm text-(--ink-72) leading-relaxed mb-6"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {t(ui.empty)}
                      </p>
                      <button
                        onClick={handleClearSearch}
                        className="
                          inline-flex items-center gap-2
                          rounded-2xl
                          bg-(--ink) 
                          px-6 py-3
                          text-sm font-bold text-(--background-paper)
                          transition-all duration-300
                          hover:opacity-90
                          hover:scale-105
                          active:scale-100
                          shadow-lg
                        "
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        <X className="w-4 h-4" strokeWidth={2.5} />
                        Clear Search
                      </button>
                    </div>
                  </div>
                )}
              </div>
            }
          />
        </div>
      </AppShell>
    </div>
  );
}