
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basu | Portfolio",
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
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
