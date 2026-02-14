import React from "react";
import { BorderBeam } from "./ui/border-beam";

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
      className="
        relative overflow-hidden
        mt-10
        rounded-3xl
        bg-white/80
        backdrop-blur-md
        text-(--ink)
        shadow-[0_8px_40px_rgba(0,0,0,0.12)]
        transition-shadow duration-500
        hover:shadow-[0_12px_50px_rgba(0,0,0,0.16)]
      "
    >
      {/* Header Section */}
      <div
        className="
          relative
          flex flex-col gap-4
          sm:flex-row sm:items-end sm:justify-between
          rounded-t-3xl
          px-8 py-6
          bg-linear-to-r
          from-(--ink)
          to-[rgba(1,38,86,0.85)]
          text-(--background-default)
          overflow-hidden
        "
      >
        {/* Decorative geometric accent - top right */}
        <div
          className="
            absolute -top-8 -right-8
            w-40 h-40
            rounded-full
            bg-white/5
            blur-2xl
            pointer-events-none
          "
        />
        
        {/* Decorative geometric accent - bottom left */}
        <div
          className="
            absolute -bottom-6 -left-6
            w-32 h-32
            rounded-full
            bg-white/5
            blur-xl
            pointer-events-none
          "
        />

        {/* Content */}
        <div className="relative z-10 flex-1">
          <h1 
            className="
              text-3xl sm:text-4xl font-bold tracking-tight
              text-(--background-default)
              drop-shadow-sm
            "
            style={{ fontFamily: "'Sora', 'system-ui', sans-serif" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p 
              className="
                mt-2.5 max-w-2xl 
                text-sm sm:text-base 
                text-(--background-default)/85
                leading-relaxed
              "
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Content */}
        {right && (
          <div className="relative z-10 shrink-0">
            {right}
          </div>
        )}

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
        <div className="px-8 py-6 text-base text-(--ink)">
          {extraContent}
        </div>
      )}

      {/* MagicUI BorderBeam */}
      <BorderBeam
        size={120}
        duration={8}
        className="pointer-events-none"
      />
    </div>
  );
}