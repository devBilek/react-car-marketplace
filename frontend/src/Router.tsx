import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import {SearchResultsPage} from "./pages/SearchResults.page";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/search-results',
    element: <SearchResultsPage/>
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
