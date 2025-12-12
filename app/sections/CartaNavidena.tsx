export default function CartaNavidena() {
  return (
    <section
      id="carta-navidena"
      className="relative min-h-[50vh] flex flex-col justify-start items-center bg-beige text-darkgreen font-poppins py-24 px-4"
    >
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-darkgreen font-playfair">
          Carta navideña
        </h2>
        <p className="text-lg mb-10">
          Mira las opciones que ofrecemos para celebrar y disfrutar en{" "}
          <span className="text-lightmustard">Familia</span> :
        </p>
      </div>

      <a
        href="/pdfs/carta-navidad-2025.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full max-w-md min-h-[280px] rounded-xl border-2 border-darkgreen shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center text-center group overflow-hidden"
        style={{
          backgroundImage: `url(/cartas/carta-navidenia.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
        {/* Texto centrado */}
        <span className="relative z-10 text-2xl font-playfair text-lightmustard drop-shadow-lg px-4">
          Ver Carta Navideña
        </span>
      </a>
    </section>
  );
}
