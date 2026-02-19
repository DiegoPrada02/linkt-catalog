/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronLeft, ChevronRight, Circle, Dot } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BannerData } from "../data/dictionary";
import { useLanguage } from "../i18n/LanguageProvider";
import { SparklesText } from "./ui/sparkles-text";
import Vidimg from "./ui/vidimg";

export function Hero() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const { t } = useLanguage();
  const total = BannerData.length;

  const variants = useMemo(() => {
    return BannerData.map((item, index) => {
      const v = (item as any).variant as number | undefined;
      if (typeof v === "number") return Math.max(0, Math.min(5, v));
      return index % 6;
    });
  }, []);

  function showPreviousImage() {
    setSliderIndex((index) => (index === 0 ? total - 1 : index - 1));
  }

  function showNextImage() {
    setSliderIndex((index) => (index === total - 1 ? 0 : index + 1));
  }

  return (
    <div
      className="hero-slider relative w-full overflow-hidden rounded-3xl shadow-2xl pt-10"
      style={{ minHeight: "600px" }}
    >
      {/* Slider Track */}
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${100 * sliderIndex}%)`,
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
              className="banner relative shrink-0 w-full h-full"
              data-variant={v}
              role="region"
              aria-label={`Promotional banner ${index + 1}`}
            >
              <div className="relative w-full h-full flex items-center justify-center px-8 sm:px-12 lg:px-16 py-8">
                {/* Content Container - Left Side */}
                <div className="banner-content relative z-10 flex-1 max-w-xl pr-8">
                  {/* Eyebrow */}
                  <p
                    className="banner-eyebrow"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {eyebrow}
                  </p>

                  {/* Title */}
                  <h2
                    className="banner-title"
                    style={{ fontFamily: "'Sora', 'system-ui', sans-serif" }}
                  >
                    <SparklesText>{title}</SparklesText>
                  </h2>

                  {/* Description */}
                  <p
                    className="banner-text"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {text}
                  </p>

                  {/* CTA Button */}
                  <Link
                    className="banner-cta"
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

                {/* Media Container - Right Side */}
                <div className="relative z-10 flex-1 max-w-xl flex items-center justify-center">
                  <div className="w-full h-auto max-h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Vidimg
                      source={item.img}
                      isVideo={item.isVideo}
                      title={title}
                    />
                  </div>
                </div>

                {/* Decorative Shapes */}
                <div className="banner-art" aria-hidden="true">
                  <span className="shape a" />
                  <span className="shape b" />
                  <span className="shape c" />
                  <span className="shape d" />
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={showPreviousImage}
        className="
          slider-btn absolute left-4 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full
          bg-white/10 backdrop-blur-md border border-white/20
          flex items-center justify-center
          transition-all duration-300
          hover:bg-white/20 hover:scale-110
          active:scale-95
          shadow-lg
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
          hover:bg-white/20 hover:scale-110
          active:scale-95
          shadow-lg
        "
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
      </button>

      {/* Pagination Dots */}
      <div
        className="
          absolute bottom-6 left-1/2 -translate-x-1/2 z-20
          flex items-center gap-2
          px-4 py-2 rounded-full
          bg-black/20 backdrop-blur-md border border-white/10
        "
      >
        {BannerData.map((_, index) => (
          <button
            key={index}
            className="
              slider-dot group
              w-8 h-8 rounded-full
              flex items-center justify-center
              transition-all duration-300
              hover:scale-110
            "
            onClick={() => setSliderIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === sliderIndex ? "true" : "false"}
          >
            {index === sliderIndex ? (
              <Dot
                className="w-6 h-6 fill-current transition-transform duration-300"
                strokeWidth={3}
              />
            ) : (
              <Circle
                className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                strokeWidth={2}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
