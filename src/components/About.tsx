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

const FONT = "'Funnel Sans', system-ui, sans-serif";

/* ── tiny helpers ──────────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "11px",
        fontWeight: 800,
        letterSpacing: "0.16em",
        textTransform: "uppercase" as const,
        color: "var(--ink-60)",
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        margin: 0,
        fontSize: "clamp(1.35rem, 2.2vw, 1.85rem)",
        fontWeight: 900,
        color: "var(--ink)",
        letterSpacing: "-0.01em",
        lineHeight: 1.15,
        fontFamily: FONT,
      }}
    >
      {children}
    </h3>
  );
}

function Card({
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={className}
      style={{
        borderRadius: "20px",
        border: "1px solid var(--ink-12)",
        background:
          "linear-gradient(160deg, #ffffff 0%, var(--background-default) 100%)",
        boxShadow: "0 4px 18px var(--ink-12)",
        transition:
          "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        overflow: "hidden",
        position: "relative",
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

function BgSlab({ flip }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      style={{
        pointerEvents: "none",
        position: "absolute",
        right: flip ? "auto" : "-8%",
        left: flip ? "-8%" : "auto",
        top: "-35%",
        width: "44%",
        height: "170%",
        background:
          "linear-gradient(135deg, var(--gradient-blue-light), var(--gradient-blue-soft))",
        transform: "rotate(-12deg)",
        borderRadius: "14px",
        opacity: 0.35,
      }}
    />
  );
}

function hoverOn(el: HTMLElement) {
  el.style.transform = "translateY(-3px)";
  el.style.boxShadow = "0 14px 36px var(--ink-14)";
  el.style.borderColor = "var(--ink-18)";
}
function hoverOff(el: HTMLElement) {
  el.style.transform = "translateY(0)";
  el.style.boxShadow = "0 4px 18px var(--ink-12)";
  el.style.borderColor = "var(--ink-12)";
}

/* ── component ─────────────────────────────────────────────────────────────── */
export default function About() {
  const { t } = useLanguage();
  const about = pageTitles[1];

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
        en: "Custom-designed bags that elevate your brand presentation at every touchpoint.",
        es: "Bolsas diseñadas a medida que elevan la presentación de su marca.",
      },
    },
    {
      icon: Layers,
      title: { en: "Folding Boxes", es: "Cajas Plegables" },
      desc: {
        en: "Food-safe packaging engineered for frozen and fresh products alike.",
        es: "Empaques seguros para productos congelados y frescos.",
      },
    },
    {
      icon: Sparkles,
      title: { en: "Custom Printing", es: "Impresión Personalizada" },
      desc: {
        en: "Vibrant, high-fidelity prints that make your packaging impossible to ignore.",
        es: "Impresiones vibrantes de alta calidad que destacan.",
      },
    },
  ];

  const serviceList = [
    { en: "Custom Paper Bags", es: "Bolsas de Papel Personalizadas" },
    {
      en: "Folding Boxes for Frozen Food",
      es: "Cajas Plegables para Congelados",
    },
    { en: "Food Containers", es: "Contenedores de Alimentos" },
    { en: "Cardboard Trays", es: "Bandejas de Cartón" },
    { en: "Cardboard Boxes", es: "Cajas de Cartón" },
    { en: "Custom Printing & Design", es: "Impresión y Diseño Personalizado" },
    { en: "Merchandise Displays", es: "Exhibidores de Mercancía" },
    { en: "Premium Quality Materials", es: "Materiales de Calidad Premium" },
  ];

  return (
    <div style={{ fontFamily: FONT }}>
      <PageTitle title={t(about.title)} subtitle={t(about.subtitle)} />

      {/* ── Page body: all sections separated by consistent 5rem gap ──────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          paddingBottom: "6rem",
        }}
      >
        {/* ① Intro ─────────────────────────────────────────────────────────── */}
        {about.text && (
          <p
            style={{
              maxWidth: "62ch",
              margin: "0 auto",
              textAlign: "center",
              fontSize: "clamp(0.975rem, 1.4vw, 1.1rem)",
              lineHeight: 1.85,
              color: "var(--ink-72)",
              fontWeight: 400,
            }}
          >
            {t(about.text)}
          </p>
        )}

        {/* ② Stats ──────────────────────────────────────────────────────────── */}
        <section>
          <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
            <SectionLabel>
              {t({ en: "By the Numbers", es: "En Números" })}
            </SectionLabel>
            <SectionHeading>
              {t({ en: "Our Track Record", es: "Nuestro Historial" })}
            </SectionHeading>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
              gap: "1.25rem",
              maxWidth: "62rem",
              margin: "0 auto",
            }}
          >
            {stats.map((stat, i) => (
              <Card
                key={i}
                style={{ padding: "2.25rem 1.5rem", textAlign: "center" }}
                onMouseEnter={(e) => hoverOn(e.currentTarget as HTMLElement)}
                onMouseLeave={(e) => hoverOff(e.currentTarget as HTMLElement)}
              >
                <BgSlab />
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "12px",
                      background: "var(--ink)",
                      padding: "0.65rem",
                      marginBottom: "1.25rem",
                      boxShadow: "0 4px 14px var(--ink-18)",
                    }}
                  >
                    <stat.icon
                      style={{
                        width: 20,
                        height: 20,
                        color: "var(--background-paper)",
                        strokeWidth: 2,
                      }}
                    />
                  </div>
                  {/* Value */}
                  <div
                    style={{
                      fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
                      fontWeight: 900,
                      color: "var(--ink)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  {/* Label */}
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink-60)",
                    }}
                  >
                    {t(stat.label)}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ③ What We Do ────────────────────────────────────────────────────── */}
        <section>
          <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
            <SectionLabel>
              {t({ en: "Our Expertise", es: "Nuestra Especialidad" })}
            </SectionLabel>
            <SectionHeading>
              {t({ en: "What We Do Best", es: "Lo Que Hacemos Mejor" })}
            </SectionHeading>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
              maxWidth: "72rem",
              margin: "0 auto",
            }}
          >
            {services.map((svc, i) => (
              <Card
                key={i}
                className="group"
                style={{ padding: "2.25rem" }}
                onMouseEnter={(e) => hoverOn(e.currentTarget as HTMLElement)}
                onMouseLeave={(e) => hoverOff(e.currentTarget as HTMLElement)}
              >
                <BgSlab />
                <div style={{ position: "relative" }}>
                  {/* Icon */}
                  <div
                    style={{
                      display: "inline-flex",
                      borderRadius: "14px",
                      background: "var(--ink)",
                      padding: "0.75rem",
                      marginBottom: "1.35rem",
                      boxShadow: "0 6px 18px var(--ink-18)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    <svc.icon
                      style={{
                        width: 22,
                        height: 22,
                        color: "var(--background-paper)",
                        strokeWidth: 2.5,
                      }}
                    />
                  </div>
                  {/* Title */}
                  <h4
                    style={{
                      margin: "0 0 0.65rem",
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--ink)",
                      letterSpacing: "0.01em",
                      fontFamily: FONT,
                    }}
                  >
                    {t(svc.title)}
                  </h4>
                  {/* Desc */}
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      fontWeight: 400,
                      color: "var(--ink-72)",
                      lineHeight: 1.75,
                    }}
                  >
                    {t(svc.desc)}
                  </p>
                </div>
                {/* Bottom streak on hover */}
                <div
                  className="group-hover:opacity-100"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background:
                      "linear-gradient(90deg, transparent, var(--ink) 35%, var(--ink) 65%, transparent)",
                    borderRadius: "0 0 20px 20px",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                />
              </Card>
            ))}
          </div>
        </section>

        {/* ④ Full service list ─────────────────────────────────────────────── */}
        <section>
          <Card
            style={{
              maxWidth: "52rem",
              margin: "0 auto",
              padding: "3rem 2.75rem",
            }}
          >
            <BgSlab />
            <div style={{ position: "relative" }}>
              <div style={{ textAlign: "center", marginBottom: "2.25rem" }}>
                <SectionLabel>
                  {t({ en: "Full Range", es: "Gama Completa" })}
                </SectionLabel>
                <SectionHeading>
                  {t({
                    en: "Complete Packaging Solutions",
                    es: "Soluciones Completas de Empaque",
                  })}
                </SectionHeading>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem 2rem",
                }}
              >
                {serviceList.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.7rem",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--ink-80)",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 22,
                        height: 22,
                        borderRadius: "7px",
                        background: "var(--ink)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 6px var(--ink-18)",
                      }}
                    >
                      <svg
                        width="11"
                        height="11"
                        fill="none"
                        stroke="var(--background-paper)"
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
                    {t(item)}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* ⑤ Location ──────────────────────────────────────────────────────── */}
        <section>
          <Card
            style={{
              maxWidth: "52rem",
              margin: "0 auto",
              padding: "3rem 2.75rem",
            }}
          >
            <BgSlab flip />
            <div style={{ position: "relative" }}>
              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
                <SectionLabel>
                  {t({ en: "Find Us", es: "Encuéntranos" })}
                </SectionLabel>
                <SectionHeading>
                  {t({
                    en: "Where Are We Located?",
                    es: "¿Dónde Estamos Ubicados?",
                  })}
                </SectionHeading>
                <p
                  style={{
                    margin: "0.8rem auto 0",
                    maxWidth: "40ch",
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    color: "var(--ink-72)",
                    lineHeight: 1.7,
                  }}
                >
                  {t(brand.address)}
                </p>
              </div>
              {/* Map */}
              <div
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid var(--ink-12)",
                  boxShadow: "0 4px 16px var(--ink-12)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d274.5801783151661!2d-80.37644367650046!3d25.898215077716632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bcaff8215555%3A0x2b0676d3e36dafdd!2s10930%20NW%20138th%20St%20UNIT%202!5e0!3m2!1sen!2sus!4v1771266364448!5m2!1sen!2sus"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
