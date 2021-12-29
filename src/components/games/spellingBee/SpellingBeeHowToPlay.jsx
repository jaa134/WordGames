import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import defineBlock from '../../../utils/defineBlock';
import './SpellingBeeHowToPlay.scss';

const bem = defineBlock('SpellingBeeHowToPlay');

const infoStyling = {
  color: 'rgb(1, 67, 97)',
  backgroundColor: 'rgb(229, 246, 253)'
};

const SpellingBeeHowToPlay = () => (
  <div className={bem()}>
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={0} sx={infoStyling}>
          <div className={bem('content')}>
            <Typography variant="h6" gutterBottom component="div">
              Description
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              The game presents players with a grid of 7 letters arrayed
              in a honeycomb structure. The player scores points by using
              the letters to form words consisting of four or more letters.
              However, any words proposed by the player must include the
              letter at the center of the honeycomb. Scoring points leads
              to progressively higher praise for the player&apos;s effort,
              such as &quot;Solid&quot;, &quot;Amazing&quot;, and &quot;
              Genius&quot;. Each puzzle is guaranteed to have at least one
              pangram, which award the player the largest number of points
              when found. If the player finds all of the possible words in
              a given puzzle, they achieve the title of &quot;Queen Bee&quot;.
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
        <Paper elevation={0} sx={infoStyling}>
          <div className={bem('content')}>
            <Typography variant="h6" gutterBottom component="div">
              Rules
            </Typography>
            <Typography variant="body1" component="div">
              <ul>
                <li>Words must include the center letter.</li>
                <li>Words must contain at least four letters.</li>
                <li>Letters can be used more than once.</li>
                <li>
                  The word list does not include words that are
                  offensive, obscure, hyphenated or proper nouns.
                </li>
                <li>
                  Each puzzle includes at least one “pangram,”
                  which uses every letter at least once.
                </li>
              </ul>
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
        <Paper elevation={0} sx={infoStyling}>
          <div className={bem('content')}>
            <Typography variant="h6" gutterBottom component="div">
              Solution
            </Typography>
            <Typography variant="body1" component="div">
              Our goal is to maximize the completeness of the result set
              while minimizing the resource requirments that clients need
              to download and process larger word lists. By default, we
              consult a list of more than 10,000+ words to meet these
              requirments. We then test each word in the list against a
              specialized regular expression using the game letters. If
              you think words are missing from the solution, then try using
              a larger word list!
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default SpellingBeeHowToPlay;
