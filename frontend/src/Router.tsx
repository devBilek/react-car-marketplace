import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import {SearchResultsPage} from "./pages/SearchResults.page";
import {CarAdPage} from "./pages/CarAd.page";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/search-results',
    element: <SearchResultsPage/>
  },
  {
    path: '/car-ad',
    element: <CarAdPage/>
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
