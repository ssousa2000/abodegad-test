export default function Cartas() {
  const cartas = [
    {
      nombre: "Carta de Platos",
      archivo: "/pdfs/carta-platos.pdf",
    },
    {
      nombre: "Carta de Tragos",
      archivo: "/pdfs/carta-tragos.pdf",
    },
    {
      nombre: "Carta de Postres",
      archivo: "/pdfs/carta-postres.pdf",
    },
  ];

  return (
    <section
      id="cartas"
      className="min-h-[50vh] flex flex-col justify-start items-center bg-beige text-darkgreen font-poppins py-24 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-darkgreen">Nuestras Cartas</h2>
        <p className="text-lg mb-10 text-darkgreen">
          Cada plato refleja nuestra dedicación por ofrecer  <span className="font-bold text-lightmustard">sabor, tradición y calidad</span>.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-4">
        {cartas.map((carta) => (
          <a
            key={carta.nombre}
            href={carta.archivo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f3ebc8] hover:shadow-xl transition rounded-lg border border-darkgreen p-6 text-center flex flex-col items-center justify-center"
          >
            <span className="text-xl font-semibold text-darkgreen mb-2 text-center">{carta.nombre}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
