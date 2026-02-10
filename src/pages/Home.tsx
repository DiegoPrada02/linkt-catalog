import { Link } from "react-router-dom";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CatalogCard from "../components/CatalogCard";
import { CATEGORIES } from "../data/catalog";
import { Hero } from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="rounded-3xl bg-(--background-default)/80 backdrop-blur-md shadow-xl">
      <AppShell>
      <Hero />
      <div className="body-style">
        <div className="max-w-7xl item-center mx-auto flex flex-col gap-16">
        {/* POPULAR CATEGORIES */}
      <div className="mt-10">
        <PageTitle
          title="Popular categories"
          subtitle="Start with a category, then drill down into subcategories."
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
              View all
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
