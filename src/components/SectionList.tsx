import { CheckCircle } from "lucide-react"; // biblioteca de ícones recomendada (lucide-react)

interface SecaoDeListaProps {
  titulo: string;
  itens: string[];
}

export function SecaoDeLista({ titulo, itens }: SecaoDeListaProps) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-black mb-4 border-b-2 border-yellow-400 pb-1">
        {titulo}
      </h3>

      <ul className="grid gap-3 md:grid-cols-2">
        {itens.map((item, index) => (
          <li
            key={index}
            className="max-w-120 min-w-50 fw-bold flex items-start gap-3 p-4 bg-yellow-100 border border-yellow-300 rounded-3xl shadow-sm hover:shadow-md transition duration-200"
          >
            <CheckCircle className="text-yellow-600 mt-1" size={20} />
            <span className="text-gray-800 leading-relaxed0">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
