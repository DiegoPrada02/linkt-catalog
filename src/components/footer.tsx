import { Link } from "react-router-dom";
import { pages, brand } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        relative z-40 mt-20
        border-t border-[rgba(12,12,12,0.14)]
        bg-(--ink)
        backdrop-blur-md
      "
    >
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-extrabold tracking-tight text-(--background-paper)">
              {t(brand.name)}
            </h3>
            <p className="mt-3 max-w-sm text-sm text-(--background-paper)">
              {t(brand.tagline)}
            </p>
          </div>

          {/* Navigation (uses existing Pages type) */}
          <div>
            <h4 className="text-sm font-extrabold tracking-wide text-(--background-paper)">
              {t(brand.footer.navTitle)}
            </h4>

            <ul className="mt-4 space-y-2 text-sm">
              {pages.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className="
                      text-(--background-paper)
                      hover:text-(--secondary-light)
                      hover:underline
                      underline-offset-4
                      transition
                    "
                  >
                    {t(p.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-extrabold tracking-wide text-(--background-paper)">
              {t(brand.footer.contactTitle)}
            </h4>

            <div className="mt-4 space-y-2 text-sm text-(--background-paper)">
              <div>
                <a className="hover:text-(--secondary-light) hover:underline underline-offset-4" href={`mailto:${brand.email}`}>
                  {brand.email}
                </a>
              </div>
              <div>{brand.phone}</div>
              <div>{t(brand.address)}</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-(--background-paper)pt-6 text-sm text-(--background-paper) sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {year} {t(brand.name)}. {t(brand.footer.rights)}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a className="hover:text-(--secondary-light) hover:underline underline-offset-4" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
            <span className="opacity-50">•</span>
            <span>{brand.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}