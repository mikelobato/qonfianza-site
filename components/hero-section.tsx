import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-br from-emerald-100/45 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-32 lg:pt-36">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-emerald-800/80">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-1.5">
                Correduría independiente
              </span>
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-emerald-800">
                Registro DGSFP F3274
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="font-heading text-4xl leading-[1.08] text-slate-900 sm:text-5xl lg:text-[3.6rem]">
                Hablemos de cómo proteger tu patrimonio con criterio
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                Soy <strong className="text-slate-900">Esmeralda Melero Soto</strong>, corredora independiente con más de
                16 años acompañando a familias, emprendedores y empresas. Analizo tu situación, comparo opciones y te
                acompaño en cada decisión aseguradora.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-700 px-7 py-3 text-base font-semibold text-white shadow-[0_18px_40px_-22px_rgba(16,112,88,0.75)] transition-colors duration-300 hover:bg-emerald-800"
              >
                Solicitar propuesta
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-200 bg-white px-7 py-3 text-base font-semibold text-emerald-800 transition-all duration-300 hover:border-emerald-400 hover:shadow-lg"
              >
                Ver servicios
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  value: "16+ años",
                  label: "Diseñando programas aseguradores de alta complejidad",
                },
                {
                  value: "Metodología 360",
                  label: "Auditoría, negociación, implementación y gestión delegada",
                },
              ].map((item) => (
                <div key={item.value} className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm">
                  <p className="text-base font-semibold text-emerald-700">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <figure className="w-full max-w-[520px] rounded-[2.5rem] border border-white/60 bg-white/80 shadow-[0_35px_90px_-50px_rgba(15,61,79,0.45)]">
              <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/esmeralda-melero.avif"
                  alt="Esmeralda Melero Soto durante una sesión de asesoramiento"
                  width={600}
                  height={750}
                  className="h-full w-full object-cover object-center"
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
              </div>
              {/* <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-emerald-100 px-6 py-4 text-sm text-emerald-800/80">
                <span>Registro DGSFP · F3274</span>
                <span>Esmeralda Melero Soto</span>
              </figcaption> */}
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
