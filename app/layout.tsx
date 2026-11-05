import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asghar Asad | AI Developer",
  description:
    "Portfolio of Asghar Asad, AI Developer and Agentic AI Engineer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
