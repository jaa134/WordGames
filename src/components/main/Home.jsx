import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
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
        An advanced application that strategizes your next
        move for common games. Our algorithmic approach to
        game theory is gauranteed to keep you winning!
      </Typography>
    </Box>
    <PageBase>
      <PageTitle text="About" />
      <Typography className={bem('description')} variant="body1" gutterBottom component="div">
        We curate our solutions to games using algorithms that are gauranteed to help
        you win. Since the  1950s, academia has extensively studied and improved upon
        game theory — mathematical models of strategic interactions used in analyzing
        and dealing with competitive situations or games. A game&apos;s outcome is
        critically dependent on it&apos;s players&apos; choice of actions. Our service
        helps you make the best possible choices to maximize the chance for favorable
        outcomes in your games.
      </Typography>
      <Typography className={bem('description')} variant="body1" component="div">
        Our algorithms are gathered directly from the community through message
        boards, scholarly articles, and more. We can ensure that our clients recieve
        the best possible service by handpicking community solutions that have been
        tested and approved by many. Game Breaker exclusively provides client-side
        processing solutions, so it is necessary that our algorithms remain performant
        considering some clients&apos; limited access to resources like computer memory
        and processing power.
      </Typography>
      <Typography className={bem('description')} variant="body1" component="div">
        Try out our game breaking service and improve your game today!
      </Typography>
    </PageBase>
    <Divider />
    <PageBase>
      <PageTitle text="Features" />
      <Alert className={bem('no-results')} severity="info">
        <AlertTitle>In progress</AlertTitle>
        We are still working on many features. Bear with us as we get things up and running!
      </Alert>
    </PageBase>
  </div>
);

export default Home;
