import React, { useEffect, useState } from 'react';
import { Button, Skeleton, Typography, TextField } from '@/components/core';
import UserTable from '@/components/UserTable';
import { Link } from 'react-router-dom';
import { useGetAllUserQuery } from '@/store/user/userService';
import axios from 'axios';

export default function UserList() {
  const { data, error, isLoading, isSuccess } = useGetAllUserQuery();
  const [count, setCount] = useState(0);
  const [lastNumber, setLastNumber] = useState();
  const [filteredData, setFilteredData] = useState(null);

  const findByLastNumber = (e) => {
    setLastNumber(e.target.value);
    axios.get(`${import.meta.env.VITE_APP_BASEURL}` + `consulta/final-placa/${e.target.value}`).then((res)=> {
      setFilteredData(res.data);
    })
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center h-[100vh] mx-[100px]'>
        <Typography sx={{ fontSize: '40px', color: '#000', marginBottom: '60px' }}>Lista de usuário</Typography>
        {isSuccess ? (
          <>
            <TextField
              name='lastNumber'
              label='Busque pelo último número da placa'
              variant='outlined'
              fullWidth
              value={lastNumber}
              onChange={(e) => findByLastNumber(e)}
              sx={{marginBottom: '20px'}}
            />
            <UserTable users={!filteredData || !lastNumber ? data : filteredData} handleCount={() => setCount((prev) => prev + 1)} />
            <Button
              component={Link}
              to={`/criar-usuario`}
              variant='contained'
              sx={{
                backgroundColor: '#48FFBD',
                color: '#191919',
                width: '300px',
                height: '60px',
                marginTop: '18px',
                display: 'flex',
                alignSelf: 'self-start',
              }}
            >
              Adicionar usuário
            </Button>
          </>
        ) : (
          <>
            <Skeleton
              sx={{ backgroundColor: '#121212' }}
              animation='wave'
              variant='rectangular'
              height='400px'
              width='100%'
            />
          </>
        )}
      </div>
    </>
  );
}
