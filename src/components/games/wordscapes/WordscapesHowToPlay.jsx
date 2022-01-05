import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import defineBlock from '../../../utils/defineBlock';
import './WordscapesHowToPlay.scss';

const bem = defineBlock('WordscapesHowToPlay');

const infoStyling = {
  color: 'rgb(1, 67, 97)',
  backgroundColor: 'rgb(229, 246, 253)'
};

const WordscapesHowToPlay = () => (
  <div className={bem()}>
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={0} sx={infoStyling}>
          <div className={bem('content')}>
            <Typography variant="h6" gutterBottom component="div">
              Description
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              Wordscapes is a word puzzle video game created for both
              Android and iOS devices. The game overall is a mix of Boggle
              and crossword puzzles. To solve the puzzle, the player must
              find every word using the letters that are located in the
              circle at the bottom of the screen. There are anywhere from
              3 to 7 letters in the circle, depending on the level being
              played. There are also bonus words, which the player can solve
              for extra coins.
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
                <li>Letters in the circle can only be used once.</li>
                <li>Duplicate letters are allowed in the circle.</li>
                <li>Words must contain at least four letters.</li>
                <li>
                  The word list does not include words that are
                  offensive, obscure, hyphenated or proper nouns.
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
              requirments. We then test each word in the list against the
              set of game letters. If you think words are missing from the
              solution, then try using a larger word list!
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default WordscapesHowToPlay;
