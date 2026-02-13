import { useMemo, useState } from "react";
import { BannerData } from "../data/dictionary";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { SparklesText } from "./ui/sparkles-text";
import Vidimg from "./ui/vidimg";
import { useLanguage } from "../i18n/LanguageProvider";


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
      className="hero-slider"
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Track */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          translate: `${-100 * sliderIndex}%`,
          transition: "translate 400ms ease",
        }}
      >
        {BannerData.map((item, index) => {
          const v = variants[index];

          // ✅ compute strings once
          const eyebrow = t(item.eyebrow as any);
          const title = t(item.title as any);
          const text = t(item.text as any);
          const ctaText = t(item.cta.text as any);

          return (
            <section
              key={index}
              className="banner"
              data-variant={v}
              role="region"
              aria-label={`Promotional banner ${index + 1}`}
              style={{ width: "100%", height: "100%", flex: "0 0 100%" }}
            >
              {/* Content */}
              <div className="banner-content">
                <p className="banner-eyebrow">{eyebrow}</p>

                <h2 className="banner-title">
                  <SparklesText>{title}</SparklesText>
                </h2>

                <p className="banner-text">{text}</p>

                <a className="banner-cta" href={item.cta.href}>
                  {ctaText}
                </a>
              </div>

              {/* Media */}
              <div className="banner-image">
                <Vidimg source={item.img} isVideo={item.isVideo} title={title} />
              </div>

              {/* Shapes */}
              <div className="banner-art" aria-hidden="true">
                <span className="shape a" />
                <span className="shape b" />
                <span className="shape c" />
                <span className="shape d" />
              </div>
            </section>
          );
        })}
      </div>

      {/* Controls */}
      <button onClick={showPreviousImage} className="slider-btn" style={{ left: 0 }}>
        <ArrowBigLeft />
      </button>

      <button onClick={showNextImage} className="slider-btn" style={{ right: 0 }}>
        <ArrowBigRight />
      </button>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
          zIndex: 3,
        }}
      >
        {BannerData.map((_, index) => (
          <button
            key={index}
            className="slider-dot"
            onClick={() => setSliderIndex(index)}
            aria-label={`Show slide ${index + 1}`}
          >
            {index === sliderIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
}
