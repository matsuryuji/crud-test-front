import MuiSkeleton from '@mui/material/Skeleton';
import React from 'react';

const Skeleton = ({ sx,animation, variant, height, width}) => {
  return <MuiSkeleton sx={sx} animation={animation} variant={variant} height={height} width={width}/>;
};

export default Skeleton;
