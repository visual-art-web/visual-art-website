import "./globals.css";

export const metadata = {
  title: "Visual Art | סטודיו צילום יוקרתי",
  description: "סטודיו צילום יוקרתי וקולנועי — זוגיות, אופנה, אירועים ותוכן פרימיום.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
