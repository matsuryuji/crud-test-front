import MuiModal from '@mui/material/Modal';
import React from 'react';

const Modal = ({ children, open, onClose}) => {
  return <MuiModal open={open} onClose={onClose} >{children}</MuiModal>;
};

export default Modal;
