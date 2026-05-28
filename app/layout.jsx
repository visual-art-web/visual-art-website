import "./globals.css";

export const metadata = {
  title: "VISUAL ART | Cinematic Photography",
  description: "סטודיו צילום קולנועי, יוקרתי ומדויק",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
