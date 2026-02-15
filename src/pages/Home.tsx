import { Link } from "react-router-dom";
import About from "../components/About";
import AppShell from "../components/AppShell";
import BrandsScrollBand from "../components/brandsScrollBand";
import FaqArea from "../components/faqArea";
import Grid from "../components/Grid";
import { Hero } from "../components/Hero";
import PageTitle from "../components/PageTitle";
import ProductionTimeline from "../components/ProductionTimeline";
import CatalogCard from "../components/ui/CatalogCard";
import { CATEGORIES, pageTitles } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();
  const popular = pageTitles[0];
  const faq = pageTitles[4];
  const timeline = pageTitles[5];
  const brands = pageTitles[6];

  return (
    <AppShell>
      {/* Hero Section - Full Width, Maximum Impact */}
      <Hero />

      <div className="body-style">
        {/* Main Content Flow */}
        <div className="mx-auto flex flex-col">
          {/* Popular Products - First Engagement Point */}
          <section className="mt-8 sm:mt-12">
            <PageTitle
              title={t(popular.title)}
              subtitle={t(popular.subtitle)}
              right={
                <Link
                  to="/catalog"
                  className="
                    rounded-2xl
                    bg-(--secondary-main)
                    px-6 py-2.5
                    text-sm font-bold
                    text-white
                    transition-all duration-300
                    hover:opacity-90
                    hover:scale-120
                    active:scale-100
                    shadow-lg
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
                      badge={`${c.subcategories.length} ${t({
                        en: "items",
                        es: "artículos",
                      })}`}
                    />
                  ))}
                </Grid>
              }
            />
          </section>

          {/* Social Proof - Trust Building */}
          <section className="mt-20 sm:mt-24">
            <PageTitle
              title={t(brands.title)}
              subtitle={t(brands.subtitle)}
              extraContent={<BrandsScrollBand />}
            />
          </section>

          {/* About Section - Story & Connection */}
          <section id="about-us" className="mt-20 sm:mt-28">
            <About />
          </section>

          {/* Production Timeline - Process Transparency */}
          <section className="mt-20 sm:mt-28">
            <PageTitle
              title={t(timeline.title)}
              subtitle={t(timeline.subtitle)}
              extraContent={<ProductionTimeline />}
            />
          </section>

          {/* FAQ Section - Address Concerns & CTA */}
          <section className="mt-20 sm:mt-28 mb-16 sm:mb-20">
            <PageTitle
              title={t(faq.title)}
              subtitle={t(faq.subtitle)}
              right={
                <Link
                  to="/contact"
                  className="
                    rounded-2xl
                    bg-(--secondary-main)
                    px-6 py-2.5
                    text-sm font-bold
                    text-white
                    transition-all duration-300
                    hover:opacity-90
                    hover:scale-120
                    active:scale-100
                    shadow-lg
                  "
                >
                  {t(faq.rightText)}
                </Link>
              }
              extraContent={<FaqArea />}
            />
          </section>
        </div>
      </div>
    </AppShell>
  );
}
