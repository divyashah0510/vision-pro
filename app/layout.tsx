import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vision Pro | Dev. Preview",
  description: "Experience the future of development with Vision Pro",
  generator: "Vision Pro Generator",
  authors: [{ name: "Divya Shah", url: "https://github.com/divyashah0510/" }],
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
