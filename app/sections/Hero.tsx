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
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-darkgreen text-center mb-8">
          AbodegaD
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Un espacio único donde la tradición y la modernidad se encuentran para crear experiencias inolvidables.
        </p>
      </div>
    </section>
  );
}

