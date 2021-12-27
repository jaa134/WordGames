import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const bodyStyles = {
  opacity: '1',
  fill: '#ffffff',
  fillOpacity: '1',
  fillRule: 'nonzero',
  stroke: '#000000',
  strokeWidth: '10',
  strokeLinecap: 'round',
  strokeLinejoin: 'bevel',
  strokeMiterlimit: '4',
  strokeDasharray: 'none',
  strokeOpacity: '1'
};

const standStyle = {
  opacity: '1',
  fill: '#000000',
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

const HangmanIcon = (props) => (
  <SvgIcon {...props} viewBox="70 28 200 200">
    <g transform="translate(0,-796.36219)">
      <g transform="translate(5.1383055,2.0425855)">
        <g transform="translate(258.5,0)">
          <path
            d="m -142.6168,870.06226 a 12.999979,12.999934 0 0 1 13.22976,-12.74035 12.999979,12.999934 0 0 1 12.766,13.205 12.999979,12.999934 0 0 1 -13.18029,12.79151 12.999979,12.999934 0 0 1 -12.81707,-13.15544"
            style={bodyStyles}
          />
          <path
            d="m -129.375,884.50504 -0.0446,62.45536"
            style={bodyStyles}
          />
          <path
            d="m -129.23639,903.11215 29.862633,-9.34391"
            style={bodyStyles}
          />
          <path
            d="m -130.62535,903.11215 -29.86263,-9.34391"
            style={bodyStyles}
          />
          <path
            d="m -129.55392,946.32644 -31.55906,31.37038"
            style={bodyStyles}
          />
        </g>
        <rect
          width="10"
          height="30"
          x="122.81952"
          y="826.53217"
          rx="0"
          ry="0"
          style={standStyle}
        />
        <rect
          width="18"
          height="180"
          x="186.81952"
          y="826.59467"
          rx="0"
          ry="0"
          style={standStyle}
        />
        <rect
          transform="matrix(0,1,-1,0,0,0)"
          width="16.5"
          height="127"
          x="1003.2196"
          y="-234.81952"
          rx="0"
          ry="0"
          style={standStyle}
        />
        <rect
          transform="matrix(0,1,-1,0,0,0)"
          width="11.5"
          height="82"
          x="826.2196"
          y="-204.82001"
          rx="0"
          ry="0"
          style={standStyle}
        />
      </g>
    </g>
  </SvgIcon>
);

export default HangmanIcon;
