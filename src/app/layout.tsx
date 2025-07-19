import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Formé - Wellness for Your Busy Life',
  description: 'Get perfectly timed wellness prompts that fit your schedule and goals.',
  keywords: ['wellness', 'health', 'productivity', 'mindfulness', 'calendar'],
  authors: [{ name: 'Formé Team' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#DCD0FF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sand min-h-screen">
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
