
import { Link } from "react-router-dom";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CatalogCard from "../components/CatalogCard";
import { BRAND } from "../data/brand";
import { CATEGORIES } from "../data/catalog";

export default function Home() {
  return (
    <AppShell>
      <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 shadow-sm">
        <h1 className="text-4xl font-semibold tracking-tight">{BRAND.name}</h1>
        <p className="mt-3 max-w-2xl text-slate-600">{BRAND.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/catalog"
            className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Browse Catalog
          </Link>
          <Link
            to="/contact"
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <PageTitle
          title="Popular categories"
          subtitle="Start with a category, then drill down into subcategories."
          right={
            <Link
              to="/catalog"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
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
              image = {c.image}
              href={`/catalog/${c.id}`}
              badge={`${c.subcategories.length} items`}
            />
          ))}
        </Grid>
      </div>
    </AppShell>
  );
}
