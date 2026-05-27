
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
export const metadata={title:"A Mobile Notary Service | AMNS TX",description:"Mobile and online notary services across Dallas-Fort Worth and Texas statewide."};
export default function RootLayout({children}){return <html lang="en"><body><Header/>{children}<Footer/><FloatingButtons/></body></html>}
