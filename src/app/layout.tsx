import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naman Jain — Product Analyst",
  description:
    "Product Analyst portfolio showcasing operational systems, workflow design, and stakeholder-led product delivery.",
  openGraph: {
    title: "Naman Jain — Product Analyst",
    description:
      "Product Analyst portfolio showcasing operational systems, workflow design, and stakeholder-led product delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
