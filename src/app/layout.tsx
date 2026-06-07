import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ovie Salunkhe | Rising Cricket Talent - U17 Mumbai",
  description: "Ovie Salunkhe is a rising cricket talent from Mumbai, currently representing the city in the Under-17 circuit, including the prestigious MCA West Zone Championship squad. Passion. Precision. Power.",
  keywords: ["Ovie Salunkhe", "Cricket", "Mumbai Cricket", "U17 Women's Cricket", "MCA West Zone", "Cricket Prodigy", "Sports Portfolio"],
  authors: [{ name: "Ovie Salunkhe" }, { name: "APX Teck", url: "https://apxteck.com" }],
  creator: "APX Teck",
  openGraph: {
    title: "Ovie Salunkhe | Rising Cricket Talent",
    description: "Follow the journey of Mumbai's rising cricket prodigy on her path to greatness.",
    url: "https://oviesalunkhe.com", // Adjust as necessary
    siteName: "Ovie Salunkhe Portfolio",
    images: [
      {
        url: "/hero-fallback.jpg", // Adjust to the actual OG image route
        width: 1200,
        height: 630,
        alt: "Ovie Salunkhe batting in the nets",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ovie Salunkhe | Rising Cricket Talent",
    description: "Follow the journey of Mumbai's rising cricket prodigy.",
    images: ["/hero-fallback.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcfcfc' },
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
