import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dice Solutions - Launch MVPs, SaaS & AI Products Fast',
  description: 'We build production-ready apps, landing pages, and CMS-powered platforms using cutting-edge technologies — with speed, scalability, and startup-style execution.',
  icons: {
    icon: '/dice-solutions.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-inter antialiased`}>{children}</body>
    </html>
  );
}