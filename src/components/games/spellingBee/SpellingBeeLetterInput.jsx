import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import defineBlock from '../../../utils/defineBlock';

const bem = defineBlock('SpellingBeeInput');

export const DEFAULT_CHAR = '?';
const nonChars = /[^a-z]/g;
const normalizeValue = (event) => event.target.value.toLowerCase().replace(nonChars, '').slice(-1);
const getUpdatedLetters = (letters, event, i) => {
  const result = [...letters];
  result[i] = normalizeValue(event) || DEFAULT_CHAR;
  return result;
};

export const RequiredLetterInput = ({ requiredLetter, setRequiredLetter }) => (
  <TextField
    id={bem('requiredLetter')}
    value={requiredLetter}
    variant="filled"
    hiddenLabel
    sx={{ input: { textAlign: 'center', backgroundColor: '#ffdf6b' } }}
    onFocus={(event) => { event.target.select(); }}
    onChange={(event) => { setRequiredLetter(normalizeValue(event)); }}
  />
);

RequiredLetterInput.propTypes = {
  requiredLetter: PropTypes.string.isRequired,
  setRequiredLetter: PropTypes.func.isRequired
};

export const OptionalLetterInput = ({ i, optionalLetters, setOptionalLetters }) => (
  <TextField
    id={bem(`optonalLetter${i}`)}
    value={optionalLetters[i]}
    variant="filled"
    hiddenLabel
    sx={{ input: { textAlign: 'center', backgroundColor: '#ffffff' } }}
    onFocus={(event) => { event.target.select(); }}
    onChange={(event) => { setOptionalLetters(getUpdatedLetters(optionalLetters, event, i)); }}
  />
);

OptionalLetterInput.propTypes = {
  i: PropTypes.number.isRequired,
  optionalLetters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setOptionalLetters: PropTypes.func.isRequired
};
