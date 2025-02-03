import type { Metadata } from "next";

import "./global.css";

export const metadata: Metadata = {
  title: "Ma Sharp's Home Cooking",
  description:
    "Ma Sharp shares some of her delicious recipies which you too can follow at home.",
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
