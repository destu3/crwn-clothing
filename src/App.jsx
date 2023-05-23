import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './route-components/home/home';
import SignIn from './route-components/sign-in/sign-in';
import Shop from './route-components/shop/shop';
import RootLayout from './route-components/layouts/root-layout/root-layout';

/* 
The component associated with the route will be rendered when 
the route path matches the current browser location.
Basically we are defining routes for the application.
*/
const routeConfig = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="shop" element={<Shop />} />
    <Route path="signIn" element={<SignIn />} />
  </Route>
);

const router = createBrowserRouter(routeConfig);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
