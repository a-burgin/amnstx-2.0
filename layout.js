import './globals.css';

export const metadata = {
  title: 'AMNS TX | A Mobile Notary Service',
  description: 'Mobile, online, and traditional notary services serving Dallas-Fort Worth and statewide online.',
  metadataBase: new URL('https://amnstx.com')
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
