import React from "react";

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Grid({ children, className = "" }: GridProps) {
  return (
    <div 
      className={`
        grid grid-cols-1 gap-6
        sm:grid-cols-2 sm:gap-6
        lg:grid-cols-3 lg:gap-8
        xl:grid-cols-4 xl:gap-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}