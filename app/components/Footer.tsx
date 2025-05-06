export default function Footer() {
  return (
    <footer className="bg-darkgreen text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Antigua Bodega</h3>
            <p className="text-gray-300">
              Un lugar donde la tradición y la modernidad se encuentran.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-300">
              Dirección: [Tu dirección aquí]<br />
              Teléfono: [Tu teléfono aquí]<br />
              Email: [Tu email aquí]
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <p className="text-gray-300">
              Lunes - Viernes: 12:00 - 23:00<br />
              Sábado - Domingo: 12:00 - 00:00
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Antigua Bodega. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
  