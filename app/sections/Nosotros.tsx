import Image from "next/image";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="min-h-screen bg-beige text-darkgreen font-poppins px-4 py-24 flex justify-center items-center"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        {/* Texto estrecho (2/5) */}
        <div className="md:col-span-2">
          <h2 className="text-5xl font-bold text-darkgreen mb-8 font-theSeasons">
            Nosotros
          </h2>
          <p className="text-base leading-relaxed mb-4">
            En Bodega Dalmacia, cada detalle está pensado para que te sientas como en casa. Nuestra
            cocina se inspira en recetas familiares, preparadas con ingredientes de calidad y mucho
            cariño.
          </p>
          <p className="text-base leading-relaxed">
            Creemos en una experiencia cercana, sin pretensiones, donde la tradición y la buena atención
            crean momentos memorables.
          </p>
        </div>

        {/* Imagen amplia (3/5) */}
        <div className="md:col-span-3 pr-2">
          <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg border-2 border-green">
            <Image
              src="/images/dalmacia-interior.jpg"
              alt="Interior Bodega Dalmacia"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
