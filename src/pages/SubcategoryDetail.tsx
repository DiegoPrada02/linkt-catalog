import { Link, Navigate, useParams } from "react-router-dom";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import { CATEGORIES } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";
import { Lens } from "../components/ui/lens";

type Params = { categoryId: string; subcategoryId: string };

const labels = {
  catalog: { en: "Catalog", es: "Catálogo" },
  backToCatalog: { en: "Back to catalog", es: "Volver al catálogo" },
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

  const sizeText = `${d.size.widthMm} × ${d.size.heightMm}${
    d.size.depthMm ? ` × ${d.size.depthMm}` : ""
  } mm`;

  const prodNote = d.productionTime.note ? ` • ${t(d.productionTime.note)}` : "";

  return (
    <div className="rounded-3xl bg-(--background-default)/80 backdrop-blur-md shadow-xl">
      <AppShell>
        <div className="body-style">
          <PageTitle
            title={t(category.title)}
            subtitle={t(subcategory.title)}
            right={
              <Link
                to="/catalog"
                className="
                  rounded-2xl border border-(--primary-light)
                  px-4 py-2 text-sm font-extrabold
                  bg-white/70 text-(--ink)
                  hover:bg-white transition
                "
              >
                {t(labels.backToCatalog)}
              </Link>
            }
            extraContent={
              <div className="mt-6">
                {/* HERO CARD */}
                <div
                  className="
                    overflow-hidden rounded-3xl border border-(--primary-light)
                    bg-linear-to-r from-(--ink) to-[rgba(1,38,86,0.85)]
                    text-(--background-default)
                    shadow-xl
                  "
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Media - with lighter background */}
                    <div className="relative lg:col-span-2 bg-linear-to-br from-blue-100 via-blue-50 to-slate-100 flex items-center justify-center p-4 lg:p-6 min-h-112 lg:min-h-full">
                      <Lens zoomFactor={2}
                          lensSize={150}
                          isStatic={false}
                          ariaLabel="Zoom Area" 
                      >
                         <img
                          src={subcategory.image}
                          alt={t(subcategory.title)}
                          className="max-h-full lg:max-h-144 w-auto max-w-full object-contain rounded-xl shadow-lg"
                          />
                      </Lens>

                      {/* Floating chip */}
                      <div className="absolute left-4 top-4 rounded-2xl border border-white/15 bg-black/25 px-3 py-2 backdrop-blur">
                        <div className="text-[11px] font-extrabold uppercase tracking-wide text-white/80">
                          {t(labels.prodTime)}
                        </div>
                        <div className="mt-0.5 text-sm font-semibold text-white">
                          {d.productionTime.minDays}–{d.productionTime.maxDays} {t(labels.businessDays)}
                          {prodNote}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 lg:col-span-3">
                      <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-md">
                        <p className="text-sm font-semibold text-white/80">
                          {t(category.title)} • {t(subcategory.title)}
                        </p>

                        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white">
                          {t(subcategory.title)}
                        </h1>

                        <p className="mt-3 text-sm leading-relaxed text-white/80">
                          {t(subcategory.description)}
                        </p>

                        <p className="mt-4 text-sm leading-relaxed text-white/85">
                          {t(d.longDescription)}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <Link
                            to="/contact"
                            className="
                              rounded-2xl px-5 py-3
                              text-sm font-extrabold
                              bg-(--secondary-main) text-white
                              hover:opacity-90 transition
                            "
                          >
                            {t(labels.requestQuote)}
                          </Link>

                          <Link
                            to={`/catalog/${category.id}`}
                            className="
                              rounded-2xl border border-white/20
                              bg-white/10 px-5 py-3
                              text-sm font-extrabold text-white
                              hover:bg-white/15 transition
                            "
                          >
                            {t(labels.catalog)}
                          </Link>
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="mt-6 rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-md">
                        <h2 className="text-base font-extrabold text-white">{t(labels.specs)}</h2>

                        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                          <SpecDark label={t(labels.paperType)} value={t(d.paperType)} />
                          <SpecDark label={t(labels.paperGsm)} value={`${d.paperGsm} gsm`} />
                          <SpecDark label={t(labels.coating)} value={d.coating ? t(d.coating) : "—"} />
                          <SpecDark label={t(labels.size)} value={sizeText} />
                          <SpecDark label={t(labels.printing)} value={t(d.printing)} />
                          <SpecDark
                            label={t(labels.minOrder)}
                            value={`${d.minimumOrderQty.toLocaleString()} pcs`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom spacing */}
                <div className="h-2" />
              </div>
            }
          />
        </div>
      </AppShell>
    </div>
  );
}

function SpecDark({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
      <div className="text-[11px] font-extrabold uppercase tracking-wide text-white/70">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}