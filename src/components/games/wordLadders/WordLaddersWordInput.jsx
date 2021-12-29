import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import defineBlock from '../../../utils/defineBlock';

const bem = defineBlock('WordLaddersWordInput');

const nonChars = /[^a-z]/g;
const normalizeValue = (event) => event.target.value.toLowerCase().replace(nonChars, '');

const WordLaddersWordInput = ({
  index,
  value,
  setValue
}) => (
  <TextField
    id={bem(index)}
    className={bem()}
    label={`Word ${index}`}
    value={value}
    type="search"
    variant="filled"
    sx={{ width: 382, input: { backgroundColor: '#ffffff' } }}
    onChange={(event) => { setValue(normalizeValue(event)); }}
  />
);

WordLaddersWordInput.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default WordLaddersWordInput;
