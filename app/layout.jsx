import './globals.css';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat'
});

export const metadata = {
  title: 'Visual Art | צילום יוקרתי',
  description: 'Visual Art — צילום שנשאר כיצירת אמנות. צילומי זוגיות, תדמית, אופנה, בת מצווה, אלבומים וקנבסים.',
  openGraph: {
    title: 'Visual Art | צילום יוקרתי',
    description: 'Capturing Moments. Creating Memories.',
    type: 'website',
    locale: 'he_IL'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
