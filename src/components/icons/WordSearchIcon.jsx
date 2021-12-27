import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const puzzleBoxStyle = {
  fill: '#ffffff',
  fillOpacity: '0.2',
  stroke: '#000000',
  strokeWidth: '6px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeMiterlimit: '4px',
  strokeDasharray: 'none',
  strokeDashoffset: '0px',
  strokeOpacity: '1'
};

const puzzleTextStyle = {
  fontSize: '31.68px',
  fontStyle: 'normal',
  fontWeight: 'normal',
  textAlign: 'start',
  textAnchor: 'start',
  fill: '#000000',
  fillOpacity: '1',
  stroke: 'none',
  strokeWidth: '1px',
  strokeLinecap: 'butt',
  strokeLinejoin: 'miter',
  strokeOpacity: '1',
  fontFamily: 'monospace'
};

const answerStyle = {
  fill: 'none',
  fillOpacity: '1',
  stroke: '#ff0000',
  strokeWidth: '6px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeMiterlimit: '4px',
  strokeDasharray: 'none',
  strokeDashoffset: '0px',
  strokeOpacity: '1'
};

const WordSearchIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 180 180">
    <g transform="translate(-63.999992,-371.86218)">
      <rect
        width="165"
        height="170"
        x="71.499992"
        y="379.36218"
        style={puzzleBoxStyle}
      />
      <g transform="translate(0 -5)">
        <text
          x="86.713188"
          y="418.20963"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="418.20963"
          >
            W V E R
          </tspan>
        </text>
        <text
          x="86.713188"
          y="459.23718"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="459.23718"
          >
            R O O A
          </tspan>
        </text>
        <text
          x="86.713188"
          y="500.26471"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="500.26471"
          >
            A C R I
          </tspan>
        </text>
        <text
          x="86.713188"
          y="541.29224"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="541.29224"
          >
            N D O D
          </tspan>
        </text>
      </g>
      <rect
        width="30"
        height="205"
        ry="17.028053"
        x="-220"
        y="341.3866"
        transform="matrix(0.7304425,-0.6829742,0.6829742,0.7304425,0,0)"
        style={answerStyle}
      />
    </g>
  </SvgIcon>
);

export default WordSearchIcon;
