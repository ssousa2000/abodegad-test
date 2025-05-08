"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/hero/1.jpeg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden font-poppins">
      {/* Fondo con imágenes rotativas */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/30 z-20" />

      {/* Contenido sobre la imagen */}
      <div className="relative z-30 flex flex-col justify-center items-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl px-6 md:px-12 gap-8">
          {/* Columna izquierda: texto slogan */}
          <div className="text-left self-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-lightmustard mb-6">
              Antigua Bodega Dalmacia
            </h1>
            <p className="text-white text-lg sm:text-xl leading-relaxed max-w-lg">
              Un espacio único donde la tradición y la modernidad se encuentran para crear experiencias inolvidables.
            </p>
          </div>

          {/* Columna derecha: horario */}
          <div className="text-right text-white self-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-lightmustard mb-2">
              Horario de atención:
            </h3>
            <p>
              <span className="font-bold text-white">Lunes a Viernes:</span> 12:00 – 23:00
            </p>
            <p>
              <span className="font-bold text-white">Sábados y Domingos:</span> 12:00 – 00:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
