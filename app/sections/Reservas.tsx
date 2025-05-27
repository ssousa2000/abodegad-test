"use client";

import { useState } from "react";

export default function Reservas() {
  const [personas, setPersonas] = useState("1");

  return (
    <section
      id="reservas"
      className="relative min-h-screen flex flex-col justify-center items-center bg-beige text-darkgreen px-4 py-16 font-poppins overflow-visible"
    >
      {/* SVG decorativo superior izquierdo */}
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 opacity-80 pointer-events-none z-0"
      >
        <circle cx="400" cy="400" r="80" stroke="#E9A23B" strokeWidth="2.5" />
        <circle cx="400" cy="400" r="120" stroke="#E9A23B" strokeWidth="1.5" />
        <circle cx="400" cy="400" r="160" stroke="#E9A23B" strokeWidth="1.5" />
        <circle cx="400" cy="400" r="200" stroke="#E9A23B" strokeWidth="1.5" />
      </svg>

      {/* SVG decorativo inferior derecho */}
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 opacity-80 pointer-events-none z-0"
      >
        <circle cx="200" cy="200" r="80" stroke="#E9A23B" strokeWidth="2.5" />
        <circle cx="200" cy="200" r="120" stroke="#E9A23B" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="160" stroke="#E9A23B" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="190" stroke="#E9A23B" strokeWidth="1.5" />
      </svg>
      {/* Contenido */}
      <div className="relative z-10 w-full max-w-xl bg-[rgb(243,235,200)] rounded-xl shadow-md p-8 border border-darkgreen">
        <h2 className="text-3xl font-theSeasons font-bold mb-6 text-center text-darkgreen">
          Reservas
        </h2>
<form
  action="https://formsubmit.co/labodegareservas@gmail.com"
  method="POST"
  className="space-y-6"
>
  {/* Nombre */}
  <div>
    <label className="block text-sm font-theSeasons mb-1" htmlFor="nombre">
      Nombre <span className="text-mustard">*</span>
    </label>
    <input
      id="nombre"
      name="nombre"
      type="text"
      required
      className="w-full rounded-md border border-darkgreen bg-beige text-darkgreen font-poppins px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-theSeasons mb-1" htmlFor="email">
      Email <span className="text-mustard">*</span>
    </label>
    <input
      id="email"
      name="email"
      type="email"
      required
      className="w-full rounded-md border border-darkgreen bg-beige text-darkgreen font-poppins px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Teléfono */}
  <div>
    <label className="block text-sm font-theSeasons mb-1" htmlFor="telefono">
      Teléfono <span className="text-mustard">*</span>
    </label>
    <input
      id="telefono"
      name="telefono"
      type="tel"
      required
      className="w-full rounded-md border border-darkgreen bg-beige text-darkgreen font-poppins px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
    />
  </div>

  {/* Personas */}
  <div>
    <label className="block text-sm font-theSeasons mb-1" htmlFor="personas">
      ¿Cuántas personas? <span className="text-mustard">*</span>
    </label>
    <select
      id="personas"
      name="personas"
      required
      value={personas}
      onChange={(e) => setPersonas(e.target.value)}
      className="w-full rounded-md border border-darkgreen bg-beige text-darkgreen font-poppins px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
    >
      {Array.from({ length: 10 }, (_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
    <p className="text-xs text-darkgreen mt-1 font-poppins">
      * Si son más de 10 personas, por favor indícalo abajo.
    </p>
  </div>

  {/* Mensaje */}
  <div>
    <label className="block text-sm font-theSeasons mb-1" htmlFor="mensaje">
      Indícanos la fecha, hora y si es una ocasión especial.{" "}
      <span className="text-mustard">*</span>
    </label>
    <textarea
      id="mensaje"
      name="mensaje"
      required
      rows={4}
      className="w-full rounded-md border border-darkgreen bg-beige text-darkgreen font-poppins px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
    ></textarea>
  </div>

  {/* (Opcional) Redirección tras enviar */}
  {/* <input type="hidden" name="_next" value="https://tuweb.com/gracias" /> */}

  {/* Botón */}
  <div className="text-center">
    <button
      type="submit"
      className="bg-darkgreen text-beige font-theSeasons px-6 py-2 rounded-full shadow-md hover:bg-mustard transition"
    >
      Reservar
    </button>
  </div>
</form>

        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Reserva enviada (aún falta configurar envío de correo)");
          }}
          className="space-y-6"
        >
          {/* Nombre */}
          {/* <div>
            <label
              className="block text-sm font-theSeasons mb-1"
              htmlFor="nombre"
            >
              Nombre <span className="text-mustard">*</span>
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="w-full rounded-md border border-darkgreen bg-beige text-darkgreen font-poppins px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            />
          </div> */}

          {/* Email */}
          {/* <div>
            <label
              className="block text-sm font-theSeasons mb-1"
              htmlFor="email"
            >
              Email <span className="text-mustard">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-darkgreen bg-beige text-darkgreen font-poppins px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            />
          </div> */}

          {/* Teléfono */}
          {/* <div>
            <label
              className="block text-sm font-theSeasons mb-1"
              htmlFor="telefono"
            >
              Teléfono <span className="text-mustard">*</span>
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              className="w-full rounded-md border border-darkgreen bg-beige text-darkgreen font-poppins px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            />
          </div> */}

          {/* Personas */}
          {/* <div>
            <label
              className="block text-sm font-theSeasons mb-1"
              htmlFor="personas"
            >
              ¿Cuántas personas? <span className="text-mustard">*</span>
            </label>
            <select
              id="personas"
              name="personas"
              required
              value={personas}
              onChange={(e) => setPersonas(e.target.value)}
              className="w-full rounded-md border border-darkgreen bg-beige text-darkgreen font-poppins px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <p className="text-xs text-darkgreen mt-1 font-poppins">
              * Si son más de 10 personas, por favor indícalo abajo.
            </p>
          </div> */}

          {/* Mensaje */}
          {/* <div>
            <label
              className="block text-sm font-theSeasons mb-1"
              htmlFor="mensaje"
            >
              Indícanos la fecha, hora y si es una ocasión especial.{" "}
              <span className="text-mustard">*</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={4}
              className="w-full rounded-md border border-darkgreen bg-beige text-darkgreen font-poppins px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
            ></textarea>
          </div> */}

          {/* Botón */}
          {/* <div className="text-center">
            <button
              type="submit"
              className="bg-darkgreen text-beige font-theSeasons px-6 py-2 rounded-full shadow-md hover:bg-mustard transition"
            >
              Reservar
            </button>
          </div>
        </form> */} 
      </div>
    </section>
  );
}
