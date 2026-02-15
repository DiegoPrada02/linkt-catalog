import { Link } from "react-router-dom";
import BrandScrollCard from "../components/ui/brandsScrollCard";
import { Marquee } from "./ui/marquee";

export default function BrandsScrollBand() {
  const partnerLogos = [
    {
      img: "/images/partner-logos/art-meat-logo.webp",
      alt: "Art Meat Logo",
      url: "https://artmeat.com/",
    },
    {
      img: "/images/partner-logos/bonjour-logo.webp",
      alt: "Bonjour Logo",
      url: "https://bonjourbakeryusa.com/",
    },
    {
      img: "/images/partner-logos/c3-logo.webp",
      alt: "C3 Logo",
      url: "https://www.c3sbe.com/",
    },
    {
      img: "/images/partner-logos/el-latino-logo.webp",
      alt: "El Latino Logo",
      url: "https://ellatinofoods.com/",
    },
    {
      img: "/images/partner-logos/goya-logo.webp",
      alt: "Goya Logo",
      url: "https://www.goya.com/en/",
    },
    {
      img: "/images/partner-logos/hot-pandeyuca-logo.webp",
      alt: "Hot Pandeyuca Logo",
      url: "https://hotpandeyuca.com/",
    },
    {
      img: "/images/partner-logos/inter-miami-logo.webp",
      alt: "Inter Miami Logo",
      url: "https://www.intermiamicf.com/",
    },
    {
      img: "/images/partner-logos/luka-logo.webp",
      alt: "Luka Logo",
      url: "https://www.lukarestaurant.com/",
    },
    {
      img: "/images/partner-logos/mambo-logo.webp",
      alt: "Mambo Logo",
      url: "https://mambofoods.com/",
    },
    {
      img: "/images/partner-logos/mario-hernandez-logo.webp",
      alt: "Mario Hernandez Logo",
      url: "https://www.mariohernandezusa.com/",
    },
    {
      img: "/images/partner-logos/paisa-logo.webp",
      alt: "Paisa Logo",
      url: "https://paisausa.com/",
    },
    {
      img: "/images/partner-logos/panna-logo.webp",
      alt: "Panna Logo",
      url: "https://mypanna.com/",
    },
    {
      img: "/images/partner-logos/picanha-grill-logo.webp",
      alt: "Picanha Grill Logo",
      url: "",
    },
    {
      img: "/images/partner-logos/tio-sol-logo.webp",
      alt: "Tio Sol Logo",
      url: "https://lapicanagrill.com/",
    },
    {
      img: "/images/partner-logos/toma-logo.webp",
      alt: "Toma Logo",
      url: "https://www.eattoma.com",
    },
    {
      img: "/images/partner-logos/tqmuch-logo.webp",
      alt: "Tqmuch Logo",
      url: "https://tqmuch.com/",
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl" />
      </div>

      {/* Marquee section */}
      <div className="relative z-10">
        <Marquee reverse pauseOnHover duration={50}>
          {partnerLogos.map((partner) => (
            <Link
              key={partner.img}
              to={partner.url}
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ink) focus-visible:ring-offset-2 rounded-2xl"
            >
              <BrandScrollCard img={partner.img} altT={partner.alt} />
            </Link>
          ))}
        </Marquee>
      </div>

      {/* Subtle gradient overlay at edges */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-linear-to-r from-(--background-default)/50 to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-linear-to-l from-(--background-default)/50 to-transparent pointer-events-none z-20" />
    </div>
  );
}
