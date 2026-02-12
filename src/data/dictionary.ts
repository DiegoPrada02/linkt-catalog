export type Lang = "en" | "es";
export type I18nText = { en: string; es: string };


const IMG = (i: number) =>
  `https://picsum.photos/seed/${i}/200/300`
const VID = (_seed: number) =>
  `https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4`;

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
    {
    title:{
      en: "Our Partners",
      es: "Nuestros Clientes",
    },
    subtitle:{
      en: "We treat our partners like family.",
      es: "Tratamos a nuestros clientes como familia."
    }
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

  nameLabel: { en: "Company Name", es: "Nombre de la Compañia" },
  namePlaceholder: { en: "Sample Company LLC", es: "Mi Compañia LLC" },

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

export type DistributionCopy = {
  title: I18nText;
  subtitle: I18nText;
  cta: {
    text: I18nText;
    href: string;
  };

  heroImageAlt: I18nText;
  heroImage: string;

  intro: I18nText;

  highlightsTitle: I18nText;
  highlights: { title: I18nText; text: I18nText }[];

  stats: { label: I18nText; value: I18nText }[];

  noteTitle: I18nText;
  noteText: I18nText;
};

export const distributionCopy: DistributionCopy = {
  title: { en: "Distribution", es: "Distribución" },
  subtitle: {
    en: "We handle the distribution of your products nationwide—fast, reliable, and scalable.",
    es: "Nos encargamos de la distribución de tus productos a nivel nacional—rápido, confiable y escalable.",
  },
  cta: { text: { en: "Contact Us", es: "Contáctanos" }, href: "/contact" },

  heroImage:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heroImageAlt: {
    en: "Distribution warehouse and logistics",
    es: "Almacén de distribución y logística",
  },

  intro: {
    en: "At LINK’T SYSTEMS, we go beyond traditional services by offering complete distribution and logistics management designed to help businesses scale with confidence. You focus on growth and sales—while we handle coordination, movement, and delivery.",
    es: "En LINK’T SYSTEMS vamos más allá de los servicios tradicionales ofreciendo una gestión completa de distribución y logística para que tu empresa crezca con confianza. Tú te enfocas en crecer y vender—y nosotros nos encargamos de coordinar, mover y entregar.",
  },

  highlightsTitle: { en: "What we provide", es: "Lo que ofrecemos" },
  highlights: [
    {
      title: { en: "Nationwide delivery", es: "Entrega nacional" },
      text: {
        en: "Integrated distribution across the U.S. with consistent processes and accountability.",
        es: "Distribución integrada en EE. UU. con procesos consistentes y responsabilidad.",
      },
    },
    {
      title: { en: "International shipping", es: "Envíos internacionales" },
      text: {
        en: "Global reach through strategic carrier partnerships (e.g., FedEx).",
        es: "Alcance global mediante alianzas estratégicas con transportistas (p. ej., FedEx).",
      },
    },
    {
      title: { en: "Operational simplicity", es: "Operación sin complicaciones" },
      text: {
        en: "One partner to streamline timelines, reduce coordination overhead, and scale smoothly.",
        es: "Un solo socio para optimizar tiempos, reducir la coordinación y escalar sin fricción.",
      },
    },
  ],

  stats: [
    { value: { en: "48–72h", es: "48–72h" }, label: { en: "Typical dispatch window", es: "Ventana típica de despacho" } },
    { value: { en: "Nationwide", es: "Nacional" }, label: { en: "Coverage", es: "Cobertura" } },
    { value: { en: "Tracked", es: "Rastreado" }, label: { en: "Shipments", es: "Envíos" } },
  ],

  noteTitle: { en: "Built for growth", es: "Diseñado para crecer" },
  noteText: {
    en: "Whether you’re an established enterprise or a growing brand expanding into new markets, LINK’T SYSTEMS can become your long-term logistics partner.",
    es: "Ya seas una empresa consolidada o una marca en crecimiento que busca nuevos mercados, LINK’T SYSTEMS puede ser tu socio logístico a largo plazo.",
  },
};


export type GalleryCopy = {
  title: I18nText;
  subtitle: I18nText;
  modalClose: I18nText;
  viewLabel: I18nText;
  replaceHint: I18nText;
};



export const galleryCopy: GalleryCopy = {
  title: { en: "Gallery", es: "Galería" },
  subtitle: {
    en: "A bento-style gallery of product visuals and short videos (placeholders for now).",
    es: "Una galería tipo bento con imágenes y videos cortos (por ahora, contenido de ejemplo).",
  },
  modalClose: { en: "Close", es: "Cerrar" },
  viewLabel: { en: "View", es: "Ver" },
  replaceHint: {
    en: "Replace these placeholders with your real product photos and videos. Next we can add filters, categories, and a lightbox carousel.",
    es: "Reemplaza estos ejemplos por tus fotos y videos reales. Luego podemos agregar filtros, categorías y un carrusel tipo lightbox.",
  },
};

export const galleryFilters = {
  all: { en: "All", es: "Todo" },
  boxes: { en: "Boxes", es: "Cajas" },
  bags: { en: "Bags", es: "Bolsas" },
  food: { en: "Food", es: "Alimentos" },
  retail: { en: "Retail", es: "Retail" },
  logistics: { en: "Logistics", es: "Logística" },
  eco: { en: "Eco", es: "Eco" },
  video: { en: "Video", es: "Video" },
} satisfies Record<string, I18nText>;


export type GalleryTagKey =
  | "boxes"
  | "bags"
  | "food"
  | "retail"
  | "logistics"
  | "eco"
  | "video";

export type GalleryItem = {
  id: string;
  kind: "image" | "video";
  src: string;
  poster?: string;
  title: I18nText;

  // ✅ for filtering
  tagKey: GalleryTagKey;

  //for display (translated)
  tag: I18nText;

  colSpan: 1 | 2;
  rowSpan: 1 | 2;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    kind: "image",
    src: IMG(1),
    title: { en: "Premium Boxes", es: "Cajas Premium" },
    tagKey: "boxes",
    tag: { en: "Boxes", es: "Cajas" },
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "g2",
    kind: "image",
    src: IMG(2),
    title: { en: "Paper Bags", es: "Bolsas de Papel" },
    tagKey: "bags",
    tag: { en: "Bags", es: "Bolsas" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g3",
    kind: "video",
    src: "/images/testmedia.mp4",
    poster: IMG(33),
    title: { en: "Production Line (Video)", es: "Línea de Producción (Video)" },
    tagKey: "video",
    tag: { en: "Video", es: "Video" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g4",
    kind: "image",
    src: IMG(4),
    title: { en: "Food Packaging", es: "Empaques para Alimentos" },
    tagKey: "food",
    tag: { en: "Food", es: "Alimentos" },
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "g5",
    kind: "image",
    src: IMG(5),
    title: { en: "Shipping", es: "Envíos" },
    tagKey: "logistics",
    tag: { en: "Logistics", es: "Logística" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g6",
    kind: "image",
    src: IMG(6),
    title: { en: "Retail Ready", es: "Listo para Retail" },
    tagKey: "retail",
    tag: { en: "Retail", es: "Retail" },
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "g7",
    kind: "video",
    src: VID(2),
    poster: IMG(77),
    title: { en: "Packaging Showcase (Video)", es: "Muestra de Empaques (Video)" },
    tagKey: "video",
    tag: { en: "Video", es: "Video" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g8",
    kind: "image",
    src: IMG(8),
    title: { en: "Eco Options", es: "Opciones Eco" },
    tagKey: "eco",
    tag: { en: "Eco", es: "Eco" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g9",
    kind: "image",
    src: IMG(9),
    title: { en: "Kraft Bags", es: "Bolsas Kraft" },
    tagKey: "bags",
    tag: { en: "Bags", es: "Bolsas" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g10",
    kind: "image",
    src: IMG(10),
    title: { en: "Die-cut Boxes", es: "Cajas Troqueladas" },
    tagKey: "boxes",
    tag: { en: "Boxes", es: "Cajas" },
    colSpan: 1,
    rowSpan: 1,
  },
];


/* CATALOG AREA DO NOT MODIFY UNLESS YOU TALK TO DEV!!!!!!!!!!!!*/

/* ========= TYPES ========= */

// src/data/dictionary.ts (or Directory.ts)
// ✅ Catalog section (fully translatable, no t(...) usage)


export type ProductionTime = {
  minDays: number;
  maxDays: number;
  note?: I18nText;
};

export type Subcategory = {
  id: string;
  title: I18nText;
  description: I18nText;
  image: string;
  details: {
    longDescription: I18nText;
    paperType: I18nText;
    paperGsm: number;
    coating?: I18nText;
    size: {
      widthMm: number;
      heightMm: number;
      depthMm?: number;
    };
    printing: I18nText;
    minimumOrderQty: number;
    productionTime: ProductionTime;
  };
};

export type Category = {
  id: string;
  title: I18nText;
  description: I18nText;
  image: string;
  subcategories: Subcategory[];
};

const img = (seed: number) => `https://picsum.photos/seed/${seed}/900/700`;


export const CATEGORIES: Category[] = [
  // 1) Shipping Boxes
  {
    id: "shipping-boxes",
    title: { en: "Shipping Boxes", es: "Cajas para Envío" },
    description: {
      en: "Corrugated boxes built for shipping, storage, and fulfillment.",
      es: "Cajas corrugadas para envío, almacenamiento y logística.",
    },
    image: img(1001),
    subcategories: [
      {
        id: "rsc",
        title: { en: "Regular Slotted Carton (RSC)", es: "Caja Ranurada Regular (RSC)" },
        description: {
          en: "The most common corrugated shipping box style.",
          es: "El estilo más común de caja corrugada para envío.",
        },
        image: img(1101),
        details: {
          longDescription: {
            en: "A reliable, cost-effective box for a wide range of products. Great for warehousing and standard parcel shipping.",
            es: "Una caja confiable y rentable para muchos productos. Ideal para almacén y envíos estándar.",
          },
          paperType: { en: "Corrugated Kraft (Single Wall)", es: "Kraft Corrugado (Una Pared)" },
          paperGsm: 350,
          size: { widthMm: 300, heightMm: 200, depthMm: 200 },
          printing: { en: "1–2 color flexo", es: "Flexo 1–2 colores" },
          minimumOrderQty: 500,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
      {
        id: "mailer",
        title: { en: "E-commerce Mailer Box", es: "Caja Mailer para E-commerce" },
        description: {
          en: "Self-locking mailer designed for a premium unboxing experience.",
          es: "Caja auto-ensamblable para una experiencia premium de unboxing.",
        },
        image: img(1102),
        details: {
          longDescription: {
            en: "Perfect for DTC brands. Strong structure, clean presentation, and efficient packing.",
            es: "Perfecta para marcas DTC. Estructura fuerte, excelente presentación y empaque eficiente.",
          },
          paperType: { en: "Corrugated E-Flute", es: "Corrugado E-Flute" },
          paperGsm: 320,
          coating: { en: "Matte aqueous (optional)", es: "Acuoso mate (opcional)" },
          size: { widthMm: 250, heightMm: 80, depthMm: 180 },
          printing: { en: "CMYK digital / offset", es: "CMYK digital / offset" },
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 18 },
        },
      },
      {
        id: "doublewall",
        title: { en: "Heavy-Duty Double Wall Box", es: "Caja Doble Pared Reforzada" },
        description: {
          en: "Extra strength for heavier products and longer routes.",
          es: "Mayor resistencia para productos pesados y rutas largas.",
        },
        image: img(1103),
        details: {
          longDescription: {
            en: "Designed for high load capacity and improved protection. Ideal for industrial items and bulk shipments.",
            es: "Diseñada para alta capacidad de carga y mejor protección. Ideal para industria y envíos a granel.",
          },
          paperType: { en: "Double Wall Corrugated", es: "Corrugado Doble Pared" },
          paperGsm: 420,
          size: { widthMm: 600, heightMm: 400, depthMm: 400 },
          printing: { en: "1 color flexo", es: "Flexo 1 color" },
          minimumOrderQty: 300,
          productionTime: { minDays: 7, maxDays: 12 },
        },
      },
      {
        id: "archive",
        title: { en: "Archive / File Storage Box", es: "Caja para Archivo / Documentos" },
        description: {
          en: "Organized storage for documents, files, and records.",
          es: "Almacenamiento organizado para documentos y archivos.",
        },
        image: img(1104),
        details: {
          longDescription: {
            en: "Flat-pack design for easy storage. Great for offices, schools, and record keeping.",
            es: "Diseño plegable para fácil almacenamiento. Ideal para oficinas, escuelas y archivos.",
          },
          paperType: { en: "Corrugated Kraft", es: "Kraft Corrugado" },
          paperGsm: 300,
          size: { widthMm: 350, heightMm: 250, depthMm: 100 },
          printing: { en: "No print / 1 color", es: "Sin impresión / 1 color" },
          minimumOrderQty: 500,
          productionTime: { minDays: 6, maxDays: 10 },
        },
      },
    ],
  },

  // 2) Retail Boxes
  {
    id: "retail-boxes",
    title: { en: "Retail Boxes", es: "Cajas para Retail" },
    description: {
      en: "Packaging designed for shelf presence and brand presentation.",
      es: "Empaques diseñados para presencia en estantería y marca.",
    },
    image: img(2001),
    subcategories: [
      {
        id: "folding-carton",
        title: { en: "Folding Carton", es: "Cartón Plegadizo" },
        description: {
          en: "Lightweight retail box for consumer goods.",
          es: "Caja liviana para productos de consumo.",
        },
        image: img(2101),
        details: {
          longDescription: {
            en: "A versatile retail format used for cosmetics, supplements, and everyday products.",
            es: "Formato versátil usado para cosméticos, suplementos y productos diarios.",
          },
          paperType: { en: "SBS Paperboard", es: "Cartulina SBS" },
          paperGsm: 300,
          coating: { en: "Gloss or matte (optional)", es: "Brillante o mate (opcional)" },
          size: { widthMm: 120, heightMm: 200, depthMm: 60 },
          printing: { en: "Full color CMYK", es: "Color completo CMYK" },
          minimumOrderQty: 2000,
          productionTime: { minDays: 10, maxDays: 20 },
        },
      },
      {
        id: "window-box",
        title: { en: "Window Box", es: "Caja con Ventana" },
        description: {
          en: "Die-cut window to showcase the product.",
          es: "Ventana troquelada para mostrar el producto.",
        },
        image: img(2102),
        details: {
          longDescription: {
            en: "Great for food, gifts, and retail items where visibility drives sales.",
            es: "Ideal para alimentos, regalos y productos donde la visibilidad vende.",
          },
          paperType: { en: "SBS Paperboard + PET window", es: "Cartulina SBS + Ventana PET" },
          paperGsm: 320,
          coating: { en: "Gloss lamination", es: "Laminado brillante" },
          size: { widthMm: 150, heightMm: 180, depthMm: 70 },
          printing: { en: "Full color CMYK", es: "Color completo CMYK" },
          minimumOrderQty: 2000,
          productionTime: { minDays: 12, maxDays: 22 },
        },
      },
      {
        id: "rigid",
        title: { en: "Rigid Gift Box", es: "Caja Rígida Premium" },
        description: {
          en: "Premium rigid box for luxury products.",
          es: "Caja rígida premium para productos de lujo.",
        },
        image: img(2103),
        details: {
          longDescription: {
            en: "High-end structure with strong walls and refined finishes for premium presentation.",
            es: "Estructura de alta gama con paredes firmes y acabados finos para presentación premium.",
          },
          paperType: { en: "Greyboard + art paper wrap", es: "Cartón gris + forro en papel couché" },
          paperGsm: 1200,
          coating: { en: "Soft-touch (optional)", es: "Soft-touch (opcional)" },
          size: { widthMm: 250, heightMm: 80, depthMm: 200 },
          printing: { en: "Foil / CMYK / emboss (optional)", es: "Foil / CMYK / relieve (opcional)" },
          minimumOrderQty: 500,
          productionTime: { minDays: 15, maxDays: 30 },
        },
      },
      {
        id: "display",
        title: { en: "Counter Display Box", es: "Caja Exhibidora de Mostrador" },
        description: {
          en: "Point-of-sale display for retail counters.",
          es: "Exhibidor para punto de venta en mostrador.",
        },
        image: img(2104),
        details: {
          longDescription: {
            en: "Designed to present products neatly and drive impulse purchases at checkout.",
            es: "Diseñada para presentar productos ordenadamente y aumentar compras por impulso.",
          },
          paperType: { en: "Corrugated E-Flute", es: "Corrugado E-Flute" },
          paperGsm: 300,
          size: { widthMm: 300, heightMm: 200, depthMm: 180 },
          printing: { en: "Full color", es: "Color completo" },
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 18 },
        },
      },
    ],
  },

  // 3) Paper Bags
  {
    id: "paper-bags",
    title: { en: "Paper Bags", es: "Bolsas de Papel" },
    description: {
      en: "Retail and food bags that elevate the handoff and protect the product.",
      es: "Bolsas para retail y alimentos que elevan la entrega y protegen el producto.",
    },
    image: img(3001),
    subcategories: [
      {
        id: "twisted-handle",
        title: { en: "Twisted Handle Bag", es: "Bolsa con Asa Retorcida" },
        description: {
          en: "Classic kraft shopping bag with twisted handles.",
          es: "Bolsa kraft clásica con asas retorcidas.",
        },
        image: img(3101),
        details: {
          longDescription: {
            en: "A dependable retail staple with comfortable handles and strong load capacity.",
            es: "Un básico confiable de retail con asas cómodas y buena capacidad de carga.",
          },
          paperType: { en: "Kraft Paper", es: "Papel Kraft" },
          paperGsm: 120,
          size: { widthMm: 320, heightMm: 420, depthMm: 120 },
          printing: { en: "1–2 colors", es: "1–2 colores" },
          minimumOrderQty: 1000,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
      {
        id: "flat-handle",
        title: { en: "Flat Handle Bag", es: "Bolsa con Asa Plana" },
        description: {
          en: "Economical paper bag with flat handles.",
          es: "Bolsa económica con asas planas.",
        },
        image: img(3102),
        details: {
          longDescription: {
            en: "Great for high-volume retail. Clean look, efficient production, reliable strength.",
            es: "Ideal para alto volumen. Look limpio, producción eficiente y resistencia confiable.",
          },
          paperType: { en: "Kraft Paper", es: "Papel Kraft" },
          paperGsm: 110,
          size: { widthMm: 300, heightMm: 400, depthMm: 100 },
          printing: { en: "1 color", es: "1 color" },
          minimumOrderQty: 2000,
          productionTime: { minDays: 6, maxDays: 12 },
        },
      },
      {
        id: "luxury-bag",
        title: { en: "Luxury Rope Handle Bag", es: "Bolsa Premium con Cordón" },
        description: {
          en: "Premium bag with rope handles and upgraded finishes.",
          es: "Bolsa premium con cordón y acabados mejorados.",
        },
        image: img(3103),
        details: {
          longDescription: {
            en: "Designed for boutiques and premium brands where presentation matters most.",
            es: "Diseñada para boutiques y marcas premium donde la presentación es clave.",
          },
          paperType: { en: "Art Paper", es: "Papel Couche/Arte" },
          paperGsm: 180,
          coating: { en: "Matte lamination", es: "Laminado mate" },
          size: { widthMm: 260, heightMm: 360, depthMm: 100 },
          printing: { en: "CMYK + foil (optional)", es: "CMYK + foil (opcional)" },
          minimumOrderQty: 1000,
          productionTime: { minDays: 12, maxDays: 25 },
        },
      },
      {
        id: "food-delivery-bag",
        title: { en: "Food Delivery Bag", es: "Bolsa para Delivery de Comida" },
        description: {
          en: "Sturdy food bag sized for takeout and delivery orders.",
          es: "Bolsa resistente para pedidos de comida para llevar.",
        },
        image: img(3104),
        details: {
          longDescription: {
            en: "Built to carry meals securely with optional grease-resistant liners.",
            es: "Hecha para transportar comidas de forma segura con opción de recubrimiento anti-grasa.",
          },
          paperType: { en: "Kraft Paper", es: "Papel Kraft" },
          paperGsm: 110,
          coating: { en: "Grease-resistant (optional)", es: "Anti-grasa (opcional)" },
          size: { widthMm: 260, heightMm: 320, depthMm: 140 },
          printing: { en: "1–2 colors", es: "1–2 colores" },
          minimumOrderQty: 2000,
          productionTime: { minDays: 6, maxDays: 12 },
        },
      },
    ],
  },

  // 4) Custom Packaging
  {
    id: "custom-packaging",
    title: { en: "Custom Packaging", es: "Empaques Personalizados" },
    description: {
      en: "Fully custom boxes and bags—sizes, materials, print, and finishes.",
      es: "Cajas y bolsas 100% personalizadas—tamaños, materiales, impresión y acabados.",
    },
    image: img(4001),
    subcategories: [
      {
        id: "custom-box",
        title: { en: "Custom Box", es: "Caja Personalizada" },
        description: {
          en: "A box built to your exact dimensions and performance needs.",
          es: "Caja hecha a tus medidas y necesidades de resistencia.",
        },
        image: img(4101),
        details: {
          longDescription: {
            en: "Choose style, flute, print, and finishes. Ideal for brands that need a perfect fit and premium presentation.",
            es: "Elige estilo, flauta, impresión y acabados. Ideal para marcas que necesitan ajuste perfecto y presentación premium.",
          },
          paperType: { en: "Custom (Corrugated / Paperboard)", es: "Personalizado (Corrugado / Cartulina)" },
          paperGsm: 300,
          size: { widthMm: 300, heightMm: 150, depthMm: 200 },
          printing: { en: "Custom (flexo / offset / digital)", es: "Personalizado (flexo / offset / digital)" },
          minimumOrderQty: 1000,
          productionTime: {
            minDays: 15,
            maxDays: 30,
            note: { en: "Depends on complexity and finishes.", es: "Depende de complejidad y acabados." },
          },
        },
      },
      {
        id: "custom-bag",
        title: { en: "Custom Paper Bag", es: "Bolsa de Papel Personalizada" },
        description: {
          en: "Custom size + branding for retail or events.",
          es: "Tamaño e imagen personalizada para retail o eventos.",
        },
        image: img(4102),
        details: {
          longDescription: {
            en: "Select paper, handle type, and print coverage to match your brand standards.",
            es: "Selecciona papel, tipo de asa y cobertura de impresión para tu marca.",
          },
          paperType: { en: "Custom (Kraft / Art paper)", es: "Personalizado (Kraft / Papel arte)" },
          paperGsm: 140,
          size: { widthMm: 260, heightMm: 360, depthMm: 120 },
          printing: { en: "Custom (1–4 colors / CMYK)", es: "Personalizado (1–4 colores / CMYK)" },
          minimumOrderQty: 1500,
          productionTime: { minDays: 12, maxDays: 25 },
        },
      },
      {
        id: "prototype",
        title: { en: "Prototype Sample", es: "Muestra Prototipo" },
        description: {
          en: "Short-run sampling to validate size, structure, and print.",
          es: "Tiraje corto para validar tamaño, estructura e impresión.",
        },
        image: img(4103),
        details: {
          longDescription: {
            en: "Best for testing before committing to volume. Great for new product launches.",
            es: "Ideal para probar antes de producir volumen. Perfecto para lanzamientos.",
          },
          paperType: { en: "Various (by request)", es: "Varios (según solicitud)" },
          paperGsm: 250,
          size: { widthMm: 200, heightMm: 100, depthMm: 150 },
          printing: { en: "Digital", es: "Digital" },
          minimumOrderQty: 100,
          productionTime: { minDays: 5, maxDays: 7 },
        },
      },
      {
        id: "short-run",
        title: { en: "Short Run Packaging", es: "Producción de Bajo Volumen" },
        description: {
          en: "Lower MOQ runs for limited releases and seasonal drops.",
          es: "MOQ más bajo para ediciones limitadas y temporadas.",
        },
        image: img(4104),
        details: {
          longDescription: {
            en: "Flexible quantities with fast turnaround. Ideal for market tests or special campaigns.",
            es: "Cantidades flexibles con entrega rápida. Ideal para pruebas de mercado o campañas.",
          },
          paperType: { en: "Various (by request)", es: "Varios (según solicitud)" },
          paperGsm: 250,
          size: { widthMm: 220, heightMm: 110, depthMm: 160 },
          printing: { en: "Digital / short-run offset", es: "Digital / offset corto" },
          minimumOrderQty: 250,
          productionTime: { minDays: 7, maxDays: 10 },
        },
      },
    ],
  },
];
