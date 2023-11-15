import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from 'geist/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'Benuron Dosagem',
  description: 'Saiba a dosagem certa de benuron para o seu filho',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
