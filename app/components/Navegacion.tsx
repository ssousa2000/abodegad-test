"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navegacion() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Cartas", href: "#cartas" },
    { name: "Eventos", href: "#eventos" },
    { name: "Reservas", href: "#reservas" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-beige shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 sm:px-6">
        {/* Logo (temporal: solo texto) */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-darkgreen hover:text-mustard transition-colors duration-200"
        >
          Antigua Bodega
        </Link>

        {/* Menú desktop */}
        <ul className="hidden md:flex gap-8 font-medium text-darkgreen">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-mustard transition-colors duration-200 text-lg"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-darkgreen focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-beige px-6 pt-4 pb-6 shadow-lg">
          <ul className="flex flex-col gap-4 font-medium text-darkgreen">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block hover:text-mustard text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
