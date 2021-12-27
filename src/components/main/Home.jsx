import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logoIconSrc from '../../assets/images/logoIcon.svg';
import logoTextSrc from '../../assets/images/logoText.png';
import defineBlock from '../../utils/defineBlock';
import PageBase from '../common/PageBase';
import PageTitle from '../common/PageTitle';
import './Home.scss';

const bem = defineBlock('Home');

const Home = () => (
  <div className={bem()}>
    <Box className={bem('header-box')}>
      <div className={bem('logo')}>
        <img
          className={bem('icon')}
          src={logoIconSrc}
          alt="Game Break Icon"
          height="80"
        />
        <img
          src={logoTextSrc}
          alt="Game Break Text"
          height="80"
        />
      </div>
      <Typography className={bem('subheader')} variant="h5" component="div">
        We help you do something something something. Come use our
        site because we are #1 in helping you do that thing!
      </Typography>
    </Box>
    <PageBase>
      <PageTitle text="About" />
      <Typography variant="body1" component="div">
        TODO: how we find our solutions (consulting community/academic papers)
      </Typography>
    </PageBase>
    <PageBase>
      <PageTitle text="Features" />
      <Typography variant="body1" component="div">
        TODO: add some features
      </Typography>
    </PageBase>
  </div>
);

export default Home;
