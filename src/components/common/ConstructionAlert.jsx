import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const ConstructionAlert = () => (
  <Alert severity="info">
    <AlertTitle>Under construction</AlertTitle>
    Development for this feature is underway. Just give me a little while longer...
  </Alert>
);

export default ConstructionAlert;
