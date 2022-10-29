import MuiTypography from '@mui/material/Typography';
import React from 'react';

const Typography = ({ children, sx }) => {
  return <MuiTypography sx={sx}>{children}</MuiTypography>;
};

export default Typography;
