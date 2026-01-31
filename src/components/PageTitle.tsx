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
      "
      style={{
        backgroundColor: "var(--prussian-blue)",
        borderColor: "var(--dusk-blue)",
      }}
    >
      <div>
        <h1
          className="text-3xl font-semibold tracking-tight"
          style={{ color: "var(--alabaster-grey)" }}
        >
          {title}
        </h1>

        {subtitle ? (
          <p
            className="mt-2 max-w-2xl"
            style={{ color: "var(--lavender-grey)" }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>

      {right ? (
        <div className="shrink-0">{right}</div>
      ) : null}
    </div>
  );
}
