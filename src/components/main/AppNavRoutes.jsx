import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { paths } from '../../constants';
import ConstructionAlert from '../common/ConstructionAlert';

const Home = lazy(() => import(
  /* webpackChunkName: "Home", webpackPrefetch: true */
  './Home'
));

const SpellingBee = lazy(() => import(
  /* webpackChunkName: "SpellingBee" */
  '../spellingBee/GamePage'
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
      <Route path={paths.HANGMAN} element={<ConstructionAlert />} exact />
      <Route path={paths.NYT_SPELLING_BEE} element={<SpellingBee />} exact />
      <Route path={paths.SCRABBLE} element={<ConstructionAlert />} exact />
      <Route path={paths.WORD_LADDERS} element={<ConstructionAlert />} exact />
      <Route path={paths.WORD_SEARCH} element={<ConstructionAlert />} exact />
      <Route path={paths.WORDSCAPES} element={<ConstructionAlert />} exact />
      <Route path={paths.CHECKERS} element={<ConstructionAlert />} exact />
      <Route path={paths.CHESS} element={<ConstructionAlert />} exact />
      <Route path={paths.CONNECT_FOUR} element={<ConstructionAlert />} exact />
      <Route path={paths.GO} element={<ConstructionAlert />} exact />
      <Route path={paths.MANCALA} element={<ConstructionAlert />} exact />
      <Route path={paths.OTHELLO} element={<ConstructionAlert />} exact />
      <Route path={paths.BLACK_JACK} element={<ConstructionAlert />} exact />
      <Route path={paths.HEARTS} element={<ConstructionAlert />} exact />
      <Route path={paths.TEXAS_HOLDEM} element={<ConstructionAlert />} exact />
      <Route path="*" element={<Navigate replace to={paths.HOME} />} />
    </Routes>
  </Suspense>
);

export default AppNavRoutes;
