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
    <div
      className="relative mb-8"
      style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
    >
      {/* Header Section */}
      <div
        className="
          relative
          px-8 py-8
          text-center
          text-(--ink)
          border-b-3
          flex
          flex-col
          items-center
          gap-4"
      >
        {/* Decorative geometric accent*/}
        <div
          className="
            absolute -bottom-6 -left-6
            w-340 h-32
            rounded-full
            bg-linear-to-r from-[rgba(0,21,255,0.47)]/10 to-(--secondary-main)/20
            blur-xl
            pointer-events-none
          "
        />

        {/* Content */}
        <div className="relative z-10 flex-1">
          <h1
            className="
              text-4xl md:text-5xl
              mb-2
              font-display
            "
            style={{ fontFamily: "'Moul', 'system-ui', sans-serif" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="
                text-lg md:text-xl
                text-(--ink-80)
                mb-10
              "
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Content */}
        {right && <div className="relative z-10 shrink-0">{right}</div>}

        {/* Subtle bottom border gradient */}
        <div
          className="
            absolute bottom-0 left-0 right-0 h-px
            bg-linear-to-r from-transparent via-(--background-default)/30 to-transparent
          "
        />
      </div>

      {/* Optional Extra Content */}
      {extraContent && (
        <div className="px-8 py-6 text-base text-(--ink)">{extraContent}</div>
      )}
    </div>
  );
}
