import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dice Solutions - AI-Powered Product Engineering for Startups',
  description: 'Launch Faster. Build Smarter. Scale Effortlessly. AI-powered product engineering agency built by ex-startup engineers — your MVP launch partner, innovation lab, and growth ally.',
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