import { Footer } from "../../components/footer";
import { HeaderLogado } from "../../components/headerLogado";
import { CardMedicamento} from "../../components/cardMedicamento";
import { useState } from 'react';

function Medicamentos() {

  const [storedDataM, setStoredDataM] = useState(JSON.parse(localStorage.getItem('medicamento')) || []);

  //logica ara deletar!
  const handleDeleteClick = (medicamentoData) => {
    const confirmDelete = window.confirm("Deseja realmente apagar o medicamento?");
    if (confirmDelete) {
      const updatedData = storedDataM.filter(item => item !== medicamentoData);
      setStoredDataM(updatedData); // Atualiza dados
      localStorage.setItem('medicamento', JSON.stringify(updatedData));
    }
  };

    return (
        <div>
          <p>PAginas medicamentos cadastrado</p>
          <p>
          listagem de medicamentos onde todos os 
          produtos cadastrados devem ser listados em formato de card. <br />
          a.	Na parte superior deve existir uma barra de busca para buscar por algum medicamento <br />
          b.	Dica: Você também pode implementar um botão de filtro para filtrar por preço, tipo e etc. <br />

          </p>
          





          <HeaderLogado />
        
        <p> LOGADO</p>
        
        <div>
      <h1>Medicamentos Cadastrados</h1>
      {storedDataM.map((medicamento, index) => (
        <CardMedicamento key={index} medicamentoData={medicamento} onDelete={handleDeleteClick}/>
      ))}
    </div>
        <Footer />






        </div>
      
    );
  }
  export { Medicamentos };
  