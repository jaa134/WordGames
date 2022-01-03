import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { sortBy, groupBy } from 'lodash';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import defineBlock from '../../../utils/defineBlock';
import SpellingBeeGameEngine from './SpellingBeeGameEngine';
import './SpellingBeeResults.scss';

const bem = defineBlock('SpellingBeeResults');

const views = {
  ALPHA: 'ALPHA',
  LENGTH: 'LENGTH',
  POINTS: 'POINTS'
};

const SpellingBeeResults = ({
  requiredLetter,
  optionalLetters,
  listSize,
  numWordsExamined,
  matches
}) => {
  const [viewBy, setViewBy] = useState(views.ALPHA);
  const displayValues = useMemo(() => {
    let result = sortBy(matches);
    if (viewBy === views.ALPHA) {
      result = groupBy(result, (match) => match.charAt(0));
      result = sortBy(Object.keys(result)).map((key) => ({
        key, matches: result[key]
      }));
    } else if (viewBy === views.LENGTH) {
      result = groupBy(result, (match) => match.length);
      result = sortBy(Object.keys(result), (key) => parseInt(key, 10)).map((key) => ({
        key, matches: result[key]
      }));
    } else if (viewBy === views.POINTS) {
      const numUniqGameChars = new Set([result.requiredLetter, ...optionalLetters]).size;
      result = groupBy(result, (word) => SpellingBeeGameEngine.calcPoints(word, numUniqGameChars));
      result = sortBy(Object.keys(result), (key) => parseInt(key, 10)).map((key) => ({
        key, matches: result[key]
      }));
    }
    return result;
  }, [matches, viewBy]);
  return (
    <div className={bem()}>
      <Typography variant="h4" gutterBottom component="div">
        Results
      </Typography>
      <div className={bem('letters')}>
        <div className={bem('honeycomb', 'required')}>{requiredLetter}</div>
        {optionalLetters.map((letter, i) => (
          <div key={`${letter}${i}`} className={bem('honeycomb')}>
            <div className={bem('honeycomb-interior')}>
              {letter}
            </div>
          </div>
        ))}
      </div>

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
            value={numWordsExamined - matches.length}
            variant="filled"
            InputProps={{ readOnly: true }}
          />
          <TextField
            id={bem('num-possible-words')}
            label="Possible word count"
            value={matches.length}
            variant="filled"
            InputProps={{ readOnly: true }}
          />
        </div>
      </div>

      {displayValues.length === 0
        ? (
          <Alert className={bem('no-results')} severity="info">
            <AlertTitle>No results</AlertTitle>
            We could not find any matches for the configured game board
          </Alert>
        )
        : (
          <>
            <Typography variant="h6" gutterBottom component="div">
              Solution
            </Typography>
            <FormControl className={bem('view-by')} variant="filled" sx={{ minWidth: 300 }}>
              <InputLabel id={bem('view-by-label')}>Sort by</InputLabel>
              <Select
                labelId={bem('view-by-label')}
                id={bem('view-by-select')}
                value={viewBy}
                onChange={(event) => { setViewBy(event.target.value); }}
              >
                <MenuItem value={views.ALPHA}>Alphabetical</MenuItem>
                <MenuItem value={views.LENGTH}>Length</MenuItem>
                <MenuItem value={views.POINTS}>Points</MenuItem>
              </Select>
            </FormControl>
            <div className={bem('list')}>
              {displayValues.map((group) => (
                <div key={group.key} className={bem('row')}>
                  <div className={bem('key')}>{group.key}</div>
                  <div>{group.matches.map((match) => (<Chip key={match} label={match} />))}</div>
                </div>
              ))}
            </div>
          </>
        )}
    </div>
  );
};

SpellingBeeResults.propTypes = {
  requiredLetter: PropTypes.string.isRequired,
  optionalLetters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  listSize: PropTypes.string.isRequired,
  numWordsExamined: PropTypes.number.isRequired,
  matches: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default SpellingBeeResults;
