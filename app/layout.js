import './globals.css';
import Navbar from '../components/Navbar';
import FloatingButtons from '../components/FloatingButtons';
import Footer from '../components/Footer';

export const metadata = {
  title: 'A Mobile Notary Service | AMNS TX',
  description: 'Mobile notary services in Dallas-Fort Worth and remote online notary services statewide in Texas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
