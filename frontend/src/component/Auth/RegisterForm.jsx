import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button,FormControl,InputLabel,TextField, Typography } from '@mui/material'
import { Formik, Form, Field } from 'formik';
import { Select, MenuItem } from '@mui/material'; // Adjust the path based on your setup
import { useDispatch } from 'react-redux';
import { registerUser } from '../State/Authentication/Action.js';


const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("form values", values);
    dispatch(registerUser({ userData: values, navigate }));
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="fullName"
            label="full name"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="password"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
          />

          <Field
            fullWidth
            margin="normal"
            as={Select}
            labelId="role-simple-select-label"
            id="demo-simple-select"
            name="role"
            // value={age}

            //onChange={handleChange}
          >
            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>
              Restaurant Owner
            </MenuItem>
          </Field>

          <Button
            sx={{ mt: 2, padding: "lrem" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            register
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        if have an account already?
        <Button size="small" onClick={() => navigate("/account/login")}>
          login
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
