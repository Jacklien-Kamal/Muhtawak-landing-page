import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home        from '../Home';
import BlogDetails from './BlogDetails/BlogDetails';
import { I18nProvider } from './hooks/i18nContext';
import { RoleProvider }  from './hooks/roleContext';
import Layout from './components/Layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/',         element: <Home /> },
      { path: '/blog/:id', element: <BlogDetails /> },
      { path: '*',         element: <Home /> },
    ],
  },
]);

function App() {
  return (
    <I18nProvider>
      <RoleProvider>
        <RouterProvider router={router} />
      </RoleProvider>
    </I18nProvider>
  );
}

export default App;