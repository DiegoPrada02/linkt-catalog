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
        my-5
        rounded-3xl
        bg-white/80
        backdrop-blur-md
        text-(--ink)
        shadow-lg
      "
    >
      {/* Header */}
      <div
        className="
          flex flex-col gap-4
          sm:flex-row sm:items-end sm:justify-between
          rounded-t-3xl
          border-b
          border-(--primary-light)
          px-6 py-5
          bg-linear-to-r
          from-(--ink)
          to-[rgba(1,38,86,0.85)]
          text-(--background-default)
        "
      >
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-2 max-w-2xl text-sm opacity-90">
              {subtitle}
            </p>
          )}
        </div>

        {right && <div className="shrink-0">{right}</div>}
      </div>

      {/* Optional extra content */}
      {extraContent && (
        <div className="px-6 py-5 text-md text-(--ink)">
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
