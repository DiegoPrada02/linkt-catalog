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

export type ContactCopy = {
  infoTitle: I18nText;
  infoText: I18nText;

  addressLabel: I18nText;
  addressValue: I18nText;

  emailLabel: I18nText;
  emailValue: string; // email itself should not translate

  phoneLabel: I18nText;
  phoneValue: string; // phone should not translate

  formTitle: I18nText;

  nameLabel: I18nText;
  namePlaceholder: I18nText;

  emailInputLabel: I18nText;
  emailPlaceholder: I18nText;

  phoneInputLabel: I18nText;
  phonePlaceholder: I18nText;

  messageLabel: I18nText;
  messagePlaceholder: I18nText;

  sendButton: I18nText;
};

export type Brand = {
  name: I18nText;
  tagline: I18nText;
  email: string;
  phone: string;
  address: I18nText;

  footer: {
    navTitle: I18nText;
    contactTitle: I18nText;
    rights: I18nText; // "All rights reserved."
  };
};

export const pages: Page[] = [
  { label: { en: "Home", es: "Inicio" }, path: "/" },
  { label: { en: "Catalog", es: "Catálogo" }, path: "/catalog" },
  { label: { en: "Gallery", es: "Galería" }, path: "/gallery" },
  { label: { en: "Distribution", es: "Distribución" }, path: "/distribution" },
  { label: { en: "Contact", es: "Contacto" }, path: "/contact" },
];

/**
 * Luxury / premium conversion copy notes:
 * - Clear value proposition + prestige framing
 * - Outcome-first (brand lift, protection, reliability)
 * - Risk reversal cues (built to perform, consistent quality)
 * - Speed + confidence (fast quotes, lead times)
 * - “You need this” without sounding cheap/spammy
 * - Spanish keeps the same premium tone (not literal)
 */
export const BannerData: BannerDataItem[] = [
  {
    title: {
      en: "The Premium Packaging Your Brand Deserves",
      es: "El Empaque Premium que tu Marca Merece",
    },
    eyebrow: {
      en: "LINK'T SYSTEMS • Elevated Packaging",
      es: "LINK'T SYSTEMS • Empaques de Alta Gama",
    },
    text: {
      en: "Make every handoff feel high-end. Our bags are crafted to protect, impress, and turn first-time buyers into loyal customers.",
      es: "Haz que cada entrega se sienta de lujo. Nuestras bolsas están hechas para proteger, impresionar y convertir compradores en clientes fieles.",
    },
    img: "/images/banner1.webp",
    cta: {
      text: { en: "Shop Best Sellers", es: "Ver Más Vendidos" },
      href: "/catalog",
    },
    isVideo: false,
  },
  {
    title: {
      en: "Cold Chain Confidence",
      es: "Confianza en Cadena de Frío",
    },
    eyebrow: {
      en: "Insulated Folding Boxes",
      es: "Cajas Plegables Aisladas",
    },
    text: {
      en: "Your frozen goods arrive exactly as intended—fresh, protected, and presentation-ready. Built for performance in real distribution.",
      es: "Tus congelados llegan tal como deben—frescos, protegidos y listos para presentar. Diseñadas para rendir en distribución real.",
    },
    img: "/images/banner2.webp",
    cta: {
      text: { en: "Upgrade Your Packaging", es: "Mejora tu Empaque" },
      href: "/catalog",
    },
    isVideo: false,
  },
  {
    title: {
      en: "Luxury Meets Sustainability",
      es: "Lujo con Sostenibilidad",
    },
    eyebrow: {
      en: "Eco-Forward. Brand-First.",
      es: "Eco-Responsable. Enfocado en Marca.",
    },
    text: {
      en: "Premium, responsible packaging that looks exceptional and performs under pressure—so you can meet modern expectations effortlessly.",
      es: "Empaques premium y responsables que se ven impecables y rinden bajo presión—para cumplir expectativas modernas sin esfuerzo.",
    },
    img: "/images/testmedia.mp4",
    cta: {
      text: { en: "Discover Eco Premium", es: "Descubre Eco Premium" },
      href: "/catalog",
    },
    isVideo: true,
  },
];

export const pageTitles: PageTitleItem[] = [
  {
    title: {
      en: "Most Requested Solutions",
      es: "Soluciones Más Solicitadas",
    },
    subtitle: {
      en: "Explore the categories businesses choose when quality, presentation, and reliability can’t be optional.",
      es: "Explora las categorías que las empresas eligen cuando la calidad, la presentación y la confiabilidad no son opcionales.",
    },
    rightText: { en: "View Full Catalog", es: "Ver Catálogo Completo" },
  },
  {
    title: {
      en: "Packaging That Feels Like a Competitive Advantage",
      es: "Empaques que se Sienten como una Ventaja Competitiva",
    },
    subtitle: {
      en: "Premium materials. Consistent output. Built to scale with you.",
      es: "Materiales premium. Producción consistente. Listo para crecer contigo.",
    },
    text: {
      en: "Link’T Systems delivers premium cardboard boxes and paper bags designed for retail, food service, e-commerce, and logistics. We focus on what drives conversion: strong presentation, dependable protection, and the operational reliability your team needs—order after order.",
      es: "Link’T Systems ofrece cajas de cartón y bolsas de papel premium para retail, alimentos, e-commerce y logística. Nos enfocamos en lo que convierte: presentación sólida, protección confiable y la consistencia operativa que tu equipo necesita—pedido tras pedido.",
    },
  },
  {
    title: {
      en: "Catalog",
      es: "Catálogo",
    },
    subtitle: {
      en: "Premium packaging—ready to ship, ready to impress.",
      es: "Empaques premium—listos para enviar, listos para impresionar.",
    },
    rightText: { en: "Browse Products", es: "Explorar Productos" },
  },
];

export const contactCopy: ContactCopy = {
  infoTitle: {
    en: "Get a Quote—Fast, Clear, and Competitive",
    es: "Recibe una Cotización—Rápida, Clara y Competitiva",
  },
  infoText: {
    en: "Tell us what you need—bags, boxes, or custom packaging. We’ll respond with curated options, recommended quantities, and lead times so you can move forward with confidence.",
    es: "Cuéntanos qué necesitas—bolsas, cajas o empaques personalizados. Te responderemos con opciones recomendadas, cantidades ideales y tiempos de entrega para que avances con confianza.",
  },


  addressLabel: { en: "Address", es: "Dirección" },
  addressValue: {
    en: "10930 NW 138TH ST UNIT 2 - HIALEAH GARDENS FL, 33018",
    es: "10930 NW 138TH ST BODEGA 2 - HIALEAH GARDENS FL, 33018",
  },

  emailLabel: { en: "Email", es: "Correo" },
  emailValue: "JUANPRADA@GRUPOELLIOT.COM",

  phoneLabel: { en: "Phone", es: "Teléfono" },
  phoneValue: "+1 (754) 423-5958 / +1 (225) 360-5760",

  formTitle: { en: "Start Here", es: "Empieza Aquí" },

  nameLabel: { en: "Name", es: "Nombre" },
  namePlaceholder: { en: "Jane Doe", es: "Juan Pérez" },

  emailInputLabel: { en: "Email", es: "Correo" },
  emailPlaceholder: { en: "jane@company.com", es: "juan@empresa.com" },

  phoneInputLabel: { en: "Phone", es: "Teléfono" },
  phonePlaceholder: { en: "(555) 555-5555", es: "(555) 555-5555" },

  messageLabel: { en: "What do you need packaged?", es: "¿Qué necesitas empacar?" },
  messagePlaceholder: {
    en: "Tell us the product type, sizes, quantities, and timeline. If you want custom printing, mention your brand colors and finish.",
    es: "Cuéntanos el tipo de producto, tamaños, cantidades y fecha. Si deseas impresión personalizada, menciona colores de marca y acabado.",
  },

  sendButton: { en: "Request My Quote", es: "Solicitar Mi Cotización" },
};

export const brand: Brand = {
  name: { en: "Link'T Systems", es: "Link'T Systems" },
  tagline: {
    en: "Luxury-grade packaging that protects, performs, and elevates your brand.",
    es: "Empaques de nivel premium que protegen, rinden y elevan tu marca.",
  },

  // DO NOT MODIFY CONTACT INFORMATION (kept identical)
  email: "JUANPRADA@GRUPOELLIOT.COM",
  phone: "+1 (754) 423-5958 / +1 (225) 360-5760",
  address: {
    en: "10930 NW 138TH ST UNIT 2 - HIALEAH GARDENS FL, 33018",
    es: "10930 NW 138TH ST BODEGA 2 - HIALEAH GARDENS FL, 33018",
  },

  footer: {
    navTitle: { en: "Navigation", es: "Navegación" },
    contactTitle: { en: "Contact", es: "Contacto" },
    rights: { en: "All rights reserved.", es: "Todos los derechos reservados." },
  },
};
