import "./globals.css";

export const metadata = {
  title: "VISUAL ART | צילום קולנועי",
  description: "סטודיו צילום קולנועי, אופנה, חתונות, זוגיות ותוכן פרימיום",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
