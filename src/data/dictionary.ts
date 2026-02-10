type BannerData = {
    title: string;
    eyebrow: string;
    text: string;
    img: string;
    cta: {
        text: string;
        href: string;
    };
}


export const BannerData: BannerData[] = [
  {
  title: "THE PERFECT BAG FOR THE JOB",
  eyebrow: "LINK'T SYSTEMS",
  text: "Explore our extensive catalog of high-quality bags designed to meet the needs.",
  img: "/images/banner1.webp",
  cta: {
    text: "Browse Catalog",
    href: "/catalog"
  }},
  {
    title: "THE HOME FOR YOUR FROZEN GOODS",
    eyebrow: "Tradition Meets Innovation",
    text: "Discover our range of insulated folding boxes that keep your frozen goods fresh and secure.",
    img: "/images/banner2.webp",
    cta: {
      text: "Folding Boxes",
      href: "/catalog"
    }
  },
  {
    title: "Sustainable Packaging for a Better Future",
    eyebrow: "Eco-Friendly Choices",
    text: "Choose from our selection of sustainable packaging solutions that reduce environmental impact without compromising quality.",
    img: '/images/banner3.png',
    cta: {
      text: "Go Green with Us",
      href: "/catalog"
    }
  },
]
;

