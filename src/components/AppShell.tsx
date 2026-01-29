import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import { BRAND } from "../data/brand";
import ResponsiveAppBar from "./Navbar";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-(--alabaster-grey) text-(--prussian-blue)">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-(--dusk-blue) text-(--alabaster-grey) backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-20 w-20 rounded-2xl text-center overflow-hidden items-center">
              <img src="Linkt-logo.png" alt="Linkt Systems LLC Logo" className="h-auto w-auto" /> {/* add here the linkt Systems logo*/ }
            </div>
            <div className="leading-tight">
              <div className="text-2xl font-semibold">{BRAND.name}</div>
            </div>
          </Link>
          <nav className="flex items-center gap-2">
            <NavLink to="/" active={isActive("/")}>
              Home
            </NavLink>
            <NavLink to="/catalog" active={isActive("/catalog")}>
              Catalog
            </NavLink>
            <NavLink to="/contact" active={isActive("/contact")}>
              Contact
            </NavLink>
          </nav>
        </div>
        <ResponsiveAppBar/>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a className="hover:text-slate-900" href={`mailto:${BRAND.email}`}>
                {BRAND.email}
              </a>
              <span className="text-slate-300">•</span>
              <span>{BRAND.phone}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
