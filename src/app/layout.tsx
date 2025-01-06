import { AuthProvider } from '@/providers/AuthProvider';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Відстеження ккал',
  description: 'Дуже просте відстеження ккал',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-r from-rose-100 to-teal-100 antialiased dark:from-slate-900 dark:to-slate-700`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}