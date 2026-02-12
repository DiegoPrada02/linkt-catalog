import { Link, Navigate, useParams } from "react-router-dom";
import AppShell from "../components/AppShell";
import { CATEGORIES } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";

type Params = { categoryId: string; subcategoryId: string };

const labels = {
  catalog: { en: "Catalog", es: "Catálogo" },
  backTo: { en: "Back to", es: "Volver a" },
  requestQuote: { en: "Request a quote", es: "Solicitar cotización" },
  specs: { en: "Specifications", es: "Especificaciones" },
  prodTime: { en: "Estimated production time", es: "Tiempo estimado de producción" },
  businessDays: { en: "business days", es: "días hábiles" },

  paperType: { en: "Paper type", es: "Tipo de papel" },
  paperGsm: { en: "Paper GSM", es: "Gramaje (GSM)" },
  coating: { en: "Coating", es: "Recubrimiento" },
  size: { en: "Size (W × H × D)", es: "Tamaño (A × H × P)" },
  printing: { en: "Printing", es: "Impresión" },
  minOrder: { en: "Minimum order", es: "Pedido mínimo" },
};

export default function SubcategoryDetail() {
  const { t } = useLanguage();
  const { categoryId, subcategoryId } = useParams<Params>();

  const category = CATEGORIES.find((c) => c.id === categoryId);
  const subcategory = category?.subcategories.find((s) => s.id === subcategoryId);

  if (!category || !subcategory) return <Navigate to="/catalog" replace />;

  const d = subcategory.details;

  const sizeText = `${d.size.widthMm} × ${d.size.heightMm}${d.size.depthMm ? ` × ${d.size.depthMm}` : ""} mm`;
  const prodNote = d.productionTime.note ? ` • ${t(d.productionTime.note)}` : "";

  return (
    <div className="rounded-3xl bg-(--background-default)/80 backdrop-blur-md shadow-xl">
      <AppShell>
        <div className="body-style">
          {/* Breadcrumbs */}
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[rgba(13,27,42,0.70)]">
            <Link to="/catalog" className="hover:underline underline-offset-4">
              {t(labels.catalog)}
            </Link>
            <span className="opacity-50">/</span>
            <Link to={`/catalog/${category.id}`} className="hover:underline underline-offset-4">
              {t(category.title)}
            </Link>
            <span className="opacity-50">/</span>
            <span className="font-extrabold text-(--ink)">{t(subcategory.title)}</span>
          </div>

          {/* Main card */}
          <div className="overflow-hidden rounded-3xl border border-[rgba(13,27,42,0.14)] bg-(--ink)">
            {/* Top hero */}
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
              {/* Image */}
              <div className="relative">
                <img
                  src={subcategory.image}
                  alt={t(subcategory.title)}
                  className="h-72 w-full object-cover lg:h-full"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent" />
              </div>

              {/* Title + summary */}
              <div className="p-6 sm:p-8">
              <div className="bg-(--background-paper) h-auto rounded-2xl p-2">
                     <h1 className="text-3xl font-extrabold tracking-tight text-(--ink)">
                  {t(subcategory.title)}
                </h1>
                <p className="mt-2 text-[rgba(13,27,42,0.72)]">
                  {t(subcategory.description)}
                </p>

                <p className="mt-5 leading-relaxed text-[rgba(13,27,42,0.78)]">
                  {t(d.longDescription)}
                </p>
                </div>
                {/* Production time highlight */}
                <div className="mt-6 rounded-2xl border border-[rgba(13,27,42,0.14)] bg-(--ink) p-4 text-(--background-paper)">
                  <div className="text-sm font-extrabold">
                    {t(labels.prodTime)}
                  </div>
                  <div className="mt-1 text-sm opacity-90">
                    {d.productionTime.minDays}–{d.productionTime.maxDays} {t(labels.businessDays)}
                    {prodNote}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to={`/catalog/${category.id}`}
                    className="
                      rounded-2xl border border-[rgba(13,27,42,0.18)]
                      bg-white/70 px-4 py-2
                      text-sm font-extrabold text-(--ink)
                      hover:bg-white
                      transition
                    "
                  >
                    {t(labels.backTo)} {t(category.title)}
                  </Link>

                  <Link
                    to="/contact"
                    className="
                      rounded-2xl px-4 py-2
                      text-sm font-extrabold
                      bg-(--secondary-main) text-white
                      hover:opacity-90
                      transition
                    "
                  >
                    {t(labels.requestQuote)}
                  </Link>
                  </div>
              </div>
            </div>

            {/* Specs */}
            <div className="border-t border-[rgba(13,27,42,0.10)] p-6 sm:p-8">
              <h2 className="text-lg font-extrabold text-(--ink)">{t(labels.specs)}</h2>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <Spec label={t(labels.paperType)} value={t(d.paperType)} />
                <Spec label={t(labels.paperGsm)} value={`${d.paperGsm} gsm`} />
                <Spec label={t(labels.coating)} value={d.coating ? t(d.coating) : "—"} />
                <Spec label={t(labels.size)} value={sizeText} />
                <Spec label={t(labels.printing)} value={t(d.printing)} />
                <Spec label={t(labels.minOrder)} value={`${d.minimumOrderQty.toLocaleString()} pcs`} />
              </div>
            </div>
          </div>
        </div>
      </AppShell>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[rgba(13,27,42,0.14)] bg-white/70 p-4">
      <div className="text-xs font-extrabold uppercase tracking-wide text-[rgba(13,27,42,0.55)]">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-(--ink)">
        {value}
      </div>
    </div>
  );
}
