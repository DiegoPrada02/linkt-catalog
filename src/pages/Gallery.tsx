// src/pages/Gallery.tsx
import { useMemo, useState } from "react";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import { useLanguage } from "../i18n/LanguageProvider";
import { galleryCopy, galleryFilters, galleryItems } from "../data/dictionary";
import type { GalleryTagKey } from "../data/dictionary";
import Vidimg from "../components/ui/vidimg";
import { X, Play, ZoomIn } from "lucide-react";

type FilterKey = "all" | GalleryTagKey;

export default function Gallery() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterKey>("all");

  const items = useMemo(() => galleryItems, []);

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => i.tagKey === filter);
  }, [items, filter]);

  const selectedItem = selected ? items.find((i) => i.id === selected) : null;

  const filterButtons: Array<{ key: FilterKey; label: typeof galleryFilters.all }> = [
    { key: "all", label: galleryFilters.all },
    { key: "boxes", label: galleryFilters.boxes },
    { key: "bags", label: galleryFilters.bags },
    { key: "food", label: galleryFilters.food },
    { key: "retail", label: galleryFilters.retail },
    { key: "logistics", label: galleryFilters.logistics },
    { key: "distribution", label: galleryFilters.distribution },
    { key: "video", label: galleryFilters.video },
  ];

  return (
    <AppShell>
      <div className="body-style">
        <PageTitle
          title={t(galleryCopy.title)}
          subtitle={t(galleryCopy.subtitle)}
          extraContent={
            <div className="space-y-8">
              {/* Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {filterButtons.map((b) => {
                  const active = b.key === filter;
                  return (
                    <button
                      key={b.key}
                      onClick={() => setFilter(b.key)}
                      className={`
                        relative overflow-hidden
                        rounded-xl px-5 py-2.5
                        text-sm font-bold
                        border
                        transition-all duration-300
                        ${active 
                          ? "bg-(--ink) text-(--background-paper) border-(--ink) shadow-lg scale-105" 
                          : "bg-white text-(--ink-72) border-(--ink-12) hover:border-(--ink-18) hover:bg-white hover:text-(--ink) hover:shadow-md"
                        }
                      `}
                      style={{ fontFamily: "'Sora', sans-serif" }}
                      aria-pressed={active}
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
                    {t({ en: "Showing", es: "Mostrando" })} {filtered.length} {t({ en: "items", es: "artículos" })}
                  </p>
                </div>
              )}

              {/* Bento Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px]">
                {filtered.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`
                      group relative overflow-hidden text-left
                      rounded-2xl
                      border border-(--ink-12)
                      bg-white
                      shadow-md
                      transition-all duration-300
                      hover:-translate-y-2 hover:shadow-2xl hover:border-(--ink-18)
                      ${item.colSpan === 2 ? "lg:col-span-2" : ""}
                      ${item.rowSpan === 2 ? "sm:row-span-2" : ""}
                    `}
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
                      {/* Top Section */}
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

                      {/* Bottom Section */}
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
                              <ZoomIn className="w-4 h-4" strokeWidth={2.5} />
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
                            <Play className="w-5 h-5 text-white ml-0.5" strokeWidth={2.5} fill="white" />
                          ) : (
                            <ZoomIn className="w-5 h-5 text-white" strokeWidth={2.5} />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Empty State */}
              {filtered.length === 0 && (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-(--ink)/5 mb-4">
                    <ZoomIn className="w-8 h-8 text-(--ink-60)" strokeWidth={1.5} />
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

      {/* Modal Preview */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <div
            className="
              w-full max-w-5xl overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white
              shadow-2xl
              animate-in fade-in zoom-in-95 duration-300
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Container */}
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
                onClick={() => setSelected(null)}
                aria-label={t(galleryCopy.modalClose)}
              >
                <X className="w-4 h-4" strokeWidth={2.5} />
                {t(galleryCopy.modalClose)}
              </button>
            </div>

{/* Info Section */}
            <div className="relative overflow-hidden p-6 sm:p-8 bg-linear-to-br from-slate-50 via-blue-50/20 to-slate-50">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-100/30 to-transparent rounded-bl-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr from-slate-100/50 to-transparent rounded-tr-3xl" />
              
              <div className="relative">
                {/* Header with title and tag */}
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
                      shrink-0
                      inline-flex items-center gap-2
                      rounded-xl 
                      border border-(--ink-12) 
                      bg-white 
                      px-4 py-2 
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

                {/* Metadata bar */}
                <div className="pt-6 border-t border-(--ink-10)">
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}