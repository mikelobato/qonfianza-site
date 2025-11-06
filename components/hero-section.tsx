import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] bg-gradient-to-br from-emerald-100/50 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-24 pt-32 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:pb-32 lg:pt-36">
        <div className="flex-1 space-y-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-900/70">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2">
              Correduría boutique
            </span>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-emerald-800">
              Registro DGSFP F3274
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="font-heading text-4xl leading-[1.08] text-slate-900 sm:text-5xl lg:text-[3.7rem]">
              Seguros de <span className="text-emerald-700">Qonfianza</span> para proteger tu patrimonio con criterio
              experto
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600 text-balance">
              Soy <strong className="text-slate-900">Esmeralda Melero Soto</strong>, corredora independiente con más de
              16 años acompañando a familias y empresas. Diseñamos planes aseguradores integrales, negociamos con las
              mejores compañías y gestionamos tus pólizas de principio a fin.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-700 px-7 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-white shadow-[0_18px_40px_-22px_rgba(16,112,88,0.9)] transition-colors duration-300 hover:bg-emerald-800"
            >
              Solicitar propuesta
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-200 bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800 transition-all duration-300 hover:border-emerald-400 hover:shadow-lg"
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
                <p className="text-base font-semibold uppercase tracking-[0.28em] text-emerald-700">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative overflow-hidden rounded-[2.75rem] border border-white/70 bg-white/70 p-5 shadow-[0_35px_80px_-45px_rgba(15,61,79,0.45)] backdrop-blur">
            <div className="absolute left-6 top-6 rounded-full border border-emerald-200 bg-white px-4 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.35em] text-emerald-700/80 shadow-sm">
              Acompañamiento personal
            </div>
            <div className="relative overflow-hidden rounded-[2.2rem]">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-700/20 via-transparent to-transparent" />
              <Image
                src="/esmeralda-melero.avif"
                alt="Esmeralda Melero Soto - Corredora de Seguros"
                width={600}
                height={760}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-12 left-8 right-8 rounded-3xl border border-emerald-100 bg-white/95 p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.33em] text-emerald-700/70">Registro</p>
                  <p className="text-2xl font-semibold text-emerald-700">DGSFP · F3274</p>
                </div>
                <div className="text-right">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-700/70">
                    Firma responsable
                  </p>
                  <p className="text-sm font-medium text-slate-600">Esmeralda Melero Soto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
