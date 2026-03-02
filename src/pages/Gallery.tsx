// src/pages/Gallery.tsx
import { Play, X, ZoomIn } from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type JSX,
  type RefObject,
} from "react";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Vidimg from "../components/ui/vidimg";
import type { GalleryTagKey } from "../data/dictionary";
import { galleryCopy, galleryFilters, galleryItems } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

// ─── Types ────────────────────────────────────────────────────────────────────
type FilterKey = "all" | GalleryTagKey;

interface FilterButton {
  key: FilterKey;
  label: typeof galleryFilters.all;
}

interface CardRevealProps {
  children: React.ReactNode;
  delay: string;
  className?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const FILTER_BUTTONS: readonly FilterButton[] = [
  { key: "all", label: galleryFilters.all },
  { key: "boxes", label: galleryFilters.boxes },
  { key: "bags", label: galleryFilters.bags },
  { key: "food", label: galleryFilters.food },
  { key: "retail", label: galleryFilters.retail },
  { key: "logistics", label: galleryFilters.logistics },
  { key: "distribution", label: galleryFilters.distribution },
  { key: "video", label: galleryFilters.video },
] as const;

const CARD_DELAYS: readonly string[] = [
  "0ms",
  "60ms",
  "120ms",
  "180ms",
  "240ms",
  "300ms",
] as const;

// ─── useScrollReveal hook ─────────────────────────────────────────────────────
function useScrollReveal<T extends HTMLElement = HTMLElement>(
  delay = 0,
): RefObject<T | null> {
  const ref = useRef<T>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {
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
    [delay],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.08,
      rootMargin: "0px 0px -50px 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersect]);

  return ref;
}

// ─── CardReveal sub-component ─────────────────────────────────────────────────
function CardReveal({
  children,
  delay,
  className = "",
}: CardRevealProps): JSX.Element {
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
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`card-reveal ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Gallery(): JSX.Element {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterKey>("all");

  const headerRef = useScrollReveal<HTMLDivElement>();
  const filtersRef = useScrollReveal<HTMLDivElement>(80);
  const gridRef = useScrollReveal<HTMLDivElement>(140);

  const items = useMemo(() => galleryItems, []);

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => i.tagKey === filter);
  }, [items, filter]);

  const selectedItem =
    selected != null ? (items.find((i) => i.id === selected) ?? null) : null;

  const handleClose = useCallback((): void => setSelected(null), []);

  // Close modal on Escape key
  useEffect(() => {
    if (selectedItem == null) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedItem, handleClose]);

  return (
    <AppShell>
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
          transform: translateY(20px) scale(0.97);
          transition:
            opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .card-reveal[data-visible="true"] {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ── Filter buttons slide-in ── */
        .filters-reveal {
          opacity: 0;
          transform: translateY(16px);
          transition:
            opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .filters-reveal[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Modal entrance ── */
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.93) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        .modal-enter {
          animation: modal-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .reveal, .card-reveal, .filters-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .modal-enter { animation: none !important; }
        }
      `}</style>

      <div className="body-style">
        <div ref={headerRef} className="reveal">
          <PageTitle
            title={t(galleryCopy.title)}
            subtitle={t(galleryCopy.subtitle)}
            extraContent={
              <div className="space-y-8">
                {/* Filters */}
                <div
                  ref={filtersRef}
                  className="filters-reveal flex flex-wrap gap-3 justify-center"
                >
                  {FILTER_BUTTONS.map((b) => {
                    const active = b.key === filter;
                    return (
                      <button
                        key={b.key}
                        onClick={() => setFilter(b.key)}
                        aria-pressed={active}
                        className={`
                          relative overflow-hidden
                          rounded-xl px-5 py-2.5
                          text-sm font-bold
                          border
                          transition-all duration-300
                          ${
                            active
                              ? "bg-(--ink) text-(--background-paper) border-(--ink) shadow-lg scale-105"
                              : "bg-white text-(--ink-72) border-(--ink-12) hover:border-(--ink-18) hover:text-(--ink) hover:shadow-md"
                          }
                        `}
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {active && (
                          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent" />
                        )}
                        <span className="relative z-10">{t(b.label)}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Results Counter */}
                {filter !== "all" && (
                  <div className="text-center">
                    <p
                      className="text-sm font-semibold text-(--ink-72)"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t({ en: "Showing", es: "Mostrando" })} {filtered.length}{" "}
                      {t({ en: "items", es: "artículos" })}
                    </p>
                  </div>
                )}

                {/* Bento Grid */}
                <div
                  ref={gridRef}
                  className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px]"
                >
                  {filtered.map((item, i) => (
                    <CardReveal
                      key={item.id}
                      delay={CARD_DELAYS[i % CARD_DELAYS.length] ?? "0ms"}
                      className={`
                        ${item.colSpan === 2 ? "lg:col-span-2" : ""}
                        ${item.rowSpan === 2 ? "sm:row-span-2" : ""}
                      `}
                    >
                      <button
                        onClick={() => setSelected(item.id)}
                        className="
                          group relative overflow-hidden text-left w-full h-full
                          rounded-2xl
                          border border-(--ink-12)
                          bg-white shadow-md
                          transition-all duration-300
                          hover:-translate-y-2 hover:shadow-2xl hover:border-(--ink-18)
                        "
                        aria-label={`${t(galleryCopy.viewLabel)} ${t(item.title)}`}
                      >
                        {/* Media */}
                        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                          <Vidimg
                            source={item.src}
                            isVideo={item.kind === "video"}
                            title={t(item.title)}
                            className="object-cover"
                          />
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="relative z-10 flex h-full flex-col justify-between p-5">
                          <div className="flex items-start justify-between gap-3">
                            <div
                              className="text-base font-bold text-white line-clamp-2 drop-shadow-lg"
                              style={{ fontFamily: "'Sora', sans-serif" }}
                            >
                              {t(item.title)}
                            </div>
                            <span
                              className="shrink-0 rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-black text-(--ink) shadow-lg"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {t(item.tag)}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span
                              className="flex items-center gap-2 text-sm font-bold text-white/90 drop-shadow-lg"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {item.kind === "video" ? (
                                <>
                                  <Play className="w-4 h-4" strokeWidth={2.5} />
                                  {t({ en: "Watch", es: "Ver" })}
                                </>
                              ) : (
                                <>
                                  <ZoomIn
                                    className="w-4 h-4"
                                    strokeWidth={2.5}
                                  />
                                  {t(galleryCopy.viewLabel)}
                                </>
                              )}
                            </span>

                            <div
                              className="
                              grid h-10 w-10 place-items-center
                              rounded-xl
                              bg-white/15 backdrop-blur-md
                              border border-white/30
                              transition-all duration-300
                              group-hover:bg-white/25 group-hover:scale-110
                            "
                            >
                              {item.kind === "video" ? (
                                <Play
                                  className="w-5 h-5 text-white ml-0.5"
                                  strokeWidth={2.5}
                                  fill="white"
                                />
                              ) : (
                                <ZoomIn
                                  className="w-5 h-5 text-white"
                                  strokeWidth={2.5}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                    </CardReveal>
                  ))}
                </div>

                {/* Empty State */}
                {filtered.length === 0 && (
                  <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-(--ink)/5 mb-4">
                      <ZoomIn
                        className="w-8 h-8 text-(--ink-60)"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p
                      className="text-base font-semibold text-(--ink-72)"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t({
                        en: "No items in this category yet.",
                        es: "Aún no hay elementos en esta categoría.",
                      })}
                    </p>
                  </div>
                )}
              </div>
            }
          />
        </div>
      </div>

      {/* Modal Preview */}
      {selectedItem != null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t(selectedItem.title)}
          onClick={handleClose}
        >
          <div
            className="
              modal-enter
              w-full max-w-5xl overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media */}
            <div className="relative bg-black">
              <div className="relative aspect-video w-full">
                <Vidimg
                  source={selectedItem.src}
                  isVideo={selectedItem.kind === "video"}
                  title={t(selectedItem.title)}
                />
              </div>

              {/* Close Button */}
              <button
                className="
                  absolute right-4 top-4 z-20
                  flex items-center gap-2
                  rounded-xl
                  bg-black/60 backdrop-blur-md
                  border border-white/20
                  text-white
                  px-4 py-2.5
                  text-sm font-bold
                  transition-all duration-300
                  hover:bg-black/80 hover:scale-105
                  active:scale-100
                "
                style={{ fontFamily: "'Sora', sans-serif" }}
                onClick={handleClose}
                aria-label={t(galleryCopy.modalClose)}
              >
                <X className="w-4 h-4" strokeWidth={2.5} />
                {t(galleryCopy.modalClose)}
              </button>
            </div>

            {/* Info Section */}
            <div className="relative overflow-hidden p-6 sm:p-8 bg-linear-to-br from-slate-50 via-blue-50/20 to-slate-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-100/30 to-transparent rounded-bl-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr from-slate-100/50 to-transparent rounded-tr-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-2xl sm:text-3xl font-black text-(--ink) leading-tight"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {t(selectedItem.title)}
                    </h3>
                  </div>

                  <span
                    className="
                      shrink-0 inline-flex items-center gap-2
                      rounded-xl border border-(--ink-12)
                      bg-white px-4 py-2
                      text-sm font-bold text-(--ink)
                      shadow-sm
                      transition-all duration-200
                      hover:shadow-md hover:scale-105
                    "
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-(--secondary-main)" />
                    {t(selectedItem.tag)}
                  </span>
                </div>

                <div className="pt-6 border-t border-(--ink-10)" />
              </div>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
