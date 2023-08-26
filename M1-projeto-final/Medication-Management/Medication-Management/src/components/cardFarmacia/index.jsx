import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CardFarmacia({ farmaciaData }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {farmaciaData.nomeFantasia}
                </Typography>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    Razão Social:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.razaoSocial}
                    </Typography>
                    <Typography color="text.secondary" sx={{ marginLeft:2, fontWeight: 'bold', marginRight: '8px' }}>
                    CNPJ:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.cnpj}
                    </Typography>
                </div>


                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    E-mail:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.email}
                    </Typography>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    Telefone:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.telefone}
                    </Typography>
                    <Typography color="text.secondary" sx={{ marginLeft:2, fontWeight: 'bold', marginRight: '8px' }}>
                    Celular:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.celular}
                    </Typography>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    CEP:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.cep}
                    </Typography>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    Logradouro:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.logradouro}
                    </Typography>
                    <Typography color="text.secondary" sx={{ marginLeft:2, fontWeight: 'bold', marginRight: '8px' }}>
                    Número:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.numero}
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    Bairro:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.bairro}
                    </Typography>
                    <Typography color="text.secondary" sx={{ marginLeft:2, fontWeight: 'bold', marginRight: '8px' }}>
                    Cidade:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.cidade}
                    </Typography>
                    <Typography color="text.secondary" sx={{ marginLeft:2, fontWeight: 'bold', marginRight: '8px' }}>
                    Estado:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.estado}
                    </Typography>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    Complemento:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.complemento}
                    </Typography>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography color="text.secondary" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                    Latitude:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.latitude}
                    </Typography>
                    <Typography color="text.secondary" sx={{ marginLeft:2, fontWeight: 'bold', marginRight: '8px' }}>
                    Longitude:
                    </Typography>
                    <Typography color="text.secondary">
                        {farmaciaData.longitude}
                    </Typography>
                </div>

            </CardContent>
        </Card>
    );
}

export { CardFarmacia };
