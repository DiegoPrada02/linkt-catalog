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
        text-center
        px-8 py-6
        bg-(--ink)        backdrop-blur-md
        rounded-3xl
        shadow-xl
        flex flex-col lg:flex-col items-center justify-between
        gap-6
        my-5
        text-(--background-paper)
      "
      >
        {/* Decorative geometric accent*/}
        <div
          className="
            absolute -left-6
            w-360 h-10
            rounded-full
            blur-xl
            pointer-events-none
          "
        />

        {/* Content */}
        <div className="relative z-10 flex-1">
          <h1
            className="
              text-4xl md:text-5xl
              my-5
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
