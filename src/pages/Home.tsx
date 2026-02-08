import { Link } from "react-router-dom";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CatalogCard from "../components/CatalogCard";
import { BRAND } from "../data/brand";
import { CATEGORIES } from "../data/catalog";
import { SparklesText } from "../components/ui/sparkles-text";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <AppShell>
      {/* HERO / INTRO */}

      <Hero/>

      <div
        className="rounded-2xl border p-8 shadow-sm"
        style={{
          background: "linear-gradient(180deg, var(--prussian-blue), var(--ink-black))",
          borderColor: "var(--dusk-blue)",
          color: "var(--alabaster-grey)",
        }}
      >
        <SparklesText className="text-4xl font-semibold tracking-tight">
          {BRAND.name}
        </SparklesText>

        <p
          className="mt-3 max-w-2xl"
          style={{ color: "var(--lavender-grey)" }}
        >
          {BRAND.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* Primary CTA */}
          <Link
            to="/catalog"
            className="rounded-xl px-5 py-3 text-sm font-semibold transition"
            style={{
              backgroundColor: "var(--dusk-blue)",
              color: "var(--alabaster-grey)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--lavender-grey)";
              e.currentTarget.style.color = "var(--ink-black)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--dusk-blue)";
              e.currentTarget.style.color = "var(--alabaster-grey)";
            }}
          >
            Browse Catalog
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/contact"
            className="rounded-xl border px-5 py-3 text-sm font-semibold transition"
            style={{
              borderColor: "var(--dusk-blue)",
              color: "var(--alabaster-grey)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--prussian-blue)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* POPULAR CATEGORIES */}
      <div className="mt-10">
        <PageTitle
          title="Popular categories"
          subtitle="Start with a category, then drill down into subcategories."
          right={
            <Link
              to="/catalog"
              className="rounded-xl border px-4 py-2 text-sm font-semibold transition"
              style={{
                borderColor: "var(--dusk-blue)",
                color: "var(--alabaster-grey)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--prussian-blue)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
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
          <PageTitle
            title = {"why choose us?"}
            subtitle="As a"
          />
      </div>
    </AppShell>
  );
}
