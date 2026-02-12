import React from "react";
import { cn } from "../../lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: number; // seconds
};

export function Marquee({
  children,
  className,
  reverse,
  pauseOnHover,
  duration = 20,
}: MarqueeProps) {
  return (
    <div
      className={cn("marquee", pauseOnHover && "marquee--pause", className)}
      style={
        {
          ["--marquee-duration" as any]: `${duration}s`,
          ["--marquee-direction" as any]: reverse ? "reverse" : "normal",
        } as React.CSSProperties
      }
    >
      <div className="marquee__track">
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
