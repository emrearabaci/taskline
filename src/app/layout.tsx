/* Next API */
import type { Metadata } from 'next';

/* Components */
import Navigation from '@/app/_components/Navigation/Navigation';
import Footer from '@/app/_components/Footer/Footer';

/* Styles */
import '@/app/globals.scss';

/* Fonts */
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
