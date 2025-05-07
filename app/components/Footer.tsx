export default function Footer() {
  return (
    <footer className="bg-darkgreen text-white py-4">
      <div className="px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-stretch">
          <div>
            <h3 className="text-2xl font-bold text-left">Antigua Bodega</h3>
            <br />
            <div className="text-gray-300 text-sm leading-snug mt-2 text-center md:text-left mx-auto md:mx-0 w-full">
              <span>Un lugar donde la tradición</span>
              <br />
              <span>y la modernidad se encuentran.</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm h-full">
            <div className="space-y-2">
              <span className="font-bold">Contacto</span>
              <div>Dirección: [Tu dirección aquí]</div>
              <div>Teléfono: [Tu teléfono aquí]</div>
              <div>Email: [Tu email aquí]</div>
            </div>
            <div className="space-y-2">
              <span className="font-bold">Horario</span>
              <div>Lunes - Viernes: 12:00 - 23:00</div>
              <div>Sábado - Domingo: 12:00 - 00:00</div>
            </div>
          </div>
          <div className="h-full w-full flex items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.3521335524301!2d-77.02784741916217!3d-12.132375497465786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7e2234bc335%3A0x87b75259116cb2b7!2sBodega%20Dalmacia!5e0!3m2!1ses-419!2pe!4v1746644164095!5m2!1ses-419!2pe"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded shadow-md w-full"
            ></iframe>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700 text-center text-gray-300 text-xs">
          <p>&copy; {new Date().getFullYear()} Antigua Bodega. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
  