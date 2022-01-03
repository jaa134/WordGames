import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import defineBlock from '../../../utils/defineBlock';
import HangmanDrawing from './HangmanDrawing';
import './HangmanResults.scss';

const bem = defineBlock('HangmanResults');

const HangmanResults = ({
  puzzle,
  incorrectLetters,
  listSize,
  numWordsExamined,
  numPossibleWords,
  commonExamples,
  letterAnalsyis
}) => (
  <div className={bem()}>
    <Typography variant="h4" gutterBottom component="div">
      Results
    </Typography>
    <div className={bem('layout')}>
      <div className={bem('values')}>

        <HangmanDrawing numIncorrectLetters={incorrectLetters.length} />
        <TextField
          id={bem('puzzle')}
          className={bem('puzzle')}
          label="Puzzle"
          value={puzzle}
          variant="filled"
          fullWidth
          InputProps={{ readOnly: true }}
        />
        <TextField
          id={bem('incorrect')}
          className={bem('incorrect')}
          label="Incorrect letters"
          value={incorrectLetters}
          variant="filled"
          fullWidth
          InputProps={{ readOnly: true }}
        />
      </div>

      <div className={bem('solution')}>
        <div className={bem('info')}>
          <Typography variant="h6" gutterBottom component="div">
            Stats
          </Typography>
          <div className={bem('stats')}>
            <TextField
              id={bem('list-size')}
              label="List size"
              value={listSize}
              variant="filled"
              InputProps={{ readOnly: true }}
            />
            <TextField
              id={bem('num-words-examined')}
              label="Total word count"
              value={numWordsExamined}
              variant="filled"
              InputProps={{ readOnly: true }}
            />
            <TextField
              id={bem('num-words-eliminated')}
              label="Words elminated"
              value={numWordsExamined - (numWordsExamined - numPossibleWords)}
              variant="filled"
              InputProps={{ readOnly: true }}
            />
            <TextField
              id={bem('num-possible-words')}
              label="Possible word count"
              value={numPossibleWords}
              variant="filled"
              InputProps={{ readOnly: true }}
            />
          </div>
        </div>
        <div className={bem('info')}>
          <Typography variant="h6" gutterBottom component="div">
            Common words
          </Typography>
          {commonExamples.length === 0
            ? (
              <Alert severity="info">
                <AlertTitle>No results</AlertTitle>
                We could not find any common examples for the puzzle
              </Alert>
            )
            : (
              <div className={bem('common')}>
                {commonExamples.map((word) => (
                  <Chip key={word} label={word} />
                ))}
              </div>
            )}
        </div>
      </div>
    </div>

    <div className={bem('analysis')}>
      <Typography variant="h6" gutterBottom component="div">
        Letter analysis
      </Typography>
      {letterAnalsyis.every((data) => data.appearenceRatio === 0)
        ? (
          <Alert severity="info">
            <AlertTitle>No results</AlertTitle>
            We could not find any matches for the configured game board
          </Alert>
        )
        : (
          <div className={bem('list')}>
            Hello
          </div>
        )}
    </div>

  </div>
);

HangmanResults.propTypes = {
  puzzle: PropTypes.string.isRequired,
  incorrectLetters: PropTypes.string.isRequired,
  listSize: PropTypes.string.isRequired,
  numWordsExamined: PropTypes.number.isRequired,
  numPossibleWords: PropTypes.number.isRequired,
  commonExamples: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  letterAnalsyis: PropTypes.arrayOf(PropTypes.shape({
    letter: PropTypes.string.isRequired,
    numWordsWithLetter: PropTypes.number.isRequired,
    appearenceRatio: PropTypes.number.isRequired,
    examples: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  })).isRequired
};

export default HangmanResults;
