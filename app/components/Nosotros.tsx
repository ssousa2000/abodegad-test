import Image from "next/image";

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-16 bg-beige/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-darkgreen text-center mb-12">Nosotros</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              En Antigua Bodega, nos enorgullece ofrecer un espacio donde la historia y la gastronomía se entrelazan para crear momentos memorables.
            </p>
            <p className="text-lg text-gray-700">
              Nuestro compromiso es brindar una experiencia única, combinando la tradición con la innovación en cada detalle.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder-restaurant.jpg"
              alt="Antigua Bodega Interior"
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