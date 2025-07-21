import { SecaoDeLista } from "./SectionList";
import { useState } from "react"

export function Curso() {
  const [mostrarMais, setMostrarMais] = useState(false);

  const secoes = [
    {
      titulo: "1. Técnicas Avançadas de Aplicação",
      itens: [
        "Domínio de técnicas como volume russo, mega volume, híbrido, clássico e wet effect.",
        "Precisão no isolamento e colagem dos fios para evitar danos aos cílios naturais.",
        "Conhecimento sobre curvaturas (D, C, L), espessuras e materiais (seda, cashmere, etc.).",
      ],
    },
    {
      titulo: "2. Conhecimento em Saúde e Segurança",
      itens: [
        "Higiene rigorosa: instrumentos esterilizados, descartáveis e ambiente limpo.",
        "Identificação de contraindicações como alergias ou problemas oculares.",
        "Técnicas seguras para evitar irritações ou danos aos olhos.",
      ],
    },
    {
      titulo: "3. Habilidades Artísticas e de Design",
      itens: [
        "Senso estético para criar designs personalizados que valorizem o olhar.",
        "Noção de simetria, proporção e harmonia visual.",
        "Criatividade para oferecer looks únicos.",
      ],
    },
    {
      titulo: "4. Atendimento ao Cliente e Comunicação",
      itens: [
        "Consultoria personalizada e escuta ativa do cliente.",
        "Orientações pós-procedimento: cuidados e manutenção.",
        "Marketing pessoal e construção de marca forte.",
      ],
    },
    {
      titulo: "5. Gestão de Negócios",
      itens: [
        "Precificação justa e valorização do serviço.",
        "Gestão de agenda, estoque e controle de custos.",
        "Uso estratégico de redes sociais",
      ],
    },
    {
      titulo: "6. Educação Continuada",
      itens: [
        "Atualização sobre técnicas, tendências e produtos.",
        "Participação em cursos, workshops e certificações internacionais.",
      ],
    },
    {
      titulo: "7. Paciência e Resistência Física",
      itens: [
        "Concentração por longas sessões (2h+).",
        "Postura ergonômica para evitar dores e lesões.",
      ],
    },
    {
      titulo: "8. Ética Profissional",
      itens: [
        "Honestidade sobre os resultados possíveis.",
        "Respeito aos limites naturais dos cílios do cliente.",
      ],
    },
    {
      titulo: "9. Adaptabilidade",
      itens: [
        "Capacidade de trabalhar com cílios variados (finos, oleosos, etc.).",
        "Ajuste de técnica conforme necessidade do cliente.",
      ],
    },
    {
      titulo: "10. Paixão pelo Trabalho",
      itens: [
        "Dedicação para resultados impecáveis.",
        "Comprometimento com a satisfação do cliente e evolução contínua.",
      ],
    },
  ];

  const textoCompleto = (
    <>
      Aqui, aprenderá tudo o que precisa para se tornar uma profissional
      competente, com um elevado grau de profissionalismo e com técnicas
      apuradas, tornando-se assim a candidata mais qualificada possível para o
      mercado de trabalho da extensão de cílios.
      <br />
      Imagine-se dominando não apenas as melhores práticas do setor, mas também
      as tendências mais atuais que fazem toda a diferença na atuação diante de
      clientes exigentes. Nossa metodologia de ensino é projetada para ser
      prática e dinâmica, permitindo que você desenvolva habilidades cruciais em
      um ambiente acolhedor e estimulante.
      <br />
      Além disso, oferecemos apoio contínuo, mesmo após o término do curso. Você
      terá acesso a uma comunidade vibrante de profissionais, troca de
      experiências e dicas que farão sua carreira brilhar! Você não estará
      apenas aprendendo a técnica, mas também a arte de transformar a autoestima
      dos seus clientes.
      <br />
      Com nossa formação, você se sentirá confiante e pronta para enfrentar
      qualquer desafio do mercado. O seu sucesso é nossa missão, e estamos aqui
      para garantir que você se destaque numa área tão promissora. Não perca
      essa oportunidade de se reinventar e colocar seu talento em ação. Venha
      fazer parte dessa jornada e transforme sua paixão em profissão!
    </>
  );

  return (
    <div className="container mt-4 px-3">
      <h2 className="bg-yellow-200 text-center mb-4 text-3xl md:text-4xl font-bold text-gray-800 fs-1 p-7 rounded-b-xl">
        Curso de Extensão de Cílios
      </h2>

      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-3 fs-2">
          Tem interesse sem ser Lash Designer?
        </p>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed fs-4 text-justify">
          {mostrarMais
            ? textoCompleto
            : "Aqui, aprenderá tudo o que precisa para se tornar uma profissional competente e preparada para o mercado de extensão de cílios..."}
        </p>

        <button
          onClick={() => setMostrarMais(!mostrarMais)}
          className="bg-gray-200 rounded-3xl mt-2 text-m text-black hover:text-blue-800 transition"
        >
          {mostrarMais ? "Ler menos" : "Ler mais"}
        </button>
      </div>

      <p className="text-center max-w-3xl mx-auto text-lg font-medium text-red-600 mb-10">
        Inscreva-se agora e transforme sua carreira!
      </p>

      <div className="bg-yellow-200 rounded-xl p-6 md:p-8 mb-10 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          O que você aprenderá no curso?
        </h1>
      </div>

      {secoes.map((secao, idx) => (
        <SecaoDeLista key={idx} titulo={secao.titulo} itens={secao.itens} />
      ))}
    </div>
  );
}
