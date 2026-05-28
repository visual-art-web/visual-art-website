import "./globals.css";

export const metadata = {
  title: "VISUAL ART | סטודיו צילום קולנועי",
  description: "אתר פרימיום לצלמת — צילום חתונות, זוגיות, אופנה, תדמית, רילסים ורחפן.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
