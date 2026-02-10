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
    <AppShell>
      <div className="body-style">
        <PageTitle
        title="Contact"
        subtitle="Tell us what you’re looking for and we’ll get back to you."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* CONTACT FORM */}
        <div className="lg:col-span-2">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border p-6 shadow-sm"
            style={panelStyle}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-sm font-medium"
                  htmlFor="name"
                  style={{ color: "var(--alabaster-grey)" }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="mt-2 w-full rounded-xl border px-4 py-2 text-sm outline-none focus:ring-2"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  className="text-sm font-medium"
                  htmlFor="email"
                  style={{ color: "var(--alabaster-grey)" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="mt-2 w-full rounded-xl border px-4 py-2 text-sm outline-none focus:ring-2"
                  style={inputStyle}
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                className="text-sm font-medium"
                htmlFor="message"
                style={{ color: "var(--alabaster-grey)" }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="What can we help you with?"
                className="mt-2 w-full resize-none rounded-xl border px-4 py-2 text-sm outline-none focus:ring-2"
                style={inputStyle}
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="rounded-xl px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  backgroundColor: "var(--dusk-blue)",
                  color: "var(--alabaster-grey)",
                }}
              >
                Send message
              </button>

              {status.type !== "idle" && (
                <span
                  className="text-sm"
                  style={{
                    color:
                      status.type === "success"
                        ? "var(--alabaster-grey)"
                        : status.type === "loading"
                        ? "var(--lavender-grey)"
                        : "#ff6b6b",
                  }}
                >
                  {status.message}
                </span>
              )}
            </div>
          </form>
        </div>

        {/* COMPANY INFO + MAP */}
        <aside className="rounded-2xl border p-6" style={panelStyle}>
          <div
            className="text-sm font-semibold"
            style={{ color: "var(--alabaster-grey)" }}
          >
            Company info
          </div>

          <div className="mt-3 space-y-3 text-sm">
            <div>
              <div
                className="text-xs font-medium"
                style={{ color: "var(--lavender-grey)" }}
              >
                Email
              </div>
              <a
                href={`mailto:${BRAND.email}`}
                className="underline-offset-4 hover:underline"
                style={{ color: "var(--alabaster-grey)" }}
              >
                {BRAND.email}
              </a>
            </div>

            <div>
              <div
                className="text-xs font-medium"
                style={{ color: "var(--lavender-grey)" }}
              >
                Phone
              </div>
              <div style={{ color: "var(--alabaster-grey)" }}>
                {BRAND.phone}
              </div>
            </div>

            <div>
              <div
                className="text-xs font-medium"
                style={{ color: "var(--lavender-grey)" }}
              >
                Address
              </div>
              <div style={{ color: "var(--alabaster-grey)" }}>
                {BRAND.address}
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-6">
            <div
              className="mb-2 text-xs font-medium"
              style={{ color: "var(--lavender-grey)" }}
            >
              Location
            </div>

            <div
              className="overflow-hidden rounded-2xl border"
              style={{
                borderColor: "var(--dusk-blue)",
                backgroundColor: "var(--ink-black)",
              }}
            >
              <iframe
                title="Company location"
                src={mapSrc}
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-xs underline-offset-4 hover:underline"
              style={{ color: "var(--alabaster-grey)" }}
            >
              Open in Google Maps
            </a>
          </div>
        </aside>
      </div>

      </div>      
    </AppShell>
  );
}
