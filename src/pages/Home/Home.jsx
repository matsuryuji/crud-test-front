import React from 'react';
import { Button, Typography } from '@/components/core';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <div className='flex flex-col items-center justify-around h-[50vh]'>
      <Typography sx={{fontSize: '40px', color: '#000'}}>Matsu CRUD</Typography>
      <Button component={Link} to={`/lista-de-usuario`} variant="contained" sx={{backgroundColor: '#48FFBD', color: '#191919', width:'300px', height:'60px' }} >Acessar a tabela</Button>
    </div>
    </>
  );
}
