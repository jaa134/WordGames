import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import defineBlock from '../../../utils/defineBlock';

const bem = defineBlock('HangmanDrawing');

const standStyle = {
  opacity: '1',
  fillOpacity: '1',
  fillRule: 'nonzero',
  stroke: 'none',
  strokeWidth: '4',
  strokeLinecap: 'round',
  strokeLinejoin: 'bevel',
  strokeMiterlimit: '4',
  strokeDasharray: 'none',
  strokeOpacity: '1'
};

const bodyStyles = {
  opacity: '1',
  fill: '#ffffff',
  fillOpacity: '0',
  fillRule: 'nonzero',
  strokeWidth: '10',
  strokeLinecap: 'round',
  strokeLinejoin: 'bevel',
  strokeMiterlimit: '4',
  strokeDasharray: 'none',
  strokeOpacity: '1'
};

const standElements = [
  <rect
    key="stand-bottom"
    transform="matrix(0,1,-1,0,0,0)"
    width="16.5"
    height="127"
    x="1000"
    y="-235"
    rx="0"
    ry="0"
  />,
  <rect
    key="stand-middle"
    width="18"
    height="163"
    x="186"
    y="837"
    rx="0"
    ry="0"
  />,
  <rect
    key="stand-top"
    transform="matrix(0,1,-1,0,0,0)"
    width="11.5"
    height="81"
    x="826"
    y="-204"
    rx="0"
    ry="0"
  />,
  <rect
    key="stand-rope"
    width="10"
    height="30"
    x="122"
    y="826"
    rx="0"
    ry="0"
  />
];

const bodyElements = [
  <path
    key="leg-right"
    d="m 127,946.32644 31.55906,31.37038"
  />,
  <path
    key="leg-left"
    d="m 127,946.32644 -31.55906,31.37038"
  />,
  <path
    key="arm-right"
    d="m 127,903.11215 29.862633,-9.34391"
  />,
  <path
    key="arm-left"
    d="m 127,903.11215 -29.86263,-9.34391"
  />,
  <path
    key="torso"
    d="m 127,884.50504 -0.0446,62.45536"
  />,
  <path
    key="head"
    d="m 114,870.06226 a 12.999979,12.999934 0 0 1 13.22976,-12.74035 12.999979,12.999934 0 0 1 12.766,13.205 12.999979,12.999934 0 0 1 -13.18029,12.79151 12.999979,12.999934 0 0 1 -12.81707,-13.15544"
  />
];

const DEFUALT_COLOR = '#bbbbbb';
const FILLED_COLOR = '#000000';

const HangmanDrawing = ({
  numIncorrectLetters,
  ...svgProps
}) => (
  <SvgIcon className={bem()} {...svgProps} viewBox="75 30 195 195">
    <g transform="translate(0,-796.36219)">
      <g transform="translate(5.1383055,2.0425855)">
        {standElements.map((el, i) => (
          React.cloneElement(el, {
            style: {
              ...standStyle,
              fill: i < numIncorrectLetters
                ? FILLED_COLOR
                : DEFUALT_COLOR
            }
          })
        ))}
        {bodyElements.map((el, i) => (
          React.cloneElement(el, {
            style: {
              ...bodyStyles,
              stroke: (standElements.length + bodyElements.length - i) <= numIncorrectLetters
                ? FILLED_COLOR
                : DEFUALT_COLOR
            }
          })
        ))}
      </g>
    </g>
  </SvgIcon>
);

HangmanDrawing.propTypes = {
  numIncorrectLetters: PropTypes.number.isRequired
};

export default HangmanDrawing;
