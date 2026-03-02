import {
  useCallback,
  useEffect,
  useRef,
  type JSX,
  type RefObject,
} from "react";
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

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
interface ScrollRevealOptions extends IntersectionObserverInit {
  delay?: number;
}

function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {},
): RefObject<T> {
  const ref = useRef<T>(null) as RefObject<T>;
  const { delay = 0, ...observerOptions } = options;

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          setTimeout(() => {
            el.dataset.visible = "true";
          }, delay);
          observer.unobserve(el);
        }
      });
    },
    [delay],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
      rootMargin: "0px 0px -60px 0px",
      ...observerOptions,
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersect, observerOptions]);

  return ref;
}

// ─── Card delays ─────────────────────────────────────────────────────────────
const CARD_DELAYS: readonly string[] = [
  "0ms",
  "100ms",
  "200ms",
  "300ms",
] as const;

// ─── Component ───────────────────────────────────────────────────────────────
export default function Home(): JSX.Element {
  const { t } = useLanguage();
  const popular = pageTitles[0];
  const faq = pageTitles[4];
  const timeline = pageTitles[5];
  const brands = pageTitles[6];

  const popularRef = useScrollReveal<HTMLElement>();
  const brandsRef = useScrollReveal<HTMLElement>({ delay: 80 });
  const aboutRef = useScrollReveal<HTMLElement>({ delay: 60 });
  const timelineRef = useScrollReveal<HTMLElement>({ delay: 60 });
  const faqRef = useScrollReveal<HTMLElement>({ delay: 60 });

  return (
    <AppShell>
      {/* Hero Section */}
      <Hero />

      <style>{`
        /* ── Base reveal state ── */
        .reveal {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition:
            opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        /* ── Visible state (driven by data-visible="true") ── */
        .reveal[data-visible="true"] {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ── Card stagger wrapper ── */
        .card-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .card-reveal[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Slide-in from left for About ── */
        .reveal-left {
          opacity: 0;
          transform: translateX(-32px);
          transition:
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal-left[data-visible="true"] {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Respect reduced-motion preference ── */
        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .card-reveal,
          .reveal-left {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="body-style">
        <div className="mx-auto flex flex-col">
          {/* Popular Products */}
          <section ref={popularRef} className="reveal mt-8 sm:mt-12">
            <PageTitle
              title={t(popular.title)}
              subtitle={t(popular.subtitle)}
              right={
                <Link
                  to="/catalog"
                  className="
                    inline-flex items-center gap-2
                    rounded-2xl px-6 py-3 text-sm font-bold
                    bg-(--background-paper) text-(--ink)
                    shadow-lg
                    hover:opacity-90 hover:scale-105
                    active:scale-100
                    transition-all duration-300
                  "
                >
                  {popular.rightText != null
                    ? t(popular.rightText)
                    : "View all"}
                </Link>
              }
              extraContent={
                <Grid>
                  {CATEGORIES.slice(0, 4).map((c, i) => (
                    <CardReveal key={c.id} delay={CARD_DELAYS[i] ?? "0ms"}>
                      <CatalogCard
                        title={t(c.title)}
                        description={t(c.description)}
                        image={c.image}
                        href={`/catalog/${c.id}`}
                        badge={`${c.subcategories.length} ${t({
                          en: "items",
                          es: "artículos",
                        })}`}
                      />
                    </CardReveal>
                  ))}
                </Grid>
              }
            />
          </section>

          {/* Brands */}
          <section ref={brandsRef} className="reveal mt-20 sm:mt-24">
            <PageTitle
              title={t(brands.title)}
              subtitle={t(brands.subtitle)}
              extraContent={<BrandsScrollBand />}
            />
          </section>

          {/* About */}
          <section
            ref={aboutRef}
            id="about-us"
            className="reveal-left mt-20 sm:mt-28"
          >
            <About />
          </section>

          {/* Timeline */}
          <section ref={timelineRef} className="reveal mt-20 sm:mt-28">
            <PageTitle
              title={t(timeline.title)}
              subtitle={t(timeline.subtitle)}
              extraContent={<ProductionTimeline />}
            />
          </section>

          {/* FAQ */}
          <section
            ref={faqRef}
            className="reveal mt-20 sm:mt-28 mb-16 sm:mb-20"
          >
            <PageTitle
              title={t(faq.title)}
              subtitle={t(faq.subtitle)}
              right={
                <Link
                  to="/contact"
                  className="
                    inline-flex items-center gap-2
                    rounded-2xl px-6 py-3 text-sm font-bold
                    bg-(--background-paper) text-(--ink)
                    shadow-lg
                    hover:opacity-90 hover:scale-105
                    active:scale-100
                    transition-all duration-300
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

// ─── CardReveal sub-component ─────────────────────────────────────────────────
interface CardRevealProps {
  children: React.ReactNode;
  delay: string;
}

function CardReveal({ children, delay }: CardRevealProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            setTimeout(
              () => {
                target.dataset.visible = "true";
              },
              parseInt(delay, 10),
            );
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="card-reveal" style={{ transitionDelay: delay }}>
      {children}
    </div>
  );
}
