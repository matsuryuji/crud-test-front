import React, { useEffect, useState } from 'react';
import { Button, Skeleton, Typography } from '@/components/core';
import UserTable from '@/components/UserTable';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllUserQuery } from '@/store/user/userService';

export default function UserList() {

  const { data, error, isLoading, isSuccess } = useGetAllUserQuery();
  
  console.log(data)
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([]);

  return (
    <>
      <div className='flex flex-col items-center justify-center h-[100vh] mx-[100px]'>
        <Typography sx={{ fontSize: '40px', color: '#000', marginBottom: '60px' }}>
          Lista de usuário
        </Typography>
        {isSuccess ? (
          <>
        <UserTable users={data} handleCount={() => setCount(prev => prev+1)}/>
        <Button component={Link} to={`/criar-usuario`} variant="contained" sx={{backgroundColor: '#48FFBD', color: '#191919', width:'300px', height:'60px', marginTop: '18px', display: 'flex', alignSelf: 'self-start'}}>Adicionar usuário</Button>
       </> )
       :  <><Skeleton sx={{backgroundColor: '#121212'}} animation="wave" variant="rectangular" height="400px" width="100%"/></>
       }
      </div>
    </>
  );
}
