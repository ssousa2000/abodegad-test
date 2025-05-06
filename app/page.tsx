import Navegacion from "./components/Navegacion";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";
import SocialProof from "./sections/SocialProof";
import Cartas from "./sections/Cartas";
import CarouselPlatos from "./sections/CarouselPlatos";
import Eventos from "./sections/Eventos";
import Reservas from "./sections/Reservas";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navegacion />
      <Hero />
      <Nosotros />
      <SocialProof />
      <Cartas />
      <CarouselPlatos />
      <Eventos />
      <Reservas />
      <Footer />
    </div>
  );
}
