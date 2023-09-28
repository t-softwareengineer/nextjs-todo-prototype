import '../../styles/globals.scss';

export const metadata = {
  title: 'Next.js Todo Prototype',
  description: 'Next.js Todo WebApp Prototype',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
