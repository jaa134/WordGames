import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import defineBlock from '../../utils/defineBlock';
import './WordListFileSelect.scss';

const bem = defineBlock('WordListFileSelect');

export const listSizes = {
  SMALL: 'Small',
  MEDIUM: 'Medium',
  LARGE: 'Large',
  ALL: 'All'
};

export const importWordList = (size) => {
  let importPromise = null;
  if (size === listSizes.SMALL) {
    importPromise = import(/* webpackChunkName: 'wordList_x0' */ '../../assets/json/wordList_x0.json');
  } else if (size === listSizes.MEDIUM) {
    importPromise = import(/* webpackChunkName: 'wordList_x1' */ '../../assets/json/wordList_x1.json');
  } else if (size === listSizes.LARGE) {
    importPromise = import(/* webpackChunkName: 'wordList_x2' */ '../../assets/json/wordList_x2.json');
  } else if (size === listSizes.ALL) {
    importPromise = import(/* webpackChunkName: 'wordList_x3' */ '../../assets/json/wordList_x3.json');
  } else {
    console.error('List size not recognized');
  }
  return importPromise;
};

const WordListFileSelect = ({
  value,
  onChange
}) => (
  <FormControl
    className={bem()}
    variant="filled"
    sx={{
      width: 276,
      '& .MuiFilledInput-root': {
        backgroundColor: '#ffffff',
        '& .MuiFilledInput-input': {
          backgroundColor: '#ffffff',
          '&:hover, &.Mui-focused': {
            backgroundColor: '#ffffff'
          }
        }
      }
    }}
  >
    <InputLabel id={bem('label')}>List size</InputLabel>
    <Select
      labelId={bem('label')}
      id={bem('select')}
      value={value}
      onChange={onChange}
    >
      <MenuItem value={listSizes.SMALL}>
        <span className={bem('size-name')}>{listSizes.SMALL}</span>
        <span className={bem('size-details')}>0.1 MB - 10k words</span>
      </MenuItem>
      <MenuItem value={listSizes.MEDIUM}>
        <span className={bem('size-name')}>{listSizes.MEDIUM}</span>
        <span className={bem('size-details')}>0.7 MB - 86k words</span>
      </MenuItem>
      <MenuItem value={listSizes.LARGE}>
        <span className={bem('size-name')}>{listSizes.LARGE}</span>
        <span className={bem('size-details')}>3.4 MB - 274k words</span>
      </MenuItem>
      <MenuItem value={listSizes.ALL}>
        <span className={bem('size-name')}>{listSizes.ALL}</span>
        <span className={bem('size-details')}>4.6 MB - 370k words</span>
      </MenuItem>
    </Select>
  </FormControl>
);

WordListFileSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default WordListFileSelect;
