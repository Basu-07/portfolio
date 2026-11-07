import type { Metadata } from "next";
import { Aurora } from "./components/ui/aurora";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basu | Developer Portfolio",
  description:
    "Personal portfolio of Basu, a Computer Science student and web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen antialiased">
        <Aurora />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}