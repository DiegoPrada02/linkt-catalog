import React from "react";

type GridProps = {
  children: React.ReactNode;
};

export default function Grid({ children }: GridProps) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{children}</div>;
}
