/* ========= TYPES ========= */

export type ProductionTime = {
  minDays: number;
  maxDays: number;
  note?: string;
};

export type Subcategory = {
  id: string;
  title: string;
  description: string;
  image: string;
  details: {
    longDescription: string;
    paperType: string;
    paperGsm: number;
    coating?: string;
    size: {
      widthMm: number;
      heightMm: number;
      depthMm?: number;
    };
    printing: string;
    minimumOrderQty: number;
    productionTime: ProductionTime;
  };
};

export type Category = {
  id: string;
  title: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
};

/* ========= IMAGE HELPER ========= */

const img = (label: string, seed: number) =>
  `https://placehold.co/800x600/png?text=${encodeURIComponent(label)}&seed=${seed}`;

/* ========= CATALOG ========= */

export const CATEGORIES: Category[] = [
  /* 1 */
  {
    id: "shipping-boxes",
    title: "Shipping Boxes",
    description: "Corrugated cardboard boxes for shipping, storage, and fulfillment.",
    image: img("Shipping Boxes", 1),
    subcategories: [
      {
        id: "rsc-box",
        title: "Regular Slotted Carton (RSC)",
        description: "Standard corrugated shipping box.",
        image: img("RSC Box", 101),
        details: {
          longDescription:
            "The most common shipping box style, suitable for a wide range of products and industries.",
          paperType: "Corrugated Kraft",
          paperGsm: 350,
          size: { widthMm: 300, heightMm: 200, depthMm: 200 },
          printing: "1–4 color flexo",
          minimumOrderQty: 500,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
      {
        id: "mailer-box",
        title: "Mailer Box",
        description: "Self-locking e-commerce mailer box.",
        image: img("Mailer Box", 102),
        details: {
          longDescription:
            "Premium mailer boxes designed for e-commerce shipping and unboxing experiences.",
          paperType: "Corrugated Kraft",
          paperGsm: 320,
          size: { widthMm: 250, heightMm: 80, depthMm: 180 },
          printing: "Full color CMYK",
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 18 },
        },
      },
      {
        id: "moving-box",
        title: "Moving Box",
        description: "Heavy-duty boxes for relocation and storage.",
        image: img("Moving Box", 103),
        details: {
          longDescription:
            "Strong corrugated boxes designed for heavy loads and multiple uses.",
          paperType: "Double-wall corrugated",
          paperGsm: 420,
          size: { widthMm: 600, heightMm: 400, depthMm: 400 },
          printing: "1 color",
          minimumOrderQty: 300,
          productionTime: { minDays: 7, maxDays: 12 },
        },
      },
      {
        id: "archive-box",
        title: "Archive Box",
        description: "Storage boxes for documents and files.",
        image: img("Archive Box", 104),
        details: {
          longDescription:
            "Flat-pack archival boxes ideal for office and document storage.",
          paperType: "Corrugated Kraft",
          paperGsm: 300,
          size: { widthMm: 350, heightMm: 250, depthMm: 100 },
          printing: "No print / 1 color",
          minimumOrderQty: 500,
          productionTime: { minDays: 6, maxDays: 10 },
        },
      },
    ],
  },

  /* 2 */
  {
    id: "retail-boxes",
    title: "Retail Boxes",
    description: "Cardboard boxes designed for retail display.",
    image: img("Retail Boxes", 2),
    subcategories: [
      {
        id: "folding-carton",
        title: "Folding Carton",
        description: "Lightweight retail packaging box.",
        image: img("Folding Carton", 201),
        details: {
          longDescription:
            "Custom folding cartons for consumer goods and retail products.",
          paperType: "SBS paperboard",
          paperGsm: 300,
          size: { widthMm: 120, heightMm: 200, depthMm: 60 },
          printing: "Full color CMYK",
          minimumOrderQty: 2000,
          productionTime: { minDays: 10, maxDays: 20 },
        },
      },
      {
        id: "window-box",
        title: "Window Box",
        description: "Retail box with transparent window.",
        image: img("Window Box", 202),
        details: {
          longDescription:
            "Retail packaging with die-cut window to showcase products.",
          paperType: "SBS paperboard",
          paperGsm: 320,
          coating: "Gloss lamination",
          size: { widthMm: 150, heightMm: 180, depthMm: 70 },
          printing: "Full color CMYK",
          minimumOrderQty: 2000,
          productionTime: { minDays: 12, maxDays: 22 },
        },
      },
      {
        id: "rigid-box",
        title: "Rigid Box",
        description: "Premium rigid cardboard box.",
        image: img("Rigid Box", 203),
        details: {
          longDescription:
            "High-end rigid boxes used for luxury and gift products.",
          paperType: "Greyboard + art paper",
          paperGsm: 1200,
          size: { widthMm: 250, heightMm: 80, depthMm: 200 },
          printing: "Foil / CMYK",
          minimumOrderQty: 500,
          productionTime: { minDays: 15, maxDays: 30 },
        },
      },
      {
        id: "display-box",
        title: "Counter Display Box",
        description: "Point-of-sale display box.",
        image: img("Display Box", 204),
        details: {
          longDescription:
            "Designed for countertop product display in retail stores.",
          paperType: "Corrugated E-flute",
          paperGsm: 300,
          size: { widthMm: 300, heightMm: 200, depthMm: 180 },
          printing: "Full color",
          minimumOrderQty: 1000,
          productionTime: { minDays: 10, maxDays: 18 },
        },
      },
    ],
  },

  /* 3 */
  {
    id: "food-boxes",
    title: "Food Boxes",
    description: "Cardboard boxes for food packaging.",
    image: img("Food Boxes", 3),
    subcategories: [
      {
        id: "pizza-box",
        title: "Pizza Box",
        description: "Corrugated pizza box.",
        image: img("Pizza Box", 301),
        details: {
          longDescription:
            "Ventilated pizza boxes designed to keep food warm and crisp.",
          paperType: "Corrugated Kraft",
          paperGsm: 320,
          coating: "Food-safe",
          size: { widthMm: 330, heightMm: 40, depthMm: 330 },
          printing: "1–2 colors",
          minimumOrderQty: 1000,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
      {
        id: "burger-box",
        title: "Burger Box",
        description: "Clamshell burger box.",
        image: img("Burger Box", 302),
        details: {
          longDescription:
            "Grease-resistant cardboard burger boxes for takeout.",
          paperType: "Kraft paperboard",
          paperGsm: 280,
          coating: "Grease-resistant",
          size: { widthMm: 120, heightMm: 80, depthMm: 120 },
          printing: "1–4 colors",
          minimumOrderQty: 2000,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
      {
        id: "bakery-box",
        title: "Bakery Box",
        description: "Cake and pastry box.",
        image: img("Bakery Box", 303),
        details: {
          longDescription:
            "Boxes for cakes, pastries, and baked goods.",
          paperType: "White paperboard",
          paperGsm: 300,
          size: { widthMm: 250, heightMm: 100, depthMm: 250 },
          printing: "Full color",
          minimumOrderQty: 1500,
          productionTime: { minDays: 8, maxDays: 16 },
        },
      },
      {
        id: "takeaway-box",
        title: "Takeaway Food Box",
        description: "Foldable takeaway food box.",
        image: img("Takeaway Box", 304),
        details: {
          longDescription:
            "Ideal for noodles, rice, and hot meals.",
          paperType: "Kraft paperboard",
          paperGsm: 280,
          coating: "PE coated",
          size: { widthMm: 140, heightMm: 65, depthMm: 110 },
          printing: "1–2 colors",
          minimumOrderQty: 2000,
          productionTime: { minDays: 7, maxDays: 15 },
        },
      },
    ],
  },

  /* 4 */
  {
    id: "paper-bags-retail",
    title: "Retail Paper Bags",
    description: "Paper shopping bags for retail stores.",
    image: img("Retail Paper Bags", 4),
    subcategories: [
      {
        id: "twisted-handle-bag",
        title: "Twisted Handle Bag",
        description: "Classic retail shopping bag.",
        image: img("Twisted Handle Bag", 401),
        details: {
          longDescription:
            "Strong kraft paper bags with twisted handles.",
          paperType: "Kraft paper",
          paperGsm: 120,
          size: { widthMm: 320, heightMm: 420, depthMm: 120 },
          printing: "1–2 colors",
          minimumOrderQty: 1000,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
      {
        id: "flat-handle-bag",
        title: "Flat Handle Bag",
        description: "Paper bag with flat handles.",
        image: img("Flat Handle Bag", 402),
        details: {
          longDescription:
            "Cost-effective paper shopping bags.",
          paperType: "Kraft paper",
          paperGsm: 110,
          size: { widthMm: 300, heightMm: 400, depthMm: 100 },
          printing: "1 color",
          minimumOrderQty: 2000,
          productionTime: { minDays: 6, maxDays: 12 },
        },
      },
      {
        id: "luxury-paper-bag",
        title: "Luxury Paper Bag",
        description: "Premium paper bag with rope handles.",
        image: img("Luxury Paper Bag", 403),
        details: {
          longDescription:
            "High-end paper bags for luxury brands.",
          paperType: "Art paper",
          paperGsm: 180,
          size: { widthMm: 260, heightMm: 360, depthMm: 100 },
          printing: "CMYK + foil",
          minimumOrderQty: 1000,
          productionTime: { minDays: 12, maxDays: 25 },
        },
      },
      {
        id: "wine-bag",
        title: "Wine Paper Bag",
        description: "Paper bag for wine bottles.",
        image: img("Wine Bag", 404),
        details: {
          longDescription:
            "Reinforced paper bags for wine and spirits.",
          paperType: "Kraft paper",
          paperGsm: 150,
          size: { widthMm: 120, heightMm: 360, depthMm: 90 },
          printing: "1–2 colors",
          minimumOrderQty: 1500,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
    ],
  },

  /* 5 */
  {
    id: "food-paper-bags",
    title: "Food Paper Bags",
    description: "Paper bags for food and takeaway.",
    image: img("Food Paper Bags", 5),
    subcategories: [
      {
        id: "takeaway-bag",
        title: "Takeaway Food Bag",
        description: "Grease-resistant food bag.",
        image: img("Takeaway Bag", 501),
        details: {
          longDescription:
            "Paper bags designed for hot food and delivery.",
          paperType: "Kraft paper",
          paperGsm: 100,
          coating: "Grease-resistant",
          size: { widthMm: 260, heightMm: 320, depthMm: 140 },
          printing: "1–2 colors",
          minimumOrderQty: 2000,
          productionTime: { minDays: 6, maxDays: 12 },
        },
      },
      {
        id: "bakery-bag",
        title: "Bakery Paper Bag",
        description: "Paper bag for bakery items.",
        image: img("Bakery Bag", 502),
        details: {
          longDescription:
            "Breathable paper bags for bread and pastries.",
          paperType: "White kraft",
          paperGsm: 90,
          size: { widthMm: 240, heightMm: 350, depthMm: 90 },
          printing: "1 color",
          minimumOrderQty: 3000,
          productionTime: { minDays: 5, maxDays: 10 },
        },
      },
      {
        id: "sandwich-bag",
        title: "Sandwich Bag",
        description: "Paper sandwich bag.",
        image: img("Sandwich Bag", 503),
        details: {
          longDescription:
            "Compact paper bags for sandwiches and snacks.",
          paperType: "Kraft paper",
          paperGsm: 80,
          coating: "Grease-resistant",
          size: { widthMm: 180, heightMm: 200 },
          printing: "1 color",
          minimumOrderQty: 5000,
          productionTime: { minDays: 5, maxDays: 10 },
        },
      },
      {
        id: "hotdog-bag",
        title: "Hot Dog Paper Bag",
        description: "Paper bag for hot dogs.",
        image: img("Hot Dog Bag", 504),
        details: {
          longDescription:
            "Designed specifically for hot dogs and sausages.",
          paperType: "Kraft paper",
          paperGsm: 90,
          coating: "Grease-resistant",
          size: { widthMm: 220, heightMm: 90 },
          printing: "1–2 colors",
          minimumOrderQty: 4000,
          productionTime: { minDays: 6, maxDays: 12 },
        },
      },
    ],
  },

  /* 6 */
  {
    id: "ecommerce-packaging",
    title: "E-commerce Packaging",
    description: "Packaging for online stores.",
    image: img("Ecommerce Packaging", 6),
    subcategories: [
      {
        id: "subscription-box",
        title: "Subscription Box",
        description: "Branded subscription box.",
        image: img("Subscription Box", 601),
        details: {
          longDescription:
            "Custom subscription boxes designed for recurring shipments.",
          paperType: "Corrugated Kraft",
          paperGsm: 320,
          size: { widthMm: 300, heightMm: 100, depthMm: 200 },
          printing: "Full color",
          minimumOrderQty: 1000,
          productionTime: { minDays: 12, maxDays: 20 },
        },
      },
      {
        id: "paper-mailer",
        title: "Paper Mailer",
        description: "Paper shipping mailer.",
        image: img("Paper Mailer", 602),
        details: {
          longDescription:
            "Eco-friendly alternative to plastic mailers.",
          paperType: "Kraft paper",
          paperGsm: 140,
          size: { widthMm: 260, heightMm: 350 },
          printing: "1 color",
          minimumOrderQty: 3000,
          productionTime: { minDays: 7, maxDays: 14 },
        },
      },
      {
        id: "product-box",
        title: "Product Box",
        description: "Custom e-commerce product box.",
        image: img("Product Box", 603),
        details: {
          longDescription:
            "Branded boxes for shipping individual products.",
          paperType: "Corrugated E-flute",
          paperGsm: 300,
          size: { widthMm: 200, heightMm: 80, depthMm: 150 },
          printing: "Full color",
          minimumOrderQty: 1500,
          productionTime: { minDays: 10, maxDays: 18 },
        },
      },
      {
        id: "return-box",
        title: "Return Box",
        description: "Reusable return shipping box.",
        image: img("Return Box", 604),
        details: {
          longDescription:
            "Designed for easy product returns.",
          paperType: "Corrugated Kraft",
          paperGsm: 320,
          size: { widthMm: 300, heightMm: 100, depthMm: 200 },
          printing: "1–2 colors",
          minimumOrderQty: 1000,
          productionTime: { minDays: 8, maxDays: 15 },
        },
      },
    ],
  },

  /* 7 */
  {
    id: "gift-packaging",
    title: "Gift Packaging",
    description: "Cardboard boxes and bags for gifting.",
    image: img("Gift Packaging", 7),
    subcategories: [
      {
        id: "gift-box",
        title: "Gift Box",
        description: "Decorative gift box.",
        image: img("Gift Box", 701),
        details: {
          longDescription:
            "Stylish boxes designed for gift presentation.",
          paperType: "Art paper",
          paperGsm: 350,
          size: { widthMm: 220, heightMm: 90, depthMm: 220 },
          printing: "CMYK + foil",
          minimumOrderQty: 1000,
          productionTime: { minDays: 14, maxDays: 25 },
        },
      },
      {
        id: "gift-bag",
        title: "Gift Bag",
        description: "Paper gift bag.",
        image: img("Gift Bag", 702),
        details: {
          longDescription:
            "Premium paper gift bags with handles.",
          paperType: "Art paper",
          paperGsm: 170,
          size: { widthMm: 260, heightMm: 360, depthMm: 120 },
          printing: "Full color",
          minimumOrderQty: 1500,
          productionTime: { minDays: 10, maxDays: 18 },
        },
      },
      {
        id: "wine-gift-box",
        title: "Wine Gift Box",
        description: "Gift box for wine bottles.",
        image: img("Wine Gift Box", 703),
        details: {
          longDescription:
            "Elegant wine boxes for gifting.",
          paperType: "Rigid board",
          paperGsm: 1200,
          size: { widthMm: 100, heightMm: 350, depthMm: 100 },
          printing: "Foil stamping",
          minimumOrderQty: 500,
          productionTime: { minDays: 15, maxDays: 30 },
        },
      },
      {
        id: "holiday-box",
        title: "Holiday Box",
        description: "Seasonal gift box.",
        image: img("Holiday Box", 704),
        details: {
          longDescription:
            "Limited edition holiday packaging.",
          paperType: "Art paper",
          paperGsm: 300,
          size: { widthMm: 250, heightMm: 100, depthMm: 250 },
          printing: "Full color",
          minimumOrderQty: 1000,
          productionTime: { minDays: 12, maxDays: 20 },
        },
      },
    ],
  },

  /* 8 */
  {
    id: "custom-packaging",
    title: "Custom Packaging",
    description: "Fully customized cardboard boxes and paper bags.",
    image: img("Custom Packaging", 8),
    subcategories: [
      {
        id: "custom-box",
        title: "Custom Box",
        description: "Tailored cardboard box solution.",
        image: img("Custom Box", 801),
        details: {
          longDescription:
            "Fully customized boxes based on your specifications.",
          paperType: "Custom",
          paperGsm: 300,
          size: { widthMm: 300, heightMm: 150, depthMm: 200 },
          printing: "Custom",
          minimumOrderQty: 1000,
          productionTime: { minDays: 15, maxDays: 30, note: "Depends on complexity." },
        },
      },
      {
        id: "custom-paper-bag",
        title: "Custom Paper Bag",
        description: "Tailored paper bag solution.",
        image: img("Custom Paper Bag", 802),
        details: {
          longDescription:
            "Custom-sized paper bags with branding.",
          paperType: "Custom",
          paperGsm: 140,
          size: { widthMm: 260, heightMm: 360, depthMm: 120 },
          printing: "Custom",
          minimumOrderQty: 1500,
          productionTime: { minDays: 12, maxDays: 25 },
        },
      },
      {
        id: "prototype",
        title: "Prototype Sample",
        description: "Prototype packaging sample.",
        image: img("Prototype", 803),
        details: {
          longDescription:
            "Short-run prototype for testing packaging design.",
          paperType: "Various",
          paperGsm: 250,
          size: { widthMm: 200, heightMm: 100, depthMm: 150 },
          printing: "Digital",
          minimumOrderQty: 100,
          productionTime: { minDays: 5, maxDays: 7 },
        },
      },
      {
        id: "short-run",
        title: "Short Run Packaging",
        description: "Low MOQ packaging runs.",
        image: img("Short Run", 804),
        details: {
          longDescription:
            "Ideal for limited releases and testing markets.",
          paperType: "Various",
          paperGsm: 250,
          size: { widthMm: 220, heightMm: 110, depthMm: 160 },
          printing: "Digital",
          minimumOrderQty: 250,
          productionTime: { minDays: 7, maxDays: 10 },
        },
      },
    ],
  },
];
