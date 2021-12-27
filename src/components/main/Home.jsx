import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import defineBlock from '../../utils/defineBlock';
import PageTitle from '../common/PageTitle';
import './Home.scss';

const bem = defineBlock('Home');

const Home = () => (
  <div className={bem()}>
    <Box className={bem('header-box')}>
      <Typography variant="h2" component="div">
        Game Breaker
      </Typography>
      <Typography className={bem('subheader')} variant="h5" component="div">
        We help you do something something something. Come use our
        site because we are #1 in helping you do that thing!
      </Typography>
    </Box>
    <PageTitle text="Features" />
    <Typography variant="body1" component="div">
      TODO: add some features
    </Typography>
  </div>
);

export default Home;
