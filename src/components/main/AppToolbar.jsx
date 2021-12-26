import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import logoSrc from '../../assets/images/logo.svg';
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
      <img
        className={bem('logo')}
        src={logoSrc}
        alt="logo"
        height="80"
      />
      <Typography
        variant="h5"
        noWrap
        component="div"
      >
        Word Games Solver
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppToolbar;
