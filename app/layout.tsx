import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Property Pulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
