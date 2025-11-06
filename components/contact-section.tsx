const contactChannels = [
  {
    label: "Email directo",
    value: "esmeralda@qonfianza.com",
    href: "mailto:esmeralda@qonfianza.com",
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
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-emerald-900/70">
            Contacto directo
          </span>
          <h2 className="mt-6 font-heading text-4xl leading-tight text-slate-900 sm:text-[2.75rem]">
            Conversemos sobre tu próximo nivel de protección
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Cuéntanos qué necesitas y recibirás una propuesta personalizada con análisis comparativo, sin coste ni
            compromiso.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-10 rounded-[2.5rem] border border-emerald-100 bg-white/95 p-12 shadow-[0_38px_90px_-60px_rgba(12,116,93,0.35)]">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800/70">Designado para ti</p>
              <p className="text-lg leading-relaxed text-slate-600">
                Nos adaptamos a tu agenda para una primera reunión telemática o en nuestras oficinas de Madrid. Llegamos
                preparados con un análisis previo para que cada minuto cuente.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {contactChannels.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex flex-col gap-3 rounded-2xl border border-emerald-100 bg-white px-6 py-5 transition-all duration-300 hover:border-emerald-300 hover:text-emerald-800 hover:shadow-lg"
                >
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald-800/60">
                    {item.label}
                  </span>
                  <span className="text-lg font-semibold text-emerald-700 group-hover:text-emerald-900">{item.value}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-emerald-100 bg-white/95 p-10 shadow-[0_32px_80px_-55px_rgba(12,116,93,0.35)]">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800/70">Horario</p>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-emerald-900/80">
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

            <div className="rounded-[2rem] border border-emerald-200 border-dashed bg-emerald-50/70 p-10 text-slate-900 shadow-inner">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800/70">Visítanos</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Disponemos de sala privada para revisar documentación con total confidencialidad. Agenda tu visita y te
                enviaremos la confirmación con todos los detalles.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald-800/65">
                <span>Ubicación · Madrid</span>
                <span className="h-px w-10 bg-emerald-200" />
                <span>Atención nacional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
