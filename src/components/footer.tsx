import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { brand, pages } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-40 mt-24 overflow-hidden"
      style={{
        background: "var(--ink)",
        borderTop: "1px solid var(--ink-18)",
        fontFamily: "'Funnel Sans', system-ui, sans-serif",
      }}
    >
      {/* ── Decorative shapes (banner language) ─────────────────────────── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Large rotated slab — right */}
        <div
          style={{
            position: "absolute",
            right: "-8%",
            top: "-60%",
            width: "38%",
            height: "220%",
            background:
              "linear-gradient(135deg, rgba(199,221,247,0.055), rgba(219,234,254,0.025))",
            transform: "rotate(-12deg)",
            borderRadius: "18px",
          }}
        />
        {/* Thin skewed streak */}
        <div
          style={{
            position: "absolute",
            right: "28%",
            top: 0,
            width: "6px",
            height: "100%",
            background: "rgba(224,225,221,0.06)",
            transform: "skewX(-18deg)",
            borderRadius: "999px",
          }}
        />
        {/* Faint second streak */}
        <div
          style={{
            position: "absolute",
            right: "30%",
            top: 0,
            width: "2px",
            height: "100%",
            background: "rgba(224,225,221,0.03)",
            transform: "skewX(-18deg)",
            borderRadius: "999px",
          }}
        />
        {/* Bottom-left glow */}
        <div
          style={{
            position: "absolute",
            left: "-60px",
            bottom: "-60px",
            width: "280px",
            height: "280px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(163,207,255,0.06), transparent 70%)",
          }}
        />
        {/* Top-right glow */}
        <div
          style={{
            position: "absolute",
            right: "-40px",
            top: "-40px",
            width: "220px",
            height: "220px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(199,221,247,0.05), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 py-16">
        {/* ── Main grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-5 group"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "13px",
                  backgroundColor: "rgba(255,255,255,0.09)",
                  border: "1px solid rgba(224,225,221,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  flexShrink: 0,
                  transition: "opacity 0.2s ease",
                }}
                className="group-hover:opacity-80"
              >
                <img
                  src="/Logo.png"
                  alt="Link'T Systems logo"
                  style={{ height: 34, width: "auto" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "'Funnel Sans', system-ui, sans-serif",
                  fontWeight: 900,
                  fontSize: "18px",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "var(--background-paper)",
                }}
              >
                Link&apos;T Systems
              </span>
            </Link>

            <p
              style={{
                marginTop: "0.25rem",
                maxWidth: "42ch",
                fontSize: "0.95rem",
                lineHeight: 1.65,
                color: "rgba(224,225,221,0.68)",
                fontWeight: 400,
              }}
            >
              {t(brand.tagline)}
            </p>

            {/* Stats badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                {
                  label: { en: "Experience", es: "Experiencia" },
                  value: `15+ ${t({ en: "Years", es: "Años" })}`,
                },
                {
                  label: { en: "Projects", es: "Proyectos" },
                  value: "10,000+",
                },
              ].map((badge) => (
                <div
                  key={badge.value}
                  style={{
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.055)",
                    border: "1px solid rgba(224,225,221,0.14)",
                    padding: "0.55rem 1rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(224,225,221,0.50)",
                      marginBottom: "2px",
                    }}
                  >
                    {t(badge.label)}
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 900,
                      color: "var(--background-paper)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {badge.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-3">
            <h4
              style={{
                margin: "0 0 1.25rem",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(224,225,221,0.50)",
              }}
            >
              {t(brand.footer.navTitle)}
            </h4>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gap: "0.6rem",
              }}
            >
              {pages.map((p) => (
                <li key={p.path}>
                  <Link
                    to={p.path}
                    className="group"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "rgba(224,225,221,0.75)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--background-paper)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(224,225,221,0.75)")
                    }
                  >
                    <span style={{ position: "relative" }}>
                      {t(p.label)}
                      {/* skewed underline on hover via CSS class */}
                      <span
                        className="footer-nav-line"
                        style={{
                          position: "absolute",
                          bottom: -1,
                          left: 0,
                          height: "2px",
                          width: 0,
                          borderRadius: "2px",
                          background: "var(--background-paper)",
                          transform: "skewX(-8deg)",
                          transition: "width 0.25s ease",
                        }}
                      />
                    </span>
                    <ArrowUpRight
                      className="footer-nav-arrow"
                      style={{
                        width: 13,
                        height: 13,
                        opacity: 0,
                        transform: "translateX(-4px)",
                        transition: "opacity 0.2s ease, transform 0.2s ease",
                        strokeWidth: 2.5,
                      }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4
              style={{
                margin: "0 0 1.25rem",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(224,225,221,0.50)",
              }}
            >
              {t(brand.footer.contactTitle)}
            </h4>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: brand.email,
                  href: `mailto:${brand.email}`,
                  isLink: true,
                },
                {
                  Icon: Phone,
                  label: t({ en: "Phone", es: "Teléfono" }),
                  value: brand.phone,
                  href: undefined,
                  isLink: false,
                },
                {
                  Icon: MapPin,
                  label: t({ en: "Location", es: "Ubicación" }),
                  value: t(brand.address),
                  href: undefined,
                  isLink: false,
                },
              ].map(({ Icon, label, value, href, isLink }) => {
                const inner = (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        marginTop: "2px",
                        borderRadius: "10px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(224,225,221,0.12)",
                        padding: "0.45rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition:
                          "background 0.2s ease, border-color 0.2s ease",
                      }}
                    >
                      <Icon style={{ width: 15, height: 15, strokeWidth: 2 }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "10px",
                          fontWeight: 800,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "rgba(224,225,221,0.45)",
                          marginBottom: "3px",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          lineHeight: 1.5,
                          color: "rgba(224,225,221,0.78)",
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  </div>
                );

                return isLink ? (
                  <a
                    key={label}
                    href={href}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.85")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(224,225,221,0.10)",
          }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p
              style={{
                margin: 0,
                fontSize: "0.82rem",
                fontWeight: 500,
                color: "rgba(224,225,221,0.45)",
              }}
            >
              © {year} {t(brand.name)}. {t(brand.footer.rights)}
            </p>
            <div
              className="flex flex-wrap items-center gap-3"
              style={{ fontSize: "0.82rem", color: "rgba(224,225,221,0.45)" }}
            >
              <a
                href={`mailto:${brand.email}`}
                style={{
                  textDecoration: "none",
                  color: "rgba(224,225,221,0.55)",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--background-paper)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(224,225,221,0.55)")
                }
              >
                {brand.email}
              </a>
              <span style={{ opacity: 0.3 }}>•</span>
              <span style={{ fontWeight: 500 }}>{brand.phone}</span>
            </div>
          </div>

          {/* Skewed gradient rule — signature motif */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(224,225,221,0.18) 35%, rgba(224,225,221,0.18) 65%, transparent)",
              transform: "skewX(-2deg)",
            }}
          />
        </div>
      </div>

      {/* Hover helpers via injected style — avoids extra CSS file */}
      <style>{`
        .group:hover .footer-nav-line { width: 100% !important; }
        .group:hover .footer-nav-arrow { opacity: 1 !important; transform: translateX(0) !important; }
      `}</style>
    </footer>
  );
}
