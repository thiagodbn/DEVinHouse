import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


 

function CadastroFarmacia() {
    const [farmaciaData, setFarmaciaData] = React.useState({
        razaoSocial: '',
        cnpj: '',
        nomeFantasia: '',
        email: '',
        telefone: '',
        celular: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        complemento: '',
        latitude: '',
        longitude: '',
      });

      
      const handleCEPChange = async () => {
        const cepcheck = /^[0-9]{8}$/; 

        if (!farmaciaData.cep.match(cepcheck)) {
            alert('CEP inválido. Insira um CEP válido com 8 dígitos numéricos.');
            return;
        }
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${farmaciaData.cep}/json/`);
            const data = response.data;

            setFarmaciaData((prevData) => ({
               ...prevData,
                bairro: data.bairro,
                cidade: data.localidade,
                estado: data.uf,
                logradouro: data.logradouro
            }));

       
        } catch (error) {
            console.error('Erro ao buscar endereço:', error);
        }
    };






      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFarmaciaData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

        const handleCadastro = () => {
            // Verifica se o CNPJ já está salvo no localStorage
            if (verificaCnpjLocalStorage(farmaciaData.cnpj)) {
                alert('Este CNPJ já está cadastrado.');
                return;
            }
    
            // Recupera/inicializa os dados do localStorage
            const storedData = JSON.parse(localStorage.getItem('farmacias')) || [];
    
            // Adiciona o novo cadastro
            storedData.push(farmaciaData);
    
            // Armazena atualizada no localStorage
            localStorage.setItem('farmacias', JSON.stringify(storedData));
    
            // Exibe alert
            alert('Cadastro realizado com sucesso!');
            console.log(farmaciaData);


             // Limpa os campos
            limparCampos();
        };
    
        // Verifica se o CNPJ já está registrado no localStorage
        const verificaCnpjLocalStorage = (cnpj) => {
            const storedData = JSON.parse(localStorage.getItem('farmacias')) || [];
            return storedData.some((item) => item.cnpj === cnpj);

       
        };
        
    // Função para limpar os campos chamada pela > handleCadastro <
    const limparCampos = () => {
        setFarmaciaData({
            razaoSocial: '',
            cnpj: '',
            nomeFantasia: '',
            email: '',
            telefone: '',
            celular: '',
            cep: '',
            logradouro: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            complemento: '',
            latitude: '',
            longitude: '',
        });
    };
    


      
return(
<>
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        border: '1px solid #ccc',  
        padding: '20px',           
        borderRadius: '10px',
        margin: '20px',
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField 
          required
          id="razaoSocial"
          label="Razão Social"
          type="text"
          value={farmaciaData.razaoSocial}
          name="razaoSocial"
          onChange={handleInputChange}
        />
              <TextField
          required
          id="cnpj"
          label="CNPJ"
          type="text"
          name="cnpj"
          value={farmaciaData.cnpj}
          onChange={handleInputChange}
        />
              <TextField
          required
          id="nomeFantasia"
          label="Nome Fantasia"
          type="text"
          name="nomeFantasia"
          value={farmaciaData.nomeFantasia}
          onChange={handleInputChange}
        />
              <TextField
          required
          id="email"
          label="E-mail"
          type="email"
          name="email"
          value={farmaciaData.email}
          onChange={handleInputChange}
        />

        <TextField
          
          id="telefone"
          label="Telefone"
          type="tel"
          name="telefone"
          value={farmaciaData.telefone}
          onChange={handleInputChange}
        />
                <TextField
          required
          id="celular"
          label="Celular"
          type="tel"
          name="celular"
          value={farmaciaData.celular}
          onChange={handleInputChange}
        />
        <Box 
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        border: '1px solid #ccc',  
        padding: '2px',           
        borderRadius: '10px',
        margin: '10px',
        }}> 
              <TextField
          required
          id="cep"
          label="CEP"
          type="text"
          value={farmaciaData.cep}
          name="cep"
          onChange={handleInputChange}
        />

        <Button variant="outlined" onClick={handleCEPChange}>Buscar CEP</Button>

              <TextField
          required
          id="logradouro"
          label="Logradouro"
          type="text"
          name="logradouro"
          value={farmaciaData.logradouro}
          onChange={handleInputChange}
        />
              <TextField
          required
          id="numero"
          label="Número"
          type="number"
          name="numero"
          value={farmaciaData.numero}
          onChange={handleInputChange}
        />
              <TextField
          required
          id="bairro"
          label="Bairro"
          type="text"
          name="bairro"
          value={farmaciaData.bairro}
          onChange={handleInputChange}
        />
              <TextField
          required
          id="cidade"
          label="Cidade"
          type="text"
          name="cidade"
          value={farmaciaData.cidade}
          onChange={handleInputChange}
        />
              <TextField
          required
          id="estado"
          label="Estado"
          type="text"
          name="estado"
          value={farmaciaData.estado}
          onChange={handleInputChange}
        />
         <TextField
          
          id="complemento"
          label="Complemento"
          type="text"
          name="complemento"
          value={farmaciaData.complemento}
          onChange={handleInputChange}
        />
        </Box>
        <Box 
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        border: '1px solid #ccc',  
        padding: '2px',           
        borderRadius: '10px',
        margin: '10px',
        }}>
              <TextField
          required
          id="latitude"
          label="Latitude"
          type="number"
          value={farmaciaData.latitude}
          name="latitude"
          onChange={handleInputChange}
        />
              <TextField
          required
          id="longitude"
          label="Longitude"
          type="number"
          value={farmaciaData.longitude}
          name="longitude"
          onChange={handleInputChange}
        />
        </Box>
             
</div>
        <Button variant="contained" onClick={handleCadastro}>Cadastrar</Button>
        <Button variant="outlined" onClick={()=>(alert("não implementado ainda"))}>Limpar Tudo</Button>
        <Button variant="outlined" onClick={()=>(alert("não implementado ainda"))}>Esqueci minha senha</Button>
</Box>



</>
)
}

    export { CadastroFarmacia };