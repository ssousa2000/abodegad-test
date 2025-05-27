import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-beige text-darkgreen py-6 shadow-inner shadow-darkgreen/10 font-poppins">
      <div className="px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Logo y descripción */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="flex items-center transition-transform duration-200 hover:scale-105"
            >
              <Image
                src="/LogoDalmacia/dalmacia.png"
                alt="Logo BodegaD"
                width={120}
                height={60}
                className="h-auto w-auto"
                priority
              />
            </Link>
            <br />
            <div className="text-sm leading-snug">
              <span>Un lugar donde la tradición</span>
              <br />
              <span>y la modernidad se encuentran.</span>
            </div>
          </div>

          {/* Enlaces y horario */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <span className="font-bold font-theSeasons text-lg">Enlaces</span>
              <div className="flex flex-col gap-1">
                <a
                  href="#nosotros"
                  className="hover:text-mustard hover:scale-105 transition-transform duration-200 inline-block"
                >
                  Nosotros
                </a>
                <a
                  href="#cartas"
                  className="hover:text-mustard hover:scale-105 transition-transform duration-200 inline-block"
                >
                  Cartas
                </a>
                <a
                  href="#eventos"
                  className="hover:text-mustard hover:scale-105 transition-transform duration-200 inline-block"
                >
                  Eventos
                </a>
                <a
                  href="#reservas"
                  className="hover:text-mustard hover:scale-105 transition-transform duration-200 inline-block"
                >
                  Reservas
                </a>
                <a href="https://www.instagram.com/bodegadalmacia/?hl=en"
                target="_blank"
                rel="noopenernoreferrer"
                className="flex items-center gap-1 hover:text-mustard hover:scale-105 transition-transform duration-200"
                ><FaInstagram className="w-8 h-8" />
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-bold font-theSeasons text-lg">Horario</span>
              <div>Lunes - Sábados: 12:00 - 23:00</div>
              <div>Domingos: 12:00 - 18:00</div>
              <div>Teléfono: +51 980 080 232</div>
            </div>
          </div>

          {/* Mapa */}
          <div className="h-full w-full flex items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.3521335524301!2d-77.02784741916217!3d-12.132375497465786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7e2234bc335%3A0x87b75259116cb2b7!2sBodega%20Dalmacia!5e0!3m2!1ses-419!2pe!4v1746644164095!5m2!1ses-419!2pe"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded shadow-md w-full"
            ></iframe>
          </div>
        </div>

        <div className="mt-2 pt-2 border-t border-darkgreen/40 text-center text-xs text-darkgreen">
          <p>
            &copy; {new Date().getFullYear()} Antigua Bodega. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
