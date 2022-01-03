import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import defineBlock from '../../../utils/defineBlock';
import './HangmanResults.scss';

const bem = defineBlock('HangmanResults');

const HangmanResults = ({
  puzzle,
  incorrectLetters,
  listSize,
  numWordsPossible,
  commonExamples,
  letterAnalsyis
}) => (
  <div className={bem()}>
    <Typography variant="h4" gutterBottom component="div">
      Results
    </Typography>
  </div>
);

HangmanResults.propTypes = {
  puzzle: PropTypes.string.isRequired,
  incorrectLetters: PropTypes.string.isRequired,
  listSize: PropTypes.string.isRequired,
  numWordsPossible: PropTypes.number.isRequired,
  commonExamples: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  letterAnalsyis: PropTypes.arrayOf(PropTypes.shape({
    letter: PropTypes.string.isRequired,
    numWordsWithLetter: PropTypes.number.isRequired,
    appearenceRatio: PropTypes.number.isRequired,
    examples: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  })).isRequired
};

export default HangmanResults;
