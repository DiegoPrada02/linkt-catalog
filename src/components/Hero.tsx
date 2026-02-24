/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronLeft, ChevronRight, Circle, Dot } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BannerData } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";
import { SparklesText } from "./ui/sparkles-text";
import Vidimg from "./ui/vidimg";

export function Hero() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const { t } = useLanguage();
  const total = BannerData.length;

  // Track viewport breakpoint (md = 768 px)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const variants = useMemo(() => {
    return BannerData.map((item, index) => {
      const v = (item as any).variant as number | undefined;
      if (typeof v === "number") return Math.max(0, Math.min(5, v));
      return index % 6;
    });
  }, []);

  function showPreviousImage() {
    setSliderIndex((i) => (i === 0 ? total - 1 : i - 1));
  }
  function showNextImage() {
    setSliderIndex((i) => (i === total - 1 ? 0 : i + 1));
  }

  // ── Swipe / touch support ───────────────────────────────────────────────
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

  // ── Fixed dimension tokens ──────────────────────────────────────────────
  const DESKTOP_HEIGHT = 520; // px — slider wrapper on desktop
  const DESKTOP_MEDIA_W = 480; // px — right-side media box width
  const DESKTOP_MEDIA_H = 340; // px — right-side media box height
  const MOBILE_HEIGHT = 500; // px — total slide height on mobile
  const MOBILE_MEDIA_H = 220; // px — image/video block on mobile

  return (
    <div
      className="hero-slider relative w-full overflow-hidden rounded-3xl shadow-2xl"
      style={{ height: isMobile ? MOBILE_HEIGHT : DESKTOP_HEIGHT }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Slider Track ───────────────────────────────────────────────────── */}
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
                /* ════════════ MOBILE — stacked ════════════════════════════ */
                <div className="relative w-full h-full flex flex-col overflow-hidden">
                  {/* Media — top, fixed height */}
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

                  {/* Text — remaining space */}
                  <div
                    className="banner-content relative z-10 flex flex-col justify-center gap-3 px-4 py-4 overflow-hidden"
                    style={{ height: MOBILE_HEIGHT - MOBILE_MEDIA_H }}
                  >
                    <p
                      className="banner-eyebrow text-xs"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {eyebrow}
                    </p>

                    <h2
                      className="banner-title line-clamp-2 text-xl! leading-tight!"
                      style={{ fontFamily: "'Sora', 'system-ui', sans-serif" }}
                    >
                      <SparklesText>{title}</SparklesText>
                    </h2>

                    <p
                      className="banner-text line-clamp-3 text-sm!"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {text}
                    </p>

                    <Link
                      className="banner-cta self-start text-sm! px-4! py-2!"
                      to={item.cta.href}
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {ctaText}
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Decorative shapes */}
                  <div className="banner-art" aria-hidden="true">
                    <span className="shape a" />
                    <span className="shape b" />
                    <span className="shape c" />
                    <span className="shape d" />
                  </div>
                </div>
              ) : (
                /* ════════════ DESKTOP — side-by-side ══════════════════════ */
                <div className="relative w-full h-full flex items-center justify-between px-15 sm:px-15 lg:px-20 gap-8 overflow-hidden">
                  {/* Left: Text */}
                  <div
                    className="banner-content relative z-10 flex flex-col justify-center gap-4 shrink-0 overflow-hidden"
                    style={{
                      width: `calc(100% - ${DESKTOP_MEDIA_W}px - 2rem)`,
                      maxWidth: 520,
                      height: DESKTOP_MEDIA_H,
                    }}
                  >
                    <p
                      className="banner-eyebrow"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {eyebrow}
                    </p>

                    <h2
                      className="banner-title line-clamp-3"
                      style={{ fontFamily: "'Sora', 'system-ui', sans-serif" }}
                    >
                      <SparklesText>{title}</SparklesText>
                    </h2>

                    <p
                      className="banner-text line-clamp-4"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {text}
                    </p>

                    <Link
                      className="banner-cta self-start"
                      to={item.cta.href}
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {ctaText}
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Right: Fixed media box */}
                  <div
                    className="relative z-10 shrink-0 rounded-2xl overflow-hidden shadow-2xl"
                    style={{ width: DESKTOP_MEDIA_W, height: DESKTOP_MEDIA_H }}
                  >
                    <Vidimg
                      source={item.img}
                      isVideo={item.isVideo}
                      title={title}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Decorative shapes */}
                  <div className="banner-art" aria-hidden="true">
                    <span className="shape a" />
                    <span className="shape b" />
                    <span className="shape c" />
                    <span className="shape d" />
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* ── Prev / Next buttons — desktop only (mobile uses swipe) ─────────── */}
      {!isMobile && (
        <>
          <button
            onClick={showPreviousImage}
            className="
              slider-btn absolute left-4 top-1/2 -translate-y-1/2 z-20
              w-12 h-12 rounded-full
              bg-white/10 backdrop-blur-md border border-white/20
              flex items-center justify-center
              transition-all duration-300
              hover:bg-white/20 hover:scale-110 active:scale-95 shadow-lg
            "
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>

          <button
            onClick={showNextImage}
            className="
              slider-btn absolute right-4 top-1/2 -translate-y-1/2 z-20
              w-12 h-12 rounded-full
              bg-white/10 backdrop-blur-md border border-white/20
              flex items-center justify-center
              transition-all duration-300
              hover:bg-white/20 hover:scale-110 active:scale-95 shadow-lg
            "
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* ── Pagination dots ────────────────────────────────────────────────── */}
      <div
        className="
          absolute bottom-4 left-1/2 -translate-x-1/2 z-20
          flex items-center gap-1.5
          px-3 py-1.5 rounded-full
          bg-black/20 backdrop-blur-md border border-white/10
        "
      >
        {BannerData.map((_, index) => (
          <button
            key={index}
            className="
              slider-dot group
              w-7 h-7 rounded-full
              flex items-center justify-center
              transition-all duration-300 hover:scale-110
            "
            onClick={() => setSliderIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === sliderIndex ? "true" : "false"}
          >
            {index === sliderIndex ? (
              <Dot
                className="w-5 h-5 fill-current transition-transform duration-300"
                strokeWidth={3}
              />
            ) : (
              <Circle
                className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                strokeWidth={2}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
