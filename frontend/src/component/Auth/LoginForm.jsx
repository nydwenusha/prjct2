//import { Password } from '@mui/icons-material'
import { Button,TextField, Typography } from '@mui/material'
import React from 'react'
import { Formik } from 'formik';
import { Form, Field } from 'formik';
//import { TextField } from 'formik-material-ui'; // If you're using Formik's MUI integration
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser} from '../State/Authentication/Action';

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(loginUser({ userData: values, navigate }));
  };


  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>

     
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {() => (
          <Form>
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
              type="password" // ensuring input type is password
            />
            <Button
              sx={{ mt: 2, padding: "lrem" }}
              fullWidth
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don't have an account?
        <Button size="small" onClick={() => navigate("/account/register")}>
          register
        </Button>
      </Typography>
    </div>
  ); 
};

export default LoginForm;
