import Image from "next/image";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="min-h-screen flex flex-col justify-center items-center bg-darkgreen text-white font-poppins"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Nosotros
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              En{" "}
              <span className="font-bold text-lightmustard">AbodegaD</span>, nos
              enorgullece ofrecer un espacio donde la historia y la gastronomía
              se entrelazan para crear momentos memorables.
            </p>
            <p>
              Nuestro compromiso es brindar una experiencia única, combinando la
              tradición con la innovación en cada detalle.
            </p>
          </div>
          <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg border-4 border-lightmustard">
            <Image
              src="/placeholder-restaurant.jpg"
              alt="AbodegaD Interior"
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
