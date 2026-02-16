import {
  Award,
  Layers,
  Package,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { brand, pageTitles } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";
import PageTitle from "./PageTitle";

export default function About() {
  const { t } = useLanguage();
  const about = pageTitles[1];
  const brandInfo = brand;

  const stats = [
    {
      icon: Package,
      value: "10,000+",
      label: { en: "Projects Completed", es: "Proyectos Completados" },
    },
    {
      icon: Users,
      value: "500+",
      label: { en: "Happy Clients", es: "Clientes Satisfechos" },
    },
    {
      icon: Award,
      value: "15+",
      label: { en: "Years Experience", es: "Años de Experiencia" },
    },
    {
      icon: TrendingUp,
      value: "99%",
      label: { en: "Client Satisfaction", es: "Satisfacción del Cliente" },
    },
  ];

  const services = [
    {
      icon: Package,
      title: { en: "Premium Paper Bags", es: "Bolsas de Papel Premium" },
      desc: {
        en: "Custom-designed bags that elevate your brand",
        es: "Bolsas diseñadas a medida que elevan su marca",
      },
    },
    {
      icon: Layers,
      title: { en: "Folding Boxes", es: "Cajas Plegables" },
      desc: {
        en: "Food-safe packaging for frozen & fresh products",
        es: "Empaques seguros para productos congelados y frescos",
      },
    },
    {
      icon: Sparkles,
      title: { en: "Custom Printing", es: "Impresión Personalizada" },
      desc: {
        en: "Vibrant, high-quality prints that stand out",
        es: "Impresiones vibrantes de alta calidad",
      },
    },
  ];

  return (
    <div>
      <PageTitle
        title={t(about.title)}
        subtitle={t(about.subtitle)}
        extraContent={
          <div className="space-y-12">
            {/* Main Description */}
            {about.text && (
              <div className="max-w-4xl mx-auto">
                <p
                  className="text-base sm:text-lg leading-relaxed text-(--ink-80) text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t(about.text)}
                </p>
              </div>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="
                    group relative overflow-hidden
                    rounded-2xl border border-(--ink-12)
                    bg-white p-6
                    text-center
                    transition-all duration-300
                    hover:shadow-lg hover:-translate-y-1 hover:border-(--ink-18)
                  "
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="relative mb-3 flex justify-center">
                    <div className="rounded-full bg-(--ink)/5 p-3 group-hover:bg-(--ink)/10 transition-colors duration-300">
                      <stat.icon
                        className="w-6 h-6 text-(--ink)"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Value */}
                  <div
                    className="relative text-3xl sm:text-4xl font-black text-(--ink) mb-1"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div
                    className="relative text-xs sm:text-sm font-semibold text-(--ink-60) uppercase tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t(stat.label)}
                  </div>
                </div>
              ))}
            </div>

            {/* What We Do Section */}
            <div className="max-w-6xl mx-auto">
              <h3
                className="text-2xl sm:text-3xl font-bold text-(--ink) text-center mb-8"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {t({ en: "What We Do Best", es: "Lo Que Hacemos Mejor" })}
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="
                      group relative
                      rounded-2xl border border-(--ink-12)
                      bg-linear-to-br from-white to-slate-50/50
                      p-6
                      transition-all duration-300
                      hover:shadow-xl hover:-translate-y-1 hover:border-(--ink-18)
                    "
                  >
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-100/60 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon */}
                    <div className="relative mb-4">
                      <div className="inline-flex rounded-xl bg-(--ink) p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <service.icon
                          className="w-6 h-6 text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h4
                      className="relative text-lg font-bold text-(--ink) mb-2"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {t(service.title)}
                    </h4>

                    {/* Description */}
                    <p
                      className="relative text-sm text-(--ink-72) leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t(service.desc)}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-(--ink) via-(--secondary-main) to-(--ink) opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
                  </div>
                ))}
              </div>
            </div>

            {/* Full Service List */}
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border border-(--ink-12) bg-linear-to-br from-slate-50 to-blue-50/30 p-8 shadow-sm">
                <h4
                  className="text-lg font-bold text-(--ink) mb-4 text-center"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {t({
                    en: "Complete Packaging Solutions",
                    es: "Soluciones Completas de Empaque",
                  })}
                </h4>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    {
                      en: "Custom Paper Bags",
                      es: "Bolsas de Papel Personalizadas",
                    },
                    {
                      en: "Folding Boxes for Frozen Food",
                      es: "Cajas Plegables para Congelados",
                    },
                    { en: "Food Containers", es: "Contenedores de Alimentos" },
                    { en: "Cardboard Trays", es: "Bandejas de Cartón" },
                    { en: "Cardboard Boxes", es: "Cajas de Cartón" },
                    {
                      en: "Custom Printing & Design",
                      es: "Impresión y Diseño Personalizado",
                    },
                    {
                      en: "Merchandise Displays",
                      es: "Exhibidores de Mercancía",
                    },
                    {
                      en: "Premium Quality Materials",
                      es: "Materiales de Calidad Premium",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-3 text-sm text-(--ink-80) font-medium"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <div className="shrink-0 w-5 h-5 rounded-full bg-(--ink) flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="w-50">{t(item)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-4xl mx-auto rounded-2xl border border-(--ink-12) bg-linear-to-br from-slate-50 to-blue-50/30 p-8 shadow-sm mt-12">
                <h2 className="text-lg font-bold text-(--ink) mb-4 text-center">
                  {t({
                    en: "Where are we located?",
                    es: "¿Dónde estamos ubicados?",
                  })}
                </h2>
                <p
                  className="text-base sm:text-lg leading-relaxed text-(--ink-80) text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t(brandInfo.address)}
                </p>
                <div className="flex justify-center mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d274.5801783151661!2d-80.37644367650046!3d25.898215077716632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bcaff8215555%3A0x2b0676d3e36dafdd!2s10930%20NW%20138th%20St%20UNIT%202!5e0!3m2!1sen!2sus!4v1771266364448!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
