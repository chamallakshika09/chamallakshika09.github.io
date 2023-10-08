import { createBrowserRouter } from 'react-router-dom';

import { lazyImport } from 'utils';

const { NotFound } = lazyImport(() => import('pages'), 'NotFound');
const { Home } = lazyImport(() => import('pages'), 'Home');

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
