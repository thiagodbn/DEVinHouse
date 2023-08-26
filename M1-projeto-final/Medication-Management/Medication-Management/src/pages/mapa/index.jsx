import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapaStyled } from "./styled";

function Mapa() {
    const position = [-27.593, -48.562]

    return (
        
        <>
        <Header />
        <Main>
          <p>PAgina Mapa</p>
          <p>um Mapa centralizado e com marcadores de todas as farmácias cadastradas no sistema </p>
          <p>a.	Utilize a React Leaflet</p>
          <p>c.	Ao clicar no marcador, apresentar uma listagem de todas as informações 
            da farmácia que foram cadastradas, como Razão Social, CNPJ, Nome e etc</p>
            
           <MapaStyled> 
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
         <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
         </Marker>
     </MapContainer>
    </MapaStyled> 

        </Main>
        <Footer />
      </>
    );
  }
  export { Mapa};
  