import BrandScrollCard from "../components/brandsScrollCard";
import { Marquee } from "./ui/marquee";

export default function BrandsScrollBand() {
 
    const partnerLogos = [
  { img: "/images/partner-logos/art-meat-logo.webp", alt: "Art Meat Logo" },
  { img: "/images/partner-logos/bonjour-logo.webp", alt: "Bonjour Logo" },
  { img: "/images/partner-logos/c3-logo.webp", alt: "C3 Logo" },
  { img: "/images/partner-logos/el-latino-logo.webp", alt: "El Latino Logo" },
  { img: "/images/partner-logos/goya-logo.webp", alt: "Goya Logo" },
  { img: "/images/partner-logos/hot-pandeyuca-logo.webp", alt: "Hot Pandeyuca Logo" },
  { img: "/images/partner-logos/inter-miami-logo.webp", alt: "Inter Miami Logo" },
  { img: "/images/partner-logos/luka-logo.webp", alt: "Luka Logo" },
  { img: "/images/partner-logos/mambo-logo.webp", alt: "Mambo Logo" },
  { img: "/images/partner-logos/mario-hernandez-logo.webp", alt: "Mario Hernandez Logo" },
  { img: "/images/partner-logos/paisa-logo.webp", alt: "Paisa Logo" },
  { img: "/images/partner-logos/panna-logo.webp", alt: "Panna Logo" },
  { img: "/images/partner-logos/picanha-grill-logo.webp", alt: "Picanha Grill Logo" },
  { img: "/images/partner-logos/tio-sol-logo.webp", alt: "Tio Sol Logo" },
  { img: "/images/partner-logos/toma-logo.webp", alt: "Toma Logo" },
  { img: "/images/partner-logos/tqmuch-logo.webp", alt: "Tqmuch Logo" },
];

  return (
    <div className="w-full">
      <Marquee pauseOnHover duration={20}>
        {partnerLogos.map((c) => (
          <BrandScrollCard key={c.alt} img={c.img} altT={c.alt} />
        ))}
      </Marquee>
    </div>
  );
}
