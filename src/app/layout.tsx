// In your project, save this as: app/layout.tsx
import React, { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import Header from '@/components/layout/Header'; // Correct relative path
import Footer from '@/components/layout/Footer'; // Correct relative path
import './globals.css';

export const metadata = {
  title: 'James Lanzarrote | Full Stack Developer',
  description: 'Portfolio of James Lanzarrote, showcasing projects in React, Next.js, and more.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-slate-900 text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
