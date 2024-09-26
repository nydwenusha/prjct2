import { Modal } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "../Cart/Cart";
// In Auth.jsx
import Box from "@mui/material/Box"; // If you're using Material-UI, for example
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

// Define the modal style inside the Auth component or import it from another file
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnClose = () => {
    navigate("/");
  };
  return (
    <>
      <Modal
        onClose={handleOnClose}
        open={
          location.pathname === "/account/register" ||
          location.pathname === "/account/login"
        }
      >
        <Box sx={modalStyle}>
          {location.pathname === "/account/register" ? (
            <RegisterForm />
          ) : (
            <LoginForm />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Auth;
