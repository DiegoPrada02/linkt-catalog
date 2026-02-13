// src/pages/Gallery.tsx
import { useMemo, useState } from "react";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import { useLanguage } from "../i18n/LanguageProvider";
import { galleryCopy, galleryFilters, galleryItems } from "../data/dictionary";
import type { GalleryTagKey } from "../data/dictionary";
import Vidimg from "../components/ui/vidimg";

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
    { key: "eco", label: galleryFilters.eco },
    { key: "video", label: galleryFilters.video },
  ];

  return (
    <AppShell>
      <div className="body-style">
        <PageTitle
          title={t(galleryCopy.title)}
          subtitle={t(galleryCopy.subtitle)}
          extraContent={
            <div className="grid gap-4">
              {/* Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {filterButtons.map((b) => {
                  const active = b.key === filter;
                  return (
                    <button
                      key={b.key}
                      onClick={() => setFilter(b.key)}
                      className={[
                        "rounded-full px-4 py-2 text-xs sm:text-sm font-extrabold transition",
                        "border",
                        active
                          ? "bg-(--ink) text-(--background-paper) border-[rgba(13,27,42,0.25)]"
                          : "bg-(--background-default)/60 text-(--ink) border-[rgba(13,27,42,0.12)] hover:bg-white/80",
                      ].join(" ")}
                      aria-pressed={active}
                    >
                      {t(b.label)}
                    </button>
                  );
                })}
              </div>

              {/* Bento grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[170px]">
                {filtered.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={[
                      "group relative overflow-hidden text-left",
                      "rounded-3xl",
                      "border border-[rgba(13,27,42,0.12)]",
                      "bg-white/65 backdrop-blur-md",
                      "shadow-[0_14px_40px_rgba(13,27,42,0.10)]",
                      "transition",
                      "hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(13,27,42,0.16)]",
                      item.colSpan === 2 ? "lg:col-span-2" : "",
                      item.rowSpan === 2 ? "sm:row-span-2" : "",
                    ].join(" ")}
                    aria-label={`${t(galleryCopy.viewLabel)} ${t(item.title)}`}
                  >
                    {/* Media (using Vidimg) */}
                    <div className="absolute inset-0">
                      <Vidimg
                        source={item.src}
                        isVideo={item.kind === "video"}
                        title={t(item.title)}
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />

                    {/* Text */}
                    <div className="relative z-10 flex h-full flex-col justify-between p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-sm font-extrabold text-white/95 line-clamp-2">
                          {t(item.title)}
                        </div>

                        <span className="rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-extrabold text-(--ink)">
                          {t(item.tag)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold tracking-wide text-white/80">
                          {t(galleryCopy.viewLabel)} →
                        </span>

                        <span className="grid h-9 w-9 place-items-center rounded-2xl bg-white/15 backdrop-blur border border-white/20">
                          <span className="text-white/90 text-lg leading-none">
                            {item.kind === "video" ? "▶" : "+"}
                          </span>
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-[rgba(13,27,42,0.12)] bg-white/70 p-5 text-sm font-semibold text-(--ink)">
                  {t({
                    en: "No items in this category yet.",
                    es: "Aún no hay elementos en esta categoría.",
                  })}
                </div>
              ) : null}
            </div>
          }
        />
      </div>

      {/* Modal Preview */}
{selectedItem ? (
  <div
    className="fixed inset-0 z-100 grid place-items-center bg-black/55 p-4"
    role="dialog"
    aria-modal="true"
    onClick={() => setSelected(null)}
  >
    <div
      className="
        w-full max-w-4xl overflow-hidden
        rounded-3xl
        border border-[rgba(255,255,255,0.18)]
        bg-white/85 backdrop-blur-md
        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
      "
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-[45vh] w-full">
        {/* 🔥 Using Vidimg here */}
        <Vidimg
          source={selectedItem.src}
          isVideo={selectedItem.kind === "video"}
          title={t(selectedItem.title)}
        />

        {/* Close button */}
        <button
          className="
            absolute right-3 top-3 z-20
            rounded-full bg-black/40 text-white
            px-3 py-2 text-sm font-extrabold
            hover:bg-black/55 transition
          "
          onClick={() => setSelected(null)}
          aria-label={t(galleryCopy.modalClose)}
        >
          {t(galleryCopy.modalClose)}
        </button>
      </div>

      <div className="p-5 sm:p-6">
        <div className="text-xl font-extrabold text-(--ink)">
          {t(selectedItem.title)}
        </div>

        <div className="mt-2">
          <span className="inline-flex rounded-full border border-[rgba(13,27,42,0.12)] bg-(--background-default)/60 px-3 py-1 text-xs font-extrabold text-(--ink)">
            {t(selectedItem.tag)}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[rgba(13,27,42,0.72)]">
          {t(galleryCopy.replaceHint)}
        </p>
      </div>
    </div>
  </div>
) : null}

    </AppShell>
  );
}
