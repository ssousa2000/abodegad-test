"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Horario from "../components/Horario";
import { business } from "../data/site";
import { heroImageAlts } from "../lib/seo";

const images = [
  // "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
  "/images/hero/5.jpg",
  "/images/hero/6.jpg",
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
            alt={heroImageAlts[i] ?? `Bodega Dalmacia en Miraflores, Lima`}
            fill
            className={`object-cover transform transition-transform duration-[20000ms] ease-out ${
              i === index ? "scale-110" : "scale-100"
            }`}
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
            <Image
              src="/LogoDalmacia/dalmacia-copy.png"
              alt={`${business.name} — restaurante en Miraflores, Lima`}
              width={300}
              height={100}
              className="mb-6"
              style={{ width: "auto", height: "auto" }}
              priority
            />
            <h1 className="text-beige text-2xl sm:text-3xl font-playfair font-bold mb-3">
              {business.shortName}
            </h1>
            <p className="text-beige/90 text-base sm:text-lg mb-3">
              Restaurante peruano en {business.address.neighborhood}, Lima
            </p>
            <p className="text-beige text-lg sm:text-xl leading-relaxed max-w-lg">
              {business.tagline}
            </p>
          </div>

          {/* Columna derecha: horario */}
          <Horario variant="hero" />
        </div>
      </div>
    </section>
  );
}
