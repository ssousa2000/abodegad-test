export default function Cartas() {
  const cartas = [
    {
      nombre: "Carta de Platos",
      archivo: "/pdfs/carta-principal.pdf",
    },
    {
      nombre: "Carta de Vinos",
      archivo: "/pdfs/carta-vinos.pdf",
    },
    {
      nombre: "La Hora del Sanguchito",
      archivo: "/pdfs/carta-sanguchito.pdf",
    },
    {
      nombre: "Carta de la Barra",
      archivo: "/pdfs/carta-barra.pdf",
    },
    {
      nombre: "Carta de Mocktails",
      archivo: "/pdfs/carta-mocktails.pdf",
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
        <h2 className="text-3xl font-bold mb-4 text-darkgreen font-theSeasons">
          Nuestras Cartas
        </h2>
        <p className="text-lg mb-10">
          Cada plato refleja nuestra dedicación por ofrecer{" "}
          <span className="font-bold text-lightmustard">
            sabor, tradición y calidad
          </span>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 w-full max-w-6xl">
        {cartas.map((carta) => (
          <a
            key={carta.nombre}
            href={carta.archivo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f3ebc8] min-h-[200px] rounded-xl border-2 border-darkgreen shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center p-6 text-center"
          >
            <span className="text-xl font-semibold text-darkgreen font-theSeasons">
              {carta.nombre}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
