import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import defineBlock from '../../utils/defineBlock';
import noImageSrc from '../../assets/images/noImage.svg';
import PageTitle from '../common/PageTitle';
import './Home.scss';

const bem = defineBlock('Home');

const Home = () => (
  <div className={bem()}>

    <Box className={bem('header-box')}>
      <img
        className={bem('logo')}
        src={noImageSrc}
        alt="logo"
        height="150"
      />
      <Box>
        <Typography variant="h2" component="div">
          Word Games Solver
        </Typography>
        <Typography className={bem('subheader')} variant="h5" component="div">
          We help you do something something something. Come use our
          site because we are #1 in helping you do that thing!
        </Typography>
      </Box>
    </Box>
    <Alert severity="info">
      <AlertTitle>Limited time offer</AlertTitle>
      We are giving away our services for
      {' '}
      <strong>free</strong>
      !
    </Alert>

    <PageTitle text="Features" />
    TODO: add some features
  </div>
);

export default Home;
