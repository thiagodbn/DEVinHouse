import { Link } from "react-router-dom";
import { HeaderStyled, NavStyled } from "./styled";


function HeaderLogado() {
  const pages = [
    {
      route: "/logado",
      description: "Principal"
    },    
    {
      route: "/cadastro",
      description: "Cadastro"
    },
    {
      route: "/mapa",
      description: "Mapa"
    },
    {
      route: "/medicamentos",
      description: "Medicamentos"
    },
    {
      route: "/cadastroMedicamento",
      description: "Cadastro Medicamento"
    },
    {
      route: "/",
      description: "Sair"
    }
  ]
  return (
    <HeaderStyled>
      <h3>Cabeçalho</h3>
      <NavStyled>
        {
          pages.map(({route, description}) => {
            return (
              <Link key={route} to={route}>{description}</Link>
            )
          })
        }
      </NavStyled>
    </HeaderStyled>
  );
}

export { HeaderLogado };

