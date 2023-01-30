import React from 'react';
import { Button, Modal, TextField } from '@/components/core';
import { useFormik } from 'formik';
import { USER_SCHEMA } from '../../schema/schema';
import InputMask from 'react-input-mask';
import { useCreateUserMutation } from '@/store/user/userService';

const UserFormCreate = () => {
  const [createUser] = useCreateUserMutation();

  const formik = useFormik({
    initialValues: {
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      placaCarro: '',
    },
    validationSchema: USER_SCHEMA,
    onSubmit: (values) => {
      console.log(values);
      createUser(values);
      window.location.href = '/lista-de-usuario';
    },
  });

  return (
    <>
      <div className='flex flex-col h-[100vh] justify-center  mx-[100px]'>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name='nome'
            label='Nome'
            fullWidth
            value={formik.values.nome}
            onChange={formik.handleChange}
            error={formik.touched.nome && Boolean(formik.errors.nome)}
            helperText={formik.touched.nome && formik.errors.nome}
          />
          <div className='my-[40px]'>
            <InputMask mask='999.999.999-99' disabled={false} onChange={formik.handleChange} maskChar=''>
              {() => (
                <TextField
                  name='cpf'
                  label='CPF'
                  fullWidth
                  error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                  helperText={formik.touched.cpf && formik.errors.cpf}
                />
              )}
            </InputMask>
          </div>
          <TextField
            name='email'
            label='Email'
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <div className='my-[40px]'>
            <InputMask mask='(99)99999-9999' disabled={false} onChange={formik.handleChange} maskChar=''>
              {() => (
                <TextField
                  name='telefone'
                  label='Telefone'
                  fullWidth
                  error={formik.touched.telefone && Boolean(formik.errors.telefone)}
                  helperText={formik.touched.telefone && formik.errors.telefone}
                />
              )}
            </InputMask>
          </div>
          <TextField
            name='placaCarro'
            label='Placa do Carro'
            fullWidth
            value={formik.values.placaCarro}
            onChange={formik.handleChange}
            error={formik.touched.placaCarro && Boolean(formik.errors.placaCarro)}
            helperText={formik.touched.placaCarro && formik.errors.placaCarro}
          />

          <Button sx={{ marginTop: '20px' }} variant='contained' fullWidth type='submit'>
            Confirmar
          </Button>
        </form>
      </div>
    </>
  );
};

export default UserFormCreate;
