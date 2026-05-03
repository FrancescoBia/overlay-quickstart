import Image from "next/image";

const ideLinks = [
  {
    name: "VS Code",
    href: "vscode:extension/overlay-studio.overlay-studio",
    icon: "/ides/vscode.png",
  },
  {
    name: "Cursor",
    href: "cursor:extension/overlay-studio.overlay-studio",
    icon: "/ides/cursor.png",
  },
  {
    name: "Windsurf",
    href: "windsurf:extension/overlay-studio.overlay-studio",
    icon: "/ides/windsurf.png",
  },
];

const resourceLinks = [
  {
    label: "Website",
    href: "https://overlay.studio",
    icon: "/globe.svg",
  },
  {
    label: "Docs",
    href: "https://docs.overlay.studio",
    icon: "/file.svg",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-6 py-16 text-foreground">
      <section className="w-full max-w-2xl rounded-lg border border-border bg-background p-6 shadow-sm sm:p-8">
        <p className="text-sm font-medium text-primary">Overlay Quickstart</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-normal">
          Open Overlay in your IDE
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Install Overlay Studio in your editor, then use this sample Next.js
          app to try visual component editing against a real codebase.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {ideLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-36 flex-col items-center justify-center rounded-lg border border-border bg-card p-5 text-center text-card-foreground transition-colors hover:bg-accent"
            >
              <Image
                src={link.icon}
                alt=""
                width={48}
                height={48}
                className="mb-4 size-12"
              />
              <span className="text-base font-semibold">{link.name}</span>
              <span className="mt-1 text-xs text-muted-foreground">
                Install extension
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-5">
          <p className="text-sm font-medium text-muted-foreground">
            Learn more
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {resourceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                <Image
                  src={link.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 dark:invert"
                />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
