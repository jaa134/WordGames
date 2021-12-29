import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { paths } from '../../constants';
import ConstructionPage from '../common/ConstructionPage';
import PageLoading from '../common/PageLoading';

const Home = lazy(() => import(
  /* webpackChunkName: "Home", webpackPrefetch: true */
  './Home'
));

const SpellingBee = lazy(() => import(
  /* webpackChunkName: "SpellingBee" */
  '../games/spellingBee/SpellingBeePage'
));

const WordLadders = lazy(() => import(
  /* webpackChunkName: "WordLadders" */
  '../games/wordLadders/WordLaddersPage'
));

const AppNavRoutes = () => (
  <Suspense fallback={<PageLoading />}>
    <Routes>
      <Route path={paths.HOME} element={<Home />} exact />
      <Route path={paths.HANGMAN} element={<ConstructionPage />} exact />
      <Route path={paths.NYT_SPELLING_BEE} element={<SpellingBee />} exact />
      <Route path={paths.SCRABBLE} element={<ConstructionPage />} exact />
      <Route path={paths.WORD_LADDERS} element={<WordLadders />} exact />
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
