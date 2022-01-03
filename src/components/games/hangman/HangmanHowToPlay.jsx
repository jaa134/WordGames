import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import defineBlock from '../../../utils/defineBlock';
import './HangmanHowToPlay.scss';

const bem = defineBlock('HangmanHowToPlay');

const infoStyling = {
  color: 'rgb(1, 67, 97)',
  backgroundColor: 'rgb(229, 246, 253)'
};

const HangmanHowToPlay = () => (
  <div className={bem()}>
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
        <Paper elevation={0} sx={infoStyling}>
          <div className={bem('content')}>
            <Typography variant="h6" gutterBottom component="div">
              Description
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              A paper and pencil guessing game for two or more players.
              One player thinks of a word and the other(s) try to guess
              it by suggesting letters within a certain number of guesses.
              The word to guess is represented by a row of dashes,
              representing each letter of the word. If the guessing player
              suggests a letter which occurs in the word, the other player
              writes it in all its correct positions. If the suggested letter
              does not occur in the word, the other player draws one element
              of a hanged stick figure as a tally mark.
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
                <li>
                  Proper nouns and slang words are not allowed.
                </li>
                <li>
                  Players guess one letter at a time.
                </li>
                <li>
                  A correct guess results in all instances of the letter being
                  filled in.
                </li>
                <li>
                  An incorrect guess results in a new element being added to
                  the figure.
                </li>
                <li>
                  The game ends when the stick figure drawing is completed or
                  the word has been guessed successfully.
                </li>
              </ul>
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={0} sx={infoStyling}>
          <div className={bem('content')}>
            <Typography variant="h6" gutterBottom component="div">
              Solution
            </Typography>
            <Typography variant="body1" component="div">
              We use a greedy algorithm in our approach to beat the Hangman game
              by recommending the most frequently used letter for possible puzzle
              solutions. This approach works well because one of two outcomes is
              gauranteed. If the guess is correct, then we don&apos;t lose a life and
              gain more insight into the correct answer. If the guess is incorrect,
              then we eliminate the largest number of possible answers from our list.
              At each step of the game, we calculate how often each letter appears
              in the word list for words that abide by the given puzzle and incorrect
              letters values. We then compare the puzzle state to a list of 65,000
              commonly used words to display up to 10 common or probable solutions.
              If you are playing against an experienced Hangman player, it is less
              likely that the answer will be in this list. Remember that players
              will want to use uncommon words as they are harder to guess.
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default HangmanHowToPlay;
