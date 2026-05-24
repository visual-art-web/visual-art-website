import './globals.css';
import { Cormorant_Garamond, Assistant } from 'next/font/google';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display'
});

const body = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body'
});

export const metadata = {
  title: 'Visual Art | צילום יוקרתי ואמנותי',
  description: 'Visual Art — צילום זוגיות, תדמית, אופנה, בת מצווה, אלבומים וקנבסים בסגנון Bright Luxury Cinematic.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
