import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { SearchResultsPage } from "./pages/SearchResults.page";
import { CarAdPage } from "./pages/CarAd.page";
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <>
          <HomePage />
        </>
    ),
  },
  {
    path: '/search-results',
    element: (
        <>
          <SearchResultsPage />
        </>
    ),
  },
  {
    path: '/car-ad/:id',
    element: (
        <>
          <ScrollToTop />
          <CarAdPage />
        </>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}