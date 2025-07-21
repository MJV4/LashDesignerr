import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-3 md:grid-cols-3 gap-4 text-sm text-justify">
        <div>
          <h4 className="text-lg font-semibold mb-2">Luciana Lash-Designer</h4>
          <p>Itanhaém - SP</p>
          <p>CNPJ: 00.000.000/0001-00</p>
          <p>© 2025 Todos os direitos reservados</p>
        </div>

        <div>
          <h4 className="font-bold mb-2 ml-7 text-xl">Links</h4>
          <ul className="space-y-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <Link to="/curso">Curso</Link>
            </li>
            <li>
              <Link to="/contatos">Contatos</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2 text-xl">Fale conosco</h4>
          <p>
            <a href="mailto:suporte@lashdesign.com" className="hover:underline">
              suporte@lashdesign.com
            </a>
          </p>
          <p>
            <a
              href="https://wa.me/55SEUNUMERO"
              target="_blank"
              className="hover:underline"
            >
              WhatsApp direto
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
