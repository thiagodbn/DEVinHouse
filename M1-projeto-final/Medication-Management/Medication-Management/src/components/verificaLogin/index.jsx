import { VerificaLoginStyled } from "./styled";
import { Link, useNavigate } from "react-router-dom";

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



function VerificaLogin() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const navigate = useNavigate();

//teste de email
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  //teste de senha
  function isValidPassword(password) {
    // Verifica se a senha tem pelo menos 8 caracteres
    if (password.length < 8) {
      return false;
    }
  
    // Verifica se a senha contém pelo menos um número
    if (!/\d/.test(password)) {
      return false;
    }
  
    // Verifica se a senha contém pelo menos uma letra (maiúscula ou minúscula)
    if (!/[a-zA-Z]/.test(password)) {
      return false;
    }
  
    return true;
  }

    const handleMouseDownPassword = (event) => {
      event.preventDefault()}

    const handleLogin = () => {
        if (!isValidEmail(email)) {
            //console.log('Email inválido');
            alert('Email inválido')
            return;
          }
        if (!isValidPassword(password)) {
            alert('Senha inválida. A senha deve ter pelo menos 8 caracteres e conter números e letras.');
            return;
          }

        // lógica de verificação de login
        if (email === 'usuario@example.com' && password === '12345abc') {
            alert('senha valida OK')
            navigate ('/logado'); // Navega para a página /logado
            
        } else {
            alert('Email ou senha incorretos');
        }

     console.log('Email:', email);
     console.log('Senha:', password);
    }

  return (
<VerificaLoginStyled>
        
        
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>

      <TextField
          label="Email de Login"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">Login:</InputAdornment>,
          }}
        />

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
             value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        
      </div>

          <Button variant="contained" onClick={handleLogin}>Entrar</Button>
          <Button variant="outlined" onClick={()=>(alert("não implementado ainda"))}>Nova Conta</Button>
          <Button variant="outlined" onClick={()=>(alert("não implementado ainda"))}>Esqueci minha senha</Button>

    </Box>
  

        
      </VerificaLoginStyled>
  );
}

export { VerificaLogin };
