import React from "react";

type PageTitleProps = {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  extraContent?: React.ReactNode;
};

export default function PageTitle({
  title,
  subtitle,
  right,
  extraContent,
}: PageTitleProps) {
  return (
    <div className="relative mb-8 my-5">
      {/* ── Main Header Card ── */}
      <div
        className="relative overflow-hidden rounded-3xl"
        style={{
          background: "var(--ink)",
          border: "1px solid var(--ink-18)",
          boxShadow: "0 18px 45px var(--ink-18)",
        }}
      >
        {/* ── Decorative Shapes (mirrors banner language) ── */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          {/* Large rotated slab — right side */}
          <div
            style={{
              position: "absolute",
              right: "-8%",
              top: "-40%",
              width: "42%",
              height: "180%",
              background: "linear-gradient(135deg, #dbeafe22, #c7ddf71a)",
              transform: "rotate(-12deg)",
              borderRadius: "18px",
            }}
          />
          {/* Thin skewed streak */}
          <div
            style={{
              position: "absolute",
              right: "22%",
              top: 0,
              width: "8px",
              height: "100%",
              background: "rgba(224,225,221,0.10)",
              transform: "skewX(-18deg)",
              borderRadius: "999px",
            }}
          />
          {/* Bottom-right soft circle glow */}
          <div
            style={{
              position: "absolute",
              right: "-40px",
              bottom: "-60px",
              width: "220px",
              height: "220px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, rgba(199,221,247,0.14), transparent 70%)",
            }}
          />
          {/* Top-left accent blob */}
          <div
            style={{
              position: "absolute",
              left: "-20px",
              top: "-20px",
              width: "160px",
              height: "160px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle, rgba(163,207,255,0.09), transparent 70%)",
            }}
          />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 px-8 py-8 lg:py-10">
          {/* Left / Centre block */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow line */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.6rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "28px",
                  height: "2px",
                  borderRadius: "999px",
                  background: "rgba(224,225,221,0.35)",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "28px",
                  height: "2px",
                  borderRadius: "999px",
                  background: "rgba(224,225,221,0.35)",
                }}
              />
            </div>

            {/* Title */}
            <h1
              style={{
                margin: 0,
                fontFamily: "'Moul', system-ui, sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                fontWeight: 900,
                lineHeight: 1.08,
                color: "var(--background-paper)",
                letterSpacing: "0.01em",
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p
                style={{
                  margin: "0.65rem 0 0",
                  fontFamily: "'Funnel Sans', system-ui, sans-serif",
                  fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
                  color: "rgba(224,225,221,0.68)",
                  lineHeight: 1.55,
                  maxWidth: "52ch",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Right slot */}
          {right && <div className="relative z-10 shrink-0">{right}</div>}
        </div>

        {/* ── Bottom gradient rule ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(224,225,221,0.18) 40%, rgba(224,225,221,0.18) 60%, transparent)",
          }}
        />
      </div>

      {/* ── Optional Extra Content ── */}
      {extraContent && (
        <div
          className="px-8 py-5 text-base"
          style={{
            color: "var(--ink-80)",
            fontFamily: "'Funnel Sans', system-ui, sans-serif",
            borderTop: "1px solid var(--ink-12)",
          }}
        >
          {extraContent}
        </div>
      )}
    </div>
  );
}
