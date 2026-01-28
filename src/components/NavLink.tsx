import React from "react";
import { Link } from "react-router-dom";

type NavLinkProps = {
  to: string;
  active: boolean;
  children: React.ReactNode;
};

export default function NavLink({ to, active, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={
        "rounded-2xl px-3 py-2 text-md font-bold transition " +
        (active ? "bg-(--prussian-blue) text-(--alabaster-grey)" : "text-(--alabaster-grey) hover:bg-(--lavender-grey)")
      }
    >
      {children}
    </Link>
  );
}
