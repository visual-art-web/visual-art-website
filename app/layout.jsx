import './globals.css';

export const metadata = {
  title: 'Visual Art | צילום יוקרתי',
  description: 'Visual Art — צילום זוגיות, תדמית, אופנה, בת מצווה, אלבומים וקנבסים בגישת Fine Art יוקרתית.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
