import Navegacion from "./components/Navegacion";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";
import SocialProof from "./sections/SocialProof";
import Cartas from "./sections/Cartas";
import CarouselPlatos from "./sections/CarouselPlatos";
import CartaNavidena from "./sections/CartaNavidena";
import Reservas from "./sections/Reservas";
import WhatsappFloatButton from "./components/WhatsappButton";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Analytics/>
      <Navegacion />
      <Hero />
      <Nosotros />
      <CarouselPlatos />
      {/* <CartaNavidena /> */}
      <Cartas />
      <SocialProof />
      <Reservas />
      <WhatsappFloatButton/>
      <Footer />
    </div>
  );
}
