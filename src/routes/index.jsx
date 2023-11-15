import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { lazyImport } from 'utils';

const { NotFound } = lazyImport(() => import('pages'), 'NotFound');
const { Home } = lazyImport(() => import('pages'), 'Home');
const { AboutMe } = lazyImport(() => import('pages'), 'AboutMe');
const { Experience } = lazyImport(() => import('pages'), 'Experience');
const { Education } = lazyImport(() => import('pages'), 'Education');
const { Projects } = lazyImport(() => import('pages'), 'Projects');
const { Achievements } = lazyImport(() => import('pages'), 'Achievements');
const { Articles } = lazyImport(() => import('pages'), 'Articles');
const { AboutMeB } = lazyImport(() => import('pages'), 'AboutMeB');

const routes = [
  {
    path: '/',
    element: (
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: '/about-me',
    element: (
      <Suspense fallback={null}>
        <AboutMe />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: '/experience',
    element: (
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: '/education',
    element: (
      <Suspense fallback={null}>
        <Education />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: '/projects',
    element: (
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: '/achievements',
    element: (
      <Suspense fallback={null}>
        <Achievements />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: '/articles',
    element: (
      <Suspense fallback={null}>
        <Articles />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={null}>
        <AboutMeB />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ),
  },
];

export const router = createBrowserRouter(routes);
