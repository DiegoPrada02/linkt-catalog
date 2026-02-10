
import { Link, Navigate, useParams } from "react-router-dom";
import AppShell from "../components/AppShell";
import { CATEGORIES } from "../data/catalog";

type Params = {
  categoryId: string;
  subcategoryId: string;
};

export default function SubcategoryDetail() {
  const { categoryId, subcategoryId } = useParams<Params>();

  const category = CATEGORIES.find((c) => c.id === categoryId);
  const subcategory = category?.subcategories.find((s) => s.id === subcategoryId);

  if (!category || !subcategory) return <Navigate to="/catalog" replace />;

  const d = subcategory.details;

  return (
    <AppShell>
      <div className="body-style">
             {/* Breadcrumbs */}
      <div className="mb-6 text-sm">
        <Link
          to="/catalog"
          className="hover:underline underline-offset-4"
          style={{ color: "var(--lavender-grey)" }}
        >
          Catalog
        </Link>
        <span style={{ color: "var(--dusk-blue)" }}> / </span>

        <Link
          to={`/catalog/${category.id}`}
          className="hover:underline underline-offset-4"
          style={{ color: "var(--lavender-grey)" }}
        >
          {category.title}
        </Link>
        <span style={{ color: "var(--dusk-blue)" }}> / </span>

        <span style={{ color: "var(--alabaster-grey)", fontWeight: 600 }}>
          {subcategory.title}
        </span>
      </div>

      {/* Main panel */}
      <div
        className="rounded-2xl border p-6"
        style={{
          backgroundColor: "var(--prussian-blue)",
          borderColor: "var(--dusk-blue)",
          color: "var(--alabaster-grey)",
        }}
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Image */}
          <div
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--dusk-blue)", backgroundColor: "var(--ink-black)" }}
          >
            <img
              src={subcategory.image}
              alt={subcategory.title}
              className="h-80 w-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              {subcategory.title}
            </h1>

            <p className="mt-2" style={{ color: "var(--lavender-grey)" }}>
              {subcategory.description}
            </p>

            <p className="mt-4 text-sm" style={{ color: "var(--alabaster-grey)" }}>
              {d.longDescription}
            </p>

            {/* Production time highlight */}
            <div
              className="mt-5 rounded-2xl border p-4"
              style={{
                backgroundColor: "var(--ink-black)",
                borderColor: "var(--dusk-blue)",
              }}
            >
              <div className="text-sm font-semibold">Estimated production time</div>
              <div className="mt-1 text-sm" style={{ color: "var(--lavender-grey)" }}>
                {d.productionTime.minDays}–{d.productionTime.maxDays} business days
                {d.productionTime.note ? ` • ${d.productionTime.note}` : ""}
              </div>
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Specifications</h2>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Spec label="Paper type" value={d.paperType} />
            <Spec label="Paper GSM" value={d.paperGsm ? `${d.paperGsm} gsm` : "—"} />
            <Spec label="Coating" value={d.coating ?? "—"} />
            <Spec
              label="Size (W × H × D)"
              value={`${d.size.widthMm} × ${d.size.heightMm}${d.size.depthMm ? ` × ${d.size.depthMm}` : ""} mm`}
            />
            <Spec
              label="Minimum order"
              value={d.minimumOrderQty ? `${d.minimumOrderQty.toLocaleString()} pcs` : "—"}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={`/catalog/${category.id}`}
              className="rounded-xl border px-4 py-2 text-sm font-semibold transition"
              style={{
                borderColor: "var(--dusk-blue)",
                color: "var(--alabaster-grey)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--ink-black)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Back to {category.title}
            </Link>

            <Link
              to="/contact"
              className="rounded-xl px-4 py-2 text-sm font-semibold transition"
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
              Request a quote
            </Link>
          </div>
        </div>
      </div>
      </div>
    </AppShell>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-2xl border p-4"
      style={{
        backgroundColor: "var(--ink-black)",
        borderColor: "var(--dusk-blue)",
      }}
    >
      <div className="text-xs font-medium" style={{ color: "var(--lavender-grey)" }}>
        {label}
      </div>
      <div className="mt-1 text-sm" style={{ color: "var(--alabaster-grey)" }}>
        {value}
      </div>
    </div>
  );
}
