import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import defineBlock from '../../../utils/defineBlock';
import './SpellingBeeResults.scss';

const bem = defineBlock('SpellingBeeResults');

const views = {
  ALPHA: 'ALPHA',
  LENGTH: 'LENGTH',
  POINTS: 'POINTS'
};

const SpellingBeeResults = ({
  results
}) => {
  const [viewBy, setViewBy] = useState(views.ALPHA);
  return (
    <div className={bem()}>
      <Typography variant="h4" gutterBottom component="div">
        Results for
      </Typography>
      <div className={bem('letters')}>
        <div className={bem('honeycomb', 'required')}>{results.requiredLetter}</div>
        {results.optionalLetters.map((letter, i) => (
          <div key={`${letter}${i}`} className={bem('honeycomb')}>
            <div className={bem('honeycomb-interior')}>
              {letter}
            </div>
          </div>
        ))}
      </div>
      {results.matches.length === 0
        ? (
          <Alert className={bem('no-results')} severity="info">
            <AlertTitle>No results</AlertTitle>
            We could not find any matches for the configured game board
          </Alert>
        )
        : (
          <>
            <FormControl className={bem('view-by')} variant="filled" sx={{ minWidth: 300 }}>
              <InputLabel id={bem('view-by-label')}>Sort results by</InputLabel>
              <Select
                labelId={bem('view-by-label')}
                id={bem('view-by-select')}
                value={viewBy}
                onChange={(event) => { setViewBy(event.target.value); }}
              >
                <MenuItem value={views.ALPHA}>Alphabetically</MenuItem>
                <MenuItem value={views.LENGTH}>Length</MenuItem>
                <MenuItem value={views.POINTS}>Points</MenuItem>
              </Select>
            </FormControl>
            <Divider />
            <div className={bem('list')}>
              {results.matches.map((match) => <Chip key={match} label={match} />)}
            </div>
          </>
        )}
    </div>
  );
};

export default SpellingBeeResults;
