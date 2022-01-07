import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import defineBlock from '../../../utils/defineBlock';
import './WordSearchHowToPlay.scss';

const bem = defineBlock('WordSearchHowToPlay');

const infoStyling = {
  color: 'rgb(1, 67, 97)',
  backgroundColor: 'rgb(229, 246, 253)'
};

const WordSearchHowToPlay = () => (
  <div className={bem()}>
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={0} sx={infoStyling}>
          <div className={bem('content')}>
            <Typography variant="h6" gutterBottom component="div">
              Description
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              A word search is a word game that consists of the letters of
              words placed in a grid, which usually has a rectangular or square
              shape. The objective of this game is to find and mark all the
              words hidden inside the box. The words may be placed horizontally,
              vertically, or diagonally. Often a list of the hidden words is
              provided, but more challenging puzzles may not provide a list.
              Many word search puzzles have a theme to which all the hidden
              words are related such as food, animals, or colors.
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
                  Words are created by using adjoining letters in
                  any direction, as long as that direction remains
                  consistent throughout the word.
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
              We need to consider every cell as a starting character and
              find all words starting with it. This can be done using depth
              first traversal (DFS) and a trie for opptimization. We do DFS
              starting from every cell and branch outwards to each of the
              eight adjacent cells, making sure to always travel in the same
              direction. Once our DFS traversal reaches the edges of our game
              board, we know that the possible combination of characters has
              reached its end. Our trie can make this process quicker by
              eliminating paths that create prefixes for words that do not
              exist. Valid words found along the way will be recorded.
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default WordSearchHowToPlay;
