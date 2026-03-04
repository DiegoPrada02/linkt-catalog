import { Link } from "react-router-dom";
import BrandScrollCard from "../components/ui/brandsScrollCard";
import { useLanguage } from "../i18n/LanguageProvider";
import { Marquee } from "./ui/marquee";

const partnerLogos = [
  {
    img: "/images/partner-logos/art-meat-logo.webp",
    alt: "Art Meat Logo",
    url: "https://artmeat.com/",
  },
  {
    img: "/images/partner-logos/bonjour-logo.webp",
    alt: "Bonjour Logo",
    url: "https://bonjourbakeryusa.com/",
  },
  {
    img: "/images/partner-logos/c3-logo.webp",
    alt: "C3 Logo",
    url: "https://www.c3sbe.com/",
  },
  {
    img: "/images/partner-logos/el-latino-logo.webp",
    alt: "El Latino Logo",
    url: "https://ellatinofoods.com/",
  },
  {
    img: "/images/partner-logos/goya-logo.webp",
    alt: "Goya Logo",
    url: "https://www.goya.com/en/",
  },
  {
    img: "/images/partner-logos/hot-pandeyuca-logo.webp",
    alt: "Hot Pandeyuca Logo",
    url: "https://hotpandeyuca.com/",
  },
  {
    img: "/images/partner-logos/inter-miami-logo.webp",
    alt: "Inter Miami Logo",
    url: "https://www.intermiamicf.com/",
  },
  {
    img: "/images/partner-logos/luka-logo.webp",
    alt: "Luka Logo",
    url: "https://www.lukarestaurant.com/",
  },
  {
    img: "/images/partner-logos/mambo-logo.webp",
    alt: "Mambo Logo",
    url: "https://mambofoods.com/",
  },
  {
    img: "/images/partner-logos/mario-hernandez-logo.webp",
    alt: "Mario Hernandez Logo",
    url: "https://www.mariohernandezusa.com/",
  },
  {
    img: "/images/partner-logos/paisa-logo.webp",
    alt: "Paisa Logo",
    url: "https://paisausa.com/",
  },
  {
    img: "/images/partner-logos/panna-logo.webp",
    alt: "Panna Logo",
    url: "https://mypanna.com/",
  },
  {
    img: "/images/partner-logos/picanha-grill-logo.webp",
    alt: "Picanha Grill Logo",
    url: "",
  },
  {
    img: "/images/partner-logos/tio-sol-logo.webp",
    alt: "Tio Sol Logo",
    url: "https://lapicanagrill.com/",
  },
  {
    img: "/images/partner-logos/toma-logo.webp",
    alt: "Toma Logo",
    url: "https://www.eattoma.com",
  },
  {
    img: "/images/partner-logos/tqmuch-logo.webp",
    alt: "Tqmuch Logo",
    url: "https://tqmuch.com/",
  },
];

export default function BrandsScrollBand() {
  const { t } = useLanguage();

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        padding: "3.5rem 0",
        fontFamily: "'Funnel Sans', system-ui, sans-serif",
      }}
    >
      {/* ── Decorative background slabs ──────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Rotated slab — left */}
        <div
          style={{
            position: "absolute",
            left: "-6%",
            top: "-60%",
            width: "30%",
            height: "220%",
            background:
              "linear-gradient(135deg, var(--gradient-blue-light), transparent)",
            transform: "rotate(-12deg)",
            borderRadius: "18px",
            opacity: 0.45,
          }}
        />
        {/* Rotated slab — right */}
        <div
          style={{
            position: "absolute",
            right: "-6%",
            bottom: "-60%",
            width: "30%",
            height: "220%",
            background:
              "linear-gradient(135deg, transparent, var(--gradient-blue-soft))",
            transform: "rotate(-12deg)",
            borderRadius: "18px",
            opacity: 0.35,
          }}
        />
      </div>

      {/* ── Section header ───────────────────────────────────────────────── */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "2.25rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--ink-60)",
            marginBottom: "0.4rem",
          }}
        >
          {t({ en: "Trusted By", es: "Con la Confianza de" })}
        </span>
        <h3
          style={{
            margin: 0,
            fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
            fontWeight: 900,
            color: "var(--ink)",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
          }}
        >
          {t({ en: "Our Partners", es: "Nuestros Socios" })}
        </h3>
      </div>

      {/* ── Marquee ──────────────────────────────────────────────────────── */}
      <div className="relative z-10">
        <Marquee reverse pauseOnHover duration={50}>
          {partnerLogos.map((partner) =>
            partner.url ? (
              <Link
                key={partner.img}
                to={partner.url}
                className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-2xl"
                style={{ ["--tw-ring-color" as string]: "var(--ink)" }}
              >
                <BrandScrollCard img={partner.img} altT={partner.alt} />
              </Link>
            ) : (
              <div key={partner.img} className="inline-block">
                <BrandScrollCard img={partner.img} altT={partner.alt} />
              </div>
            ),
          )}
        </Marquee>
      </div>

      {/* ── Edge fade overlays ───────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "8rem",
          zIndex: 20,
          pointerEvents: "none",
          background:
            "linear-gradient(to right, var(--background-default), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "8rem",
          zIndex: 20,
          pointerEvents: "none",
          background:
            "linear-gradient(to left, var(--background-default), transparent)",
        }}
      />
    </div>
  );
}
