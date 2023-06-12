import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
