
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyActions from '../components/StickyActions';

export const metadata = {
  title: 'AMNS TX | Mobile Notary DFW & Online Notary Texas',
  description: 'A Mobile Notary Service provides mobile notary services across Dallas-Fort Worth and remote online notarization statewide across Texas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyActions />
      </body>
    </html>
  );
}
