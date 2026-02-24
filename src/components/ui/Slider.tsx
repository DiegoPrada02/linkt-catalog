import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { useState } from "react";
import { TextAnimate } from "./text-animate";

type SliderHeroProps = {
  title?: string[];
  subtitle?: string[];
  imageUrl: string[];
  className?: string;
};

function Slider({ title, subtitle, imageUrl, className }: SliderHeroProps) {
  const [sliderIndex, setSliderIndex] = useState(0);

  if (!imageUrl?.length) return null;

  function showPreviousImage() {
    setSliderIndex((index) => (index === 0 ? imageUrl.length - 1 : index - 1));
  }

  function showNextImage() {
    setSliderIndex((index) => (index === imageUrl.length - 1 ? 0 : index + 1));
  }

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className ?? ""}`}
    >
      {/* Track */}
      <div
        style={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${sliderIndex * 100}%)`,
          transition: "transform 300ms ease",
        }}
      >
        {imageUrl.map((url, index) => {
          const altText =
            title && title[index] ? title[index] : `Image ${index + 1}`;

          return (
            <div
              key={`${url}-${index}`}
              style={{ flex: "0 0 100%", height: "100%" }}
            >
              <img
                src={url}
                alt={altText}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "scale-down",
                  display: "block",
                }}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {imageUrl.length > 1 ? (
        <div>
          {/* Controls */}
          <button
            onClick={showPreviousImage}
            aria-label="Previous slide"
            style={{
              position: "absolute",
              left: "0.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              padding: ".35rem",
              borderRadius: "999px",
              background: "rgba(0,0,0,0.35)",
              color: "white",
              backdropFilter: "blur(6px)",
              cursor: "pointer",
            }}
          >
            <ArrowBigLeft />
          </button>

          <button
            onClick={showNextImage}
            aria-label="Next slide"
            style={{
              position: "absolute",
              right: "0.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              padding: ".35rem",
              borderRadius: "999px",
              background: "rgba(0,0,0,0.35)",
              color: "white",
              backdropFilter: "blur(6px)",
              cursor: "pointer",
            }}
          >
            <ArrowBigRight />
          </button>

          {/* Dots */}
          <div
            style={{
              position: "absolute",
              bottom: ".5rem",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: ".25rem",
              zIndex: 10,
            }}
          >
            {imageUrl.map((_, index) => (
              <button
                key={index}
                onClick={() => setSliderIndex(index)}
                aria-label={
                  title?.[index]
                    ? `Go to: ${title[index]}`
                    : `Go to slide ${index + 1}`
                }
                style={{
                  color: "black",
                  opacity: index === sliderIndex ? 1 : 0.65,
                  cursor: "pointer",
                }}
              >
                {index === sliderIndex ? <CircleDot /> : <Circle />}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {/* Optional title/subtitle */}
      {(title?.[sliderIndex] || subtitle?.[sliderIndex]) && (
        <div
          style={{
            position: "absolute",
            insetInline: "1rem",
            bottom: "2.5rem",
            color: "white",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            zIndex: 10,
          }}
        >
          {title?.[sliderIndex] && (
            <TextAnimate animation="fadeIn" by="word" as="h1">
              {title[sliderIndex]}
            </TextAnimate>
          )}
          {subtitle?.[sliderIndex] && (
            <TextAnimate animation="fadeIn" by="word" as="p" delay={0.5}>
              {subtitle[sliderIndex]}
            </TextAnimate>
          )}
        </div>
      )}
    </div>
  );
}

export default Slider;
