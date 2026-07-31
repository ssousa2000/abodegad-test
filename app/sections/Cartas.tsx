import { cartas, type CartaLayout } from "../data/site";

const layoutClass: Record<CartaLayout, string> = {
  hero: "md:col-span-2 md:row-span-2 min-h-[280px]",
  wide: "md:col-span-2",
  default: "",
};

export default function Cartas() {
  return (
    <section
      id="cartas"
      className="relative min-h-[50vh] flex flex-col justify-start items-center bg-beige text-darkgreen font-poppins py-24 px-4"
    >
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-darkgreen font-playfair">
          Cartas y menús de La Dalmacia
        </h2>
        <p className="text-lg mb-10">
          Descubre nuestra carta de desayunos, platos peruanos, vinos, barra y
          postres. Cada plato refleja nuestra dedicación por ofrecer{" "}
          <span className="text-lightmustard">sabor, tradición y calidad</span>{" "}
          en Miraflores, Lima.
        </p>
      </div>

      {/*
        Restaurant-led bento (md+):
        [ Desayunos 2×2 ] [ Principal ] [ Vinos ]
                          [ Barra     ] [ Sanguchito ]
        [ Postres 2-wide ] [ Mocktails 2-wide        ]
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 w-full max-w-6xl md:auto-rows-[minmax(220px,auto)]">
        {cartas.map((carta) => {
          const layout = carta.layout ?? "default";

          return (
            <a
              key={carta.nombre}
              href={carta.archivo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver carta de ${carta.nombre} — Bodega Dalmacia, Miraflores`}
              title={`Carta de ${carta.nombre} — La Dalmacia`}
              className={`relative min-h-[220px] rounded-xl border-2 border-darkgreen shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center text-center group overflow-hidden ${layoutClass[layout]}`}
              style={{
                backgroundImage: `url(${carta.imagen})`,
                backgroundSize: "cover",
                backgroundPosition: carta.backgroundPosition ?? "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              <span className="relative z-10 text-2xl font-playfair text-lightmustard drop-shadow-lg px-4">
                {carta.nombre}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
