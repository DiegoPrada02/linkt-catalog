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
        text-(--primary-main)
      "
    >
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

      <main className="mx-auto z-40 px-4 py-10">
        {children}
      </main>

      <footer className="z-40 border-t border-(--background-paper) bg-(--background-default)">
        {/* footer content */}
      </footer>
    </div>
  );
}
