import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zenvia - Premium Wellness & Mindful Living',
  description: 'Discover premium wellness and mindful living products designed to enhance your journey to inner peace and balance.',
  keywords: 'wellness, mindfulness, meditation, zen, lifestyle, premium products',
  authors: [{ name: 'Zenvia' }],
  creator: 'Zenvia',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zenvia.com',
    title: 'Zenvia - Premium Wellness & Mindful Living',
    description: 'Discover premium wellness and mindful living products designed to enhance your journey to inner peace and balance.',
    siteName: 'Zenvia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenvia - Premium Wellness & Mindful Living',
    description: 'Discover premium wellness and mindful living products designed to enhance your journey to inner peace and balance.',
    creator: '@zenvia',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}