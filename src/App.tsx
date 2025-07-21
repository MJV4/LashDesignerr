import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/Inicio";
import { Cadastro } from "./components/Cadastro"; // certifique-se de que esse é o nome correto
import "./App.css";
import { Navigate } from "react-router-dom";
import { Curso } from "./components/Curso";
import Servicos from "./components/Servicos";
import Contatos from "./components/Contatos";
import Depoimentos from "./components/Depoimentos";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container py-5 bg-light min-vh-100">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/curso" element={<Curso />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
