import React from "react";
import { Button, Modal, TextField } from "@/components/core";
import { useFormik } from "formik";
import { USER_SCHEMA } from "../../schema/schema";
import InputMask from "react-input-mask";
import { useCreateUserMutation } from "@/store/user/userService";

const UserFormCreate = () => {
  const [createUser] = useCreateUserMutation();

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      age:  '',
    },
    validationSchema: USER_SCHEMA,
    onSubmit: (values) => {
      console.log(values);
      createUser(values);
      window.location.href = '/lista-de-usuario';
    },
  });

  return(
      <>
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
      </>
  );
};

export default UserFormCreate;