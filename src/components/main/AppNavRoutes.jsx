import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { paths } from '../../constants';
import ConstructionPage from '../common/ConstructionPage';

const Home = lazy(() => import(
  /* webpackChunkName: "Home", webpackPrefetch: true */
  './Home'
));

const SpellingBee = lazy(() => import(
  /* webpackChunkName: "SpellingBee" */
  '../games/spellingBee/SpellingBeePage'
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
      <Route path={paths.HANGMAN} element={<ConstructionPage />} exact />
      <Route path={paths.NYT_SPELLING_BEE} element={<SpellingBee />} exact />
      <Route path={paths.SCRABBLE} element={<ConstructionPage />} exact />
      <Route path={paths.WORD_LADDERS} element={<ConstructionPage />} exact />
      <Route path={paths.WORD_SEARCH} element={<ConstructionPage />} exact />
      <Route path={paths.WORDSCAPES} element={<ConstructionPage />} exact />
      <Route path={paths.CHECKERS} element={<ConstructionPage />} exact />
      <Route path={paths.CHESS} element={<ConstructionPage />} exact />
      <Route path={paths.CONNECT_FOUR} element={<ConstructionPage />} exact />
      <Route path={paths.GO} element={<ConstructionPage />} exact />
      <Route path={paths.MANCALA} element={<ConstructionPage />} exact />
      <Route path={paths.OTHELLO} element={<ConstructionPage />} exact />
      <Route path={paths.BLACK_JACK} element={<ConstructionPage />} exact />
      <Route path={paths.HEARTS} element={<ConstructionPage />} exact />
      <Route path={paths.TEXAS_HOLDEM} element={<ConstructionPage />} exact />
      <Route path="*" element={<Navigate replace to={paths.HOME} />} />
    </Routes>
  </Suspense>
);

export default AppNavRoutes;
