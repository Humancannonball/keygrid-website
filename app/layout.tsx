import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KeyGrid - Digital Car Keys for EV Charging Management",
  description: "Transform fleet charging with KeyGrid's integrated digital key and EV charging platform. Unlock cables, transfer between vehicles, and optimize station utilization.",
  keywords: ["digital car keys", "EV charging management", "fleet charging", "smart charging", "electric vehicle infrastructure"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "KeyGrid - Digital Car Keys for EV Charging Management",
    description: "Transform fleet charging with KeyGrid's integrated digital key and EV charging platform.",
    url: "https://keygrid.cloud",
    siteName: "KeyGrid",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KeyGrid - Digital Car Keys for EV Charging Management",
    description: "Transform fleet charging with KeyGrid's integrated digital key and EV charging platform.",
    images: ["/logo.png"],
  },
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
