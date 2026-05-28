import "./globals.css";

export const metadata = {
  title: "VISUAL ART | Cinematic Photography",
  description: "סטודיו צילום קולנועי בעברית, RTL מלא וחוויית מותג יוקרתית.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
