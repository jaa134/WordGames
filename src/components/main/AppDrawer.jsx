import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import { paths } from '../../constants';
import defineBlock from '../../utils/defineBlock';
import AppNavList from './AppNavList';

export const bem = defineBlock('AppDrawer');

const mainNav = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    href: paths.HOME
  }
];

const drawerWidth = 240;

const AppDrawer = () => (
  <Drawer
    className={bem()}
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
    }}
  >
    <Toolbar />
    <Box sx={{ overflow: 'auto' }}>
      <AppNavList type="main" entries={mainNav} />
      <Divider />
      <AppNavList type="games" subheader="Games" entries={[]} />
    </Box>
  </Drawer>
);

export default AppDrawer;
