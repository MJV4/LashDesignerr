type Testimonial = {
  name: string;
  message: string;
};

const testimonials: Testimonial[] = [
  { name: "Ana", message: "Ótimo atendimento e resultado incrível!" },
  { name: "Bruna", message: "Super recomendo, profissional excelente." },
  { name: "Carla", message: "Amei minhas extensões de cílios!" },
];

export function Depoimentos() {
  return (
    <div>
      <h2>Depoimentos de Clientes</h2>
      <ul>
        {testimonials.map((t, idx) => (
          <li key={idx}>
            <strong>{t.name}:</strong> {t.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Depoimentos;
