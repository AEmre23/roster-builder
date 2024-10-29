import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roster Builder",
  description: "Roster Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  );
}
