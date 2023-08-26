import { Routes,Route,  Navigate } from "react-router-dom"
import { Home } from "../pages/home";
import { NotFound } from "../pages/notFound"
import { AboutMe } from "../pages/aboutMe"
import { Login } from "../pages/login"
import { Mapa } from "../pages/mapa"
import { Logado } from "../pages/logado"
import { Cadastro } from "../pages/cadastro"
import { CadastroMedicamento } from "../pages/cadastroMedicamento";
import { Medicamentos } from "../pages/medicamentos";


//routes

function RoutesApp() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mapa" element={<Mapa />} />
        { <Route path="*" element={<NotFound />} /> }
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/logado" element={<Logado />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroMedicamento" element={<CadastroMedicamento />} />
        <Route path="/medicamentos" element={<Medicamentos />} />
      </Routes>
  );
}

export { RoutesApp };
