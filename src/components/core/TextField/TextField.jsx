import MuiTextField from '@mui/material/TextField';
import React from 'react';

const TextField = ({ color,label, sx, variant, onChange, placeholder, defaultValue, value, error, helperText, type, name, fullWidth  }) => {
  return <MuiTextField color={color} label={label} sx={sx} variant={variant} onChange={onChange} placeholder={placeholder} defaultValue={defaultValue} value={value} erro={error} helperText={helperText} type={type} name={name} fullWidth={fullWidth} />;
};

export default TextField;
