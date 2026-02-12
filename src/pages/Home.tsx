import { Link } from "react-router-dom";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CatalogCard from "../components/CatalogCard";
import { Hero } from "../components/Hero";
import About from "../components/About";

import { CATEGORIES, pageTitles } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();
  const popular = pageTitles[0];

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

          <div id="about-us">
            <About />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
