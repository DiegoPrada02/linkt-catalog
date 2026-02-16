import { ArrowRight, Globe, Layers, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import { distributionCopy } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

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
                inline-flex items-center gap-2
                rounded-2xl px-6 py-3 text-sm font-bold
                bg-(--background-paper) text-(--ink)
                shadow-lg
                hover:opacity-90 hover:scale-105
                active:scale-100
                transition-all duration-300
              "
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {t(d.cta.text)}
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          }
          extraContent={
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                {/* Hero Image Card */}
                <div
                  className="
                    group overflow-hidden rounded-2xl
                    border border-(--ink-12)
                    bg-white
                    shadow-lg
                    transition-all duration-300
                    hover:shadow-xl
                  "
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={d.heroImage}
                      alt={t(d.heroImageAlt)}
                      className="h-64 sm:h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-blue-100/40 to-transparent rounded-bl-3xl" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <p
                      className="text-base sm:text-lg leading-relaxed text-(--ink-80)"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t(d.intro)}
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {d.stats.map((s, idx) => (
                    <div
                      key={idx}
                      className="
                        group relative overflow-hidden
                        rounded-2xl
                        border border-(--ink-12)
                        bg-white
                        p-5
                        shadow-sm
                        transition-all duration-300
                        hover:shadow-lg hover:-translate-y-1 hover:border-(--ink-18)
                      "
                    >
                      {/* Background gradient on hover */}
                      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative">
                        <div
                          className="text-3xl font-black text-(--ink) mb-1"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t(s.value)}
                        </div>
                        <div
                          className="text-xs font-bold tracking-wider uppercase text-(--ink-60)"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t(s.label)}
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-(--ink) via-(--secondary-main) to-(--ink) opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <aside className="lg:col-span-5">
                <div
                  className="
                    sticky top-8
                    rounded-2xl
                    border border-(--ink-12)
                    bg-white
                    shadow-lg
                  "
                >
                  {/* Highlights Section */}
                  <div className="p-6 sm:p-8">
                    <h3
                      className="text-xl font-black text-(--ink) mb-6"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {t(d.highlightsTitle)}
                    </h3>

                    <div className="space-y-4">
                      {d.highlights.map((h, idx) => {
                        const Icon =
                          idx === 0 ? Truck : idx === 1 ? Globe : Layers;

                        return (
                          <div
                            key={idx}
                            className="
                              group
                              rounded-xl
                              border border-(--ink-10)
                              bg-linear-to-br from-slate-50 to-blue-50/30
                              p-4
                              transition-all duration-300
                              hover:shadow-md hover:border-(--ink-18)
                            "
                          >
                            <div className="flex items-start gap-4">
                              <div
                                className="
                                  shrink-0
                                  grid h-12 w-12 place-items-center
                                  rounded-xl
                                  bg-(--ink)
                                  shadow-md
                                  transition-transform duration-300
                                  group-hover:scale-110
                                "
                              >
                                <Icon
                                  className="h-6 w-6 text-(--background-paper)"
                                  strokeWidth={2}
                                />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div
                                  className="font-bold text-(--ink) mb-1"
                                  style={{ fontFamily: "'Sora', sans-serif" }}
                                >
                                  {t(h.title)}
                                </div>
                                <div
                                  className="text-sm leading-relaxed text-(--ink-72)"
                                  style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                  {t(h.text)}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA Card */}
                  <div className="p-6 sm:p-8 pt-0">
                    <div
                      className="
                        relative overflow-hidden
                        rounded-xl 
                        bg-linear-to-br from-(--ink) to-[rgba(1,38,86,0.95)]
                        p-6
                        shadow-lg
                      "
                    >
                      {/* Decorative elements */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5 blur-2xl" />

                      <div className="relative">
                        <div
                          className="text-sm font-black uppercase tracking-wider text-(--background-paper)/80 mb-2"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t(d.noteTitle)}
                        </div>
                        <div
                          className="text-sm leading-relaxed text-(--background-paper)/90 mb-5"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {t(d.noteText)}
                        </div>

                        <Link
                          to={d.cta.href}
                          className="
                            group
                            inline-flex items-center gap-2
                            rounded-xl
                            bg-(--background-paper) text-(--ink)
                            px-6 py-3 text-sm font-bold
                            shadow-lg
                            hover:shadow-xl
                            transition-all duration-300
                            hover:scale-105
                            active:scale-100
                          "
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t(d.cta.text)}
                          <ArrowRight
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            strokeWidth={2.5}
                          />
                        </Link>
                      </div>
                    </div>
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
