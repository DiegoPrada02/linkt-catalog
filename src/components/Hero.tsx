/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronLeft, ChevronRight, Circle, Dot } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BannerData } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";
import { SparklesText } from "./ui/sparkles-text";
import Vidimg from "./ui/vidimg";

const FONT = "'Funnel Sans', system-ui, sans-serif";

export function Hero() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const { t } = useLanguage();
  const total = BannerData.length;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const variants = useMemo(
    () =>
      BannerData.map((item, index) => {
        const v = (item as any).variant as number | undefined;
        return typeof v === "number" ? Math.max(0, Math.min(5, v)) : index % 6;
      }),
    [],
  );

  function showPreviousImage() {
    setSliderIndex((i) => (i === 0 ? total - 1 : i - 1));
  }
  function showNextImage() {
    setSliderIndex((i) => (i === total - 1 ? 0 : i + 1));
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (Math.abs(delta) > 40) delta < 0 ? showNextImage() : showPreviousImage();
    touchStartX.current = null;
  }

  const DESKTOP_HEIGHT = 540;
  const DESKTOP_MEDIA_W = 480;
  const DESKTOP_MEDIA_H = 360;
  const MOBILE_HEIGHT = 500;
  const MOBILE_MEDIA_H = 220;

  return (
    <div
      className="hero-slider relative w-full overflow-hidden rounded-3xl"
      style={{
        height: isMobile ? MOBILE_HEIGHT : DESKTOP_HEIGHT,
        boxShadow: "0 18px 45px var(--ink-18)",
        border: "1px solid var(--ink-12)",
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Slider track ───────────────────────────────────────────────────── */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{
          width: `${total * 100}%`,
          transform: `translateX(-${(100 / total) * sliderIndex}%)`,
        }}
      >
        {BannerData.map((item, index) => {
          const v = variants[index];
          const eyebrow = t(item.eyebrow as any);
          const title = t(item.title as any);
          const text = t(item.text as any);
          const ctaText = t(item.cta.text as any);

          return (
            <section
              key={index}
              className="banner relative shrink-0"
              data-variant={v}
              role="region"
              aria-label={`Promotional banner ${index + 1}`}
              style={{
                width: `${100 / total}%`,
                height: isMobile ? MOBILE_HEIGHT : DESKTOP_HEIGHT,
              }}
            >
              {isMobile ? (
                /* ══════════════ MOBILE — stacked ═══════════════════════════ */
                <div className="relative w-full h-full flex flex-col overflow-hidden">
                  {/* Media */}
                  <div
                    className="relative z-10 w-full shrink-0 overflow-hidden"
                    style={{ height: MOBILE_MEDIA_H }}
                  >
                    <Vidimg
                      source={item.img}
                      isVideo={item.isVideo}
                      title={title}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Text */}
                  <div
                    className="banner-content relative z-10 flex flex-col justify-center px-5 py-5 overflow-hidden"
                    style={{
                      height: MOBILE_HEIGHT - MOBILE_MEDIA_H,
                      gap: "0.6rem",
                    }}
                  >
                    <p
                      className="banner-eyebrow"
                      style={{ fontFamily: FONT, fontSize: "10px" }}
                    >
                      {eyebrow}
                    </p>

                    <h2
                      className="banner-title line-clamp-2"
                      style={{
                        fontFamily: FONT,
                        fontSize: "1.2rem",
                        lineHeight: 1.15,
                      }}
                    >
                      <SparklesText>{title}</SparklesText>
                    </h2>

                    <p
                      className="banner-text line-clamp-2"
                      style={{
                        fontFamily: FONT,
                        fontSize: "0.82rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {text}
                    </p>

                    <Link
                      className="banner-cta self-start"
                      to={item.cta.href}
                      style={{
                        fontFamily: FONT,
                        fontSize: "0.8rem",
                        padding: "0.55rem 1.1rem",
                        borderRadius: "12px",
                        marginTop: "0.25rem",
                      }}
                    >
                      {ctaText}
                      <ArrowIcon small />
                    </Link>
                  </div>

                  <BannerShapes />
                </div>
              ) : (
                /* ══════════════ DESKTOP — side-by-side ═══════════════════ */
                <div
                  className="relative w-full h-full flex items-center justify-between overflow-hidden"
                  style={{ padding: "0 5rem 0 5rem", gap: "3rem" }}
                >
                  {/* Left: Text */}
                  <div
                    className="banner-content relative z-10 flex flex-col justify-center shrink-0"
                    style={{
                      width: `calc(100% - ${DESKTOP_MEDIA_W}px - 3rem)`,
                      maxWidth: 520,
                      height: DESKTOP_MEDIA_H,
                      gap: "1rem",
                    }}
                  >
                    <p className="banner-eyebrow" style={{ fontFamily: FONT }}>
                      {eyebrow}
                    </p>

                    <h2
                      className="banner-title line-clamp-3"
                      style={{ fontFamily: FONT }}
                    >
                      <SparklesText>{title}</SparklesText>
                    </h2>

                    <p
                      className="banner-text line-clamp-3"
                      style={{ fontFamily: FONT }}
                    >
                      {text}
                    </p>

                    <Link
                      className="banner-cta self-start"
                      to={item.cta.href}
                      style={{ fontFamily: FONT, marginTop: "0.25rem" }}
                    >
                      {ctaText}
                      <ArrowIcon />
                    </Link>
                  </div>

                  {/* Right: Media */}
                  <div
                    className="relative z-10 shrink-0 overflow-hidden"
                    style={{
                      width: DESKTOP_MEDIA_W,
                      height: DESKTOP_MEDIA_H,
                      borderRadius: "18px",
                      boxShadow: "0 12px 40px var(--ink-18)",
                      border: "1px solid var(--ink-12)",
                    }}
                  >
                    <Vidimg
                      source={item.img}
                      isVideo={item.isVideo}
                      title={title}
                      className="w-full h-full"
                    />
                  </div>

                  <BannerShapes />
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* ── Prev / Next — desktop only ─────────────────────────────────────── */}
      {!isMobile && (
        <>
          <NavButton
            direction="left"
            onClick={showPreviousImage}
            aria-label="Previous slide"
          />
          <NavButton
            direction="right"
            onClick={showNextImage}
            aria-label="Next slide"
          />
        </>
      )}

      {/* ── Pagination dots ────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5"
        style={{
          padding: "0.4rem 0.75rem",
          borderRadius: "999px",
          background: "rgba(13,27,42,0.22)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(224,225,221,0.12)",
        }}
      >
        {BannerData.map((_, index) => (
          <button
            key={index}
            className="slider-dot group w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            onClick={() => setSliderIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === sliderIndex ? "true" : "false"}
          >
            {index === sliderIndex ? (
              <Dot className="w-5 h-5 fill-current" strokeWidth={3} />
            ) : (
              <Circle
                className="w-2.5 h-2.5 opacity-50 group-hover:opacity-90 transition-opacity duration-300"
                strokeWidth={2}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Small sub-components ──────────────────────────────────────────────────── */

function BannerShapes() {
  return (
    <div className="banner-art" aria-hidden="true">
      <span className="shape a" />
      <span className="shape b" />
      <span className="shape c" />
      <span className="shape d" />
    </div>
  );
}

function ArrowIcon({ small }: { small?: boolean }) {
  const size = small ? 13 : 16;
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      style={{ flexShrink: 0, transition: "transform 0.25s ease" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
}

function NavButton({
  direction,
  onClick,
  ...rest
}: {
  direction: "left" | "right";
  onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      {...rest}
      className="slider-btn absolute z-20 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        [isLeft ? "left" : "right"]: "1.25rem",
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "rgba(13,27,42,0.30)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(224,225,221,0.20)",
        boxShadow: "0 4px 14px var(--ink-18)",
        color: "var(--background-paper)",
        cursor: "pointer",
      }}
    >
      {isLeft ? (
        <ChevronLeft style={{ width: 20, height: 20, strokeWidth: 2.5 }} />
      ) : (
        <ChevronRight style={{ width: 20, height: 20, strokeWidth: 2.5 }} />
      )}
    </button>
  );
}
