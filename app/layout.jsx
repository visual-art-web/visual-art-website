import './globals.css';

export const metadata = {
  title: 'Visual Art | Luxury Cinematic Photography',
  description: 'סטודיו צילום יוקרתי בסגנון cinematic editorial.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
