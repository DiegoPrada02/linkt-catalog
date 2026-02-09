import React from "react";

type PageTitleProps = {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
};

export default function PageTitle({ title, subtitle, right }: PageTitleProps) {
  return (
    <div
      className="
        mb-8
        flex flex-col gap-4
        sm:flex-row sm:items-end sm:justify-between
        rounded-2xl
        border
        p-5
        bg-(--primary-main)
        border-(--primary-light)
      "
    >
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-(--background-default)">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-2 max-w-2xl text-(--background-default)">
            {subtitle}
          </p>
        ) : null}
      </div>

      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}
