# Overlay Quickstart

This repository is a small Next.js sample app for trying the Overlay Studio
extension in Cursor, VS Code, or Windsurf against a real codebase.

Overlay Studio is a code-first UI design editor that runs inside your editor. It
lets you inspect and prototype components visually while staying connected to
the source files in this workspace.

## What to try

- Open the sample app and use the IDE links to install Overlay Studio in Cursor,
  VS Code, or Windsurf.
- Use the Overlay icon in the Activity Bar, or run `Overlay: Open Editor` from
  the Command Palette.
- Inspect the components registered in `.overlay/components.jsonc`.
- Change component props visually, then compare the result with the React source.

## Install Overlay Studio

- [Install Overlay Studio in VS Code](vscode:extension/overlay-studio.overlay-studio)
- [Install Overlay Studio in Cursor](cursor:extension/overlay-studio.overlay-studio)
- [Install Overlay Studio in Windsurf](windsurf:extension/overlay-studio.overlay-studio)

## Mapped components

Overlay is already configured to recognize these local UI primitives:

| Component | Source                     | Editable props                            |
| --------- | -------------------------- | ----------------------------------------- |
| `Button`  | `components/ui/button.tsx` | `children`, `variant`, `size`, `disabled` |
| `Badge`   | `components/ui/badge.tsx`  | `children`, `variant`                     |
| `Input`   | `components/ui/input.tsx`  | `type`, `placeholder`, `disabled`         |

The mapping lives in `.overlay/components.jsonc`. Commit that file when you want
teammates to use the same Overlay component catalog.

## Run the sample app

Install dependencies, then start the Next.js dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the sample home
page while you experiment in Overlay.

## Project notes

- `app/page.tsx` is the main sample surface for extension testing.
- `components/ui/*` contains the mapped components.
- `app/globals.css` defines the Tailwind and design-token setup Overlay can
  scan and reuse.
- This project uses Next.js `16.2.4`; check `node_modules/next/dist/docs/` for
  framework-specific guidance before changing app structure or APIs.

Learn more about Overlay Studio at [overlay.studio](https://overlay.studio).
Read the docs at [docs.overlay.studio](https://docs.overlay.studio).
