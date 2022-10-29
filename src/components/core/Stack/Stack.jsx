import MuiStack from '@mui/material/Stack';
import React from 'react';

const Stack = ({ children, gap, mt, sx}) => {
  return <MuiStack sx={sx} gap={gap} mt={mt} >{children}</MuiStack>;
};

export default Stack;
