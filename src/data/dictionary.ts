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
    img: "/images/banner-media/banner1.webp",
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
    img: "/images/banner-media/banner2.webp",
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
    img: "/images/banner-media/testmedia.mp4",
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

   {
    title:{
      en: "Frequently Asked Questions (FAQ)",
      es: "Preguntas Frecuentes(FAQ)",
    },
    subtitle:{
      en: "Clear answers to help you move forward with confidence.",
      es: "Respuestas claras para avanzar con total confianza."
    },
    rightText:{
      en:'More questions? Reach out!',
      es:'¿Mas Preguntas? Contactanos!',
    }
  },
  {
    title:{
      en: "Production Timeline",
      es: "Cronología de Producción",
    },
    subtitle:{
      en: "See how we build your packaging from start to finish.",
      es: "Descubre cómo construimos tu empaque desde el inicio hasta el final."
    },
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
    src: "/images/gallery-images/1.webp",
    title: { en: "Premium Boxes", es: "Cajas Premium" },
    tagKey: "boxes",
    tag: { en: "Boxes", es: "Cajas" },
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "g2",
    kind: "image",
    src: "/images/gallery-images/2.webp",
    title: { en: "Paper Bags", es: "Bolsas de Papel" },
    tagKey: "bags",
    tag: { en: "Bags", es: "Bolsas" },
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "g3",
    kind: "image",
    src: "/images/gallery-images/3.webp",
    title: { en: "Food Packaging", es: "Empaques para Alimentos" },
    tagKey: "food",
    tag: { en: "Food", es: "Alimentos" },
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "g4",
    kind: "video",
    src: "/images/gallery-images/4.mp4", // ✅ video
    poster: "/images/gallery-images/4.webp",
    title: { en: "Production Line (Video)", es: "Línea de Producción (Video)" },
    tagKey: "video",
    tag: { en: "Video", es: "Video" },
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "g5",
    kind: "image",
    src: "/images/gallery-images/5.webp",
    title: { en: "Shipping Solutions", es: "Soluciones de Envío" },
    tagKey: "logistics",
    tag: { en: "Logistics", es: "Logística" },
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "g6",
    kind: "image",
    src: "/images/gallery-images/6.webp",
    title: { en: "Retail Ready", es: "Listo para Retail" },
    tagKey: "retail",
    tag: { en: "Retail", es: "Retail" },
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "g7",
    kind: "image",
    src: "/images/gallery-images/7.webp",
    title: { en: "Eco Options", es: "Opciones Eco" },
    tagKey: "eco",
    tag: { en: "Eco", es: "Eco" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g8",
    kind: "image",
    src: "/images/gallery-images/8.webp",
    title: { en: "Kraft Bags", es: "Bolsas Kraft" },
    tagKey: "bags",
    tag: { en: "Bags", es: "Bolsas" },
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "g9",
    kind: "image",
    src: "/images/gallery-images/9.webp",
    title: { en: "Die-cut Boxes", es: "Cajas Troqueladas" },
    tagKey: "boxes",
    tag: { en: "Boxes", es: "Cajas" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g10",
    kind: "image",
    src: "/images/gallery-images/10.webp",
    title: { en: "Custom Prints", es: "Impresión Personalizada" },
    tagKey: "retail",
    tag: { en: "Retail", es: "Retail" },
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "g11",
    kind: "image",
    src: "/images/gallery-images/11.webp",
    title: { en: "Wholesale Orders", es: "Pedidos al por Mayor" },
    tagKey: "logistics",
    tag: { en: "Logistics", es: "Logística" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g12",
    kind: "image",
    src: "/images/gallery-images/12.webp",
    title: { en: "Eco Packaging", es: "Empaque Ecológico" },
    tagKey: "eco",
    tag: { en: "Eco", es: "Eco" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g13",
    kind: "image",
    src: "/images/gallery-images/13.webp",
    title: { en: "Food Containers", es: "Contenedores para Alimentos" },
    tagKey: "food",
    tag: { en: "Food", es: "Alimentos" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g14",
    kind: "image",
    src: "/images/gallery-images/14.webp",
    title: { en: "Branded Packaging", es: "Empaques con Marca" },
    tagKey: "boxes",
    tag: { en: "Boxes", es: "Cajas" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g15",
    kind: "image",
    src: "/images/gallery-images/15.webp",
    title: { en: "Retail Displays", es: "Displays para Retail" },
    tagKey: "retail",
    tag: { en: "Retail", es: "Retail" },
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
  /* ============================================================
     1) PAPER BAGS – Brand-Carrying Assets
  ============================================================ */
  {
    id: "paper-bags",
    title: { en: "Paper Bags", es: "Bolsas de Papel" },
    description: {
      en: "More than packaging — a branded handoff experience your customers remember.",
      es: "Más que una bolsa — una experiencia de entrega que tus clientes recuerdan.",
    },
    image: img(3001),
    subcategories: [
      {
        id: "bag-small",
        title: { en: "Small", es: "Pequeña" },
        description: {
          en: "Compact, elegant, and perfect for premium small items.",
          es: "Compacta, elegante y perfecta para artículos pequeños premium.",
        },
        image: img(3101),
        details: {
          longDescription: {
            en: "Designed for boutiques and specialty retailers, this size delivers a refined brand moment without excess material. Ideal for accessories, cosmetics, and curated products.",
            es: "Diseñada para boutiques y tiendas especializadas, ofrece una experiencia refinada sin exceso de material. Ideal para accesorios y cosméticos.",
          },
          paperType: { en: "High-strength Kraft Paper", es: "Papel Kraft de alta resistencia" },
          paperGsm: 120,
          size: { widthMm: 180, heightMm: 240, depthMm: 80 },
          printing: { en: "1–2 color branding", es: "Impresión 1–2 colores" },
          minimumOrderQty: 1000,
          productionTime: {
            minDays: 6,
            maxDays: 12,
            note: {
              en: "Fast production for recurring retail orders.",
              es: "Producción rápida para pedidos recurrentes.",
            },
          },
        },
      },
      {
        id: "bag-medium",
        title: { en: "Medium", es: "Mediana" },
        description: {
          en: "The go-to retail size — balanced capacity and brand presence.",
          es: "El tamaño ideal para retail — equilibrio entre capacidad y presencia.",
        },
        image: img(3102),
        details: {
          longDescription: {
            en: "Our most versatile format. Engineered for daily retail use while maintaining structural strength and visual impact.",
            es: "Nuestro formato más versátil. Diseñado para uso diario manteniendo resistencia y presencia visual.",
          },
          paperType: { en: "Premium Kraft", es: "Kraft Premium" },
          paperGsm: 130,
          coating: { en: "Optional matte finish", es: "Acabado mate opcional" },
          size: { widthMm: 260, heightMm: 320, depthMm: 120 },
          printing: { en: "1–4 colors / CMYK", es: "1–4 colores / CMYK" },
          minimumOrderQty: 1000,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
      {
        id: "bag-large",
        title: { en: "Large", es: "Grande" },
        description: {
          en: "Built for volume, designed for strength, crafted for visibility.",
          es: "Alta capacidad, gran resistencia y máxima visibilidad.",
        },
        image: img(3103),
        details: {
          longDescription: {
            en: "Reinforced structure for apparel, multi-item purchases, and higher weight loads — without compromising presentation.",
            es: "Estructura reforzada para ropa y compras múltiples sin sacrificar presentación.",
          },
          paperType: { en: "Reinforced Kraft", es: "Kraft Reforzado" },
          paperGsm: 150,
          size: { widthMm: 320, heightMm: 420, depthMm: 150 },
          printing: { en: "Full color CMYK available", es: "Disponible impresión CMYK" },
          minimumOrderQty: 800,
          productionTime: { minDays: 8, maxDays: 15 },
        },
      },
      {
        id: "bag-custom",
        title: { en: "Custom", es: "Personalizada" },
        description: {
          en: "Your brand. Your dimensions. Your finishes.",
          es: "Tu marca. Tus dimensiones. Tus acabados.",
        },
        image: img(3104),
        details: {
          longDescription: {
            en: "Fully customized paper bags engineered to match your brand positioning — luxury, sustainable, minimalist, or bold. Every detail is intentional.",
            es: "Bolsas totalmente personalizadas para reflejar el posicionamiento de tu marca — lujo, sostenibilidad o impacto visual.",
          },
          paperType: { en: "Custom paper selection", es: "Selección de papel personalizada" },
          paperGsm: 140,
          coating: { en: "Gloss / Matte / Soft-touch / Foil", es: "Brillante / Mate / Soft-touch / Foil" },
          size: { widthMm: 300, heightMm: 350, depthMm: 120 },
          printing: { en: "Premium custom finishes", es: "Acabados premium personalizados" },
          minimumOrderQty: 1500,
          productionTime: {
            minDays: 12,
            maxDays: 25,
            note: {
              en: "Timelines depend on complexity and specialty finishes.",
              es: "El tiempo depende de complejidad y acabados especiales.",
            },
          },
        },
      },
    ],
  },

  /* ============================================================
     2) FOLDING BOXES – Shelf Impact & Structural Confidence
  ============================================================ */
  {
    id: "folding-boxes",
    title: { en: "Folding Boxes", es: "Cajas Plegadizas" },
    description: {
      en: "Packaging engineered to win attention on the shelf and protect what matters.",
      es: "Empaques diseñados para destacar en estantería y proteger tu producto.",
    },
    image: img(4001),
    subcategories: [
      {
        id: "box-small",
        title: { en: "Small", es: "Pequeña" },
        description: {
          en: "Compact retail carton with premium print clarity.",
          es: "Caja compacta con impresión de alta calidad.",
        },
        image: img(4101),
        details: {
          longDescription: {
            en: "Perfect for cosmetics, tech accessories, and specialty items where detail and precision matter.",
            es: "Ideal para cosméticos y accesorios donde el detalle es clave.",
          },
          paperType: { en: "SBS Paperboard", es: "Cartulina SBS" },
          paperGsm: 280,
          size: { widthMm: 100, heightMm: 150, depthMm: 50 },
          printing: { en: "High-resolution CMYK", es: "CMYK alta resolución" },
          minimumOrderQty: 2000,
          productionTime: { minDays: 10, maxDays: 18 },
        },
      },
      {
        id: "box-medium",
        title: { en: "Medium", es: "Mediana" },
        description: {
          en: "Our most versatile folding box format.",
          es: "Nuestro formato más versátil.",
        },
        image: img(4102),
        details: {
          longDescription: {
            en: "Balanced structure and premium finish — ideal for consumer goods and everyday retail.",
            es: "Estructura equilibrada con acabado premium — ideal para productos de consumo.",
          },
          paperType: { en: "Premium Paperboard", es: "Cartulina Premium" },
          paperGsm: 300,
          coating: { en: "Gloss or matte options", es: "Opciones brillante o mate" },
          size: { widthMm: 150, heightMm: 200, depthMm: 80 },
          printing: { en: "Full color CMYK", es: "Color completo CMYK" },
          minimumOrderQty: 2000,
          productionTime: { minDays: 10, maxDays: 20 },
        },
      },
      {
        id: "box-large",
        title: { en: "Large", es: "Grande" },
        description: {
          en: "Designed for larger retail products without sacrificing elegance.",
          es: "Diseñada para productos grandes sin perder elegancia.",
        },
        image: img(4103),
        details: {
          longDescription: {
            en: "Reinforced folding carton that supports heavier products while delivering high-impact branding.",
            es: "Caja reforzada que soporta mayor peso con alto impacto visual.",
          },
          paperType: { en: "High-density Paperboard", es: "Cartulina de alta densidad" },
          paperGsm: 350,
          size: { widthMm: 250, heightMm: 300, depthMm: 120 },
          printing: { en: "CMYK + premium finishes", es: "CMYK + acabados premium" },
          minimumOrderQty: 1500,
          productionTime: { minDays: 12, maxDays: 22 },
        },
      },
      {
        id: "box-custom",
        title: { en: "Custom", es: "Personalizada" },
        description: {
          en: "Structural innovation tailored to your brand.",
          es: "Innovación estructural adaptada a tu marca.",
        },
        image: img(4104),
        details: {
          longDescription: {
            en: "Custom dielines, specialty finishes, embossing, foil, and structural design engineered to create a premium shelf presence.",
            es: "Troqueles personalizados, acabados especiales y diseño estructural para destacar en estantería.",
          },
          paperType: { en: "Custom paperboard selection", es: "Selección de cartulina personalizada" },
          paperGsm: 320,
          coating: { en: "Foil / Emboss / Spot UV", es: "Foil / Relieve / UV sectorizado" },
          size: { widthMm: 200, heightMm: 200, depthMm: 100 },
          printing: { en: "Advanced custom printing", es: "Impresión personalizada avanzada" },
          minimumOrderQty: 2000,
          productionTime: {
            minDays: 15,
            maxDays: 30,
            note: {
              en: "Premium finishes may extend timeline slightly.",
              es: "Acabados premium pueden extender ligeramente el tiempo.",
            },
          },
        },
      },
    ],
  },
];


// FAQ Area

type FAQ =  {
  id: number,
  question: I18nText,
  answer: I18nText,
}

export const FAQs : FAQ[]  = [
  {id: 1,
    question: {
      en:"Do we need to provide our own design?",
      es: "¿Necesitamos proporcionar nuestro propio diseño?"
    },
    answer:{
      en:"Not at all. LINK'T SYSTEMS has a highly experienced design team ready to transform your ideas into professional, production-ready designs. We can also refine, adjust, or enhance your existing artwork to ensure it meets both aesthetic and technical standards.",
      es: "No necesitas proporcionar tu propio diseño. Nuestro equipo de diseño tiene amplia experiencia y está listo para transformar tus ideas en diseños profesionales y listos para producción. También podemos refinar, ajustar o mejorar tu arte existente para asegurar que cumpla con los estándares estéticos y técnicos."
    }
  },
    {id: 2,
    question: {
      en:"What is the minimum order quantity?",
      es: "¿Cuál es la cantidad mínima de pedido?"
    },
    answer:{
      en:'Our standard minimum order quantity is 1,000 units. For specialized projects or custom requirements, please contact us to discuss available options.',
      es: 'La cantidad mínima de pedido estándar es de 1,000 unidades. Para proyectos especializados o requisitos personalizados, por favor contáctanos para discutir las opciones disponibles.'
    }
  },
    {id: 3,
    question: {
      en:"Do you offer free shipping?",
      es: "¿Ofrecen envío gratuito?"
    },
    answer:{
      en:'Yes, we offer complimentary shipping on most orders. Shipping terms may vary depending on order size and destination. For detailed information, please reach out to our team.',
      es: 'Sí, ofrecemos envío gratuito en la mayoría de los pedidos. Los términos de envío pueden variar según el tamaño del pedido y la ubicación. Para información detallada, por favor contacta con nuestro equipo.'
    }
  },
    {id: 4,
    question: {
      en:"I have a question about my quote or order. Who should I contact?",
      es: "¿Tengo una pregunta sobre mi cotización u orden? ¿A quién debo contactar?"
    },
    answer:{
      en:"You can contact us at placeholder@email.com or call us at +1 (555) 555-5555. Our team will be happy to assist you promptly.",
      es: 'Puedes contactarnos a placeholder@email.com o llamarnos al +1 (555) 555-5555. Nuestro equipo estará encantado de ayudarte oportunamente.'
    }
  },
    {id: 5,
    question: {
      en:"Do you provide proofs before production?",
      es: "¿Ofrecen pruebas antes de la producción?"
    },
    answer:{
      en:'Yes. We provide digital proofs for your approval prior to production. Pre-production samples are also available upon request to ensure complete confidence before full manufacturing begins.',
      es: 'Sí. Ofrecemos pruebas digitales para su aprobación antes de la producción. Las muestras preproducción también están disponibles bajo solicitud para garantizar total confianza antes de comenzar la fabricación completa.'
    }
  },
]


export type TimelineItemData = {
  id: number;
  title: I18nText;
  description: I18nText;
  timeframe: I18nText;
  img_link: string;
  opposite: I18nText; // "Phase 1" / "Fase 1"
};

export const TIMELINE_DATA: TimelineItemData[] = [
  {
    id: 1,
    opposite: { en: "Phase 1", es: "Fase 1" },
    title: { en: "Design & Concept", es: "Diseño y Concepto" },
    description: {
      en: "We create your design—or refine your existing artwork—to ensure it’s print-ready, brand-consistent, and optimized for production.",
      es: "Creamos tu diseño—o perfeccionamos tu arte existente—para que esté listo para impresión, sea consistente con tu marca y optimizado para producción.",
    },
    timeframe: { en: "1–3 days", es: "1–3 días" },
    img_link:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    opposite: { en: "Phase 2", es: "Fase 2" },
    title: { en: "Materials Approval & Pre-Production", es: "Aprobación de Materiales y Pre-Producción" },
    description: {
      en: "We select and approve materials, confirm specifications, produce samples when needed, and lock the final design for manufacturing.",
      es: "Seleccionamos y aprobamos materiales, confirmamos especificaciones, realizamos muestras si es necesario y cerramos el diseño final para fabricar.",
    },
    timeframe: { en: "3–7 days", es: "3–7 días" },
    img_link:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    opposite: { en: "Phase 3", es: "Fase 3" },
    title: { en: "Printing & Die-Cutting", es: "Impresión y Troquelado" },
    description: {
      en: "Your materials go into production: printing, die-cutting, and precision preparation—built for clean presentation and consistent output.",
      es: "Tus materiales entran en producción: impresión, troquelado y preparación precisa—para una presentación impecable y resultados consistentes.",
    },
    timeframe: { en: "1–2 weeks", es: "1–2 semanas" },
    img_link: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 4,
    opposite: { en: "Phase 4", es: "Fase 4" },
    title: { en: "Finishing & Assembly", es: "Acabados y Ensamble" },
    description: {
      en: "We complete finishing steps—edge trimming, gluing, folding, and assembly—so the product is retail-ready and durable in real handling.",
      es: "Completamos los acabados—despicado, pegado, doblado y ensamble—para que el producto quede listo para retail y resistente en manejo real.",
    },
    timeframe: { en: "3–7 days", es: "3–7 días" },
    img_link:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    opposite: { en: "Phase 5", es: "Fase 5" },
    title: { en: "Quality Control, Packaging & Palletizing", es: "Control de Calidad, Empaque y Paletizado" },
    description: {
      en: "Every batch is inspected before being packaged and palletized—ensuring consistent quality, cleaner logistics, and fewer issues on arrival.",
      es: "Inspeccionamos cada lote antes de empacar y paletizar—asegurando calidad consistente, logística más limpia y menos incidencias al recibir.",
    },
    timeframe: { en: "2–5 days", es: "2–5 días" },
    img_link:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    opposite: { en: "Phase 6", es: "Fase 6" },
    title: { en: "Distribution & Warehousing", es: "Distribución y Almacenamiento" },
    description: {
      en: "We coordinate warehousing and distribution—nationwide or international—so your product reaches customers reliably and on schedule.",
      es: "Coordinamos almacenamiento y distribución—nacional o internacional—para que tu producto llegue de forma confiable y a tiempo.",
    },
    timeframe: { en: "Ongoing", es: "Continuo" },
    img_link: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];