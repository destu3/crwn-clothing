import Navigation from '../../navigation/navigation';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      {/* navigation bar always constant */}
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
