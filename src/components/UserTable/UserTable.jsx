import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@/components/core';
import { Link } from 'react-router-dom';
import { setIdUser } from '@/store/user/userSlice';
import { useDispatch } from 'react-redux';
import { useDeleteUserMutation } from '@/store/user/userService';

export default function UserTable({ users, handleCount }) {
  const dispatch = useDispatch();

  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteUser = (id) => {
    deleteUser(id);
    handleCount();
  };

  return (
    <TableContainer>
      <Table
        sx={{ minHeight: '100px', maxWidth: '1800px', backgroundColor: '#363636', borderRadius: '8px' }}
        size='medium'
      >
        <TableHead>
          <TableRow sx={{ 'td, th': { borderColor: '#48FFBD', color: '#ffffff' } }}>
            <TableCell>Nome</TableCell>
            <TableCell align='left'>CPF</TableCell>
            <TableCell align='left'>Email</TableCell>
            <TableCell align='left'>Telefone</TableCell>
            <TableCell align='left'>Placa</TableCell>
            <TableCell align='center'>Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user._id}
              sx={{
                'td, th': { borderColor: '#48FFBD', color: '#ffffff' },
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell align='left'>{user.nome}</TableCell>
              <TableCell align='left'>{user.cpf}</TableCell>
              <TableCell align='left'>{user.email}</TableCell>
              <TableCell align='left'>{user.telefone}</TableCell>
              <TableCell align='left'>{user.placaCarro}</TableCell>
              <TableCell align='center' padding='checkbox'>
                <div className='flex flex-row justify-center'>
                  <Button
                    onClick={() => dispatch(setIdUser(user._id))}
                    component={Link}
                    to={`/editar-usuario/${user._id}`}
                    variant='contained'
                    sx={{ width: '50%', color: '#fff' }}
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => handleDeleteUser(user._id)}
                    variant='contained'
                    sx={{
                      width: '50%',
                      margin: '0px 20px 0px 12px',
                      color: '#fff',
                      backgroundColor: 'red',
                      '&:hover': { backgroundColor: 'red', opacity: '0.8' },
                    }}
                  >
                    Deletar
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
