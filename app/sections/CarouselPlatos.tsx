"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = Array.from({ length: 17 }, (_, i) => `/images/carousel/${i + 1}.jpeg`);

export default function CarouselPlatos() {
  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 bg-beige text-darkgreen font-poppins">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-[#f3ebc8] border-2 border-darkgreen rounded-xl shadow-lg p-4 relative overflow-hidden">
          {/* Imágenes centrales y laterales */}
          <div className="relative h-[400px] flex items-center justify-center">
            {images.map((src, i) => {
              const offset = i - index;
              const distance = Math.abs(offset);

              let transform = "";
              if (offset === 0) transform = "scale-100 z-20";
              else if (distance === 1) transform = `scale-90 translate-x-${offset > 0 ? "32" : "-32"} z-10 opacity-60`;
              else if (distance === 2) transform = `scale-75 translate-x-${offset > 0 ? "64" : "-64"} z-0 opacity-40`;
              else transform = "hidden";

              return (
                <div
                  key={i}
                  className={`absolute transition-all duration-500 ease-in-out ${transform}`}
                >
                  <div className="border-2 border-darkgreen rounded-md overflow-hidden shadow-md w-60 h-80 relative">
                    <Image
                      src={src}
                      alt={`Plato ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="240px"
                    />
                  </div>
                </div>
              );
            })}

            {/* Flechas */}
            <button
              onClick={goPrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-darkgreen text-[#f3ebc8] rounded-full p-2 shadow-md hover:scale-105 transition"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-darkgreen text-[#f3ebc8] rounded-full p-2 shadow-md hover:scale-105 transition"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
