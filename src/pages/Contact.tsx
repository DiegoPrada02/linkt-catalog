import React, { useState } from "react";
import AppShell from "../components/AppShell";
import PageTitle from "../components/PageTitle";
import { BRAND } from "../data/brand";

type Status =
  | { type: "idle"; message: "" }
  | { type: "loading"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      // Replace with your backend endpoint
      await new Promise((r) => setTimeout(r, 700));

      setStatus({
        type: "success",
        message: "Thanks! We received your message and will reply soon.",
      });
      e.currentTarget.reset();
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
  }

  // Google Maps embed (no API key required)
  const mapQuery = encodeURIComponent(BRAND.address);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  const panelStyle: React.CSSProperties = {
    backgroundColor: "var(--prussian-blue)",
    borderColor: "var(--dusk-blue)",
    color: "var(--alabaster-grey)",
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "var(--ink-black)",
    borderColor: "var(--dusk-blue)",
    color: "var(--alabaster-grey)",
  };

  return (
    <div className="rounded-3xl bg-(--background-default)/80 backdrop-blur-md shadow-xl">
      <AppShell>
      <div className="body-style">
        <div className="max-w-4xl mx-auto py-16"></div>
        </div>
      </AppShell>
    </div>
  );
}
