import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import defineBlock from '../../../utils/defineBlock';
import './WordLaddersHowToPlay.scss';

const bem = defineBlock('WordLaddersHowToPlay');

const infoStyling = {
  color: 'rgb(1, 67, 97)',
  backgroundColor: 'rgb(229, 246, 253)'
};

const WordLaddersHowToPlay = () => (
  <div className={bem()}>
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper elevation={0} sx={infoStyling}>
          <div className={bem('content')}>
            <Typography variant="h6" gutterBottom component="div">
              Description
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              A classic word game that often appears in newspapers and
              other forms of media. Word ladders are puzzles in which
              the player must determine a transformation sequence from
              a start word to an end word. The goal is to find the
              shortest possbile sequence of words that each differ from
              the previous word by replacing a single letter to make a
              new word. Players will first need to choose a word to start
              with. For example, start with CAT. Replacing one letter at a
              time, the ladder for cat can become: cat – cot – dot – dog.
              This is a word ladder that starts at &quot;cat&quot; and
              ends at &quot;dog.&quot;
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
                <li>Players get a starting word and an ending word.</li>
                <li>Starting and ending words must be the same length.</li>
                <li>
                  Players change one letter at a time, attempting to move
                  from the starting word to the ending word.
                </li>
                <li>
                  Each intermediate step must be a valid word, and no
                  proper nouns allowed!
                </li>
                <li>
                  Excluded words will not be considered for the solution.
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
              Our goal is to minimize the number of steps or transformations
              needed to reach the end word. We can accomplish this task by
              implementing a breadth first search (BFS) algorithm that searches
              for a shortest path by using the start word as the root to craft
              a graph in which all adjacent nodes only differ by a single letter.
              BFS will gaurantee that our solution is optimal because as soon as
              we encounter the desired word, we know that the level its found at
              is the length of the shortest trandformation sequence.
            </Typography>
          </div>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default WordLaddersHowToPlay;
