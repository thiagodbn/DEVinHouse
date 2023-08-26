import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Button from '@mui/material/Button';


//Componet card Medicamento

function CardMedicamento({ medicamentoData, onDelete }) {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    //para deletar chamda onDelete passando o medicamentoData
    const handleDeleteClick = () => {
        onDelete(medicamentoData); 
      };


        return (
        <Card>
            <CardContent>
                
                <Typography variant="h5" component="div">
                 { medicamentoData.nomeMedicamento}
                </Typography>


                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    Dosagem:
                    </Typography>
                    <Typography color="text.secondary">
                        {medicamentoData.dosagem}
                    </Typography>
                </div>

                <Accordion expanded={expanded}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        onClick={handleExpandClick}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography>Mais informações</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        
<div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    Nome Medicamento:
                    </Typography>
                    <Typography color="text.secondary">
                        {medicamentoData.nomeMedicamento}
                    </Typography>

                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    Laboratorio:
                    </Typography>
                    <Typography color="text.secondary">
                        {medicamentoData.nomeLaboratorio}
                    </Typography>

                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    Preço Unitario:
                    </Typography>
                    <Typography color="text.secondary">
                        {medicamentoData.precoUnitario}
                    </Typography>

                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    Tipo de Medicamento:
                    </Typography>
                    <Typography color="text.secondary">
                        {medicamentoData.tipoMedicamento}
                    </Typography>
                </div>


                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    Descrição:
                    </Typography>
                    <Typography color="text.secondary">
                        {medicamentoData.descricao}
                    </Typography>
                </div>
                <div>
                <Button onClick={handleDeleteClick}>Apagar</Button>
                </div>

                    </AccordionDetails>
                </Accordion>



                


            </CardContent>
        </Card>
    );
}

export { CardMedicamento };
