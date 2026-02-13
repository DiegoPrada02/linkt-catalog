import { Link } from "react-router-dom";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CatalogCard from "../components/ui/CatalogCard";
import { Hero } from "../components/Hero";
import About from "../components/About";

import { CATEGORIES, pageTitles } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";
import BrandsScrollBand from "../components/brandsScrollBand";
import FaqArea from "../components/faqArea";

export default function Home() {
  const { t } = useLanguage();
  const popular = pageTitles[0];
  const partners = pageTitles[3];
  const faq = pageTitles[4];

  return (
    <AppShell>
      <Hero />

      <div className="body-style">
        <div className="mx-auto flex flex-col gap-16">
          <div className="mt-10">
            <PageTitle
              title={t(popular.title)}
              subtitle={t(popular.subtitle)}
              right={
                <Link
                  to="/catalog"
                  className="
                    rounded-xl
                    border border-(--background-paper)
                    px-4 py-2
                    text-sm font-semibold
                    text-(--background-default)
                    transition
                    hover:bg-(--secondary-light)
                  "
                >
                  {popular.rightText ? t(popular.rightText) : "View all"}
                </Link>
              }
              extraContent={
                <Grid>
                  {CATEGORIES.slice(0, 4).map((c) => (
                    <CatalogCard
                      key={c.id}
                      title={t(c.title)}
                      description={t(c.description)}
                      image={c.image}
                      href={`/catalog/${c.id}`}
                      badge={`${c.subcategories.length} ${t(
                        { en: "items", es: "artículos" }
                      )}`}
                    />
                  ))}
                </Grid>
              }
            />
          </div>

          <div>
            <PageTitle
              title={t(partners.title)}
              subtitle={t(partners.subtitle)}
              extraContent = {
                 <BrandsScrollBand/>
              }
            />
          </div>



          <div id="about-us">
            <About />
          </div>
        </div>

        <div className="fqa">
              <PageTitle
                title={t(faq.title)}
                subtitle={t(faq.subtitle)}
                right={
                   <Link
                  to="/contact"
                  className="
                    rounded-xl
                    border border-(--background-paper)
                    px-4 py-2
                    text-sm font-semibold
                    text-(--background-default)
                    transition
                    hover:bg-(--secondary-light)
                  "
                >
                  {t(faq.rightText)}
                </Link>
                }
                extraContent={
                  <FaqArea/>
                }
              />
        </div>
              
      </div>
    </AppShell>
  );
}
