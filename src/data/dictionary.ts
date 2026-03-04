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
      es: "Tus productos congelados merecen empaques que trabajen tan duro como tú. Nuestras cajas aisladas garantizan que lleguen frescos, protegidos e impecables cada vez.",
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
      en: "Discover why industry leaders choose packaging that delivers quality, wow-factor, and unshakeable reliability all in one.",
      es: "Descubre por qué líderes de la industria eligen empaques que ofrecen calidad, factor sorpresa y confiabilidad inquebrantable todo en uno.",
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
      en: "Link'T Systems creates premium packaging that does more than protect. Our boxes and bags are engineered for retail excellence, food service reliability, e-commerce success, and logistics confidence. We obsess over the details that drive sales: stunning presentation, bulletproof protection, and the operational consistency your team can count on order after order, month after month.",
      es: "Link'T Systems crea empaques premium que hacen más que proteger. Nuestras cajas y bolsas están diseñadas para excelencia en retail, confiabilidad en servicio de alimentos, éxito en e-commerce y seguridad logística. Nos obsesionamos con los detalles que impulsan ventas: presentación impactante, protección blindada y consistencia operativa en la que tu equipo puede confiar pedido tras pedido, mes tras mes.",
    },
  },
  {
    title: {
      en: "Our Catalog",
      es: "Nuestro Catalogo",
    },
    subtitle: {
      en: "The packaging your customers will remember and your competitors will envy.",
      es: "Los empaques que tus clientes recordarán y tus competidores envidiarán.",
    },
    rightText: { en: "Start Shopping", es: "Empezar a Comprar" },
  },
  {
    title: {
      en: "Trusted by Industry Champions",
      es: "Confiado Por Campeones de la Industria",
    },
    subtitle: {
      en: "We don't just serve clients, we build lasting partnerships.",
      es: "No solo servimos clientes, construimos alianzas duraderas.",
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
      en: "Share your packaging vision with us, bags, boxes, or fully custom solutions. We'll send back curated recommendations, smart quantity suggestions, and realistic timelines so you can make your decision with zero guesswork.",
      es: "Comparte tu visión de empaque/bolsas, cajas o soluciones totalmente personalizadas. Te enviaremos recomendaciones curadas, sugerencias inteligentes de cantidades y plazos realistas para que decidas sin adivinar.",
    },
  },
];

export const contactCopy: ContactCopy = {
  infoTitle: {
    en: "Get Your Quote in 24 Hours or Less",
    es: "Recibe Tu Cotización en 24 Horas o Menos",
  },
  infoText: {
    en: "Share your packaging vision with us, bags, boxes, or fully custom solutions. We'll send back curated recommendations, smart quantity suggestions, and realistic timelines so you can make your decision with zero guesswork.",
    es: "Comparte tu visión de empaque/bolsas, cajas o soluciones totalmente personalizadas. Te enviaremos recomendaciones curadas, sugerencias inteligentes de cantidades y plazos realistas para que decidas sin adivinar.",
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
    en: "Coast-to-coast logistics that scale with your success, fast, dependable, and built for growth.",
    es: "Logística de costa a costa que escala con tu éxito rápidamente, confiable y lista para crecer.",
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
    en: "At LINK'T SYSTEMS, we don't just ship boxes, we become your logistics backbone. Our end-to-end distribution management lets you focus on what you do best (growing your business) while we handle the heavy lifting: coordination, movement, tracking, and on-time delivery.",
    es: "En LINK'T SYSTEMS no solo enviamos cajas, nos convertimos en tu columna vertebral logística. Nuestra gestión integral de distribución te permite enfocarte en lo que haces mejor (hacer crecer tu negocio) mientras nosotros manejamos el trabajo pesado: coordinación, movimiento, rastreo y entrega puntual.",
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
  manufacturing: { en: "Manufacturing", es: "Manufactura" },
  distribution: { en: "Distribution", es: "Distribución" },
  video: { en: "Videos", es: "Videos" },
} satisfies Record<string, I18nText>;

export type GalleryTagKey =
  | "boxes"
  | "bags"
  | "food"
  | "retail"
  | "Manufacturing"
  | "distribution"
  | "video";

type GalleryKind = "image" | "video";

export type GalleryItem = {
  id: string;
  kind: GalleryKind;
  src: string;
  poster?: string;
  title: { en: string; es: string };
  tagKey:
    | "bags"
    | "boxes"
    | "food"
    | "retail"
    | "manufacturing"
    | "distribution"
    | "video";
  tag: { en: string; es: string };
  colSpan: number;
  rowSpan: number;
};

const TAG_LABELS: Record<GalleryItem["tagKey"], { en: string; es: string }> = {
  bags: { en: "Bags", es: "Bolsas" },
  boxes: { en: "Boxes", es: "Cajas" },
  food: { en: "Food", es: "Comida" },
  retail: { en: "Retail", es: "Retail" },
  manufacturing: { en: "Manufacturing", es: "Manufactura" },
  distribution: { en: "Distribution", es: "Distribución" },
  video: { en: "Video", es: "Video" },
};

type GallerySeed = {
  n: number; // image/video number (maps to /images/gallery-images/{n}.*)
  kind: GalleryKind;
  title: { en: string; es: string };
  tagKey: GalleryItem["tagKey"];
  colSpan: number;
  rowSpan: number;
};

// ✅ Only maintain this list (short + readable)
const GALLERY_SEEDS: GallerySeed[] = [
  {
    n: 1,
    kind: "image",
    title: {
      en: "Ganachery Signature Bag Collection",
      es: "Colección de Bolsas Signature Ganachery",
    },
    tagKey: "bags",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 2,
    kind: "image",
    title: {
      en: "Caffè Gourmet Packaging Collection",
      es: "Colección de Empaques Caffè Gourmet",
    },
    tagKey: "bags",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 3,
    kind: "image",
    title: {
      en: "Mario Hernandez Luxury Packaging",
      es: "Empaques de Lujo Mario Hernández",
    },
    tagKey: "bags",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    n: 4,
    kind: "video",
    title: {
      en: "Paper Cup Production in Action",
      es: "Producción de Vasos en Acción",
    },
    tagKey: "video",
    colSpan: 2,
    rowSpan: 2,
  },

  {
    n: 5,
    kind: "image",
    title: {
      en: "Spago Restaurant Packaging Suite",
      es: "Suite de Empaques Restaurante Spago",
    },
    tagKey: "boxes",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    n: 6,
    kind: "image",
    title: {
      en: "Carama Premium Packaging Line",
      es: "Línea de Empaques Premium Carama",
    },
    tagKey: "boxes",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    n: 7,
    kind: "image",
    title: {
      en: "CUT by Wolfgang Puck Packaging",
      es: "Empaques CUT por Wolfgang Puck",
    },
    tagKey: "food",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    n: 8,
    kind: "image",
    title: {
      en: "Premium Packaging Showcase",
      es: "Exhibición de Empaques Premium",
    },
    tagKey: "bags",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 9,
    kind: "image",
    title: {
      en: "Signature Retail Packaging Experience",
      es: "Experiencia Distintiva de Empaque Retail",
    },
    tagKey: "bags",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    n: 10,
    kind: "image",
    title: {
      en: "Retail-Ready Display Packaging",
      es: "Empaques Listos para Exhibición Retail",
    },
    tagKey: "retail",
    colSpan: 1,
    rowSpan: 2,
  },

  {
    n: 11,
    kind: "image",
    title: {
      en: "High-Performance Production Lines",
      es: "Líneas de Producción de Alto Rendimiento",
    },
    tagKey: "manufacturing",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    n: 12,
    kind: "image",
    title: {
      en: "Precision Manufacturing Technology",
      es: "Tecnología de Manufactura de Precisión",
    },
    tagKey: "manufacturing",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    n: 13,
    kind: "image",
    title: {
      en: "State-of-the-Art Manufacturing Facility",
      es: "Instalaciones de Manufactura de Última Generación",
    },
    tagKey: "manufacturing",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    n: 14,
    kind: "image",
    title: {
      en: "Cold Chain Packaging Solutions",
      es: "Soluciones de Empaque para Cadena de Frío",
    },
    tagKey: "boxes",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    n: 15,
    kind: "image",
    title: {
      en: "Panna Restaurant Packaging Collection",
      es: "Colección de Empaques Restaurante Panna",
    },
    tagKey: "food",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    n: 16,
    kind: "image",
    title: {
      en: "Industrial Pallet Handling Systems",
      es: "Sistemas Industriales de Manejo de Palets",
    },
    tagKey: "manufacturing",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 17,
    kind: "image",
    title: {
      en: "Retail-Optimized Packaging Solutions",
      es: "Soluciones de Empaque Optimizadas para Retail",
    },
    tagKey: "retail",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 18,
    kind: "image",
    title: {
      en: "Distribution-Ready Packaging Systems",
      es: "Sistemas de Empaque Listos para Distribución",
    },
    tagKey: "manufacturing",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    n: 19,
    kind: "image",
    title: {
      en: "Advanced Manufacturing Operations",
      es: "Operaciones de Manufactura Avanzada",
    },
    tagKey: "manufacturing",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    n: 20,
    kind: "image",
    title: {
      en: "World-Class Manufacturing Standards",
      es: "Estándares de Manufactura de Clase Mundial",
    },
    tagKey: "manufacturing",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    n: 21,
    kind: "image",
    title: {
      en: "High-Capacity Production Systems",
      es: "Sistemas de Producción de Alta Capacidad",
    },
    tagKey: "manufacturing",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 22,
    kind: "image",
    title: {
      en: "Efficient Warehouse Operations",
      es: "Operaciones de Almacén Eficientes",
    },
    tagKey: "manufacturing",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 23,
    kind: "video",
    title: {
      en: "Smart Manufacturing Technology",
      es: "Tecnología de Fabricación Inteligente",
    },
    tagKey: "video",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    n: 24,
    kind: "video",
    title: {
      en: "Automation in Production",
      es: "Automatización en Producción",
    },
    tagKey: "video",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 25,
    kind: "image",
    title: {
      en: "Pico e Gallo Packaging Collection",
      es: "Colección de Empaques Pico e Gallo",
    },
    tagKey: "food",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    n: 26,
    kind: "image",
    title: {
      en: "Inter Miami Packaging Collection",
      es: "Colección de Empaques Inter Miami",
    },
    tagKey: "boxes",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    n: 27,
    kind: "image",
    title: {
      en: "Toma Cone Packaging Design",
      es: "Diseño de Empaque Toma Cone",
    },
    tagKey: "boxes",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    n: 28,
    kind: "image",
    title: {
      en: "Frozen-Ready Packaging Solutions",
      es: "Soluciones de Empaque para Congelados",
    },
    tagKey: "retail",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    n: 29,
    kind: "image",
    title: {
      en: "Mr. Eats Packaging Collection",
      es: "Colección de Empaques Mr. Eats",
    },
    tagKey: "boxes",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    n: 30,
    kind: "image",
    title: {
      en: "Ganachery Premium Box Collection",
      es: "Colección de Cajas Premium Ganachery",
    },
    tagKey: "boxes",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 31,
    kind: "video",
    title: {
      en: "Frozen Packaging Performance",
      es: "Empaques Resistentes para Congelación",
    },
    tagKey: "video",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 32,
    kind: "image",
    title: {
      en: "Premium Folding Box Solutions",
      es: "Soluciones de Cajas Plegadizas Premium",
    },
    tagKey: "boxes",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    n: 33,
    kind: "image",
    title: {
      en: "Global Distribution Packaging",
      es: "Empaques para Distribución Global",
    },
    tagKey: "distribution",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 34,
    kind: "image",
    title: {
      en: "Ultra-High Quality Printing",
      es: "Impresión de Máxima Calidad",
    },
    tagKey: "boxes",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 35,
    kind: "image",
    title: {
      en: "Premium Offset Printing",
      es: "Impresión Offset Premium",
    },
    tagKey: "boxes",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 36,
    kind: "image",
    title: {
      en: "Luxury Packaging Print Finish",
      es: "Acabados de Impresión de Lujo",
    },
    tagKey: "boxes",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 37,
    kind: "image",
    title: {
      en: "Large-Scale Packaging Operations",
      es: "Operaciones de Empaque a Gran Escala",
    },
    tagKey: "distribution",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    n: 38,
    kind: "image",
    title: {
      en: "Fully Custom Packaging Designs",
      es: "Diseños de Empaque Totalmente Personalizados",
    },
    tagKey: "manufacturing",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 39,
    kind: "video",
    title: {
      en: "Precision Die-Cutting Technology",
      es: "Tecnología de Corte de Precisión",
    },
    tagKey: "manufacturing",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    n: 40,
    kind: "video",
    title: {
      en: "High-Quality Production Process",
      es: "Proceso de Producción de Alta Calidad",
    },
    tagKey: "manufacturing",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    n: 42,
    kind: "image",
    title: {
      en: "Your Brand, Everywhere",
      es: "Tu Marca en Todas Partes",
    },
    tagKey: "food",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    n: 43,
    kind: "image",
    title: {
      en: "Premium Print Quality Packaging",
      es: "Empaques con Impresión de Alta Calidad",
    },
    tagKey: "boxes",
    colSpan: 2,
    rowSpan: 2,
  },
];

export const galleryItems: GalleryItem[] = GALLERY_SEEDS.map((s) => {
  const id = `g${s.n}`;
  const base = `/images/gallery-images/${s.n}`;

  return {
    id,
    kind: s.kind,
    src: s.kind === "video" ? `${base}.webm` : `${base}.webp`,
    ...(s.kind === "video" ? { poster: `${base}.webp` } : {}),
    title: s.title,
    tagKey: s.tagKey,
    tag: TAG_LABELS[s.tagKey],
    colSpan: s.colSpan,
    rowSpan: s.rowSpan,
  };
});

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
  image: string[];
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
        title: { en: "Size: Small", es: "Tamaño: Pequeña" },
        description: {
          en: "Perfectly sized luxury for boutique moments that matter.",
          es: "Lujo perfectamente dimensionado para momentos boutique que importan.",
        },
        image: [
          "/images/catalog-images/bags/bag-s.webp",
          "/images/catalog-images/bags/bag-s-2.webp",
          "/images/catalog-images/bags/bag-s-3.webp",
          "/images/catalog-images/bags/bag-s-4.webp",
        ],
        details: {
          longDescription: {
            en: "Crafted for retailers who understand that first impressions count. This size delivers maximum brand impact with minimal material, perfect for accessories, cosmetics, and premium small goods that deserve presentation as beautiful as the product inside.",
            es: "Creada para retailers que entienden que las primeras impresiones cuentan. Este tamaño ofrece máximo impacto de marca con material mínimo, perfecta para accesorios, cosméticos y productos pequeños premium que merecen presentación tan hermosa como el contenido.",
          },
          paperType: {
            en: "White Bristol 150 gsm 70x100",
            es: "Bristol Blanco 150 gsm 70X100",
          },
          paperGsm: 150,
          size: { widthMm: 350, heightMm: 370, depthMm: 120 },
          printing: { en: "1-2 Colors", es: "Impresión 1–2 colores" },
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
        title: { en: "Size: Medium", es: "Tamaño: Mediana" },
        description: {
          en: "The workhorse of retail, engineered for daily excellence.",
          es: "El caballo de batalla del retail, diseñada para excelencia diaria.",
        },
        image: [
          "/images/catalog-images/bags/bag-m.webp",
          "/images/catalog-images/bags/bag-m-2.webp",
          "/images/catalog-images/bags/bag-m-3.webp",
          "/images/catalog-images/bags/bag-m-4.webp",
        ],
        details: {
          longDescription: {
            en: "Your customers' favorite shopping companion. Proven durability meets striking brand presence in our most versatile format, built to handle real retail life while keeping your brand looking sharp, day after day.",
            es: "El compañero de compras favorito de tus clientes. Durabilidad comprobada se encuentra con presencia de marca impactante en nuestro formato más versátil, diseñada para manejar la vida real del retail mientras mantiene tu marca luciendo impecable, día tras día.",
          },
          paperType: {
            en: "White Bristol 150 gsm 70X100",
            es: "Bristol Blanco 150 gsm 70X100",
          },
          paperGsm: 150,
          size: { widthMm: 254, heightMm: 330.2, depthMm: 177 },
          printing: { en: "1–4 colors / CMYK", es: "1–4 colores / CMYK" },
          minimumOrderQty: 1000,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
      {
        id: "bag-large",
        title: { en: "Size: Large", es: "Tamaño: Grande" },
        description: {
          en: "Maximum capacity meets premium presentation.",
          es: "Máxima capacidad con presentación premium.",
        },
        image: [
          "/images/catalog-images/bags/bag-l.webp",
          "/images/catalog-images/bags/bag-l-2.webp",
          "/images/catalog-images/bags/bag-l-3.webp",
          "/images/catalog-images/bags/bag-l-4.webp",
        ],
        details: {
          longDescription: {
            en: "When your customers are buying big, give them a bag that matches the moment. Reinforced engineering supports serious weight while your brand makes a serious impression—from apparel bundles to multi-item purchases that deserve VIP treatment.",
            es: "Cuando tus clientes compran en grande, dales una bolsa que esté a la altura. Ingeniería reforzada soporta peso considerable mientras tu marca hace una impresión seria—desde paquetes de ropa hasta compras múltiples que merecen trato VIP.",
          },
          paperType: { en: "White Bond 115 gsm", es: "Bond Blanco 115 gsm" },
          paperGsm: 115,
          size: { widthMm: 900, heightMm: 700, depthMm: 300 },
          printing: {
            en: "5 colors / CMYK available",
            es: "5 colores / CMYK disponible",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 8, maxDays: 15 },
        },
      },
      {
        id: "bag-custom",
        title: { en: "Type: Custom", es: "Tipo: Personalizada" },
        description: {
          en: "Your vision, engineered to perfection.",
          es: "Tu visión, ingeniada a la perfección.",
        },
        image: ["/images/catalog-images/bags/bag-c.webp"],
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
          minimumOrderQty: 1000,
          productionTime: {
            minDays: 12,
            maxDays: 25,
            note: {
              en: "Worth the wait, timelines vary with specialty magic.",
              es: "Vale la pena la espera, los tiempos varían con magia especial.",
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
    image: "/images/catalog-images/folding-boxes/folding-box-cover.webp",
    subcategories: [
      {
        id: "box-small",
        title: { en: "Size: Small", es: "Tamaño: Pequeña" },
        description: {
          en: "Precision packaging for products that demand perfection.",
          es: "Empaque de precisión para productos que exigen perfección.",
        },
        image: [
          "/images/catalog-images/folding-boxes/folding-box-s.webp",
          "/images/catalog-images/folding-boxes/folding-box-s-2.webp",
          "/images/catalog-images/folding-boxes/folding-box-s-3.webp",
          "/images/catalog-images/folding-boxes/folding-box-s-4.webp",
        ],
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
        title: { en: "Size: Medium", es: "Tamaño: Mediana" },
        description: {
          en: "The retail champion—built for everyday excellence.",
          es: "El campeón del retail—hecha para excelencia cotidiana.",
        },
        image: [
          "/images/catalog-images/folding-boxes/folding-box-m.webp",
          "/images/catalog-images/folding-boxes/folding-box-m-2.webp",
          "/images/catalog-images/folding-boxes/folding-box-m-3.webp",
          "/images/catalog-images/folding-boxes/folding-box-m-4.webp",
        ],
        details: {
          longDescription: {
            en: "Strike the perfect balance between protection and presentation. This format dominates shelves across consumer goods, combining structural integrity with premium finishes that make customers reach for your product first.",
            es: "Logra el equilibrio perfecto entre protección y presentación. Este formato domina estanterías en bienes de consumo, combinando integridad estructural con acabados premium que hacen que clientes elijan tu producto primero.",
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
        title: { en: "Size: Large", es: "Tamaño: Grande" },
        description: {
          en: "Powerful protection meets commanding shelf presence.",
          es: "Protección poderosa con presencia dominante en estantería.",
        },
        image: [
          "/images/catalog-images/folding-boxes/folding-box-l.webp",
          "/images/catalog-images/folding-boxes/folding-box-l-2.webp",
          "/images/catalog-images/folding-boxes/folding-box-l-3.webp",
          "/images/catalog-images/folding-boxes/folding-box-l-4.webp",
        ],
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
        title: { en: "Type: Custom", es: "Tipo: Personalizada" },
        description: {
          en: "Structural brilliance engineered for your brand.",
          es: "Brillantez estructural diseñada para tu marca.",
        },
        image: ["/images/catalog-images/folding-boxes/folding-box-c.webp"],
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
              en: "Excellence takes time, premium finishes add polish and precision.",
              es: "La excelencia toma tiempo, acabados premium añaden pulido y precisión.",
            },
          },
        },
      },
    ],
  },
  {
    id: "sushi-line",
    title: { en: "Sushi Line", es: "Cajas de Sushi" },
    description: {
      en: "Specialized packaging solutions for sushi and Japanese cuisine.",
      es: "Soluciones de empaque especializadas para sushi y cocina japonesa.",
    },
    image: "/images/catalog-images/sushi-line/sushi-line-cover.webp",
    subcategories: [
      {
        id: "sushi-bag",
        title: { en: "Sushi Bags", es: "Bolsas de Sushi" },
        description: {
          en: "Designed for freshness and presentation, our sushi bags keep your culinary creations at their best while showcasing your brand with style.",
          es: "Diseñadas para la frescura y presentación, nuestras bolsas de sushi mantienen tus creaciones culinarias en su mejor estado mientras muestran tu marca con estilo.",
        },
        image: [
          "/images/catalog-images/sushi-line/sushi-line-bags.webp",
          "/images/catalog-images/sushi-line/sushi-line-bags-2.webp",
          "/images/catalog-images/sushi-line/sushi-line-bags-3.webp",
        ],
        details: {
          longDescription: {
            en: "Our sushi bags are crafted with food-grade materials that provide excellent moisture resistance and durability, ensuring your sushi stays fresh and intact during transport. With customizable printing options, you can create a unique brand experience that resonates with your customers and elevates your sushi offerings.",
            es: "Nuestras bolsas de sushi están fabricadas con materiales aptos para alimentos que ofrecen excelente resistencia a la humedad y durabilidad, asegurando que tu sushi se mantenga fresco e intacto durante el transporte. Con opciones de impresión personalizables, puedes crear una experiencia de marca única que resuene con tus clientes y eleve tus ofertas de sushi.",
          },
          paperType: {
            en: "Food-grade laminated paper",
            es: "Papel laminado apto para alimentos",
          },
          paperGsm: 200,
          size: { widthMm: 300, heightMm: 400, depthMm: 100 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
      {
        id: "sushi-box",
        title: { en: "Sushi Boxes", es: "Cajas de Sushi" },
        description: {
          en: "Our sushi boxes are designed to keep your culinary creations fresh and visually appealing, with customizable options to showcase your brand's unique style.",
          es: "Nuestras cajas de sushi están diseñadas para mantener tus creaciones culinarias frescas y visualmente atractivas, con opciones personalizables para mostrar el estilo único de tu marca.",
        },
        image: [
          "/images/catalog-images/sushi-line/sushi-line-boxes.webp",
          "/images/catalog-images/sushi-line/sushi-line-boxes-2.webp",
          "/images/catalog-images/sushi-line/sushi-line-boxes-3.webp",
        ],
        details: {
          longDescription: {
            en: "Crafted with food-grade materials, our sushi boxes provide excellent moisture resistance and durability, ensuring your sushi stays fresh and intact during transport. With customizable printing options, you can create a unique brand experience that resonates with your customers and elevates your sushi offerings.",
            es: "Fabricadas con materiales aptos para alimentos, nuestras cajas de sushi ofrecen excelente resistencia a la humedad y durabilidad, asegurando que tu sushi se mantenga fresco e intacto durante el transporte. Con opciones de impresión personalizables, puedes crear una experiencia de marca única que resuene con tus clientes y eleve tus ofertas de sushi.",
          },
          paperType: {
            en: "Food-grade laminated paperboard",
            es: "Cartulina laminada apta para alimentos",
          },
          paperGsm: 300,
          size: { widthMm: 200, heightMm: 200, depthMm: 50 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 20 },
        },
      },
      {
        id: "sushi-custom",
        title: {
          en: "Custom Sushi Packaging",
          es: "Empaque de Sushi Personalizado",
        },
        description: {
          en: "Tailored packaging solutions for sushi and Japanese cuisine, designed to meet your specific needs and elevate your brand's presentation.",
          es: "Soluciones de empaque personalizadas para sushi y cocina japonesa, diseñadas para satisfacer tus necesidades específicas y elevar la presentación de tu marca.",
        },
        image: [
          "/images/catalog-images/sushi-line/sushi-line-c.webp",
          "/images/catalog-images/sushi-line/sushi-line-c-2.webp",
        ],
        details: {
          longDescription: {
            en: "Our custom sushi packaging solutions are designed to meet your specific needs, whether you're looking for unique shapes, sizes, or finishes. We work closely with you to create packaging that not only keeps your sushi fresh and secure but also enhances your brand's presentation and resonates with your customers.",
            es: "Nuestras soluciones de empaque de sushi personalizado están diseñadas para satisfacer tus necesidades específicas, ya sea que busques formas, tamaños o acabados únicos. Trabajamos estrechamente contigo para crear empaques que no solo mantengan tu sushi fresco y seguro, sino que también mejoren la presentación de tu marca y resuenen con tus clientes.",
          },
          paperType: {
            en: "Custom food-grade materials",
            es: "Materiales personalizados aptos para alimentos",
          },
          paperGsm: 250,
          coating: {
            en: "Custom finishes available",
            es: "Acabados personalizados disponibles",
          },
          size: { widthMm: 250, heightMm: 250, depthMm: 100 },
          printing: {
            en: "Advanced custom printing with food-safe inks",
            es: "Impresión personalizada avanzada con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: {
            minDays: 15,
            maxDays: 30,
            note: {
              en: "Custom solutions require a bit more time, but the results are worth it.",
              es: "Las soluciones personalizadas requieren un poco más de tiempo, pero los resultados valen la pena.",
            },
          },
        },
      },
    ],
  },
  {
    id: "paper-cups",
    title: { en: "Paper Cups", es: "Vasos de Papel" },
    description: {
      en: "Disposable paper cups designed for serving hot and cold beverages in cafes, restaurants, events, and takeout services.",
      es: "Vasos de papel desechables diseñados para servir bebidas frías y calientes en cafeterías, restaurantes, eventos y servicios para llevar.",
    },
    image: "/images/catalog-images/paper-cups/paper-cups-cover.webp",
    subcategories: [
      {
        id: "paper-cup-espresso",
        title: { en: "Espresso Paper Cup", es: "Vasos de Papel para Espresso" },
        description: {
          en: "Small paper cups designed for espresso shots, tastings, and small servings.",
          es: "Vasos de papel pequeños diseñados para shots de espresso, degustaciones y porciones pequeñas.",
        },
        image: [
          "/images/catalog-images/paper-cups/espresso-cup.webp",
          "/images/catalog-images/paper-cups/espresso-cup-2.webp",
        ],
        details: {
          longDescription: {
            en: "Our small paper cups are crafted with food-grade materials, offering excellent insulation and leak resistance. Perfect for coffee shops, events, and sampling stations, they can be fully customized with your brand's artwork to create a memorable customer experience.",
            es: "Nuestros vasos de papel pequeños están fabricados con materiales aptos para alimentos, ofreciendo excelente aislamiento y resistencia a fugas. Perfectos para cafeterías, eventos y estaciones de muestras, pueden personalizarse completamente con el arte de tu marca para crear una experiencia memorable.",
          },
          paperType: {
            en: "Food-grade single-wall PE-coated paper",
            es: "Papel con recubrimiento de PE de pared simple apto para alimentos",
          },
          paperGsm: 190,
          size: { widthMm: 60, heightMm: 75, depthMm: 60 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
      {
        id: "paper-cup-coffee-cup",
        title: { en: "Coffee Paper Cup", es: "Vasos Para Cafe" },
        description: {
          en: "Medium paper cups made for coffee and everyday hot beverages like tea and cacao.",
          es: "Vasos de papel medianos hechos para café y bebidas calientes diarias como té y cacao.",
        },
        image: [
          "/images/catalog-images/paper-cups/coffee-cup.webp",
          "/images/catalog-images/paper-cups/coffee-cup-2.webp",
        ],
        details: {
          longDescription: {
            en: "Designed for everyday use, our medium paper cups balance capacity and portability. Made with food-grade PE-coated paper, they maintain temperature effectively for both hot and cold drinks. Customizable printing ensures your brand stands out at every sip.",
            es: "Diseñados para el uso diario, nuestros vasos de papel medianos equilibran capacidad y portabilidad. Fabricados con papel con recubrimiento de PE apto para alimentos, mantienen la temperatura de manera efectiva tanto para bebidas frías como calientes. La impresión personalizable asegura que tu marca destaque en cada sorbo.",
          },
          paperType: {
            en: "Food-grade single-wall PE-coated paper",
            es: "Papel con recubrimiento de PE de pared simple apto para alimentos",
          },
          paperGsm: 210,
          size: { widthMm: 80, heightMm: 100, depthMm: 80 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
      {
        id: "paper-cup-22oz-soda",
        title: { en: "Soda Paper Cups", es: "Vasos de Papel Para Soda" },
        description: {
          en: "Large paper cups ideal for soda, fountain drinks, and other cold beverages.",
          es: "Vasos de papel grandes ideales para soda, bebidas de fuente y otras bebidas frías.",
        },
        image: [
          "/images/catalog-images/paper-cups/soda-cup.webp",
          "/images/catalog-images/paper-cups/soda-cup-2.webp",
        ],
        details: {
          longDescription: {
            en: "Our large paper cups are built for high-volume beverage service, offering superior structural integrity and insulation. Ideal for restaurants, stadiums, and fast-food chains, they are available with double-wall options for extra heat retention and full custom branding.",
            es: "Nuestros vasos de papel grandes están diseñados para servicio de bebidas de alto volumen, ofreciendo superior integridad estructural y aislamiento. Ideales para restaurantes, estadios y cadenas de comida rápida, están disponibles con opciones de doble pared para mayor retención de calor y marca personalizada completa.",
          },
          paperType: {
            en: "Food-grade double-wall PE-coated paper",
            es: "Papel con recubrimiento de PE de doble pared apto para alimentos",
          },
          paperGsm: 250,
          size: { widthMm: 95, heightMm: 145, depthMm: 95 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 20 },
        },
      },
      {
        id: "ice-cream-cup",
        title: { en: "Ice Cream Paper Cup", es: "Vasos de Papel para Helados" },
        description: {
          en: "Paper cups made for ice cream, frozen desserts, and cold food servings.",
          es: "Vasos de papel hechos para helados, postres congelados y porciones de alimentos fríos.",
        },
        image: [
          "/images/catalog-images/paper-cups/ice-cream-cup.webp",
          "/images/catalog-images/paper-cups/ice-cream-cup-2.webp",
          "/images/catalog-images/paper-cups/ice-cream-cup-3.webp",
        ],
        details: {
          longDescription: {
            en: "Our custom paper cups are designed from the ground up to meet your unique requirements. From custom sizes and capacities to specialty coatings and finishes, we collaborate with you to produce cups that perfectly represent your brand while maintaining the highest food-safety standards.",
            es: "Nuestros vasos de papel personalizados están diseñados desde cero para satisfacer tus requisitos únicos. Desde tamaños y capacidades personalizadas hasta recubrimientos y acabados especiales, colaboramos contigo para producir vasos que representen perfectamente tu marca mientras mantienen los más altos estándares de seguridad alimentaria.",
          },
          paperType: {
            en: "Custom food-grade materials",
            es: "Materiales personalizados aptos para alimentos",
          },
          paperGsm: 200,
          coating: {
            en: "Custom finishes available (PE, PLA, matte, gloss)",
            es: "Acabados personalizados disponibles (PE, PLA, mate, brillante)",
          },
          size: { widthMm: 0, heightMm: 0, depthMm: 0 },
          printing: {
            en: "Advanced custom printing with food-safe inks",
            es: "Impresión personalizada avanzada con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: {
            minDays: 15,
            maxDays: 30,
            note: {
              en: "Custom solutions require a bit more time, but the results are worth it.",
              es: "Las soluciones personalizadas requieren un poco más de tiempo, pero los resultados valen la pena.",
            },
          },
        },
      },
    ],
  },
  {
    id: "food-containers",
    title: { en: "Food Containers", es: "Contenedores de Comida" },
    description: {
      en: "Durable and customizable food containers for a wide variety of culinary offerings.",
      es: "Contenedores de comida duraderos y personalizables para una amplia variedad de ofertas culinarias.",
    },
    image: "/images/catalog-images/food-containers/food-containers-cover.webp",
    subcategories: [
      {
        id: "burger-container",
        title: {
          en: "Burger Containers",
          es: "Contenedores para Hamburguesas",
        },
        description: {
          en: "Sturdy and grease-resistant burger containers that keep your burgers fresh, warm, and visually appealing.",
          es: "Contenedores para hamburguesas resistentes y a prueba de grasa que mantienen tus hamburguesas frescas, calientes y visualmente atractivas.",
        },
        image: ["/images/catalog-images/food-containers/burger-container.webp"],
        details: {
          longDescription: {
            en: "Our burger containers are engineered with grease-resistant, food-grade materials that lock in heat and freshness. Designed with a secure clamshell closure, they prevent spills and maintain the structural integrity of your burgers during delivery or takeout. Fully customizable with your brand's artwork for a premium presentation.",
            es: "Nuestros contenedores para hamburguesas están fabricados con materiales aptos para alimentos y resistentes a la grasa que retienen el calor y la frescura. Diseñados con un cierre tipo almeja seguro, evitan derrames y mantienen la integridad estructural de tus hamburguesas durante la entrega o para llevar. Totalmente personalizables con el arte de tu marca para una presentación premium.",
          },
          paperType: {
            en: "Food-grade grease-resistant paperboard",
            es: "Cartulina resistente a la grasa apta para alimentos",
          },
          paperGsm: 300,
          size: { widthMm: 130, heightMm: 80, depthMm: 130 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 20 },
        },
      },
      {
        id: "hotdog-container",
        title: {
          en: "Hotdog Containers",
          es: "Contenedores para Perros Calientes",
        },
        description: {
          en: "Elongated and practical hotdog containers designed to hold and present your hotdogs with style.",
          es: "Contenedores para perros calientes alargados y prácticos, diseñados para sostener y presentar tus perros calientes con estilo.",
        },
        image: ["/images/catalog-images/food-containers/hotdog-container.webp"],
        details: {
          longDescription: {
            en: "Specifically shaped for hotdogs and sausages, our hotdog containers provide a snug fit that keeps the food secure and warm. Made from food-grade grease-resistant materials, they are ideal for stadiums, food trucks, and fast-food outlets. Custom printing options allow you to reinforce your brand at every serving.",
            es: "Con una forma específica para perros calientes y salchichas, nuestros contenedores ofrecen un ajuste perfecto que mantiene la comida segura y caliente. Fabricados con materiales resistentes a la grasa aptos para alimentos, son ideales para estadios, food trucks y establecimientos de comida rápida. Las opciones de impresión personalizada te permiten reforzar tu marca en cada servicio.",
          },
          paperType: {
            en: "Food-grade grease-resistant paperboard",
            es: "Cartulina resistente a la grasa apta para alimentos",
          },
          paperGsm: 280,
          size: { widthMm: 60, heightMm: 70, depthMm: 200 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 20 },
        },
      },
      {
        id: "arepa-container",
        title: { en: "Arepa Containers", es: "Contenedores para Arepas" },
        description: {
          en: "Purpose-built arepa containers that preserve warmth and freshness while showcasing your brand's identity.",
          es: "Contenedores para arepas diseñados específicamente para preservar el calor y la frescura mientras muestran la identidad de tu marca.",
        },
        image: ["/images/catalog-images/food-containers/arepa-container.webp"],
        details: {
          longDescription: {
            en: "Our arepa containers are specially designed to accommodate the unique shape and size of arepas, keeping them warm, fresh, and intact. Crafted from food-grade grease-resistant paperboard, they are perfect for areperas, food trucks, and Latin cuisine restaurants. Fully customizable to reflect your brand's culture and personality.",
            es: "Nuestros contenedores para arepas están especialmente diseñados para acomodar la forma y el tamaño únicos de las arepas, manteniéndolas calientes, frescas e intactas. Fabricados con cartulina resistente a la grasa apta para alimentos, son perfectos para areperas, food trucks y restaurantes de cocina latina. Totalmente personalizables para reflejar la cultura y personalidad de tu marca.",
          },
          paperType: {
            en: "Food-grade grease-resistant paperboard",
            es: "Cartulina resistente a la grasa apta para alimentos",
          },
          paperGsm: 290,
          size: { widthMm: 150, heightMm: 60, depthMm: 150 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 20 },
        },
      },
      {
        id: "cono-container",
        title: { en: "Food Cones", es: "Conos Para comida" },
        description: {
          en: "Purpose-built arepa containers that preserve warmth and freshness while showcasing your brand's identity.",
          es: "Contenedores para arepas diseñados específicamente para preservar el calor y la frescura mientras muestran la identidad de tu marca.",
        },
        image: ["/images/catalog-images/food-containers/arepa-container.webp"],
        details: {
          longDescription: {
            en: "Our arepa containers are specially designed to accommodate the unique shape and size of arepas, keeping them warm, fresh, and intact. Crafted from food-grade grease-resistant paperboard, they are perfect for areperas, food trucks, and Latin cuisine restaurants. Fully customizable to reflect your brand's culture and personality.",
            es: "Nuestros contenedores para arepas están especialmente diseñados para acomodar la forma y el tamaño únicos de las arepas, manteniéndolas calientes, frescas e intactas. Fabricados con cartulina resistente a la grasa apta para alimentos, son perfectos para areperas, food trucks y restaurantes de cocina latina. Totalmente personalizables para reflejar la cultura y personalidad de tu marca.",
          },
          paperType: {
            en: "Food-grade grease-resistant paperboard",
            es: "Cartulina resistente a la grasa apta para alimentos",
          },
          paperGsm: 290,
          size: { widthMm: 150, heightMm: 60, depthMm: 150 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 20 },
        },
      },
      {
        id: "to-go-container",
        title: { en: "To Go Containers", es: "Contenedores To go" },
        description: {
          en: "Purpose-built arepa containers that preserve warmth and freshness while showcasing your brand's identity.",
          es: "Contenedores para arepas diseñados específicamente para preservar el calor y la frescura mientras muestran la identidad de tu marca.",
        },
        image: ["/images/catalog-images/food-containers/arepa-container.webp"],
        details: {
          longDescription: {
            en: "Our arepa containers are specially designed to accommodate the unique shape and size of arepas, keeping them warm, fresh, and intact. Crafted from food-grade grease-resistant paperboard, they are perfect for areperas, food trucks, and Latin cuisine restaurants. Fully customizable to reflect your brand's culture and personality.",
            es: "Nuestros contenedores para arepas están especialmente diseñados para acomodar la forma y el tamaño únicos de las arepas, manteniéndolas calientes, frescas e intactas. Fabricados con cartulina resistente a la grasa apta para alimentos, son perfectos para areperas, food trucks y restaurantes de cocina latina. Totalmente personalizables para reflejar la cultura y personalidad de tu marca.",
          },
          paperType: {
            en: "Food-grade grease-resistant paperboard",
            es: "Cartulina resistente a la grasa apta para alimentos",
          },
          paperGsm: 290,
          size: { widthMm: 150, heightMm: 60, depthMm: 150 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 20 },
        },
      },
      {
        id: "crepe-container",
        title: { en: "Crêpe Containers", es: "Contenedores para Crêpes" },
        description: {
          en: "Purpose-built arepa containers that preserve warmth and freshness while showcasing your brand's identity.",
          es: "Contenedores para arepas diseñados específicamente para preservar el calor y la frescura mientras muestran la identidad de tu marca.",
        },
        image: ["/images/catalog-images/food-containers/arepa-container.webp"],
        details: {
          longDescription: {
            en: "Our arepa containers are specially designed to accommodate the unique shape and size of arepas, keeping them warm, fresh, and intact. Crafted from food-grade grease-resistant paperboard, they are perfect for areperas, food trucks, and Latin cuisine restaurants. Fully customizable to reflect your brand's culture and personality.",
            es: "Nuestros contenedores para arepas están especialmente diseñados para acomodar la forma y el tamaño únicos de las arepas, manteniéndolas calientes, frescas e intactas. Fabricados con cartulina resistente a la grasa apta para alimentos, son perfectos para areperas, food trucks y restaurantes de cocina latina. Totalmente personalizables para reflejar la cultura y personalidad de tu marca.",
          },
          paperType: {
            en: "Food-grade grease-resistant paperboard",
            es: "Cartulina resistente a la grasa apta para alimentos",
          },
          paperGsm: 290,
          size: { widthMm: 150, heightMm: 60, depthMm: 150 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 20 },
        },
      },
      {
        id: "custom-container",
        title: { en: "Custom Containers", es: "Contenedores Personalizados" },
        description: {
          en: "Fully bespoke food container solutions tailored to your product's unique shape, size, and branding requirements.",
          es: "Soluciones de contenedores de comida completamente a medida, adaptadas a la forma, tamaño y requisitos de marca únicos de tu producto.",
        },
        image: ["/images/catalog-images/food-containers/custom-container.webp"],
        details: {
          longDescription: {
            en: "Our custom food containers are built to your exact specifications. Whether you need an unconventional shape, a specific material, or a unique finish, our team works closely with you to design and produce containers that perfectly complement your food offering and brand identity. No idea is too complex — we bring your vision to life.",
            es: "Nuestros contenedores de comida personalizados se fabrican según tus especificaciones exactas. Ya sea que necesites una forma poco convencional, un material específico o un acabado único, nuestro equipo trabaja estrechamente contigo para diseñar y producir contenedores que complementen perfectamente tu oferta gastronómica e identidad de marca. Ninguna idea es demasiado compleja: damos vida a tu visión.",
          },
          paperType: {
            en: "Custom food-grade materials",
            es: "Materiales personalizados aptos para alimentos",
          },
          paperGsm: 300,
          coating: {
            en: "Custom finishes available (matte, gloss, grease-resistant)",
            es: "Acabados personalizados disponibles (mate, brillante, resistente a la grasa)",
          },
          size: { widthMm: 0, heightMm: 0, depthMm: 0 },
          printing: {
            en: "Advanced custom printing with food-safe inks",
            es: "Impresión personalizada avanzada con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: {
            minDays: 15,
            maxDays: 30,
            note: {
              en: "Custom solutions require a bit more time, but the results are worth it.",
              es: "Las soluciones personalizadas requieren un poco más de tiempo, pero los resultados valen la pena.",
            },
          },
        },
      },
    ],
  },
  {
    id: "bakery-containers",
    title: { en: "Bakery Boxes", es: "Contenedores de Panaderia" },
    description: {
      en: "Durable and customizable food containers for a wide variety of culinary offerings.",
      es: "Contenedores de comida duraderos y personalizables para una amplia variedad de ofertas culinarias.",
    },
    image: "/images/catalog-images/food-containers/food-containers-cover.webp",
    subcategories: [
      {
        id: "cake-box",
        title: {
          en: "Cake Box",
          es: "Caja Para Pastel",
        },
        description: {
          en: "Sturdy and grease-resistant burger containers that keep your burgers fresh, warm, and visually appealing.",
          es: "Contenedores para hamburguesas resistentes y a prueba de grasa que mantienen tus hamburguesas frescas, calientes y visualmente atractivas.",
        },
        image: ["/images/catalog-images/food-containers/burger-container.webp"],
        details: {
          longDescription: {
            en: "Our burger containers are engineered with grease-resistant, food-grade materials that lock in heat and freshness. Designed with a secure clamshell closure, they prevent spills and maintain the structural integrity of your burgers during delivery or takeout. Fully customizable with your brand's artwork for a premium presentation.",
            es: "Nuestros contenedores para hamburguesas están fabricados con materiales aptos para alimentos y resistentes a la grasa que retienen el calor y la frescura. Diseñados con un cierre tipo almeja seguro, evitan derrames y mantienen la integridad estructural de tus hamburguesas durante la entrega o para llevar. Totalmente personalizables con el arte de tu marca para una presentación premium.",
          },
          paperType: {
            en: "Food-grade grease-resistant paperboard",
            es: "Cartulina resistente a la grasa apta para alimentos",
          },
          paperGsm: 300,
          size: { widthMm: 130, heightMm: 80, depthMm: 130 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 20 },
        },
      },
      {
        id: "pan-jamon-box",
        title: {
          en: "Pan Jamon Box",
          es: "Caja para Pan Jamon",
        },
        description: {
          en: "Elongated and practical hotdog containers designed to hold and present your hotdogs with style.",
          es: "Contenedores para perros calientes alargados y prácticos, diseñados para sostener y presentar tus perros calientes con estilo.",
        },
        image: ["/images/catalog-images/food-containers/hotdog-container.webp"],
        details: {
          longDescription: {
            en: "Specifically shaped for hotdogs and sausages, our hotdog containers provide a snug fit that keeps the food secure and warm. Made from food-grade grease-resistant materials, they are ideal for stadiums, food trucks, and fast-food outlets. Custom printing options allow you to reinforce your brand at every serving.",
            es: "Con una forma específica para perros calientes y salchichas, nuestros contenedores ofrecen un ajuste perfecto que mantiene la comida segura y caliente. Fabricados con materiales resistentes a la grasa aptos para alimentos, son ideales para estadios, food trucks y establecimientos de comida rápida. Las opciones de impresión personalizada te permiten reforzar tu marca en cada servicio.",
          },
          paperType: {
            en: "Food-grade grease-resistant paperboard",
            es: "Cartulina resistente a la grasa apta para alimentos",
          },
          paperGsm: 280,
          size: { widthMm: 60, heightMm: 70, depthMm: 200 },
          printing: {
            en: "Full color CMYK with food-safe inks",
            es: "Color completo CMYK con tintas seguras para alimentos",
          },
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 20 },
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
      en: "Not at all. Our veteran design team lives and breathes packaging excellence. Share your vision, and we'll transform it into production-ready brilliance, or we can refine your existing artwork to perfection. Either way, you get packaging that looks as good as it performs.",
      es: "Para nada. Nuestro equipo veterano de diseño vive y respira excelencia en empaque. Comparte tu visión y la transformaremos en brillantez lista para producción, o podemos perfeccionar tu arte existente. De cualquier forma, obtienes empaque que luce tan bien como funciona.",
    },
  },
  {
    id: 2,
    question: {
      en: "What's your minimum order quantity?",
      es: "¿Cuál es su cantidad mínima de pedido?",
    },
    answer: {
      en: "Our sweet spot starts at 1,000 units, perfect for testing new designs or maintaining inventory. Need something different? Let's talk. We love solving unique challenges.",
      es: "Nuestro punto óptimo comienza en 1,000 unidades, perfecto para probar nuevos diseños o mantener inventario. ¿Necesitas algo diferente? Hablemos. Nos encanta resolver desafíos únicos.",
    },
  },
  {
    id: 3,
    question: {
      en: "Do you offer free shipping?",
      es: "¿Ofrecen envío gratuito?",
    },
    answer: {
      en: "Yes! Free shipping is standard on most orders because logistics shouldn't add stress to your life. Some variations apply based on order size and destination, our team will give you the full picture upfront.",
      es: "Sí! El envío gratuito es estándar en la mayoría de pedidos porque la logística no debería agregar estrés a tu vida. Algunas variaciones aplican según tamaño del pedido y destino, nuestro equipo te dará el panorama completo desde el inicio.",
    },
  },
  {
    id: 4,
    question: {
      en: "I have questions about my quote or order. Who do I contact?",
      es: "Tengo preguntas sobre mi cotización u orden. ¿A quién contacto?",
    },
    answer: {
      en: `Reach out anytime at ${brand.email} or call ${brand.phone}. Our team responds fast because we know your time is valuable, and your success matters to us.`,
      es: `Contáctanos cuando sea a ${brand.email} o llama al ${brand.phone}. Nuestro equipo responde rápido porque sabemos que tu tiempo es valioso, y tu éxito nos importa.`,
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
    img_link: "/images/timeline-images/1.webp",
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
    img_link: "/images/timeline-images/2.webp",
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
    img_link: "/images/timeline-images/3.webp",
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
    img_link: "/images/timeline-images/4.webp",
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
    img_link: "/images/timeline-images/5.webp",
  },
  {
    id: 6,
    opposite: { en: "Phase 6", es: "Fase 6" },
    title: { en: "Global Logistics Network", es: "Red Logística Global" },
    description: {
      en: "Our distribution infrastructure kicks into gear, coordinating warehousing, managing carriers, and tracking every shipment to ensure your packaging arrives on time, intact, and ready to impress customers worldwide.",
      es: "Nuestra infraestructura de distribución entra en acción, coordinando almacenamiento, gestionando transportistas y rastreando cada envío para asegurar que tu empaque llegue a tiempo, intacto y listo para impresionar clientes en todo el mundo.",
    },
    timeframe: { en: "Ongoing", es: "Continuo" },
    img_link: "/images/gallery-images/40.webm",
  },
];
