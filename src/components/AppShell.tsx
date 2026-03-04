import Footer from "./footer";
import ResponsiveAppBar from "./NavBar";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div
      className="animated-pastel-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        color: "var(--ink)",
        fontFamily: "'Funnel Sans', system-ui, sans-serif",
      }}
    >
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid var(--ink-12)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: "0 2px 16px var(--ink-12)",
        }}
      >
        <ResponsiveAppBar />
      </header>

      {/* ── Main ───────────────────────────────────────────────────────────── */}
      <main
        style={{
          flex: 1,
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          className="body-style"
          style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
        >
          {children}
        </div>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
