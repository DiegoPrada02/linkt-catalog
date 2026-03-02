import { PackageSearch, Search, X } from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type JSX,
  type RefObject,
} from "react";
import AppShell from "../components/AppShell";
import Grid from "../components/Grid";
import PageTitle from "../components/PageTitle";
import CatalogCard from "../components/ui/CatalogCard";
import { CATEGORIES, pageTitles } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

// ─── Types ────────────────────────────────────────────────────────────────────
interface CardRevealProps {
  children: React.ReactNode;
  delay: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const CARD_DELAYS: readonly string[] = [
  "0ms",
  "80ms",
  "160ms",
  "240ms",
  "320ms",
  "400ms",
] as const;

const UI_STRINGS = {
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
  noResults: { en: "No Results Found", es: "No Se Encontraron Resultados" },
  clearSearch: { en: "Clear search", es: "Limpiar búsqueda" },
} as const;

// ─── useScrollReveal hook ─────────────────────────────────────────────────────
function useScrollReveal<T extends HTMLElement = HTMLElement>(
  delay = 0,
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            setTimeout(() => {
              target.dataset.visible = "true";
            }, delay);
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref as RefObject<T>;
}

// ─── CardReveal sub-component ─────────────────────────────────────────────────
function CardReveal({ children, delay }: CardRevealProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            setTimeout(
              () => {
                target.dataset.visible = "true";
              },
              parseInt(delay, 10),
            );
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="card-reveal" style={{ transitionDelay: delay }}>
      {children}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CatalogCategories(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const { t } = useLanguage();

  const pageRef = useScrollReveal<HTMLDivElement>();
  const resultsRef = useScrollReveal<HTMLDivElement>(60);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATEGORIES;
    return CATEGORIES.filter((c) => {
      const title = t(c.title).toLowerCase();
      const desc = t(c.description).toLowerCase();
      return title.includes(q) || desc.includes(q);
    });
  }, [query, t]);

  const handleClearSearch = (): void => {
    setQuery("");
  };

  return (
    <div className="rounded-3xl bg-(--background-default)/80 backdrop-blur-md shadow-xl">
      <style>{`
        /* ── Base reveal ── */
        .reveal {
          opacity: 0;
          transform: translateY(36px) scale(0.98);
          transition:
            opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal[data-visible="true"] {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ── Card stagger ── */
        .card-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .card-reveal[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Empty state fade-scale ── */
        .reveal-pop {
          opacity: 0;
          transform: scale(0.94);
          transition:
            opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal-pop[data-visible="true"] {
          opacity: 1;
          transform: scale(1);
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .reveal, .card-reveal, .reveal-pop {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <AppShell>
        <div className="body-style">
          <div ref={pageRef} className="reveal">
            <PageTitle
              title={t(pageTitles[2].title)}
              subtitle={t(pageTitles[2].subtitle)}
              right={
                <div className="w-full sm:w-80">
                  <label className="sr-only" htmlFor="search">
                    {t(UI_STRINGS.searchLabel)}
                  </label>
                  <div className="relative">
                    {/* Search Icon */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Search
                        className="w-4 h-4 text-(--ink-60)"
                        strokeWidth={2.5}
                      />
                    </div>

                    {/* Input */}
                    <input
                      id="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={t(UI_STRINGS.searchPlaceholder)}
                      className="
                        w-full rounded-2xl
                        border border-(--ink-14)
                        bg-white shadow-sm
                        pl-11 pr-11 py-3
                        text-(--ink) text-sm font-medium
                        outline-none
                        placeholder:text-(--ink-60) placeholder:font-normal
                        focus:border-(--ink-60)
                        focus:ring-2 focus:ring-(--ink)/10
                        transition-all duration-300
                      "
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />

                    {/* Clear Button */}
                    {query.length > 0 && (
                      <button
                        onClick={handleClearSearch}
                        aria-label={t(UI_STRINGS.clearSearch)}
                        className="
                          absolute right-3 top-1/2 -translate-y-1/2
                          w-7 h-7 rounded-full
                          flex items-center justify-center
                          bg-(--ink-12) hover:bg-(--ink-18)
                          transition-all duration-200
                          hover:scale-110 active:scale-95
                        "
                      >
                        <X
                          className="w-4 h-4 text-(--ink-72)"
                          strokeWidth={2.5}
                        />
                      </button>
                    )}
                  </div>
                </div>
              }
              extraContent={
                <div ref={resultsRef} className="reveal space-y-6">
                  {/* Results counter */}
                  {query.length > 0 && (
                    <div className="flex items-center justify-between px-2">
                      <p
                        className="text-sm font-semibold text-(--ink-72)"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {t(UI_STRINGS.showingResults)} {filtered.length}{" "}
                        {t(UI_STRINGS.of)} {CATEGORIES.length}{" "}
                        {t(UI_STRINGS.categories)}
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
                          {t(UI_STRINGS.clearSearch)}
                        </button>
                      )}
                    </div>
                  )}

                  {/* Grid */}
                  {filtered.length > 0 ? (
                    <Grid>
                      {filtered.map((c, i) => (
                        <CardReveal
                          key={c.id}
                          delay={CARD_DELAYS[i % CARD_DELAYS.length] ?? "0ms"}
                        >
                          <CatalogCard
                            title={t(c.title)}
                            description={t(c.description)}
                            href={`/catalog/${c.id}`}
                            image={c.image}
                            badge={`${c.subcategories.length} ${t(UI_STRINGS.items)}`}
                          />
                        </CardReveal>
                      ))}
                    </Grid>
                  ) : (
                    /* Empty State */
                    <EmptyState
                      message={t(UI_STRINGS.empty)}
                      heading={t(UI_STRINGS.noResults)}
                      onClear={handleClearSearch}
                      clearLabel={t(UI_STRINGS.clearSearch)}
                    />
                  )}
                </div>
              }
            />
          </div>
        </div>
      </AppShell>
    </div>
  );
}

// ─── EmptyState sub-component ─────────────────────────────────────────────────
interface EmptyStateProps {
  heading: string;
  message: string;
  clearLabel: string;
  onClear: () => void;
}

function EmptyState({
  heading,
  message,
  clearLabel,
  onClear,
}: EmptyStateProps): JSX.Element {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal-pop mt-12 mb-8">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-(--ink)/5 p-6">
            <PackageSearch
              className="w-12 h-12 text-(--ink-60)"
              strokeWidth={1.5}
            />
          </div>
        </div>
        <h3
          className="text-xl font-bold text-(--ink) mb-2"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          {heading}
        </h3>
        <p
          className="text-sm text-(--ink-72) leading-relaxed mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {message}
        </p>
        <button
          onClick={onClear}
          className="
            inline-flex items-center gap-2
            rounded-2xl bg-(--ink)
            px-6 py-3
            text-sm font-bold text-(--background-paper)
            transition-all duration-300
            hover:opacity-90 hover:scale-105
            active:scale-100 shadow-lg
          "
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          <X className="w-4 h-4" strokeWidth={2.5} />
          {clearLabel}
        </button>
      </div>
    </div>
  );
}
