
/* Types */
type BannerData = {
    title: string;
    eyebrow: string;
    text: string;
    img: string;
    isVideo: boolean;
    cta: {
        text: string;
        href: string;
    };
}

type pageTitles = {
  title: string,
  subtitle: string,
  rightText?: string,
  text?: string
}


/* Navbar */

type Page = { label: string; path: string };

export const pages: Page[] = [
  { label: "Home", path: "/" },
  { label: "Catalog", path: "/catalog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Distribution", path: "/distribution" },
  { label: "Contact", path: "/contact" },
];


/* HERO SECTION */
export const BannerData: BannerData[] = [
  {
    title: "THE PERFECT BAG FOR THE JOB",
    eyebrow: "LINK'T SYSTEMS",
    text: "Explore our extensive catalog of high-quality bags designed to meet the needs.",
    img: "/images/banner1.webp",
    cta: {
      text: "Browse Catalog",
      href: "/catalog"
    },
    isVideo: false
  },
  {
    title: "THE HOME FOR YOUR FROZEN GOODS",
    eyebrow: "Tradition Meets Innovation",
    text: "Discover our range of insulated folding boxes that keep your frozen goods fresh and secure.",
    img: "/images/banner2.webp",
    cta: {
      text: "Folding Boxes",
      href: "/catalog"
    },
    isVideo: false
  },
  {
    title: "Sustainable Packaging for a Better Future",
    eyebrow: "Eco-Friendly Choices",
    text: "Choose from our selection of sustainable packaging solutions that reduce environmental impact without compromising quality.",
    img: '/images/testmedia.mp4',
    cta: {
      text: "Go Green with Us",
      href: "/catalog"
    },
    isVideo: true
  },
]

/* Page Titles */
export const pageTitles : pageTitles[] = [
  /* Popular Categories */
  {
    title: 'Popular Categories',
    subtitle: 'Start with a category, then drill down into subcategories.',
    rightText: 'View All'
  },
  
  /*About Link't Systems*/
  {
    title: "About Link’T Systems",
    subtitle:"We provide the best service in the world!",
    text: "Link’T Systems provides cardboard boxes and paper bag solutions for retail, food service, e-commerce, and logistics. We focus on designing and manufacturing packaging that balances durability, cost efficiency, and clean presentation, helping businesses protect their products while supporting their brand. From standard packaging to fully customized solutions, we work closely with our clients to deliver consistent quality, scalable production, and responsible material choices. Our goal is to provide dependable packaging that fits seamlessly into modern supply chains and growing businesses."
  },
]



