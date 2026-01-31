import React from "react";
import { BRAND } from "../data/brand";
import ResponsiveAppBar from "./NavBar";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-(--alabaster-grey) text-(--prussian-blue)">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-(--dusk-blue) text-(--alabaster-grey) backdrop-blur">

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
