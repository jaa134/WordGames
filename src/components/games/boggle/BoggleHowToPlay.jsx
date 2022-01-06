import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import defineBlock from '../../../utils/defineBlock';
import './BoggleHowToPlay.scss';

const bem = defineBlock('BoggleHowToPlay');

const infoStyling = {
  color: 'rgb(1, 67, 97)',
  backgroundColor: 'rgb(229, 246, 253)'
};

const BoggleHowToPlay = () => (
  <div className={bem()}>
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={0} sx={infoStyling}>
          <div className={bem('content')}>
            <Typography variant="h6" gutterBottom component="div">
              Description
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              Boggle is a Hasbro word game that consists of letter cubes
              arranged in a rectangular pattern. The goal of the game is
              to have the highest point total by finding words. To gain
              points, players must create words from the randomly assorted
              letters in the cube grid. The longer the word, the higher the
              point value of the word. Words should be created by using
              adjoining letters in any direction to create valid English words.
              This means that the letters can be above or below, side by side,
              or touching corners. You may not use a letter cube multiple times
              in a single word.
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
                <li>Players get a puzzle board of letters.</li>
                <li>
                  The puzzle board should be rectangular. All rows
                  should have the same length. All columns should
                  have the same length.
                </li>
                <li>Duplicate letters are allowed in the board.</li>
                <li>
                  Words should be created by using adjoining letters
                  in any direction, but a letter cube can only be used
                  once per word.
                </li>
                <li>Words must contain at least three letters.</li>
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
              The idea is to consider every character as a starting character
              and find all words starting with it. All words starting from a
              character can be found using depth first traversal (DFS). We do
              DFS starting from every cell. We keep track of visited cells to
              make sure that a cell is considered only once in a word. The
              traversal will start at a single cell and brach outwards to each
              of the eight adjacent cells. Once every posible adjacent cell has been
              visited in our DFS, we know that the combination of characters has
              reached its end. Words that are found along the way will be recorded.
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default BoggleHowToPlay;
