import { Link } from "react-router-dom";
import BrandScrollCard from "../components/ui/brandsScrollCard";
import { Marquee } from "./ui/marquee";

export default function BrandsScrollBand() {
 
    const partnerLogos = [
  { img: "/images/partner-logos/art-meat-logo.webp", alt: "Art Meat Logo", url:'https://artmeat.com/' },
  { img: "/images/partner-logos/bonjour-logo.webp", alt: "Bonjour Logo", url:'https://bonjourbakeryusa.com/' },
  { img: "/images/partner-logos/c3-logo.webp", alt: "C3 Logo", url:'https://www.c3sbe.com/'},
  { img: "/images/partner-logos/el-latino-logo.webp", alt: "El Latino Logo", url:'https://ellatinofoods.com/'},
  { img: "/images/partner-logos/goya-logo.webp", alt: "Goya Logo", url:'https://www.goya.com/en/'},
  { img: "/images/partner-logos/hot-pandeyuca-logo.webp", alt: "Hot Pandeyuca Logo", url:'https://hotpandeyuca.com/'},
  { img: "/images/partner-logos/inter-miami-logo.webp", alt: "Inter Miami Logo", url:'https://www.intermiamicf.com/'},
  { img: "/images/partner-logos/luka-logo.webp", alt: "Luka Logo", url:'https://www.lukarestaurant.com/'},
  { img: "/images/partner-logos/mambo-logo.webp", alt: "Mambo Logo", url:'https://mambofoods.com/'},
  { img: "/images/partner-logos/mario-hernandez-logo.webp", alt: "Mario Hernandez Logo", url:'https://www.mariohernandezusa.com/'},
  { img: "/images/partner-logos/paisa-logo.webp", alt: "Paisa Logo", url:'https://paisausa.com/'},
  { img: "/images/partner-logos/panna-logo.webp", alt: "Panna Logo", url:'https://mypanna.com/'},
  { img: "/images/partner-logos/picanha-grill-logo.webp", alt: "Picanha Grill Logo", url:''},
  { img: "/images/partner-logos/tio-sol-logo.webp", alt: "Tio Sol Logo", url:'https://lapicanagrill.com/'},
  { img: "/images/partner-logos/toma-logo.webp", alt: "Toma Logo",  url:'https://www.eattoma.com'},
  { img: "/images/partner-logos/tqmuch-logo.webp", alt: "Tqmuch Logo", url:'https://tqmuch.com/'},
];

  return (
    <div className="w-full">
      <Marquee reverse pauseOnHover duration={50}>
        {partnerLogos.map((c) => (
          <Link key={c.img} to={c.url}><BrandScrollCard key={c.alt} img={c.img} altT={c.alt} /></Link>
        ))}
      </Marquee>
    </div>
  );
}
