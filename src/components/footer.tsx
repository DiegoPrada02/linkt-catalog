import { Link } from "react-router-dom";
import { pages, brand } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        relative z-40 mt-24
        border-t border-(--ink-14)
        bg-linear-to-br from-(--ink) via-[rgba(1,38,86,0.95)] to-(--ink)
        backdrop-blur-md
        overflow-hidden
      "
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-12">
          
          {/* Brand Section - Takes more space */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/Logo.png"
                  alt="Link'T Systems logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 
                className="text-2xl font-black tracking-tight text-(--background-paper)"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {t(brand.name)}
              </h3>
            </div>

            <p 
              className="mt-4 max-w-md text-base leading-relaxed text-(--background-paper)/85"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t(brand.tagline)}
            </p>

            {/* Social proof badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 backdrop-blur-sm">
                <div className="text-xs font-bold text-(--background-paper)/70 uppercase tracking-wide mb-0.5">
                  {t({ en: "Experience", es: "Experiencia" })}
                </div>
                <div className="text-lg font-black text-(--background-paper)">
                  15+ {t({ en: "Years", es: "Años" })}
                </div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 backdrop-blur-sm">
                <div className="text-xs font-bold text-(--background-paper)/70 uppercase tracking-wide mb-0.5">
                  {t({ en: "Projects", es: "Proyectos" })}
                </div>
                <div className="text-lg font-black text-(--background-paper)">10,000+</div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 
              className="text-sm font-black tracking-wider uppercase text-(--background-paper) mb-5"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {t(brand.footer.navTitle)}
            </h4>
            <ul className="space-y-3">
              {pages.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className="
                      group inline-flex items-center gap-1
                      text-base text-(--background-paper)/80
                      hover:text-(--background-paper)
                      transition-all duration-200
                    "
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="relative">
                      {t(p.label)}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-(--secondary-main) transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" strokeWidth={2.5} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h4 
              className="text-sm font-black tracking-wider uppercase text-(--background-paper) mb-5"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {t(brand.footer.contactTitle)}
            </h4>
            <div className="space-y-4">
              {/* Email */}
              <a 
                href={`mailto:${brand.email}`}
                className="
                  group flex items-start gap-3
                  text-(--background-paper)/80
                  hover:text-(--background-paper)
                  transition-all duration-200
                "
              >
                <div className="mt-0.5 rounded-lg bg-white/5 p-2 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-200">
                  <Mail className="w-4 h-4" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-(--background-paper)/60 uppercase tracking-wide mb-1">
                    Email
                  </div>
                  <div 
                    className="text-sm font-medium group-hover:underline underline-offset-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {brand.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-start gap-3 text-(--background-paper)/80">
                <div className="mt-0.5 rounded-lg bg-white/5 p-2 border border-white/10">
                  <Phone className="w-4 h-4" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-(--background-paper)/60 uppercase tracking-wide mb-1">
                    {t({ en: "Phone", es: "Teléfono" })}
                  </div>
                  <div 
                    className="text-sm font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {brand.phone}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-(--background-paper)/80">
                <div className="mt-0.5 rounded-lg bg-white/5 p-2 border border-white/10">
                  <MapPin className="w-4 h-4" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-(--background-paper)/60 uppercase tracking-wide mb-1">
                    {t({ en: "Location", es: "Ubicación" })}
                  </div>
                  <div 
                    className="text-sm font-medium leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t(brand.address)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 border-t border-white/10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <div 
              className="text-sm text-(--background-paper)/70"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              © {year} {t(brand.name)}. {t(brand.footer.rights)}
            </div>

            {/* Quick Contact */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-(--background-paper)/70">
              <a 
                href={`mailto:${brand.email}`}
                className="
                  hover:text-(--background-paper) 
                  transition-colors duration-200
                  hover:underline underline-offset-2
                "
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {brand.email}
              </a>
              <span className="opacity-40">•</span>
              <span style={{ fontFamily: "'Inter', sans-serif" }}>
                {brand.phone}
              </span>
            </div>
          </div>

          {/* Decorative gradient line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-(--secondary-main)/50 to-transparent" />
        </div>
      </div>
    </footer>
  );
}