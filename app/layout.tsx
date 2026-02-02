import type { Metadata } from 'next';
import './globals.css';
import { UserProgressProvider } from '@/context/UserProgressContext';

export const metadata: Metadata = {
  title: 'Dragon Eggs - Learn Chinese',
  description: 'A gamified Chinese learning app for beginners',
  manifest: '/manifest.json',
  themeColor: '#e63946',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Dragon Eggs',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body>
        <UserProgressProvider>{children}</UserProgressProvider>
      </body>
    </html>
  );
}
