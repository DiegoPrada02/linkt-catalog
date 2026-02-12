import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageProvider";
import { distributionCopy } from "../data/dictionary";
import { Globe, Truck, Layers } from "lucide-react";

export default function Distribution() {
  const { t } = useLanguage();
  const d = distributionCopy;

  return (
    <AppShell>

        <div className="body-style">
            <PageTitle
        title={t(d.title)}
        subtitle={t(d.subtitle)}
        right={
          <Link
            to={d.cta.href}
            className="
              rounded-2xl px-4 py-2 text-sm font-extrabold
              bg-(--ink) text-(--background-paper)
              shadow-[0_10px_25px_rgba(13,27,42,0.16)]
              hover:opacity-95 hover:-translate-y-0.5 transition
            "
          >
            {t(d.cta.text)}
          </Link>
        }
        extraContent={
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left column */}
            <div className="lg:col-span-7">
              {/* Hero image */}
              <div
                className="
                  overflow-hidden rounded-3xl
                  border border-[rgba(13,27,42,0.12)]
                  bg-white/70 backdrop-blur-md
                  shadow-[0_16px_45px_rgba(13,27,42,0.12)]
                "
              >
                <div className="relative">
                  <img
                    src={d.heroImage}
                    alt={t(d.heroImageAlt)}
                    className="h-56 w-full object-cover sm:h-72"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-sm sm:text-base leading-relaxed text-[rgba(13,27,42,0.72)]">
                    {t(d.intro)}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {d.stats.map((s, idx) => (
                  <div
                    key={idx}
                    className="
                      rounded-2xl
                      border border-[rgba(13,27,42,0.12)]
                      bg-white/65 backdrop-blur-md
                      p-4
                      shadow-[0_10px_28px_rgba(13,27,42,0.10)]
                    "
                  >
                    <div className="text-lg font-extrabold text-(--ink)">
                      {t(s.value)}
                    </div>
                    <div className="mt-1 text-xs font-extrabold tracking-wide uppercase text-[rgba(13,27,42,0.55)]">
                      {t(s.label)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <aside className="lg:col-span-5">
              <div
                className="
                  rounded-3xl
                  border border-[rgba(13,27,42,0.12)]
                  bg-white/70 backdrop-blur-md
                  p-5 sm:p-6
                  shadow-[0_16px_45px_rgba(13,27,42,0.12)]
                "
              >
                <h3 className="text-base sm:text-lg font-extrabold text-(--ink)">
                  {t(d.highlightsTitle)}
                </h3>

                <div className="mt-4 grid gap-3">
                  {d.highlights.map((h, idx) => {
                    const Icon = idx === 0 ? Truck : idx === 1 ? Globe : Layers;

                    return (
                      <div
                        key={idx}
                        className="
                          rounded-2xl
                          border border-[rgba(13,27,42,0.10)]
                          bg-(--background-default)/60
                          p-4
                        "
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="
                              grid h-10 w-10 place-items-center
                              rounded-2xl
                              bg-white/75
                              border border-[rgba(13,27,42,0.10)]
                            "
                          >
                            <Icon className="h-5 w-5 text-(--ink)" />
                          </div>

                          <div>
                            <div className="font-extrabold text-(--ink)">
                              {t(h.title)}
                            </div>
                            <div className="mt-1 text-sm leading-relaxed text-[rgba(13,27,42,0.72)]">
                              {t(h.text)}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl bg-(--ink) p-4 text-(--background-paper)">
                  <div className="text-sm font-extrabold">{t(d.noteTitle)}</div>
                  <div className="mt-2 text-sm leading-relaxed text-[rgba(224,225,221,0.9)]">
                    {t(d.noteText)}
                  </div>

                  <Link
                    to={d.cta.href}
                    className="
                      mt-4 inline-flex items-center justify-center
                      rounded-full
                      bg-(--background-paper) text-(--ink)
                      px-4 py-2 text-sm font-extrabold
                      hover:opacity-95 transition
                    "
                  >
                    {t(d.cta.text)} →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        }
      />
        </div>
      
    </AppShell>
  );
}
