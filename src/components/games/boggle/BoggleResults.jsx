import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import defineBlock from '../../../utils/defineBlock';
import './BoggleResults.scss';

const bem = defineBlock('BoggleResults');

const BoggleResults = ({
  word1,
  word2,
  excludedWords,
  listSize,
  numWordsWithLength,
  numWordsUsed,
  solution
}) => (
  <div className={bem()}>
    <Typography variant="h4" gutterBottom component="div">
      Results
    </Typography>
    <div className={bem('layout')}>
      <div className={bem('words')}>
        <TextField
          id={bem('word-1')}
          label="Word 1"
          value={word1}
          variant="filled"
          fullWidth
          InputProps={{ readOnly: true }}
        />
        <div className={bem('arrows')}>
          <ArrowDownwardIcon />
          <ArrowUpwardIcon />
        </div>
        <TextField
          id={bem('word-2')}
          label="Word 2"
          value={word2}
          variant="filled"
          fullWidth
          InputProps={{ readOnly: true }}
        />
        <TextField
          id={bem('excluded-words')}
          className={bem('excluded-words')}
          label="Excluded words"
          value={excludedWords.replace(/\n+/g, '\n')}
          multiline
          rows={5}
          variant="filled"
          fullWidth
          InputProps={{ readOnly: true }}
        />
      </div>

      <div className={bem('solution')}>
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
              id={bem('num-length-words')}
              label={`# of ${word1.length} letter words`}
              value={numWordsWithLength}
              variant="filled"
              InputProps={{ readOnly: true }}
            />
            <TextField
              id={bem('num-words-used')}
              label="# words used"
              value={numWordsUsed}
              variant="filled"
              InputProps={{ readOnly: true }}
            />
            {solution.length > 0 && (
              <TextField
                id={bem('steps-to-complete')}
                label="Steps to complete"
                value={solution.length - 1}
                variant="filled"
                InputProps={{ readOnly: true }}
              />
            )}
          </div>
        </div>
        <div className={bem('info')}>
          <Typography variant="h6" gutterBottom component="div">
            Solution
          </Typography>
          {solution.length === 0
            ? (
              <Alert severity="info">
                <AlertTitle>No results</AlertTitle>
                We could not find any matches for the configured game board
              </Alert>
            )
            : (
              <div className={bem('list')}>
                {solution.map((word, i) => (
                  <Fragment key={word}>
                    {i > 0 && <ArrowForwardIcon />}
                    <Chip label={word} />
                  </Fragment>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>

  </div>
);

BoggleResults.propTypes = {
  word1: PropTypes.string.isRequired,
  word2: PropTypes.string.isRequired,
  excludedWords: PropTypes.string.isRequired,
  listSize: PropTypes.string.isRequired,
  numWordsWithLength: PropTypes.number.isRequired,
  numWordsUsed: PropTypes.number.isRequired,
  solution: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default BoggleResults;
