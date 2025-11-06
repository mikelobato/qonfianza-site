const contactChannels = [
  {
    label: "Email directo",
    value: "info@qonfianza.com",
    href: "mailto:info@qonfianza.com",
  },
  {
    label: "Teléfono directo",
    value: "644 654 944",
    href: "tel:+34644654944",
  },
]

export function ContactSection() {
  return (
    <section id="contacto" className="py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-900/70">
            Contacto directo
          </span>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-slate-900 sm:text-[2.75rem]">
            Hablemos sobre la protección que necesitas
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Cuéntanos qué necesitas y recibirás una propuesta personalizada con análisis comparativo, sin coste ni
            compromiso.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-8 rounded-[2.5rem] border border-emerald-100 bg-white/95 p-12 shadow-[0_38px_90px_-60px_rgba(12,116,93,0.35)]">
            <div className="space-y-4">
              <p className="text-base font-semibold text-emerald-800/80">Agenda a tu medida</p>
              <p className="text-lg leading-relaxed text-slate-600">
                Concertamos una primera reunión online o en nuestra oficina de Viladecans (Carrer de la Tecnologia, 17).
                Llegamos con un estudio previo para que la charla vaya al grano desde el primer minuto.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactChannels.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-emerald-100 bg-white px-6 py-5 shadow-sm shadow-emerald-900/10"
                >
                  <span className="text-xs font-medium text-slate-500">{item.label}</span>
                  <a
                    href={item.href}
                    className="mt-2 block text-lg font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-emerald-100 bg-white/95 p-10 shadow-[0_32px_80px_-55px_rgba(12,116,93,0.35)]">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-emerald-800/80">Horario</p>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-medium text-emerald-900/80">
                  Cita previa
                </span>
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <p className="flex items-center justify-between">
                  <span>Lunes a viernes</span>
                  <span className="font-medium text-slate-900">09:00 - 18:00</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Sábados</span>
                  <span className="font-medium text-slate-900">10:00 - 14:00</span>
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald-200/60 bg-emerald-50/70 p-10 text-slate-900 shadow-inner">
              <p className="text-base font-semibold text-emerald-800/80">Visítanos</p>
              <p className="mt-3 text-lg leading-relaxed text-slate-600">
                Contamos con un espacio privado para revisar documentación con calma. Reserva hora y prepararemos todo lo
                necesario antes de verte.
              </p>
              <address className="mt-5 space-y-1 not-italic text-sm text-emerald-800/80">
                <p>Carrer de la Tecnologia, 17</p>
                <p>08840 Viladecans · Barcelona</p>
                <p>Solo con cita previa.</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
