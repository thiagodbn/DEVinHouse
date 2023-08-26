import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/main";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function AboutMe() {
  return (
    <>
      <Header />
      <Main>
        <p>About Me</p>

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 230 }}
        image="https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-ylaMhT3P0JWH7Fx8rXH4gF_WYloPvvj_mPx_PQiMHYpluThAb9txsEsiRwW4hVrfeBwmRQ9oHAcdv06-BFVtIr6sq-=w1920-h963"
        title="Thiago D. B. Noronha"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Thiago D. B. Noronha
        </Typography>
        <Typography variant="body2" color="text.secondary">
        💻 Full-stack student <br/>
        👷 Civil Engineer <br/>
        👮Public Security Technologist 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contato</Button>
        
      </CardActions>
    </Card>

      </Main>
      <Footer />
    </>
  );
}

export { AboutMe };
