import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Property Pulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
