import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import defineBlock from '../../../utils/defineBlock';
import PageBase from '../../common/PageBase';
import PageLoading from '../../common/PageLoading';
import PageTitle from '../../common/PageTitle';
import SpellingBeeGameEngine from './SpellingBeeGameEngine';
import SpellingBeeHowToPlay from './SpellingBeeHowToPlay';
import SpellingBeeResults from './SpellingBeeResults';
import {
  DEFAULT_CHAR,
  RequiredLetterInput,
  OptionalLetterInput
} from './SpellingBeeLetterInput';
import './SpellingBeePage.scss';

const bem = defineBlock('SpellingBeePage');

const listSizes = {
  SMALL: 'Small',
  MEDIUM: 'Medium',
  LARGE: 'Large',
  ALL: 'All'
};

const SpellingBeePage = () => {
  const [loading, setLoading] = useState(false);
  const [requiredLetter, setRequiredLetter] = useState(DEFAULT_CHAR);
  const [optionalLetters, setOptionalLetters] = useState(Array(6).fill(DEFAULT_CHAR));
  const [listSize, setListSize] = useState(listSizes.SMALL);
  const [results, setResults] = useState(null);
  const isBoardValid = optionalLetters.every((letter) => !!letter && letter !== DEFAULT_CHAR);
  const solve = () => {
    setLoading(true);
    let importPromise = null;
    if (listSize === listSizes.SMALL) {
      importPromise = import(/* webpackChunkName: 'wordList_x0' */ '../../../assets/json/wordList_x0.json');
    } else if (listSize === listSizes.MEDIUM) {
      importPromise = import(/* webpackChunkName: 'wordList_x1' */ '../../../assets/json/wordList_x1.json');
    } else if (listSize === listSizes.LARGE) {
      importPromise = import(/* webpackChunkName: 'wordList_x2' */ '../../../assets/json/wordList_x2.json');
    } else if (listSize === listSizes.ALL) {
      importPromise = import(/* webpackChunkName: 'wordList_x3' */ '../../../assets/json/wordList_x3.json');
    }

    if (importPromise) {
      importPromise
        .then(({ default: wordList }) => {
          setResults({
            requiredLetter,
            optionalLetters,
            listSize,
            matches: SpellingBeeGameEngine.getMatches(wordList, requiredLetter, optionalLetters)
          });
          setLoading(false);
        });
    } else {
      console.error('List size not recognized');
      setLoading(false);
    }
  };
  return (
    <PageBase className={bem()}>
      <PageTitle text="NYT Spelling Bee" />
      {loading && <PageLoading />}
      <SpellingBeeHowToPlay />
      <div className={bem('game')}>
        <div className={bem('grid')}>
          <ul className={bem('grid-row')} lang="es">
            <li className={bem('grid-cell')}>
              <div className={bem('input-wrapper')}>
                <OptionalLetterInput
                  i={0}
                  optionalLetters={optionalLetters}
                  setOptionalLetters={setOptionalLetters}
                />
              </div>
            </li>
            <li className={bem('grid-cell')}>
              <div className={bem('input-wrapper')}>
                <OptionalLetterInput
                  i={1}
                  optionalLetters={optionalLetters}
                  setOptionalLetters={setOptionalLetters}
                />
              </div>
            </li>
          </ul>
          <ul className={bem('grid-row')} lang="es">
            <li className={bem('grid-cell')}>
              <div className={bem('input-wrapper')}>
                <OptionalLetterInput
                  i={2}
                  optionalLetters={optionalLetters}
                  setOptionalLetters={setOptionalLetters}
                />
              </div>
            </li>
            <li className={bem('grid-cell')}>
              <RequiredLetterInput
                requiredLetter={requiredLetter}
                setRequiredLetter={setRequiredLetter}
              />
            </li>
            <li className={bem('grid-cell')}>
              <div className={bem('input-wrapper')}>
                <OptionalLetterInput
                  i={3}
                  optionalLetters={optionalLetters}
                  setOptionalLetters={setOptionalLetters}
                />
              </div>
            </li>
          </ul>
          <ul className={bem('grid-row')} lang="es">
            <li className={bem('grid-cell')}>
              <div className={bem('input-wrapper')}>
                <OptionalLetterInput
                  i={4}
                  optionalLetters={optionalLetters}
                  setOptionalLetters={setOptionalLetters}
                />
              </div>
            </li>
            <li className={bem('grid-cell')}>
              <div className={bem('input-wrapper')}>
                <OptionalLetterInput
                  i={5}
                  optionalLetters={optionalLetters}
                  setOptionalLetters={setOptionalLetters}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className={bem('spacer')} />
        <div>
          {!isBoardValid && (
            <Alert className={bem('invalid')} severity="warning">
              <AlertTitle>Invalid game board</AlertTitle>
              Make sure all inputs have values
            </Alert>
          )}
          <div className={bem('inputs')}>
            <FormControl className={bem('list-select')} variant="filled" sx={{ width: 276 }}>
              <InputLabel id={bem('list-select-label')}>List size</InputLabel>
              <Select
                labelId={bem('list-select-label')}
                id={bem('list-select-select')}
                value={listSize}
                sx={{ backgroundColor: '#ffffff' }}
                onChange={(event) => { setListSize(event.target.value); }}
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
            <Button
              className={bem('solve')}
              disabled={!isBoardValid}
              variant="contained"
              size="large"
              onClick={solve}
            >
              Solve
            </Button>
          </div>
        </div>
      </div>
      {results && (
        <>
          <Divider />
          <SpellingBeeResults {...results} />
        </>
      )}
    </PageBase>
  );
};

export default SpellingBeePage;
