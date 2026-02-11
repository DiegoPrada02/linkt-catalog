import { BRAND } from "../data/brand";

export default function Footer() {
  return (
    <footer
      className="
        relative z-40
        mt-20
        border-t border-(--background-paper)
        bg-white/70
        backdrop-blur-md
      "
    >
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-(--primary-main)">
              {BRAND.name}
            </h3>
            <p className="mt-3 max-w-sm text-sm text-[rgba(2,62,138,0.64)]">
              {BRAND.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-(--primary-main)">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-(--primary-main)">
                  Home
                </a>
              </li>
              <li>
                <a href="/catalog" className="hover:text-(--primary-main)">
                  Catalog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-(--primary-main)">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-(--primary-main)">
              Contact
            </h4>
            <div className="mt-4 space-y-2 text-sm text-[rgba(2,62,138,0.64)]">
              <div>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-(--primary-main)"
                >
                  {BRAND.email}
                </a>
              </div>
              <div>{BRAND.phone}</div>
              <div>{BRAND.address}</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
          <div className="text-[rgba(2,62,138,0.64)]">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
      </div>
    </footer>
  );
}
