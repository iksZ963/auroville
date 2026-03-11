import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Auroville | Beautifully Designed For Everyday Living',
    template: '%s | Auroville',
  },
  description:
    'Auroville - Premium real estate development in Bangladesh. Luxury apartments in Bashundhara, Meradia and more.',
  openGraph: {
    title: 'Auroville',
    description: 'Beautifully Designed For Everyday Living',
    url: 'https://auroville.com.bd',
    siteName: 'Auroville',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
