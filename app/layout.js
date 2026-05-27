
import "./globals.css";

export const metadata = {
  title: "A Mobile Notary Service | AMNS TX",
  description: "Mobile & Online Notary Services Across Texas"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
