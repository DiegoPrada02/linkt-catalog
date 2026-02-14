import Footer from "./footer";
import ResponsiveAppBar from "./NavBar";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div
      className="
        min-h-screen
        animated-pastel-bg
        text-(--ink)
        flex flex-col
      "
    >
      {/* Header */}
      <header
        className="
          sticky top-0 z-50
          border-b border-(--ink-14)
          backdrop-blur-md
          shadow-sm
        "
      >
        <ResponsiveAppBar />
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <div className="mx-auto px-4 py-8 sm:py-12">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
}