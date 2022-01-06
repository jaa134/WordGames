import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import defineBlock from '../../../utils/defineBlock';
import { MAX_BOARD_SIZE } from './BoggleGameEngine';

const bem = defineBlock('BogglePuzzleInput');

const nonChars = /[^a-z\n]/g;
const multiNewLine = /[\n]+/g;
const normalizeValue = (event) => (
  event.target.value
    .toLowerCase()
    .replace(nonChars, '')
    .replace(multiNewLine, '\n')
    .split('\n')
    .map((rowStr) => rowStr.substring(0, MAX_BOARD_SIZE))
    .slice(0, MAX_BOARD_SIZE)
    .join('\n')
);

const BogglePuzzleInput = ({
  value,
  setValue
}) => (
  <TextField
    id={bem()}
    className={bem()}
    label="Puzzle grid"
    helperText={`Enter one row per line (up to ${MAX_BOARD_SIZE}x${MAX_BOARD_SIZE})`}
    value={value}
    multiline
    rows={value.split('\n').length}
    variant="filled"
    inputProps={{ spellCheck: 'false' }}
    sx={{
      width: 382,
      '& .MuiFilledInput-root': {
        backgroundColor: '#ffffff',
        '&:hover, &.Mui-focused': {
          backgroundColor: '#ffffff'
        }
      },
      '& textarea': {
        fontFamily: 'monospace',
        letterSpacing: '1rem'
      }
    }}
    onChange={(event) => { setValue(normalizeValue(event)); }}
  />
);

BogglePuzzleInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default BogglePuzzleInput;
