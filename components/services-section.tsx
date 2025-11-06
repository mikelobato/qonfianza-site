import { Card } from "@/components/ui/card"
import { CarIcon, HeartIcon, HomeIcon } from "./icons"

const services = [
  {
    icon: HomeIcon,
    title: "Patrimonio & Multirriesgo",
    description: "Hogar premium, comunidades, comercios emblemáticos y pymes en crecimiento.",
    bullets: ["Arquitectura de coberturas a medida", "Peritación independiente", "Asistencia preferente 24/7"],
  },
  {
    icon: HeartIcon,
    title: "Vida & Previsión",
    description: "Vida, salud, ahorro y protección de ingresos con visión patrimonial.",
    bullets: ["Planificación sucesoria y fiscal", "Coberturas modulares y flexibles", "Acompañamiento continuado"],
  },
  {
    icon: CarIcon,
    title: "Movilidad Premium",
    description: "Coche, moto, flotas corporativas y vehículos de colección.",
    bullets: ["Gestión de siniestros delegada", "Vehículo de sustitución garantizado", "Condiciones exclusivas"],
  },
]

const methodology = [
  "Auditoría completa de pólizas y detección de brechas de cobertura.",
  "Negociación independiente con aseguradoras líderes para optimizar primas.",
  "Gestión delegada de siniestros y revisión anual estratégica.",
]

export function ServicesSection() {
  return (
    <section id="servicios" className="relative overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white via-transparent to-transparent" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-emerald-900/70">
            Servicios a medida
          </span>
          <div className="space-y-6">
            <h2 className="font-heading text-4xl leading-tight text-slate-900 sm:text-[2.8rem]">
              Protección integral con carácter <span className="text-emerald-700">bespoke</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Configuramos programas aseguradores exclusivos para perfiles particulares, corporativos e institucionales
              que necesitan coberturas precisas, negociación experta y una voz única ante las compañías.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-emerald-100 bg-white/90 p-8 shadow-[0_28px_50px_-40px_rgba(12,116,93,0.45)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800/70">Metodología</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600">
              {methodology.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-900 hover:shadow-lg"
          >
            Solicitar auditoría gratuita
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white/95 p-8 shadow-[0_30px_80px_-60px_rgba(12,116,93,0.35)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-emerald-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-700">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="text-4xl font-semibold text-emerald-100">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl text-slate-900">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600/90">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <svg className="mt-1 h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
