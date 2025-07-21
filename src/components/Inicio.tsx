import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ciliosFeitos from "../assets/ciliosFeitos.png";
import ciliosAbertos from "../assets/cilAberto.png";
import ciliosFechados from "../assets/cilFechado.png";

export function Inicio() {
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(
    null
  );
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setLargura(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFechar = () => setImagemSelecionada(null);

  const servicos = [
    {
      nome: "Extensão Fio a Fio",
      preco: "A partir de R$100,00",
      imagem: ciliosAbertos,
    },
    {
      nome: "Volume Russo",
      preco: "A partir de R$150,00",
      imagem: ciliosFechados,
    },
    { nome: "Manutenção", preco: "A partir de R$80,00", imagem: ciliosAbertos },
    { nome: "Remoção", preco: "A partir de R$60,00", imagem: ciliosFechados },
  ];

  const resultados = [
    { nome: "Resultado 1", imagem: ciliosAbertos },
    { nome: "Resultado 2", imagem: ciliosAbertos },
    { nome: "Resultado 3", imagem: ciliosAbertos },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 overflow-x-hidden">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Descubra a arte de realçar a beleza dos olhos com o{" "}
        <span className="text-yellow-400 font-bold">LashDesign</span>
      </h2>

      <hr className="mb-8 border-yellow-400" />

      {/* Modal */}
      {imagemSelecionada && (
        <div className="modal-overlay" onClick={handleFechar}>
          <img
            src={imagemSelecionada}
            alt="Zoom"
            className="modal-zoom-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
        <div className="flex justify-center">
          <img
            src={ciliosFeitos}
            alt="Cílios feitos"
            className="w-full max-w-[280px] rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setImagemSelecionada(ciliosFeitos)}
          />
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Lash Design Profissional em Itanhaém
          </h1>
          <p className="text-lg text-gray-600 font-semibold">
            Extensões de cílios de alto padrão + formação completa para Lash
            Designers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/servicos"
              className="bg-black text-white py-2 px-5 rounded-xl border border-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Quero agendar
            </Link>
            <Link
              to="/curso"
              className="bg-white text-black py-2 px-5 rounded-xl border border-black hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Quero fazer o curso
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <hr className="my-10" />
      <section>
        <h2 className="font-bold text-3xl mb-6">Seção de Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img
                src={servico.imagem}
                alt={servico.nome}
                className="w-full h-48 object-cover rounded-md mb-3 cursor-pointer"
                onClick={() => setImagemSelecionada(servico.imagem)}
              />
              <h3 className="font-semibold text-lg">{servico.nome}</h3>
              <p className="text-gray-600">{servico.preco}</p>
              <Link
                to="/servicos"
                className="botao-saiba-mais text-sm text-yellow-600 underline mt-2 inline-block"
              >
                Saiba mais
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Chamada para o Curso */}
      <hr className="my-10" />
      <section className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-1 text-center md:text-left space-y-3">
          <h1 className="text-3xl font-bold">
            Viva a sua paixão.{largura > 768 && <br />} Torne-se Lash Designer
          </h1>
          <Link
            to="/curso"
            className="bg-yellow-400 px-4 py-2 rounded-md font-semibold inline-block"
          >
            Ver conteúdo do curso
          </Link>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">Curso de Formação</h1>
          <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700 text-left inline-block">
            <li>Aulas práticas</li>
            <li>Certificado</li>
            <li>Suporte Individual</li>
          </ul>
        </div>
      </section>

      {/* Resultados / Provas Sociais */}
      <hr className="my-10" />
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Provas Sociais / Resultados
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {resultados.map((resultado, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              <img
                src={resultado.imagem}
                alt={resultado.nome}
                className="w-[150px] h-[120px] object-cover rounded-md"
                onClick={() => setImagemSelecionada(resultado.imagem)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <hr className="my-10" />
      <section className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1">
          <h2 className="font-bold text-4xl mb-4 my-10">
            Formulário de Contato
          </h2>
          <h3 className="font-semibold text-xl">
            Entre em contato para saber mais!
          </h3>
        </div>

        <form className="flex-1 flex flex-col gap-3 max-w-md w-full">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded px-4 py-2"
              placeholder="Nome"
            />
            <input
              type="tel"
              className="flex-1 border border-gray-300 rounded px-4 py-2"
              placeholder="WhatsApp"
              aria-label="Número de Telefone"
            />
          </div>

          <textarea
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Mensagem"
            rows={4}
          />

          <div className="flex justify-center md:justify-end">
            <input
              type="submit"
              value="Enviar"
              className="w-full sm:w-auto bg-yellow-400 text-black font-semibold py-3 px-6 rounded-xl transition duration-300 hover:shadow-lg hover:underline"
            />
          </div>
        </form>
      </section>
    </div>
  );
}
