import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blogger Application",
  description: "A safe space to share your views",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
