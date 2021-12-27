import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logoIconSrc from '../../assets/images/logoIcon.svg';
import logoTextSrc from '../../assets/images/logoText.png';
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
        <div className={bem('link-content')}>
          <img
            className={bem('icon')}
            src={logoIconSrc}
            alt="Game Break Icon"
            height="40"
          />
          <img
            src={logoTextSrc}
            alt="Game Break Text"
            height="40"
          />
        </div>
      </Link>
    </Toolbar>
  </AppBar>
);

export default AppToolbar;
