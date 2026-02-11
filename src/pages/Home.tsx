import { Link } from "react-router-dom";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CatalogCard from "../components/CatalogCard";
import { CATEGORIES } from "../data/catalog";
import { Hero } from "../components/Hero";
import About from "../components/About";
import { pageTitles } from "../data/dictionary";

export default function Home() {
  return (
    <div className="rounded-3xl bg-(--background-default)/80 backdrop-blur-md shadow-xl w-full">
      <AppShell>
      <Hero />
      <div className="body-style">
        <div className=" item-center mx-auto flex flex-col gap-16">
        {/* POPULAR CATEGORIES */}
      <div className="mt-10">
        <PageTitle
          title={pageTitles[0].title}
          subtitle={pageTitles[0].subtitle}
          right={
            <Link
              to="/catalog"
              className="
                rounded-xl
                border border-(--primary)
                px-4 py-2
                text-sm font-semibold
                text-(--background-default)
                transition
                hover:bg-(--secondary-light)
              "
            >
              {pageTitles[0].rightText}
            </Link>
          }
        />

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
      </div>

      {/* Who Are We? Section */}
      <div id="about-us">
        <About />
      </div>
      </div>

      </div>
    </AppShell>
    </div>
      
  );
}
