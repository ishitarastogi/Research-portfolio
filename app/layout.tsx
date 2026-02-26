import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishita Rastogi",
  description:
    "Research Analyst exploring crypto payments, stablecoins & Solana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=Outfit:wght@300;400;500;600&family=Fira+Code:wght@700&family=Antic&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
