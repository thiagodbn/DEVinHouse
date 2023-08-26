import { Footer } from "../../components/footer";
import { HeaderLogado } from "../../components/headerLogado";
import { CardFarmacia} from "../../components/cardFarmacia";


function Logado() {

    const storedData = JSON.parse(localStorage.getItem('farmacias')) || [];

    return (
        <>
        <HeaderLogado />
        
        <p> LOGADO</p>
        
        <div>
      <h1>Farmácias Cadastradas</h1>
      {storedData.map((farmacia, index) => (
        <CardFarmacia key={index} farmaciaData={farmacia} />
      ))}
    </div>
        <Footer />
        </>
    )
}
export { Logado};