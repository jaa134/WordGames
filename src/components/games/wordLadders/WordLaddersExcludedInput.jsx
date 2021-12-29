import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import defineBlock from '../../../utils/defineBlock';

const bem = defineBlock('WordLaddersExcludedInput');

const nonChars = /[^a-z\n]/g;
const normalizeValue = (event) => event.target.value.toLowerCase().replace(nonChars, '');

const WordLaddersExcludedInput = ({
  value,
  setValue
}) => (
  <TextField
    id={bem()}
    className={bem()}
    label="Excluded words"
    helperText="Enter 1 word per line"
    value={value}
    multiline
    rows={5}
    variant="filled"
    sx={{
      width: 382,
      '& .MuiFilledInput-root': {
        backgroundColor: '#f2f2f2',
        '&:hover, &.Mui-focused': {
          backgroundColor: '#f2f2f2'
        }
      }
    }}
    onChange={(event) => { setValue(normalizeValue(event)); }}
  />
);

WordLaddersExcludedInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default WordLaddersExcludedInput;
