import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { paths } from '../../constants';
import defineBlock from '../../utils/defineBlock';
import './AppToolbar.scss';

export const bem = defineBlock('AppToolbar');

const AppToolbar = () => (
  <AppBar
    className={bem()}
    position="fixed"
    sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
  >
    <Toolbar>
      <Link
        className={bem('link')}
        to={paths.HOME}
      >
        Game Breaker
      </Link>
    </Toolbar>
  </AppBar>
);

export default AppToolbar;
