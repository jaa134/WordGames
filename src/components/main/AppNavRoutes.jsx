import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { paths } from '../../constants';

const Home = lazy(() => import(
  /* webpackChunkName: "Home", webpackPrefetch: true */
  './Home'
));

const AppNavRoutes = () => (
  <Suspense fallback={(
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )}
  >
    <Routes>
      <Route path={paths.HOME} element={<Home />} exact />
      <Route path="*" element={<Navigate replace to={paths.HOME} />} />
    </Routes>
  </Suspense>
);

export default AppNavRoutes;
