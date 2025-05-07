"use client";

import { useState } from "react";

export default function Reservas() {
  const [personas, setPersonas] = useState("1");

  return (
    <section
      id="reservas"
      className="min-h-screen flex flex-col justify-center items-center bg-beige text-darkgreen font-poppins px-4 py-16"
    >
      <div className="w-full max-w-xl bg-[#f3ebc8] rounded-xl shadow-md p-8 border border-darkgreen">
        <h2 className="text-3xl font-bold mb-6 text-center text-green">Reservas</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Reserva enviada (aún falta configurar envío de correo)");
          }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="nombre">
              Nombre <span className="text-mustard">*</span>
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="w-full rounded-md border border-darkgreen bg-white text-darkgreen px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email <span className="text-mustard">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-darkgreen bg-white text-darkgreen px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="telefono">
              Teléfono <span className="text-mustard">*</span>
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              className="w-full rounded-md border border-darkgreen bg-white text-darkgreen px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="personas">
              ¿Cuántas personas? <span className="text-mustard">*</span>
            </label>
            <select
              id="personas"
              name="personas"
              required
              value={personas}
              onChange={(e) => setPersonas(e.target.value)}
              className="w-full rounded-md border border-darkgreen bg-white text-darkgreen px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <p className="text-xs text-darkgreen mt-1">
              * Si son más de 10 personas, por favor indícalo abajo.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="mensaje">
              Cuéntanos más
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              className="w-full rounded-md border border-darkgreen bg-white text-darkgreen px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-mustard text-darkgreen font-semibold px-6 py-2 rounded-full shadow-md hover:bg-lightmustard transition"
            >
              Reservar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
