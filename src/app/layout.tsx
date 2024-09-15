import './globals.css';
import SideNav from './components/SideNav';

export const metadata = {
  title: 'Portfolio Site',
  description: 'Oktaviardi Pratama Putra’s Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideNav />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
