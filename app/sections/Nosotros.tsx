import Image from "next/image";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative bg-beige text-darkgreen font-poppins px-4 py-24 flex justify-center items-center"
    >
      {/* SVG decorativo superior izquierdo */}
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 opacity-80 pointer-events-none"
      >
        <circle cx="100" cy="100" r="80" stroke="#E9A23B" strokeWidth="3.0" />
        <circle cx="100" cy="100" r="120" stroke="#E9A23B" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="160" stroke="#E9A23B" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="200" stroke="#E9A23B" strokeWidth="1.5" />
      </svg>
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 opacity-80 pointer-events-none"
      >
        <circle cx="100" cy="100" r="60" stroke="#E9A23B" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="90" stroke="#E9A23B" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="120" stroke="#E9A23B" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="150" stroke="#E9A23B" strokeWidth="1.5" />
      </svg>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-5 gap-10 items-start relative z-10">
        {/* Texto estrecho (2/5) */}
        <div className="md:col-span-2">
          <h2 className="text-5xl font-bold text-darkgreen mb-8 font-playfair">
            La Bodega
          </h2>
          <p className="text-base leading-relaxed mb-4">
            En la Bodega Dalmacia, cada detalle está pensado para que te sientas
            como en casa. Nuestra cocina se inspira en recetas familiares,
            preparadas con ingredientes de calidad y mucho cariño.
          </p>
          <p className="text-base leading-relaxed">
            Creemos en una experiencia cercana, sin pretensiones, donde la
            tradición y la buena atención crean momentos memorables.
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
