import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { sortBy, groupBy } from 'lodash';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import defineBlock from '../../../utils/defineBlock';
import { calcWordPoints } from './BoggleGameEngine';
import BoggleGameBoard from './BoggleGameBoard';
import './BoggleResults.scss';

const bem = defineBlock('BoggleResults');

const views = {
  ALPHA: 'ALPHA',
  LENGTH: 'LENGTH',
  POINTS: 'POINTS'
};

const BoggleResults = ({
  puzzle,
  listSize,
  runTime,
  numWordsExamined,
  foundWords
}) => {
  const [viewBy, setViewBy] = useState(views.ALPHA);
  const [viewPathFor, setViewPathFor] = useState(null);
  const foundWordsList = Object.keys(foundWords);
  const displayValues = useMemo(() => {
    let result = sortBy(foundWordsList);
    if (viewBy === views.ALPHA) {
      result = groupBy(result, (word) => word.charAt(0));
      result = sortBy(Object.keys(result)).map((key) => ({
        key, words: result[key]
      }));
    } else if (viewBy === views.LENGTH) {
      result = groupBy(result, (word) => word.length);
      result = sortBy(Object.keys(result), (key) => parseInt(key, 10)).map((key) => ({
        key, words: result[key]
      }));
    } else if (viewBy === views.POINTS) {
      result = groupBy(result, (word) => calcWordPoints(word));
      result = sortBy(Object.keys(result), (key) => parseInt(key, 10)).map((key) => ({
        key, words: result[key]
      }));
    }
    return result;
  }, [foundWords, viewBy]);
  return (
    <div className={bem()}>
      <Typography variant="h4" gutterBottom component="div">
        Results
      </Typography>
      <div>
        <div className={bem('board')}>
          <BoggleGameBoard
            puzzle={puzzle}
            path={viewPathFor ? foundWords[viewPathFor] : null}
          />
        </div>
        <Autocomplete
          id={bem('answer-select')}
          options={foundWordsList.sort((a, b) => -b.localeCompare(a))}
          groupBy={(option) => option[0]}
          sx={{ width: 300 }}
          ListboxProps={{ style: { maxHeight: '15rem' } }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="View solution for"
              helperText="Select a word to view its path"
              variant="filled"
            />
          )}
          onChange={(_, value) => { setViewPathFor(value); }}
        />
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
            id={bem('run-time')}
            label="Run time"
            value={`${runTime}ms`}
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
            value={numWordsExamined - foundWordsList.length}
            variant="filled"
            InputProps={{ readOnly: true }}
          />
          <TextField
            id={bem('num-possible-words')}
            label="Possible word count"
            value={foundWordsList.length}
            variant="filled"
            InputProps={{ readOnly: true }}
          />
        </div>
      </div>

      <div>
        <Typography variant="h6" gutterBottom component="div">
          Solution
        </Typography>
        {displayValues.length === 0
          ? (
            <Alert className={bem('no-results')} severity="info">
              <AlertTitle>No results</AlertTitle>
              We could not find any solutions for the configured game board
            </Alert>
          )
          : (
            <>
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
                    <div>{group.words.map((word) => (<Chip key={word} label={word} />))}</div>
                  </div>
                ))}
              </div>
            </>
          )}
      </div>
    </div>
  );
};

BoggleResults.propTypes = {
  puzzle: PropTypes.string.isRequired,
  listSize: PropTypes.string.isRequired,
  runTime: PropTypes.number.isRequired,
  numWordsExamined: PropTypes.number.isRequired,
  foundWords: (
    PropTypes.objectOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          row: PropTypes.number.isRequired,
          col: PropTypes.number.isRequired
        }).isRequired
      ).isRequired
    ).isRequired
  )
};

export default BoggleResults;
