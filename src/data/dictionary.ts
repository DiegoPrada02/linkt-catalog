// src/data/Directory.ts
export type Lang = "en" | "es";
export type I18nText = { en: string; es: string };

type BannerDataItem = {
  title: I18nText;
  eyebrow: I18nText;
  text: I18nText;
  img: string;
  isVideo: boolean;
  cta: {
    text: I18nText;
    href: string;
  };
};

type PageTitleItem = {
  title: I18nText;
  subtitle: I18nText;
  rightText?: I18nText;
  text?: I18nText;
};

type Page = { label: I18nText; path: string };

export const pages: Page[] = [
  { label: { en: "Home", es: "Inicio" }, path: "/" },
  { label: { en: "Catalog", es: "Catálogo" }, path: "/catalog" },
  { label: { en: "Gallery", es: "Galería" }, path: "/gallery" },
  { label: { en: "Distribution", es: "Distribución" }, path: "/distribution" },
  { label: { en: "Contact", es: "Contacto" }, path: "/contact" },
];

export const BannerData: BannerDataItem[] = [
  {
    title: { en: "THE PERFECT BAG FOR THE JOB", es: "LA BOLSA PERFECTA PARA TU NEGOCIO" },
    eyebrow: { en: "LINK'T SYSTEMS", es: "LINK'T SYSTEMS" },
    text: {
      en: "Explore our extensive catalog of high-quality bags designed to meet the needs.",
      es: "Explora nuestro amplio catálogo de bolsas de alta calidad diseñadas para tus necesidades.",
    },
    img: "/images/banner1.webp",
    cta: { text: { en: "Browse Catalog", es: "Ver Catálogo" }, href: "/catalog" },
    isVideo: false,
  },
  {
    title: { en: "THE HOME FOR YOUR FROZEN GOODS", es: "EL HOGAR DE TUS PRODUCTOS CONGELADOS" },
    eyebrow: { en: "Tradition Meets Innovation", es: "Tradición e Innovación" },
    text: {
      en: "Discover our range of insulated folding boxes that keep your frozen goods fresh and secure.",
      es: "Descubre nuestras cajas plegables aisladas que mantienen tus congelados frescos y seguros.",
    },
    img: "/images/banner2.webp",
    cta: { text: { en: "Folding Boxes", es: "Cajas Plegables" }, href: "/catalog" },
    isVideo: false,
  },
  {
    title: { en: "Sustainable Packaging for a Better Future", es: "Empaques Sostenibles para un Mejor Futuro" },
    eyebrow: { en: "Eco-Friendly Choices", es: "Opciones Ecoamigables" },
    text: {
      en: "Choose from our selection of sustainable packaging solutions that reduce environmental impact without compromising quality.",
      es: "Elige soluciones sostenibles que reducen el impacto ambiental sin comprometer la calidad.",
    },
    img: "/images/testmedia.mp4",
    cta: { text: { en: "Go Green with Us", es: "Sé Verde con Nosotros" }, href: "/catalog" },
    isVideo: true,
  },
];

export const pageTitles: PageTitleItem[] = [
  {
    title: { en: "Popular Categories", es: "Categorías Populares" },
    subtitle: { en: "Start with a category, then drill down into subcategories.", es: "Empieza con una categoría y luego explora subcategorías." },
    rightText: { en: "View All", es: "Ver Todo" },
  },
  {
    title: { en: "About Link’T Systems", es: "Sobre Link’T Systems" },
    subtitle: { en: "We provide the best service in the world!", es: "¡Brindamos el mejor servicio del mundo!" },
    text: {
      en: "Link’T Systems provides cardboard boxes and paper bag solutions for retail, food service, e-commerce, and logistics...",
      es: "Link’T Systems ofrece soluciones de cajas de cartón y bolsas de papel para retail, alimentos, e-commerce y logística...",
    },
  },
  {
    title: { en: "Catalog", es: "Catálogo" },
    subtitle: { en: "Browse our extensive catalog of products.", es: "Explora nuestro amplio catálogo de productos." },
    rightText: { en: "View All", es: "Ver Todo" },
  },
];
