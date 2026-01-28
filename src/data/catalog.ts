export type Subcategory = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type Category = {
  id: string;
  title: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
};

// Helper: generate unique placeholder images by keyword + seed (stable + different)
const img = (label: string, seed: number) =>
  `https://placehold.co/800x600/png?text=${encodeURIComponent(label)}&seed=${seed}`;

export const CATEGORIES: Category[] = [
  {
    id: "food-containers",
    title: "Food Containers",
    description: "Cardboard food packaging for takeout, snacks, and street food.",
    image: img("Food Containers", 101),
    subcategories: [
      {
        id: "hot-dog-container",
        title: "Hot Dog Cardboard Container",
        description: "Tray-style cardboard container for hot dogs and sausages.",
        image: img("Hot Dog Container", 201),
      },
      {
        id: "burger-box",
        title: "Burger Box",
        description: "Clamshell cardboard burger boxes with grease-resistant options.",
        image: img("Burger Box", 202),
      },
      {
        id: "pizza-slice-box",
        title: "Pizza Slice Box",
        description: "Single-slice triangular cardboard boxes for pizza on-the-go.",
        image: img("Pizza Slice Box", 203),
      },
      {
        id: "fries-scoop",
        title: "Fries Scoop / Tray",
        description: "Open-top trays and scoops for fries and sides.",
        image: img("Fries Tray", 204),
      },
      {
        id: "noodle-box",
        title: "Noodle Box",
        description: "Fold-top noodle boxes for pasta, noodles, and stir-fry.",
        image: img("Noodle Box", 205),
      },
      {
        id: "taco-holder",
        title: "Taco Holder",
        description: "Cardboard taco holders for stable serving and delivery.",
        image: img("Taco Holder", 206),
      },
      {
        id: "salad-bowl",
        title: "Paper Salad Bowl",
        description: "Paperboard bowls with lids for salads and cold meals.",
        image: img("Salad Bowl", 207),
      },
      {
        id: "dessert-cup",
        title: "Dessert Cup / Cake Cup",
        description: "Paper dessert cups for mousse, parfaits, and small cakes.",
        image: img("Dessert Cup", 208),
      },
    ],
  },

  {
    id: "shopping-bags",
    title: "Shopping Bags",
    description: "Paper & cardboard bags for retail, groceries, and boutiques.",
    image: img("Shopping Bags", 102),
    subcategories: [
      {
        id: "kraft-handle-bag",
        title: "Kraft Paper Bag (Twisted Handle)",
        description: "Strong kraft bags with twisted paper handles.",
        image: img("Kraft Handle Bag", 301),
      },
      {
        id: "flat-handle-bag",
        title: "Paper Bag (Flat Handle)",
        description: "Flat-handle paper bags for food and retail.",
        image: img("Flat Handle Bag", 302),
      },
      {
        id: "luxury-bag",
        title: "Luxury Paper Bag",
        description: "Premium bags for fashion, cosmetics, and gifts.",
        image: img("Luxury Paper Bag", 303),
      },
      {
        id: "grocery-bag",
        title: "Grocery Paper Bag",
        description: "Large capacity bags for supermarkets and markets.",
        image: img("Grocery Bag", 304),
      },
      {
        id: "takeaway-bag",
        title: "Takeaway Food Bag",
        description: "Grease-resistant bags for restaurants and delivery.",
        image: img("Takeaway Bag", 305),
      },
      {
        id: "wine-bag",
        title: "Wine Bottle Paper Bag",
        description: "Single/dual bottle paper bags with reinforced base.",
        image: img("Wine Bag", 306),
      },
      {
        id: "pharmacy-bag",
        title: "Pharmacy Bag",
        description: "Clean, branded paper bags for pharmacies and clinics.",
        image: img("Pharmacy Bag", 307),
      },
      {
        id: "ecommerce-bag",
        title: "E-commerce Mailer Bag (Paper)",
        description: "Paper mailers for lightweight shipments and returns.",
        image: img("Paper Mailer", 308),
      },
    ],
  },

  {
    id: "shipping-boxes",
    title: "Shipping Boxes",
    description: "Corrugated boxes for shipping, storage, and fulfillment.",
    image: img("Shipping Boxes", 103),
    subcategories: [
      {
        id: "regular-slotted-carton",
        title: "Regular Slotted Carton (RSC)",
        description: "Standard corrugated shipping box for general use.",
        image: img("RSC Box", 401),
      },
      {
        id: "mailer-box",
        title: "Mailer Box",
        description: "Self-locking mailer boxes for e-commerce and subscriptions.",
        image: img("Mailer Box", 402),
      },
      {
        id: "folding-carton",
        title: "Folding Carton",
        description: "Retail folding cartons for lightweight products.",
        image: img("Folding Carton", 403),
      },
      {
        id: "rigid-box",
        title: "Rigid Gift Box",
        description: "Premium rigid boxes for luxury products and gifts.",
        image: img("Rigid Box", 404),
      },
      {
        id: "pizza-box",
        title: "Pizza Box",
        description: "Corrugated pizza boxes with venting options.",
        image: img("Pizza Box", 405),
      },
      {
        id: "shoe-box",
        title: "Shoe Box",
        description: "Strong retail shoe boxes with custom sizing.",
        image: img("Shoe Box", 406),
      },
      {
        id: "file-box",
        title: "Archive / File Box",
        description: "Storage boxes for documents and office supplies.",
        image: img("File Box", 407),
      },
      {
        id: "moving-box",
        title: "Moving Box",
        description: "Heavy-duty corrugated boxes for relocation and storage.",
        image: img("Moving Box", 408),
      },
    ],
  },

  {
    id: "gift-packaging",
    title: "Gift Packaging",
    description: "Gift boxes, bags, and accessories for premium presentation.",
    image: img("Gift Packaging", 104),
    subcategories: [
      { id: "gift-box", title: "Gift Box", description: "Decorative cardboard gift boxes.", image: img("Gift Box", 501) },
      { id: "gift-bag", title: "Gift Bag", description: "Premium gift bags with handles.", image: img("Gift Bag", 502) },
      { id: "tissue-paper", title: "Tissue Paper", description: "Colored tissue paper for wrapping.", image: img("Tissue Paper", 503) },
      { id: "gift-wrap", title: "Gift Wrap Sheets", description: "Wrapping sheets and kraft wrap.", image: img("Gift Wrap", 504) },
      { id: "ribbon", title: "Ribbon", description: "Ribbon for gift finishing touches.", image: img("Ribbon", 505) },
      { id: "tags", title: "Gift Tags", description: "Custom tags and labels.", image: img("Gift Tags", 506) },
      { id: "stickers", title: "Seals / Stickers", description: "Seals for closing and branding.", image: img("Gift Stickers", 507) },
      { id: "cards", title: "Greeting Cards", description: "Small cards for messages.", image: img("Greeting Card", 508) },
    ],
  },

  {
    id: "bakery-packaging",
    title: "Bakery Packaging",
    description: "Boxes and paper items for pastries, cakes, and bread.",
    image: img("Bakery Packaging", 105),
    subcategories: [
      { id: "cake-box", title: "Cake Box", description: "Cake boxes with inserts and windows.", image: img("Cake Box", 601) },
      { id: "cupcake-box", title: "Cupcake Box", description: "Cupcake boxes with holders.", image: img("Cupcake Box", 602) },
      { id: "pastry-box", title: "Pastry Box", description: "Boxes for donuts and pastries.", image: img("Pastry Box", 603) },
      { id: "cookie-box", title: "Cookie Box", description: "Boxes for cookies and snacks.", image: img("Cookie Box", 604) },
      { id: "bread-bag", title: "Bread Paper Bag", description: "Paper bags for loaves and baguettes.", image: img("Bread Bag", 605) },
      { id: "muffin-cup", title: "Muffin Cups", description: "Paper muffin and cupcake cups.", image: img("Muffin Cups", 606) },
      { id: "window-box", title: "Window Box", description: "Window boxes for display.", image: img("Window Box", 607) },
      { id: "greaseproof-paper", title: "Greaseproof Paper", description: "Paper liners for bakery items.", image: img("Greaseproof Paper", 608) },
    ],
  },

  {
    id: "custom-printing",
    title: "Custom Printing",
    description: "Branding options for boxes and bags (logos, patterns, labels).",
    image: img("Custom Printing", 106),
    subcategories: [
      { id: "logo-print", title: "Logo Printing", description: "Single or full-color logo printing.", image: img("Logo Printing", 701) },
      { id: "full-wrap", title: "Full Wrap Printing", description: "Edge-to-edge custom print designs.", image: img("Full Wrap", 702) },
      { id: "embossing", title: "Embossing / Debossing", description: "Raised or pressed branding effects.", image: img("Embossing", 703) },
      { id: "foil", title: "Foil Stamping", description: "Metallic foil accents for premium branding.", image: img("Foil Stamping", 704) },
      { id: "uv", title: "Spot UV", description: "Gloss highlights on selected areas.", image: img("Spot UV", 705) },
      { id: "labels", title: "Labels / Stickers", description: "Branded labels for packaging.", image: img("Labels", 706) },
      { id: "inserts", title: "Product Inserts", description: "Cards and inserts for packaging.", image: img("Inserts", 707) },
      { id: "barcode", title: "Barcode / QR", description: "Printed codes for tracking and marketing.", image: img("QR Code", 708) },
    ],
  },

  {
    id: "sustainable-packaging",
    title: "Sustainable Packaging",
    description: "Eco-friendly materials, recycled paperboard, and compostable options.",
    image: img("Sustainable Packaging", 107),
    subcategories: [
      { id: "recycled-board", title: "Recycled Paperboard", description: "High recycled content paperboard.", image: img("Recycled Paperboard", 801) },
      { id: "compostable", title: "Compostable Packaging", description: "Compostable packaging materials.", image: img("Compostable", 802) },
      { id: "plastic-free", title: "Plastic-Free Options", description: "Plastic-free coatings and materials.", image: img("Plastic Free", 803) },
      { id: "fsc", title: "FSC-Certified Materials", description: "Certified responsible sourcing options.", image: img("FSC", 804) },
      { id: "water-based", title: "Water-Based Inks", description: "Eco inks for printing and branding.", image: img("Water Based Ink", 805) },
      { id: "kraft", title: "Natural Kraft", description: "Unbleached kraft paper packaging.", image: img("Natural Kraft", 806) },
      { id: "reusable", title: "Reusable Packaging", description: "Packaging designed for reuse.", image: img("Reusable Packaging", 807) },
      { id: "lightweight", title: "Lightweighting", description: "Reduce material while maintaining strength.", image: img("Lightweight", 808) },
    ],
  },

  {
    id: "accessories",
    title: "Packaging Accessories",
    description: "Add-ons: liners, dividers, tape, and protective packaging.",
    image: img("Packaging Accessories", 108),
    subcategories: [
      { id: "tape", title: "Packing Tape", description: "Standard and branded sealing tapes.", image: img("Packing Tape", 901) },
      { id: "dividers", title: "Cardboard Dividers", description: "Separators for bottles and products.", image: img("Dividers", 902) },
      { id: "fill", title: "Paper Fill", description: "Shredded paper fill for protection.", image: img("Paper Fill", 903) },
      { id: "liners", title: "Box Liners", description: "Inner liners for cleanliness and protection.", image: img("Box Liners", 904) },
      { id: "handles", title: "Bag Handles", description: "Rope, ribbon, and paper handle options.", image: img("Handles", 905) },
      { id: "labels", title: "Shipping Labels", description: "Labels for shipping and identification.", image: img("Shipping Labels", 906) },
      { id: "wrap", title: "Kraft Wrap / Sheets", description: "Wrapping and protective kraft sheets.", image: img("Kraft Wrap", 907) },
      { id: "edge", title: "Corner Protectors", description: "Reinforced corners for shipping.", image: img("Corner Protectors", 908) },
    ],
  },
];
