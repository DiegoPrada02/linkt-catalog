import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { TextAnimate } from "./text-animate";

type SliderHeroProps = {
  title?: string[];
  subtitle?: string[];
  imageUrl: string[];
};

function Slider({ title, subtitle, imageUrl }: SliderHeroProps) {
  const [sliderIndex, setSliderIndex] = useState(0);

  function showPreviousImage() {
    setSliderIndex((index) => {
      if (index === 0) return imageUrl.length - 1;
      return index - 1;
    });
  }

  function showNextImage() {
    setSliderIndex((index) => {
      if (index === imageUrl.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <div style={{ width: "100%", aspectRatio: "16 / 5",position: "relative", overflow: "hidden"}}>
      <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
        {imageUrl.map((url, index) => {
          const altText =
            title && title[index] ? title[index] : `Image ${index + 1}`;

          return (
            <img
              key={url}
              src={url}
              alt={altText}
              className="slider-image"
              style={{ translate: `${-100 * sliderIndex}%` }}
            />
          );
        })}
      </div>

      <button onClick={showPreviousImage} className="slider-btn" style={{ left: 0 }}>
        <ArrowBigLeft />
      </button>

      <button onClick={showNextImage} className="slider-btn" style={{ right: 0 }}>
        <ArrowBigRight />
      </button>

      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {imageUrl.map((_, index) => (
          <button
            key={index}
            className="slider-dot"
            onClick={() => setSliderIndex(index)}
            aria-label={title?.[index] ? `Go to: ${title[index]}` : `Go to slide ${index + 1}`}
          >
            {index === sliderIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>

      {/* Optional: render title/subtitle for current slide */}
      {(title?.[sliderIndex] || subtitle?.[sliderIndex]) && (
        <div
          style={{
            position: "absolute",
            insetInline: "1rem",
            bottom: "2.5rem",
            color: "white",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          {title?.[sliderIndex] && (
            <TextAnimate animation="fadeIn" by="word" as="h1">
              {title[sliderIndex]}
            </TextAnimate>
          )}
          {subtitle?.[sliderIndex] && (
            <TextAnimate animation="fadeIn" by="word" as="p" delay={.5} className="">
              {subtitle[sliderIndex]}
            </TextAnimate>
          )}
        </div>
      )}
    </div>
  );
}

export default Slider;
