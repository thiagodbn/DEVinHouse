import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { VerificaLogin } from "../../components/verificaLogin";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Login() {

    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault()}

    return (
        
        <>
        <Header />
        <Main>
          <p>Login</p>
          <p>i.	E-Mail (obrigatório) ii.	Senha (obrigatório) </p>
          <p>Validar email e senha e direcionar pagina Mapa</p>
          

        <VerificaLogin/>    

        </Main>
        <Footer />
      </>
    );
  }
  export { Login};
  