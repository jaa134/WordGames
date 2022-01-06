import React from 'react';
import PropTypes from 'prop-types';
import defineBlock from '../../../utils/defineBlock';
import {
  EMPTY_GAME_CHAR,
  getPuzzleGrid
} from './BoggleGameEngine';
import './BoggleGameBoard.scss';

const bem = defineBlock('BoggleGameBoard');

const CELL_SIZE = 40;
const BORDER_SIZE = 2;
const getPosition = (pos) => (
  BORDER_SIZE + (CELL_SIZE / 2) + (pos * (CELL_SIZE + BORDER_SIZE))
);

const BoggleGameBoard = ({
  puzzle,
  path
}) => (
  <div className={bem()}>
    {!!path && (
      <svg className={bem('path')}>
        {path.map((curPoint, i) => {
          const nextPoint = path[i + 1];
          return nextPoint && (
            <line
              key={`${curPoint.row}-${curPoint.col}-${nextPoint.row}-${nextPoint.col}`}
              x1={getPosition(curPoint.col)}
              y1={getPosition(curPoint.row)}
              x2={getPosition(nextPoint.col)}
              y2={getPosition(nextPoint.row)}
            />
          );
        })}
      </svg>
    )}
    {getPuzzleGrid(puzzle).map((row, i) => (
      <div
        key={`${row.str}-${i}`}
        className={bem('row')}
        style={{ gridTemplateColumns: `repeat(${row.arr.length}, 1fr)` }}
      >
        {row.arr.map((letter, k) => {
          const isEmptyCell = letter === EMPTY_GAME_CHAR;
          return (
            <div
              key={`${letter}-${k}`}
              className={bem('cell', { empty: isEmptyCell })}
            >
              {!isEmptyCell && letter}
            </div>
          );
        })}
      </div>
    ))}
  </div>
);

BoggleGameBoard.propTypes = {
  puzzle: PropTypes.string.isRequired,
  path: (
    PropTypes.arrayOf(
      PropTypes.shape({
        row: PropTypes.number.isRequired,
        col: PropTypes.number.isRequired
      }).isRequired
    )
  )
};

BoggleGameBoard.defaultProps = {
  path: null
};

export default BoggleGameBoard;
