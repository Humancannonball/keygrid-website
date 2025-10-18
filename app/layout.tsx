import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KeyGrid - Digital Car Keys for EV Charging Management",
  description: "Transform fleet charging with KeyGrid's integrated digital key and EV charging platform. Unlock cables, transfer between vehicles, and optimize station utilization.",
  keywords: ["digital car keys", "EV charging management", "fleet charging", "smart charging", "electric vehicle infrastructure"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
