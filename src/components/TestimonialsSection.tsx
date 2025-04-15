import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empresário",
      content: "Excelente serviço! Formataram meu computador, instalaram o Windows 11 e todo meu ambiente de trabalho ficou pronto em menos de 24 horas.",
      rating: 5
    },
    {
      name: "Ana Paula Martins",
      role: "Professora",
      content: "Meu notebook estava extremamente lento. Após a formatação e instalação do Linux Mint, ficou como novo! Recomendo demais.",
      rating: 5
    },
    {
      name: "Roberto Almeida",
      role: "Designer Gráfico",
      content: "Recuperaram todos os meus arquivos importantes após uma falha no HD. Serviço rápido e profissional.",
      rating: 4
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">O que nossos clientes dizem</h2>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}