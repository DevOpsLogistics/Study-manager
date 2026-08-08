import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpaceVibe Deck — a native macOS terminal for AI agent CLIs",
  description:
    "SpaceVibe Deck is a native macOS terminal built to launch, watch, and steer AI coding agents in parallel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
