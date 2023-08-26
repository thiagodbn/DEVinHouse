import { Footer } from "../../components/footer";
import { HeaderLogado } from "../../components/headerLogado";
import { CadastroMedicamentos} from "../../components/cadastroMedicamentos";



//pagina cadastro medicamento
function CadastroMedicamento() {
    return (
      <>
      <HeaderLogado />
      
    <p>Pagina Cadastro Medicamento</p>
     <CadastroMedicamentos/> 


      <Footer />
      </>
      
    );
  }
  export { CadastroMedicamento };
  