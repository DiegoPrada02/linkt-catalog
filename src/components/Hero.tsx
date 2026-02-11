"use client";

import { useMemo, useState } from "react";
import { BannerData } from "../data/dictionary";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { SparklesText } from "./ui/sparkles-text";
import Vidimg from "./vidimg";


type BannerItem = (typeof BannerData)[number];

export function Hero() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const total = BannerData.length;
  const current: BannerItem | undefined = BannerData[sliderIndex];

  // Stable variants per slide (0..5). Uses item.variant if you add it, otherwise cycles.
  const variants = useMemo(() => {
    return BannerData.map((item, index) => {
      // If you later add item.variant, prefer it:
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

  if (!current) return null;

  return (
      <div
        className="hero-slider"
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          willChange: "translate",
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

          return (
            <section
              key={index}
              className="banner"
              data-variant={v}
              role="region"
              aria-label={`Promotional banner ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                flex: "0 0 100%",
              }}
            >
              {/* Content (left) */}
              <div className="banner-content">
                <p className="banner-eyebrow">{item.eyebrow}</p>
                <h2 className="banner-title"><SparklesText>{item.title}</SparklesText></h2>
                <p className="banner-text">{item.text}</p>

                <a className="banner-cta" href={item.cta.href}>
                  {item.cta.text}
                </a>
              </div>

              {/* Image area (right) */}
              <div className="banner-image z-10">
                <Vidimg
                  source = {item.img}
                  isVideo = {item.isVideo}
                  title = {item.title}
                />
              </div>

              {/* Decorative shapes */}
              <div className="banner-art z-0" aria-hidden="true">
                <span className="shape a"></span>
                <span className="shape b"></span>
                <span className="shape c"></span>
                <span className="shape d"></span>
              </div>
            </section>
          );
        })}
      </div>

      {/* Controls */}
      <button onClick={showPreviousImage} className="slider-btn" style={{ left: 0 }}>
        <ArrowBigLeft/>
      </button>

      <button onClick={showNextImage} className="slider-btn" style={{ right: 0 }}>
        <ArrowBigRight/>
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
