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

export const metadata: Metadata = {
  title: "Josue Valenzuela | AI/ML Engineer",
  description:
    "AI/ML Engineer and Computer Systems Engineering student at Universidad de Guanajuato. Computer vision, deep learning, and RAG systems.",
  openGraph: {
    title: "Josue Valenzuela | AI/ML Engineer",
    description:
      "AI/ML Engineer — Computer Vision, Deep Learning & RAG Systems",
    type: "website",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
