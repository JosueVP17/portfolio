import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://josuevp-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Josue Valenzuela | AI/ML Engineer",
  description:
    "AI/ML Engineer and Computer Systems Engineering student at Universidad de Guanajuato. Computer vision, deep learning, and RAG systems.",
  openGraph: {
    title: "Josue Valenzuela | AI/ML Engineer",
    description:
      "AI/ML Engineer — Computer Vision, Deep Learning & RAG Systems",
    type: "website",
    url: siteUrl,
    images: [{ url: "/sentinelcv.png", width: 1847, height: 915, alt: "SentinelCV — AI video analytics platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josue Valenzuela | AI/ML Engineer",
    description: "AI/ML Engineer — Computer Vision, Deep Learning & RAG Systems",
    images: ["/sentinelcv.png"],
  },
};

const themeScript = `
  (function(){
    var t = localStorage.getItem('theme');
    var r = document.documentElement;
    if (t === 'light') r.classList.remove('dark');
    else if (t !== 'dark' && window.matchMedia('(prefers-color-scheme: light)').matches) r.classList.remove('dark');
  })();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Josue Valenzuela Perez",
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  jobTitle: "AI/ML Engineer",
  email: "mailto:jos.val.pe07@gmail.com",
  sameAs: [
    "https://github.com/JosueVP17",
    "https://linkedin.com/in/josue-valenzuela-perez-84979b336",
    "https://leetcode.com/u/JosueVP17/",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidad de Guanajuato" },
    { "@type": "CollegeOrUniversity", name: "Chalmers University of Technology" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
