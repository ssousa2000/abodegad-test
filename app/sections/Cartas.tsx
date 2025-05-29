export default function Cartas() {
  const cartas = [
    {
      nombre: "Carta Principal",
      archivo: "/pdfs/carta-principal.pdf",
      imagen: "/cartas/platos.png",
    },
    {
      nombre: "Vinos",
      archivo: "/pdfs/carta-vinos.pdf",
      imagen: "/cartas/vinos.png",
    },
    {
      nombre: "La Hora del Sanguchito",
      archivo: "/pdfs/carta-sanguchito.pdf",
      imagen: "/cartas/sanguchito.png",
    },
    {
      nombre: "La Barra",
      archivo: "/pdfs/carta-barra.pdf",
      imagen: "/cartas/barra.png", 
    },
    {
      nombre: "Mocktails",
      archivo: "/pdfs/carta-mocktails.pdf",
      imagen: "/cartas/mocktails.png",
    },
    {
      nombre: "Postres y Cafés",
      archivo: "/pdfs/carta-postres.pdf",
      imagen: "/cartas/postresYcafe.png", // OTRA imagen si tienes, si no repite platos
    },
  ];

  return (
    <section
      id="cartas"
      className="relative min-h-[50vh] flex flex-col justify-start items-center bg-beige text-darkgreen font-poppins py-24 px-4"
    >
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-darkgreen font-playfair">
          Nuestras Cartas
        </h2>
        <p className="text-lg mb-10">
          Cada plato refleja nuestra dedicación por ofrecer{" "}
          <span className="text-lightmustard">sabor, tradición y calidad</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 w-full max-w-6xl">
        {cartas.map((carta) => (
          <a
            key={carta.nombre}
            href={carta.archivo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative min-h-[220px] rounded-xl border-2 border-darkgreen shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center text-center group overflow-hidden"
            style={{
              backgroundImage: `url(${carta.imagen})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay para legibilidad */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
            {/* Texto centrado */}
            <span className="relative z-10 text-2xl font-playfair text-lightmustard drop-shadow-lg px-4">
              {carta.nombre}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
