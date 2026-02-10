import React from "react";
import { BRAND } from "../data/brand";
import ResponsiveAppBar from "./NavBar";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-(--background-default) text-(--primary-main)">
      <header
        className="
          sticky top-0 z-50
          border-b border-(--background-paper)
          bg-(--primary-main)
          text-(--background-default)
          backdrop-blur
        "
      >
        <ResponsiveAppBar />
      </header>

      <main
        className="
          mx-auto z-50
          px-4 py-10
          bg-(--background-default)
        "
      >
        {children}
      </main>

      <footer className="z-50 border-t border-(--background-paper)">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[rgba(2,62,138,0.64)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-bold">
            <div>
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                className="hover:text-(--primary-main)"
                href={`mailto:${BRAND.email}`}
              >
                {BRAND.email}
              </a>
              <span className="text-(--primary-light)">•</span>
              <span>{BRAND.phone}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
