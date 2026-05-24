import './globals.css';

export const metadata = {
  title: 'Visual Art | סטודיו צילום יוקרתי',
  description: 'סטודיו צילום יוקרתי לחוויות זוגיות, משפחה, הריון, אירועים, אלבומים וקנבסים.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
