import '../../styles/globals.scss';
import OffcanvasNavbar from './components/navigation';
import Footer from './components/footer';

export const metadata = {
  title: 'Next.js Todo Prototype',
  description: 'Next.js Todo WebApp Prototype',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <OffcanvasNavbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
