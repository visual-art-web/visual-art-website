import "./globals.css";

export const metadata = {
  title: "VISUAL ART",
  description: "Luxury cinematic photography studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
