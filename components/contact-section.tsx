export function ContactSection() {
  return (
    <section id="contacto" className="bg-gradient-to-b from-[#f6f5f1] via-white to-[#f5f8f6] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0f5d4f]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#0f5d4f]/70">
            Contacto directo
          </span>
          <h2 className="mt-6 text-4xl leading-tight text-[#0b1f24] lg:text-5xl">
            Conversemos sobre tu próximo nivel de protección
          </h2>
          <p className="mt-6 text-lg text-[#385057]">
            Cuéntanos qué necesitas y recibirás una propuesta personalizada con análisis comparativo, sin coste ni
            compromiso.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-between gap-10 rounded-[2.5rem] border border-[#0f5d4f]/15 bg-white/75 p-12 shadow-[0_40px_100px_-60px_rgba(15,61,79,0.55)] backdrop-blur">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0f5d4f]/70">Designado para ti</p>
              <p className="text-lg leading-relaxed text-[#385057]">
                Nos adaptamos a tu agenda para una primera reunión telemática o presencial en nuestras oficinas de Madrid.
                Prepararemos toda la documentación necesaria para avanzar sin fricciones.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { label: "Email directo", value: "esmeralda@qonfianza.com", href: "mailto:esmeralda@qonfianza.com" },
                { label: "Teléfono directo", value: "644 654 944", href: "tel:+34644654944" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex flex-col gap-3 rounded-2xl border border-[#0f5d4f]/15 bg-white/80 p-6 transition-all duration-300 hover:border-[#0f5d4f]/35 hover:shadow-md"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f5d4f]/60">
                    {item.label}
                  </span>
                  <span className="text-lg font-medium text-[#0f5d4f] group-hover:text-[#0b3b32]">{item.value}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-[#0f5d4f]/15 bg-white/70 p-10 text-[#0b1f24] shadow-[0_30px_80px_-55px_rgba(15,61,79,0.45)] backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f5d4f]/60">Horario</p>
                <span className="rounded-full border border-[#d6b35d]/30 bg-[#d6b35d]/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1f24]">
                  Cita previa
                </span>
              </div>
              <div className="mt-6 grid gap-4 text-sm text-[#385057]">
                <p className="flex items-center justify-between">
                  <span>Lunes a viernes</span>
                  <span className="font-medium text-[#0b1f24]">09:00 - 18:00</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Sábados</span>
                  <span className="font-medium text-[#0b1f24]">10:00 - 14:00</span>
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-dashed border-[#0f5d4f]/30 bg-[#0f5d4f]/12 p-10 text-[#0b1f24] shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f5d4f]/70">Visítanos</p>
              <p className="mt-4 text-lg leading-relaxed text-[#385057]">
                Disponemos de sala privada para revisar documentación con total confidencialidad. Agenda tu visita y te
                enviaremos la confirmación con todos los detalles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
