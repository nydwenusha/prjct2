import logo from './logo.svg';
import './App.css';
import { Navbar} from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import RestaurantDetails from './component/Restaurant/RestaurantDetails.jsx';
//import { Home } from '@mui/icons-material';
//import { ThemeProvider } from 'styled-components';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRoute from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action.js';
import { LightMode } from '@mui/icons-material';


function App() { 
  const dispatch = useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector((store)=>store)

  /*useEffect(()=>{
dispatch(getUser(auth.jwt || jwt));
  },[auth.jwt]);
  */

  useEffect(() => {
    if (!auth.jwt && jwt) {
      dispatch(getUser(jwt));
    }
  }, [auth.jwt, jwt, dispatch]);
  

  return (
     //<ThemeProvider theme={darkTheme}>
         

     //</ThemeProvider>   
     <>
     <CssBaseline/> 
         
        <CustomerRoute/> 
        </>

  );
}

export default App;
