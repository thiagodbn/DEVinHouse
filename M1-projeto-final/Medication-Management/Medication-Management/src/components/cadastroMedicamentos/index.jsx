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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



 //Cadastro medicamento

function CadastroMedicamentos() {
    const [medicamentoData, setMedicamentoData] = React.useState({
      nomeMedicamento: '',
      nomeLaboratorio: '',
      dosagem: '',
      descricao: '',
      precoUnitario: '',
      tipoMedicamento: 'Medicamento controlado',
      });

      
      const limparCampos = () => {
        setMedicamentoData({
            nomeMedicamento: '',
            nomeLaboratorio: '',
            dosagem: '',
            descricao: '',
            precoUnitario: '',
            tipoMedicamento: '',
        });
    };





      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMedicamentoData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      
        const handleCadastro = () => {


          //Verifica se os campos estão preenchidos
          if (
            !medicamentoData.nomeMedicamento ||
            !medicamentoData.nomeLaboratorio ||
            !medicamentoData.dosagem ||
            !medicamentoData.precoUnitario
        ) { alert('Por favor, preencha todos os campos obrigatórios.');
            return;}


          //Verifica se o Preço é um numero

          if (isNaN(parseFloat(medicamentoData.precoUnitario))) {
            alert('O campo Preço Unitário deve ser um número válido.');
            return;
        }


            // Verifica se o nome já está salvo no localStorage
            if (verificaNomeLocalStorage(medicamentoData.nomeMedicamento)) {
                alert('Este Nome já está cadastrado.');
                return;
            }
    
            // Recupera/inicializa os dados do localStorage
            const storedDataM = JSON.parse(localStorage.getItem('medicamento')) || [];
    
            // Adiciona o novo cadastro
            storedDataM.push(medicamentoData);
    
            // Armazena atualizada no localStorage
            localStorage.setItem('medicamento', JSON.stringify(storedDataM));
    
            // Exibe alert
            alert('Cadastro realizado com sucesso!');
            console.log(medicamentoData);


             // Limpa os campos
            limparCampos();
        };
    
        // Verifica se o nomeMedicamento já está registrado no localStorage
        const verificaNomeLocalStorage = (nomeMedicamento) => {
            const storedDataM = JSON.parse(localStorage.getItem('medicamento')) || [];
            return storedDataM.some((item) => item.nomeMedicamento === nomeMedicamento);

       
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
          id="nomeMedicamento"
          label="Nome do Medicamento"
          type="text"
          value={medicamentoData.nomeMedicamento}
          name="nomeMedicamento"
          onChange={handleInputChange}
        />
              <TextField
          required
          id="nomeLaboratorio"
          label="Nome do Laboratório"
          type="text"
          name="nomeLaboratorio"
          value={medicamentoData.nomeLaboratorio}
          onChange={handleInputChange}
        />
              <TextField
          required
          id="dosagem"
          label="Dosagem do medicamento"
          type="text"
          name="dosagem"
          value={medicamentoData.dosagem}
          onChange={handleInputChange}
        />

        <TextField
          required
          id="precoUnitario"
          label="Preço unitário do medicamento"
          type="price"
          name="precoUnitario"
          value={medicamentoData.precoUnitario}
          onChange={handleInputChange}
        />


      <div>
       <FormControl>
           <InputLabel id="tipoMedicamento-label">Tipo do medicamento</InputLabel>
           <Select
              labelId="tipoMedicamento-label"
               id="tipoMedicamento"
               name="tipoMedicamento"
               value={medicamentoData.tipoMedicamento}
               onChange={handleInputChange}
           >
               <MenuItem value="Medicamento controlado">Medicamento controlado</MenuItem>
               <MenuItem value="Medicamento comum">Medicamento comum</MenuItem>
           </Select>
       </FormControl>
        </div>

              <TextField
          multiline
          rows={4}
          id="descricao"
          label="Descrição do medicamento"
          type="text"
          name="descricao"
          value={medicamentoData.descricao}
          onChange={handleInputChange}
          
          
        />





        
             
</div>
        <Button variant="contained" onClick={handleCadastro}>Cadastrar</Button>
        <Button variant="outlined" onClick={limparCampos}>Limpar Tudo</Button>
        
</Box>



</>
)
}

    export { CadastroMedicamentos };