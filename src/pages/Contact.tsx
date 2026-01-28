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
      // Replace with your backend endpoint:
      // await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      await new Promise((r) => setTimeout(r, 700));

      setStatus({ type: "success", message: "Thanks! We received your message and will reply soon." });
      e.currentTarget.reset();
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
  }

  return (
    <AppShell>
      <PageTitle title="Contact" subtitle="Tell us what you’re looking for and we’ll get back to you." />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-slate-300"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-slate-300"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-slate-300"
                placeholder="What can we help you with?"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send message
              </button>

              {status.type !== "idle" ? (
                <span
                  className={
                    "text-sm " +
                    (status.type === "success"
                      ? "text-emerald-700"
                      : status.type === "loading"
                      ? "text-slate-600"
                      : "text-rose-700")
                  }
                >
                  {status.message}
                </span>
              ) : null}
            </div>
          </form>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <div className="text-sm font-semibold text-slate-900">Company info</div>

          <div className="mt-3 space-y-2 text-sm text-slate-700">
            <div>
              <div className="text-xs font-medium text-slate-500">Email</div>
              <a className="hover:text-slate-900" href={`mailto:${BRAND.email}`}>
                {BRAND.email}
              </a>
            </div>

            <div>
              <div className="text-xs font-medium text-slate-500">Phone</div>
              <div>{BRAND.phone}</div>
            </div>

            <div>
              <div className="text-xs font-medium text-slate-500">Address</div>
              <div>{BRAND.address}</div>
            </div>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
