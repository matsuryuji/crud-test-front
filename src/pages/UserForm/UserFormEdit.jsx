import React, { useState } from "react";
import { Button, Modal, TextField } from "@/components/core";
import { useFormik } from "formik";
import { USER_SCHEMA } from "../../schema/schema";
import InputMask from "react-input-mask";
import { useGetUserQuery } from "@/store/user/userService";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useUpdateUserMutation } from "@/store/user/userService";

const UserFormEdit = () => {
  const id = useSelector(state => state.user.idUser)

  const { data, error, isLoading, isSuccess } = useGetUserQuery(id);

  const [editUser] = useUpdateUserMutation();

  useEffect(() => {
    if(isSuccess){
    formik.setValues({
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      phone:  data.phone ,
      age: data.age,
    })
    };
  }, [data])
  
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email:'',
      phone: '',
      age:'',
    },
    validationSchema: USER_SCHEMA,
    enableReinitialize: true,
    onSubmit: (values) => {
      editUser({ body: values, id: id });
      window.location.href = '/lista-de-usuario';
    },
  });

  return(
    <>
    {isSuccess ? <>
    <div className="flex flex-col h-[100vh] justify-center  mx-[100px]">
    <form onSubmit={formik.handleSubmit}>
    <TextField
        name="name"
        label="Nome"
        fullWidth         
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
    />
          <div className="my-[40px]">
    <TextField 
        name="lastName"
        label="Sobrenome"
        fullWidth          
        value={formik.values.lastName}
        onChange={formik.handleChange}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
    />
    </div>
    <TextField
        name="email"
        label="Email"
        fullWidth            
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
    />
    <div className="my-[40px]">
      <InputMask
        mask="(99)99999-9999"
        disabled={false}
        onChange={formik.handleChange}
        value={formik.values.phone}
        maskChar=""
        >
         {() => <TextField           
          name="phone"
          label="Telefone"
          fullWidth            
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone} />}
      </InputMask>
    </div>
    <TextField
        name="age"
        label="Idade"
        fullWidth            
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
    />

    <Button sx={{marginTop: '20px'}} variant="contained" fullWidth type="submit">Confirmar</Button>
    </form>
    </div>
    </>:<></>}
    </>
);
};

export default UserFormEdit;