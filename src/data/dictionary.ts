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
  emailValue: string;

  phoneLabel: I18nText;
  phoneValue: string;

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
    rights: I18nText;
  };
};

export const pages: Page[] = [
  { label: { en: "Home", es: "Inicio" }, path: "/" },
  { label: { en: "Catalog", es: "Catálogo" }, path: "/catalog" },
  { label: { en: "Gallery", es: "Galería" }, path: "/gallery" },
  { label: { en: "Distribution", es: "Distribución" }, path: "/distribution" },
  { label: { en: "Contact", es: "Contacto" }, path: "/contact" },
];

export const BannerData: BannerDataItem[] = [
  {
    title: {
      en: "Packaging That Makes Your Brand Unforgettable",
      es: "Empaques Que Hacen Tu Marca Inolvidable",
    },
    eyebrow: {
      en: "LINK'T SYSTEMS • Where Quality Meets Luxury",
      es: "LINK'T SYSTEMS • Donde Calidad Se Encuentra Con Lujo",
    },
    text: {
      en: "Every touchpoint counts. Our premium bags transform ordinary handoffs into memorable brand experiences that convert first-time buyers into lifelong advocates.",
      es: "Cada punto de contacto importa. Nuestras bolsas premium transforman entregas ordinarias en experiencias memorables que convierten compradores en defensores leales.",
    },
    img: "/images/banner-media/banner1.webp",
    cta: {
      text: { en: "Discover Best Sellers", es: "Descubre Los Favoritos" },
      href: "/catalog",
    },
    isVideo: false,
  },
  {
    title: {
      en: "Zero Compromise on Freshness",
      es: "Cero Compromiso en Frescura",
    },
    eyebrow: {
      en: "Temperature-Controlled Excellence",
      es: "Excelencia Con Control de Temperatura",
    },
    text: {
      en: "Your frozen products deserve packaging that works as hard as you do. Our insulated boxes ensure your goods arrive fresh, protected, and ready to impress—every single time.",
      es: "Tus productos congelados merecen empaques que trabajen tan duro como tú. Nuestras cajas aisladas garantizan que lleguen frescos, protegidos e impecables—cada vez.",
    },
    img: "/images/banner-media/banner2.webp",
    cta: {
      text: { en: "Elevate Your Packaging", es: "Eleva Tu Empaque" },
      href: "/catalog",
    },
    isVideo: false,
  },
  {
    title: {
      en: "Beautiful Packaging, Better Planet",
      es: "Empaques Hermosos, Mejor Planeta",
    },
    eyebrow: {
      en: "Eco-Conscious. Brand-Powerful.",
      es: "Eco-Consciente. Poderoso en Marca.",
    },
    text: {
      en: "Who said sustainability can't be stunning? Our eco-premium packaging delivers jaw-dropping presentation and rock-solid performance—without compromising your values or your brand.",
      es: "¿Quién dijo que sustentabilidad no puede ser impactante? Nuestros empaques eco-premium ofrecen presentación impresionante y rendimiento sólido—sin comprometer tus valores ni tu marca.",
    },
    img: "/images/banner-media/testmedia.mp4",
    cta: {
      text: { en: "Explore Eco Premium", es: "Explora Eco Premium" },
      href: "/catalog",
    },
    isVideo: true,
  },
];

export const pageTitles: PageTitleItem[] = [
  {
    title: {
      en: "The Packaging Solutions Winning Teams Choose",
      es: "Las Soluciones Que Eligen Equipos Ganadores",
    },
    subtitle: {
      en: "Discover why industry leaders choose packaging that delivers quality, wow-factor, and unshakeable reliability—all in one.",
      es: "Descubre por qué líderes de la industria eligen empaques que ofrecen calidad, factor sorpresa y confiabilidad inquebrantable—todo en uno.",
    },
    rightText: { en: "Browse Full Catalog", es: "Explorar Catálogo Completo" },
  },
  {
    title: {
      en: "Your Secret Weapon in a Competitive Market",
      es: "Tu Arma Secreta en un Mercado Competitivo",
    },
    subtitle: {
      en: "Premium materials. Flawless execution. Built to grow with your ambitions.",
      es: "Materiales premium. Ejecución impecable. Diseñado para crecer con tus ambiciones.",
    },
    text: {
      en: "Link'T Systems creates premium packaging that does more than protect—it converts. Our boxes and bags are engineered for retail excellence, food service reliability, e-commerce success, and logistics confidence. We obsess over the details that drive sales: stunning presentation, bulletproof protection, and the operational consistency your team can count on—order after order, month after month.",
      es: "Link'T Systems crea empaques premium que hacen más que proteger—convierten. Nuestras cajas y bolsas están diseñadas para excelencia en retail, confiabilidad en servicio de alimentos, éxito en e-commerce y seguridad logística. Nos obsesionamos con los detalles que impulsan ventas: presentación impactante, protección blindada y consistencia operativa en la que tu equipo puede confiar—pedido tras pedido, mes tras mes.",
    },
  },
  {
    title: {
      en: "Premium Packaging, Ready to Ship Today",
      es: "Empaques Premium, Listos Para Enviar Hoy",
    },
    subtitle: {
      en: "The packaging your customers will remember—and your competitors will envy.",
      es: "Los empaques que tus clientes recordarán—y tus competidores envidiarán.",
    },
    rightText: { en: "Start Shopping", es: "Empezar a Comprar" },
  },
  {
    title: {
      en: "Trusted by Industry Champions",
      es: "Confiado Por Campeones de la Industria",
    },
    subtitle: {
      en: "We don't just serve clients—we build lasting partnerships.",
      es: "No solo servimos clientes—construimos alianzas duraderas.",
    },
  },
  {
    title: {
      en: "Your Questions, Answered with Clarity",
      es: "Tus Preguntas, Respondidas Con Claridad",
    },
    subtitle: {
      en: "Everything you need to know to move forward with complete confidence.",
      es: "Todo lo que necesitas saber para avanzar con total confianza.",
    },
    rightText: {
      en: "Still curious? Let's talk!",
      es: "¿Aún tienes dudas? ¡Hablemos!",
    },
  },
  {
    title: {
      en: "From Concept to Your Doorstep",
      es: "Del Concepto a Tu Puerta",
    },
    subtitle: {
      en: "Watch your vision come to life through our proven production process.",
      es: "Mira cómo tu visión cobra vida a través de nuestro proceso de producción probado.",
    },
  },
  {
    title: {
      en: "Trusted by Industry Leaders",
      es: "Confiado Por Campeones de la Industria",
    },
    subtitle: {
      en: "Partnering with exceptional brands to deliver quality packaging solutions",
      es: "Colaborando con marcas excepcionales para ofrecer soluciones de empaque de calidad.",
    },
  },
  {
    title: {
      en: "Let's Make It Happen",
      es: "Hagámoslo Realidad",
    },
    subtitle: {
      en: "Share your packaging vision with us—bags, boxes, or fully custom solutions. We'll send back curated recommendations, smart quantity suggestions, and realistic timelines so you can make your decision with zero guesswork.",
      es: "Comparte tu visión de empaque—bolsas, cajas o soluciones totalmente personalizadas. Te enviaremos recomendaciones curadas, sugerencias inteligentes de cantidades y plazos realistas para que decidas sin adivinar.",
    },
  },
];

export const contactCopy: ContactCopy = {
  infoTitle: {
    en: "Get Your Quote in 24 Hours or Less",
    es: "Recibe Tu Cotización en 24 Horas o Menos",
  },
  infoText: {
    en: "Share your packaging vision with us—bags, boxes, or fully custom solutions. We'll send back curated recommendations, smart quantity suggestions, and realistic timelines so you can make your decision with zero guesswork.",
    es: "Comparte tu visión de empaque—bolsas, cajas o soluciones totalmente personalizadas. Te enviaremos recomendaciones curadas, sugerencias inteligentes de cantidades y plazos realistas para que decidas sin adivinar.",
  },

  addressLabel: { en: "Visit Us", es: "Visítanos" },
  addressValue: {
    en: "10930 NW 138TH ST UNIT 2 - HIALEAH GARDENS FL, 33018",
    es: "10930 NW 138TH ST BODEGA 2 - HIALEAH GARDENS FL, 33018",
  },

  emailLabel: { en: "Email Us", es: "Escríbenos" },
  emailValue: "JUANPRADA@GRUPOELLIOT.COM",

  phoneLabel: { en: "Call Us", es: "Llámanos" },
  phoneValue: "+1 (754) 423-5958 / +1 (225) 360-5760",

  formTitle: { en: "Let's Make It Happen", es: "Hagámoslo Realidad" },

  nameLabel: { en: "Company Name", es: "Nombre de la Compañía" },
  namePlaceholder: { en: "Acme Industries Inc.", es: "Mi Empresa S.A." },

  emailInputLabel: { en: "Email Address", es: "Correo Electrónico" },
  emailPlaceholder: { en: "jane@company.com", es: "juan@empresa.com" },

  phoneInputLabel: { en: "Phone Number", es: "Número de Teléfono" },
  phonePlaceholder: { en: "(555) 555-5555", es: "(555) 555-5555" },

  messageLabel: {
    en: "Tell us about your packaging needs",
    es: "Cuéntanos sobre tus necesidades de empaque",
  },
  messagePlaceholder: {
    en: "Share product details, ideal sizes, quantities you need, and your timeline. Planning custom branding? Let us know your colors, logo placement, and desired finish.",
    es: "Comparte detalles del producto, tamaños ideales, cantidades necesarias y tu cronograma. ¿Planeas marca personalizada? Cuéntanos sobre colores, ubicación del logo y acabado deseado.",
  },

  sendButton: {
    en: "Get My Custom Quote",
    es: "Obtener Mi Cotización Personalizada",
  },
};

export const brand: Brand = {
  name: { en: "Link'T Systems", es: "Link'T Systems" },
  tagline: {
    en: "Packaging that protects your products, elevates your brand, and drives real results.",
    es: "Empaques que protegen tus productos, elevan tu marca e impulsan resultados reales.",
  },

  email: "JUANPRADA@GRUPOELLIOT.COM",
  phone: "+1 (754) 423-5958 / +1 (225) 360-5760",
  address: {
    en: "10930 NW 138TH ST UNIT 2 - HIALEAH GARDENS FL, 33018",
    es: "10930 NW 138TH ST BODEGA 2 - HIALEAH GARDENS FL, 33018",
  },

  footer: {
    navTitle: { en: "Quick Links", es: "Enlaces Rápidos" },
    contactTitle: { en: "Get In Touch", es: "Contáctanos" },
    rights: {
      en: "All rights reserved.",
      es: "Todos los derechos reservados.",
    },
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
  title: { en: "Distribution Done Right", es: "Distribución Bien Hecha" },
  subtitle: {
    en: "Coast-to-coast logistics that scale with your success—fast, dependable, and built for growth.",
    es: "Logística de costa a costa que escala con tu éxito—rápida, confiable y lista para crecer.",
  },
  cta: {
    text: { en: "Let's Talk Logistics", es: "Hablemos de Logística" },
    href: "/contact",
  },

  heroImage:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heroImageAlt: {
    en: "State-of-the-art distribution center",
    es: "Centro de distribución de última generación",
  },

  intro: {
    en: "At LINK'T SYSTEMS, we don't just ship boxes—we become your logistics backbone. Our end-to-end distribution management lets you focus on what you do best (growing your business) while we handle the heavy lifting: coordination, movement, tracking, and on-time delivery.",
    es: "En LINK'T SYSTEMS no solo enviamos cajas—nos convertimos en tu columna vertebral logística. Nuestra gestión integral de distribución te permite enfocarte en lo que haces mejor (hacer crecer tu negocio) mientras nosotros manejamos el trabajo pesado: coordinación, movimiento, rastreo y entrega puntual.",
  },

  highlightsTitle: {
    en: "Why teams choose us for distribution",
    es: "Por qué eligen nuestra distribución",
  },
  highlights: [
    {
      title: {
        en: "Nationwide coverage you can trust",
        es: "Cobertura nacional confiable",
      },
      text: {
        en: "Seamless delivery across all 50 states with battle-tested processes and full accountability—no surprises, just results.",
        es: "Entrega perfecta en los 50 estados con procesos comprobados y responsabilidad total—sin sorpresas, solo resultados.",
      },
    },
    {
      title: {
        en: "Global reach, local service",
        es: "Alcance global, servicio local",
      },
      text: {
        en: "International shipping through premium carrier partnerships (like FedEx) that deliver your products safely anywhere in the world.",
        es: "Envíos internacionales mediante alianzas premium (como FedEx) que entregan tus productos de forma segura en cualquier parte del mundo.",
      },
    },
    {
      title: {
        en: "One partner, zero headaches",
        es: "Un socio, cero dolores de cabeza",
      },
      text: {
        en: "Stop juggling multiple vendors. We streamline your entire logistics operation, cutting coordination time and scaling effortlessly as you grow.",
        es: "Deja de malabarear múltiples proveedores. Optimizamos toda tu operación logística, reducimos tiempo de coordinación y escalamos sin esfuerzo mientras creces.",
      },
    },
  ],

  stats: [
    {
      value: { en: "48–72h", es: "48–72h" },
      label: { en: "Standard dispatch", es: "Despacho estándar" },
    },
    {
      value: { en: "50 States", es: "50 Estados" },
      label: { en: "Full coverage", es: "Cobertura completa" },
    },
    {
      value: { en: "100%", es: "100%" },
      label: { en: "Tracked shipments", es: "Envíos rastreados" },
    },
  ],

  noteTitle: {
    en: "Built to scale with winners",
    es: "Diseñado para escalar con ganadores",
  },
  noteText: {
    en: "Whether you're an enterprise managing complex supply chains or a growing brand expanding into new territories, LINK'T SYSTEMS has the infrastructure, experience, and dedication to become your long-term logistics partner.",
    es: "Ya seas una empresa gestionando cadenas de suministro complejas o una marca en crecimiento expandiéndose a nuevos territorios, LINK'T SYSTEMS tiene la infraestructura, experiencia y dedicación para ser tu socio logístico a largo plazo.",
  },
};

export type GalleryCopy = {
  title: I18nText;
  subtitle: I18nText;
  modalClose: I18nText;
  viewLabel: I18nText;
};

export const galleryCopy: GalleryCopy = {
  title: { en: "See What's Possible", es: "Descubre Las Posibilidades" },
  subtitle: {
    en: "Real projects. Real results. Explore our portfolio of premium packaging that drives business impact.",
    es: "Proyectos reales. Resultados reales. Explora nuestro portafolio de empaques premium que impulsan impacto empresarial.",
  },
  modalClose: { en: "Close", es: "Cerrar" },
  viewLabel: { en: "View", es: "Ver" },
};

export const galleryFilters = {
  all: { en: "Show All", es: "Mostrar Todo" },
  boxes: { en: "Boxes", es: "Cajas" },
  bags: { en: "Bags", es: "Bolsas" },
  food: { en: "Food", es: "Alimentos" },
  retail: { en: "Retail", es: "Retail" },
  logistics: { en: "Logistics", es: "Logística" },
  distribution: { en: "Distribution", es: "Distribución" },
  video: { en: "Videos", es: "Videos" },
} satisfies Record<string, I18nText>;

export type GalleryTagKey =
  | "boxes"
  | "bags"
  | "food"
  | "retail"
  | "logistics"
  | "distribution"
  | "video";

export type GalleryItem = {
  id: string;
  kind: "image" | "video";
  src: string;
  poster?: string;
  title: I18nText;
  tagKey: GalleryTagKey;
  tag: I18nText;
  colSpan: 1 | 2;
  rowSpan: 1 | 2;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    kind: "image",
    src: "/images/gallery-images/1.webp",
    title: { en: "Caffè Gourmet Collection", es: "Colección Caffè Gourmet" },
    tagKey: "bags",
    tag: { en: "Bags", es: "Bolsas" },
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "g3",
    kind: "image",
    src: "/images/gallery-images/3.webp",
    title: {
      en: "Mario Hernandez Luxury Line",
      es: "Línea de Lujo Mario Hernández",
    },
    tagKey: "bags",
    tag: { en: "Bags", es: "Bolsas" },
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "g4",
    kind: "video",
    src: "/images/gallery-images/4.mp4",
    poster: "/images/gallery-images/4.webp",
    title: { en: "Paper Cups in Action", es: "Vasos de Papel en Acción" },
    tagKey: "video",
    tag: { en: "Video", es: "Video" },
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "g5",
    kind: "image",
    src: "/images/gallery-images/5.webp",
    title: { en: "Spago Restaurant Suite", es: "Suite Restaurante Spago" },
    tagKey: "boxes",
    tag: { en: "Boxes", es: "Cajas" },
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "g6",
    kind: "image",
    src: "/images/gallery-images/6.webp",
    title: { en: "Carama Brand Collection", es: "Colección de Marca Carama" },
    tagKey: "boxes",
    tag: { en: "Boxes", es: "Cajas" },
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "g7",
    kind: "image",
    src: "/images/gallery-images/7.webp",
    title: { en: "CUT by Wolfgang Puck", es: "CUT por Wolfgang Puck" },
    tagKey: "food",
    tag: { en: "Food", es: "Comida" },
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "g8",
    kind: "image",
    src: "/images/gallery-images/8.webp",
    title: {
      en: "Premium Packaging Showcase",
      es: "Exhibición de Empaque Premium",
    },
    tagKey: "bags",
    tag: { en: "Bags", es: "Bolsas" },
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "g9",
    kind: "image",
    src: "/images/gallery-images/9.webp",
    title: {
      en: "Signature Shopping Experience",
      es: "Experiencia de Compra Distintiva",
    },
    tagKey: "bags",
    tag: { en: "Bag", es: "Bolsa" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g10",
    kind: "image",
    src: "/images/gallery-images/10.webp",
    title: { en: "Retail Display Ready", es: "Lista para Exhibición" },
    tagKey: "retail",
    tag: { en: "Retail", es: "Retail" },
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "g11",
    kind: "image",
    src: "/images/gallery-images/11.webp",
    title: { en: "Production Excellence", es: "Excelencia en Producción" },
    tagKey: "logistics",
    tag: { en: "Logistics", es: "Logística" },
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "g12",
    kind: "image",
    src: "/images/gallery-images/12.webp",
    title: { en: "Manufacturing Precision", es: "Precisión en Manufactura" },
    tagKey: "logistics",
    tag: { en: "Logistics", es: "Logística" },
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "g13",
    kind: "image",
    src: "/images/gallery-images/13.webp",
    title: {
      en: "State-of-the-Art Facility",
      es: "Instalaciones de Vanguardia",
    },
    tagKey: "logistics",
    tag: { en: "Logistics", es: "Logística" },
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "g14",
    kind: "image",
    src: "/images/gallery-images/14.webp",
    title: { en: "Cold Chain Solutions", es: "Soluciones Cadena de Frío" },
    tagKey: "boxes",
    tag: { en: "Boxes", es: "Cajas" },
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "g15",
    kind: "image",
    src: "/images/gallery-images/15.webp",
    title: {
      en: "Panna Restaurant Collection",
      es: "Colección Restaurante Panna",
    },
    tagKey: "food",
    tag: { en: "Food", es: "Comida" },
    colSpan: 2,
    rowSpan: 1,
  },
];

/* CATALOG AREA */

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
  /* PAPER BAGS */
  {
    id: "paper-bags",
    title: { en: "Paper Bags", es: "Bolsas de Papel" },
    description: {
      en: "Transform every customer handoff into a branded moment they'll remember and share.",
      es: "Convierte cada entrega en un momento de marca que recordarán y compartirán.",
    },
    image: "/images/catalog-images/bags/bag-cover.webp",
    subcategories: [
      {
        id: "bag-small",
        title: { en: "Small", es: "Pequeña" },
        description: {
          en: "Perfectly sized luxury for boutique moments that matter.",
          es: "Lujo perfectamente dimensionado para momentos boutique que importan.",
        },
        image: "/images/catalog-images/bags/bag-s.webp",
        details: {
          longDescription: {
            en: "Crafted for retailers who understand that first impressions count. This size delivers maximum brand impact with minimal material—perfect for accessories, cosmetics, and premium small goods that deserve presentation as beautiful as the product inside.",
            es: "Creada para retailers que entienden que las primeras impresiones cuentan. Este tamaño ofrece máximo impacto de marca con material mínimo—perfecta para accesorios, cosméticos y productos pequeños premium que merecen presentación tan hermosa como el contenido.",
          },
          paperType: {
            en: "High-strength Kraft Paper",
            es: "Papel Kraft de alta resistencia",
          },
          paperGsm: 120,
          size: { widthMm: 180, heightMm: 240, depthMm: 80 },
          printing: { en: "1–2 color branding", es: "Impresión 1–2 colores" },
          minimumOrderQty: 1000,
          productionTime: {
            minDays: 6,
            maxDays: 12,
            note: {
              en: "Lightning-fast turnaround for recurring retail stars.",
              es: "Producción relámpago para estrellas del retail recurrente.",
            },
          },
        },
      },
      {
        id: "bag-medium",
        title: { en: "Medium", es: "Mediana" },
        description: {
          en: "The workhorse of retail—engineered for daily excellence.",
          es: "El caballo de batalla del retail—diseñada para excelencia diaria.",
        },
        image: "/images/catalog-images/bags/bag-m.webp",
        details: {
          longDescription: {
            en: "Your customers' favorite shopping companion. Proven durability meets striking brand presence in our most versatile format—built to handle real retail life while keeping your brand looking sharp, day after day.",
            es: "El compañero de compras favorito de tus clientes. Durabilidad comprobada se encuentra con presencia de marca impactante en nuestro formato más versátil—diseñada para manejar la vida real del retail mientras mantiene tu marca luciendo impecable, día tras día.",
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
          en: "Maximum capacity meets premium presentation.",
          es: "Máxima capacidad con presentación premium.",
        },
        image: "/images/catalog-images/bags/bag-l.webp",
        details: {
          longDescription: {
            en: "When your customers are buying big, give them a bag that matches the moment. Reinforced engineering supports serious weight while your brand makes a serious impression—from apparel bundles to multi-item purchases that deserve VIP treatment.",
            es: "Cuando tus clientes compran en grande, dales una bolsa que esté a la altura. Ingeniería reforzada soporta peso considerable mientras tu marca hace una impresión seria—desde paquetes de ropa hasta compras múltiples que merecen trato VIP.",
          },
          paperType: { en: "Reinforced Kraft", es: "Kraft Reforzado" },
          paperGsm: 150,
          size: { widthMm: 320, heightMm: 420, depthMm: 150 },
          printing: {
            en: "Full color CMYK available",
            es: "Disponible impresión CMYK",
          },
          minimumOrderQty: 800,
          productionTime: { minDays: 8, maxDays: 15 },
        },
      },
      {
        id: "bag-custom",
        title: { en: "Custom", es: "Personalizada" },
        description: {
          en: "Your vision, engineered to perfection.",
          es: "Tu visión, ingeniada a la perfección.",
        },
        image: "/images/catalog-images/bags/bag-c.webp",
        details: {
          longDescription: {
            en: "Step into the spotlight with packaging that's unmistakably yours. From luxury finishes to sustainable statements, from minimalist elegance to bold brand energy—we engineer every detail to amplify your unique positioning and make competitors wish they thought of it first.",
            es: "Entra al centro de atención con empaques inconfundiblemente tuyos. Desde acabados de lujo hasta declaraciones sustentables, desde elegancia minimalista hasta energía de marca audaz—ingeniamos cada detalle para amplificar tu posicionamiento único y hacer que competidores deseen haberlo pensado primero.",
          },
          paperType: {
            en: "Custom paper selection",
            es: "Selección de papel personalizada",
          },
          paperGsm: 140,
          coating: {
            en: "Gloss / Matte / Soft-touch / Foil",
            es: "Brillante / Mate / Soft-touch / Foil",
          },
          size: { widthMm: 300, heightMm: 350, depthMm: 120 },
          printing: {
            en: "Premium custom finishes",
            es: "Acabados premium personalizados",
          },
          minimumOrderQty: 1500,
          productionTime: {
            minDays: 12,
            maxDays: 25,
            note: {
              en: "Worth the wait—timelines vary with specialty magic.",
              es: "Vale la pena la espera—los tiempos varían con magia especial.",
            },
          },
        },
      },
    ],
  },

  /* FOLDING BOXES */
  {
    id: "folding-boxes",
    title: { en: "Folding Boxes", es: "Cajas Plegadizas" },
    description: {
      en: "Packaging that wins shelf battles and protects like armor.",
      es: "Empaques que ganan batallas de estantería y protegen como armadura.",
    },
    image: img(4001),
    subcategories: [
      {
        id: "box-small",
        title: { en: "Small", es: "Pequeña" },
        description: {
          en: "Precision packaging for products that demand perfection.",
          es: "Empaque de precisión para productos que exigen perfección.",
        },
        image: img(4101),
        details: {
          longDescription: {
            en: "Engineered for the products where every millimeter matters. High-resolution printing brings your brand to life on packaging designed for cosmetics, tech accessories, and specialty retail items that deserve packaging as exceptional as what's inside.",
            es: "Diseñada para productos donde cada milímetro importa. Impresión de alta resolución da vida a tu marca en empaques creados para cosméticos, accesorios tecnológicos y artículos especializados que merecen empaque tan excepcional como su contenido.",
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
          en: "The retail champion—built for everyday excellence.",
          es: "El campeón del retail—hecha para excelencia cotidiana.",
        },
        image: img(4102),
        details: {
          longDescription: {
            en: "Strike the perfect balance between protection and presentation. This format dominates shelves across consumer goods—combining structural integrity with premium finishes that make customers reach for your product first.",
            es: "Logra el equilibrio perfecto entre protección y presentación. Este formato domina estanterías en bienes de consumo—combinando integridad estructural con acabados premium que hacen que clientes elijan tu producto primero.",
          },
          paperType: { en: "Premium Paperboard", es: "Cartulina Premium" },
          paperGsm: 300,
          coating: {
            en: "Gloss or matte options",
            es: "Opciones brillante o mate",
          },
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
          en: "Powerful protection meets commanding shelf presence.",
          es: "Protección poderosa con presencia dominante en estantería.",
        },
        image: img(4103),
        details: {
          longDescription: {
            en: "When your product carries weight, your packaging should too. Reinforced construction handles heavier loads while premium printing ensures your brand dominates every inch of shelf space—because bigger products deserve bigger impact.",
            es: "Cuando tu producto tiene peso, tu empaque también debería. Construcción reforzada maneja cargas más pesadas mientras impresión premium asegura que tu marca domine cada centímetro de espacio—porque productos más grandes merecen mayor impacto.",
          },
          paperType: {
            en: "High-density Paperboard",
            es: "Cartulina de alta densidad",
          },
          paperGsm: 350,
          size: { widthMm: 250, heightMm: 300, depthMm: 120 },
          printing: {
            en: "CMYK + premium finishes",
            es: "CMYK + acabados premium",
          },
          minimumOrderQty: 1500,
          productionTime: { minDays: 12, maxDays: 22 },
        },
      },
      {
        id: "box-custom",
        title: { en: "Custom", es: "Personalizada" },
        description: {
          en: "Structural brilliance engineered for your brand.",
          es: "Brillantez estructural diseñada para tu marca.",
        },
        image: img(4104),
        details: {
          longDescription: {
            en: "Break free from cookie-cutter boxes. Custom dielines, specialty finishes, embossing, foil stamping, and structural innovation combine to create packaging that doesn't just hold your product—it amplifies everything you stand for and makes walking past impossible.",
            es: "Libérate de cajas genéricas. Troqueles personalizados, acabados especiales, relieve, estampado en foil e innovación estructural se combinan para crear empaques que no solo contienen tu producto—amplifican todo lo que representas y hacen imposible pasar de largo.",
          },
          paperType: {
            en: "Custom paperboard selection",
            es: "Selección de cartulina personalizada",
          },
          paperGsm: 320,
          coating: {
            en: "Foil / Emboss / Spot UV",
            es: "Foil / Relieve / UV sectorizado",
          },
          size: { widthMm: 200, heightMm: 200, depthMm: 100 },
          printing: {
            en: "Advanced custom printing",
            es: "Impresión personalizada avanzada",
          },
          minimumOrderQty: 2000,
          productionTime: {
            minDays: 15,
            maxDays: 30,
            note: {
              en: "Excellence takes time—premium finishes add polish and precision.",
              es: "La excelencia toma tiempo—acabados premium añaden pulido y precisión.",
            },
          },
        },
      },
    ],
  },
];

// FAQ Area

type FAQ = {
  id: number;
  question: I18nText;
  answer: I18nText;
};

export const FAQs: FAQ[] = [
  {
    id: 1,
    question: {
      en: "Do I need to provide my own design?",
      es: "¿Necesito proporcionar mi propio diseño?",
    },
    answer: {
      en: "Not at all. Our veteran design team lives and breathes packaging excellence. Share your vision, and we'll transform it into production-ready brilliance—or we can refine your existing artwork to perfection. Either way, you get packaging that looks as good as it performs.",
      es: "Para nada. Nuestro equipo veterano de diseño vive y respira excelencia en empaque. Comparte tu visión y la transformaremos en brillantez lista para producción—o podemos perfeccionar tu arte existente. De cualquier forma, obtienes empaque que luce tan bien como funciona.",
    },
  },
  {
    id: 2,
    question: {
      en: "What's your minimum order quantity?",
      es: "¿Cuál es su cantidad mínima de pedido?",
    },
    answer: {
      en: "Our sweet spot starts at 1,000 units—perfect for testing new designs or maintaining inventory. Need something different? Let's talk. We love solving unique challenges.",
      es: "Nuestro punto óptimo comienza en 1,000 unidades—perfecto para probar nuevos diseños o mantener inventario. ¿Necesitas algo diferente? Hablemos. Nos encanta resolver desafíos únicos.",
    },
  },
  {
    id: 3,
    question: {
      en: "Do you offer free shipping?",
      es: "¿Ofrecen envío gratuito?",
    },
    answer: {
      en: "Yes! Free shipping is standard on most orders because logistics shouldn't add stress to your life. Some variations apply based on order size and destination—our team will give you the full picture upfront.",
      es: "Sí! El envío gratuito es estándar en la mayoría de pedidos porque la logística no debería agregar estrés a tu vida. Algunas variaciones aplican según tamaño del pedido y destino—nuestro equipo te dará el panorama completo desde el inicio.",
    },
  },
  {
    id: 4,
    question: {
      en: "I have questions about my quote or order. Who do I contact?",
      es: "Tengo preguntas sobre mi cotización u orden. ¿A quién contacto?",
    },
    answer: {
      en: "Reach out anytime at placeholder@email.com or call +1 (555) 555-5555. Our team responds fast because we know your time is valuable—and your success matters to us.",
      es: "Contáctanos cuando sea a placeholder@email.com o llama al +1 (555) 555-5555. Nuestro equipo responde rápido porque sabemos que tu tiempo es valioso—y tu éxito nos importa.",
    },
  },
  {
    id: 5,
    question: {
      en: "Do you provide samples before production?",
      es: "¿Proporcionan muestras antes de producción?",
    },
    answer: {
      en: "Absolutely. Digital proofs come standard to ensure perfection. Want to hold it in your hands first? Pre-production samples are available on request—because confidence matters before you commit to the full run.",
      es: "Absolutamente. Las pruebas digitales son estándar para asegurar perfección. ¿Quieres tenerlo en tus manos primero? Muestras de preproducción están disponibles bajo solicitud—porque la confianza importa antes de comprometerte con la producción completa.",
    },
  },
];

export type TimelineItemData = {
  id: number;
  title: I18nText;
  description: I18nText;
  timeframe: I18nText;
  img_link: string;
  opposite: I18nText;
};

export const TIMELINE_DATA: TimelineItemData[] = [
  {
    id: 1,
    opposite: { en: "Phase 1", es: "Fase 1" },
    title: { en: "Vision to Reality", es: "Visión a Realidad" },
    description: {
      en: "We transform your ideas into print-ready masterpieces—or elevate your existing artwork to production perfection. Every design detail is obsessed over to ensure flawless brand consistency and manufacturing excellence.",
      es: "Transformamos tus ideas en obras maestras listas para imprimir—o elevamos tu arte existente a perfección de producción. Cada detalle del diseño es perfeccionado para asegurar consistencia de marca impecable y excelencia en manufactura.",
    },
    timeframe: { en: "1–3 days", es: "1–3 días" },
    img_link:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    opposite: { en: "Phase 2", es: "Fase 2" },
    title: {
      en: "Materials & Precision Planning",
      es: "Materiales y Planificación de Precisión",
    },
    description: {
      en: "We hand-select premium materials, lock down specifications, create samples when needed, and finalize every manufacturing detail. Nothing goes to production until it's bulletproof.",
      es: "Seleccionamos materiales premium a mano, cerramos especificaciones, creamos muestras cuando es necesario y finalizamos cada detalle de manufactura. Nada va a producción hasta que es a prueba de balas.",
    },
    timeframe: { en: "3–7 days", es: "3–7 días" },
    img_link:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    opposite: { en: "Phase 3", es: "Fase 3" },
    title: { en: "Precision Production", es: "Producción de Precisión" },
    description: {
      en: "Your materials hit our production floor where cutting-edge printing and die-cutting technology meets master craftsmanship. We're engineering consistent quality at scale—because your brand reputation depends on it.",
      es: "Tus materiales llegan a nuestro piso de producción donde tecnología de impresión y troquelado de vanguardia se encuentra con artesanía maestra. Estamos ingeniando calidad consistente a escala—porque la reputación de tu marca depende de ello.",
    },
    timeframe: { en: "1–2 weeks", es: "1–2 semanas" },
    img_link:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 4,
    opposite: { en: "Phase 4", es: "Fase 4" },
    title: { en: "Finishing Touches", es: "Toques Finales" },
    description: {
      en: "Precision edge finishing, expert gluing, perfect folding, and meticulous assembly transform raw materials into retail-ready packaging that looks stunning and survives real-world handling.",
      es: "Acabado de bordes de precisión, pegado experto, doblado perfecto y ensamblaje meticuloso transforman materias primas en empaques listos para retail que lucen impresionantes y sobreviven manejo del mundo real.",
    },
    timeframe: { en: "3–7 days", es: "3–7 días" },
    img_link:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    opposite: { en: "Phase 5", es: "Fase 5" },
    title: {
      en: "Quality Assurance & Strategic Packing",
      es: "Aseguramiento de Calidad y Empaque Estratégico",
    },
    description: {
      en: "Every single unit passes rigorous inspection before being expertly packaged and palletized. We're eliminating defects, streamlining logistics, and ensuring your order arrives perfect—because good enough isn't in our vocabulary.",
      es: "Cada unidad pasa inspección rigurosa antes de ser empacada y paletizada expertamente. Estamos eliminando defectos, optimizando logística y asegurando que tu pedido llegue perfecto—porque 'suficientemente bueno' no está en nuestro vocabulario.",
    },
    timeframe: { en: "2–5 days", es: "2–5 días" },
    img_link:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    opposite: { en: "Phase 6", es: "Fase 6" },
    title: { en: "Global Logistics Network", es: "Red Logística Global" },
    description: {
      en: "Our distribution infrastructure kicks into gear—coordinating warehousing, managing carriers, and tracking every shipment to ensure your packaging arrives on time, intact, and ready to impress customers worldwide.",
      es: "Nuestra infraestructura de distribución entra en acción—coordinando almacenamiento, gestionando transportistas y rastreando cada envío para asegurar que tu empaque llegue a tiempo, intacto y listo para impresionar clientes en todo el mundo.",
    },
    timeframe: { en: "Ongoing", es: "Continuo" },
    img_link: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];
