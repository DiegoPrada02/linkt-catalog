import { Link } from "react-router-dom";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CatalogCard from "../components/CatalogCard";
import { CATEGORIES } from "../data/catalog";
import { Hero } from "../components/Hero";
import About from "../components/About";

import { pageTitles } from "../data/dictionary";
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
                    border border-(--primary-light)
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
                      title={c.title}
                      description={c.description}
                      image={c.image}
                      href={`/catalog/${c.id}`}
                      badge={`${c.subcategories.length} items`}
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
