"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/carousel/1.jpeg",
  "/images/carousel/2.jpeg",
  "/images/carousel/3.jpeg",
  "/images/carousel/4.jpeg",
  "/images/carousel/5.jpeg",
  "/images/carousel/6.jpeg",
  "/images/carousel/7.jpeg",
  "/images/carousel/8.jpeg",
  "/images/carousel/9.jpeg",
  "/images/carousel/10.jpeg",
  "/images/carousel/11.jpeg",
  "/images/carousel/12.jpeg",
  "/images/carousel/13.jpeg",
  "/images/carousel/14.jpeg",
  "/images/carousel/15.jpeg",
  "/images/carousel/16.jpeg",
  "/images/carousel/17.jpeg",
];

export default function CarouselPlatos() {
  const [current, setCurrent] = useState(0);

  // Auto slide (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Distancia máxima a mostrar desde el centro
  const visibleRange = 2;

  return (
    <section className="relative bg-beige py-20 px-4 font-poppins text-darkgreen overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-darkgreen font-theSeasons">
          Una colección de momentos y platos en la Bodega
        </h2>
        {/* Carrusel Coverflow */}
        <div className="relative w-full flex justify-center items-center" style={{ height: 420 }}>
          <button
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-beige border border-darkgreen rounded-full p-2 z-20"
          >
            <ChevronLeft className="text-darkgreen" />
          </button>
          <div className="relative flex justify-center items-center w-full">
            {images.map((src, i) => {
              // Relative position to center slide
              let offset = i - current;
              // Manejo de wrap-around para la galería circular
              if (offset > images.length / 2) offset -= images.length;
              if (offset < -images.length / 2) offset += images.length;

              // Solo mostramos los cercanos al central
              if (Math.abs(offset) > visibleRange) return null;

              // Estilos dinámicos
              const isActive = offset === 0;
              const zIndex = isActive ? 30 : 20 - Math.abs(offset);
              const scale = isActive ? 1 : 0.8 - Math.abs(offset) * 0.05;
              const translateX = offset * 180;
              const rotate = offset * 0; // Puedes usar 15 para más efecto coverflow

              return (
                <div
                  key={i}
                  className={`absolute top-1/2 left-1/2 transition-all duration-500`}
                  style={{
                    zIndex,
                    transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotate}deg)`,
                    opacity: isActive ? 1 : 0.7 - Math.abs(offset) * 0.15,
                    boxShadow: isActive
                      ? "0 6px 24px 0 rgba(0,0,0,0.15)"
                      : "0 2px 10px 0 rgba(0,0,0,0.06)",
                    borderRadius: "1.25rem",
                    border: "2px solid #254123",
                    background: "#f3ebc8",
                  }}
                >
                  <div className="relative w-[320px] h-[420px] overflow-hidden rounded-xl">
                    <Image
                      src={src}
                      alt={`Plato ${i + 1}`}
                      fill
                      className="object-cover"
                      draggable={false}
                      priority={isActive}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => setCurrent((current + 1) % images.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-beige border border-darkgreen rounded-full p-2 z-20"
          >
            <ChevronRight className="text-darkgreen" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full border border-darkgreen ${
                i === current ? "bg-darkgreen" : "bg-[#f3ebc8]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
