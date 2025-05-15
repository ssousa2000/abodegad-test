"use client";

import { useEffect, useRef, useState } from "react";
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
  const [autoSlide, setAutoSlide] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (autoSlide) {
      timeoutRef.current = setTimeout(next, 5000);
      return () => clearTimeout(timeoutRef.current!);
    }
  }, [current, autoSlide]);

  return (
    <section className="bg-beige py-12 px-4 font-poppins text-darkgreen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-darkgreen font-theSeasons">
          Una coleccion de momentos y platos en la bodega{" "}
        </h2>
        <p className="text-lg mb-10">
          Sabores que cuentan historias,{" "}
          <span className="font-bold text-lightmustard">
            momentos que se quedan contigo
          </span>
          .
        </p>
      </div>
      <div className="relative max-w-4xl mx-auto my-4 py-2  rounded-xl border-2 border-darkgreen overflow-hidden shadow-md">
        <div
          className="flex transition-transform duration-700 ease-in-out "
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div className="min-w-full h-[550px] relative overflow-hidden rounded-xl" key={i}>
              <Image
                src={src}
                alt={`Slide ${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Flechas */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-beige border border-darkgreen rounded-full p-2"
        >
          <ChevronLeft className="text-darkgreen" />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-beige border border-darkgreen rounded-full p-2"
        >
          <ChevronRight className="text-darkgreen" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
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

      {/* Auto Slide Checkbox */}
      <div className="mt-4 text-center">
        <label className="flex items-center justify-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={autoSlide}
            onChange={(e) => setAutoSlide(e.target.checked)}
          />
          Auto Slide
        </label>
      </div>
    </section>
  );
}
