import "./globals.css";

export const metadata = {
  title: "Visual Art | סטודיו צילום יוקרתי",
  description: "Visual Art — סטודיו צילום יוקרתי בסגנון קולנועי.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
