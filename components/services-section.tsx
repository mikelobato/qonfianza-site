import { Card } from "@/components/ui/card"
import { HomeIcon, HeartIcon, CarIcon } from "./icons"

const services = [
  {
    icon: HomeIcon,
    title: "Patrimonio & Multirriesgo",
    description: "Hogar premium, comunidades, comercios emblemáticos y pymes en crecimiento.",
    features: ["Arquitectura de coberturas a medida", "Peritación independiente", "Asistencia preferente 24/7"],
  },
  {
    icon: HeartIcon,
    title: "Vida & Previsión",
    description: "Vida, salud, ahorro y protección de ingresos con visión patrimonial.",
    features: ["Planificación sucesoria y fiscal", "Coberturas modulares y flexibles", "Acompañamiento continuado"],
  },
  {
    icon: CarIcon,
    title: "Movilidad Premium",
    description: "Coche, moto, flotas corporativas y vehículos de colección.",
    features: ["Gestión de siniestros delegada", "Vehículo de sustitución garantizado", "Condiciones exclusivas"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-gradient-to-b from-[#eef2f6] via-white to-[#f6f4ed] py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0f5d4f]/15 bg-white px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#0f5d4f]/70">
              Servicios a medida
            </span>
            <h2 className="text-4xl leading-[1.1] text-[#0b1f24] lg:text-[3rem]">
              Protección integral con carácter <span className="text-[#0f5d4f]">bespoke</span>
            </h2>
            <p className="text-lg text-[#2f494f]">
              Configuramos programas aseguradores exclusivos para perfiles particulares, corporativos e institucionales
              que necesitan coberturas precisas, negociaciones expertas y una interlocución única.
            </p>
            <div className="space-y-4 text-[#2f494f]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#0f5d4f]/65">Metodología diferenciadora</p>
              <ul className="space-y-3 text-sm leading-relaxed">
                <li>
                  • Auditoría de pólizas y detección de brechas de cobertura con análisis comparativo de mercado.
                </li>
                <li>
                  • Negociación independiente con aseguradoras de primer nivel para optimizar primas y garantías.
                </li>
                <li>• Seguimiento continuo, gestión delegada de siniestros y revisión anual estratégica.</li>
              </ul>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-[#0f5d4f]/30 bg-white/80 px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0f5d4f] transition-all duration-300 hover:border-[#0f5d4f]/55 hover:shadow-md"
            >
              Solicitar auditoría gratuita
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-[#0f5d4f]/12 bg-white/85 p-8 shadow-[0_35px_90px_-60px_rgba(15,61,79,0.65)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#0f5d4f]/35 hover:shadow-[0_40px_100px_-55px_rgba(15,61,79,0.6)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f5d4f]/8 via-transparent to-[#d6b35d]/12 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0f5d4f]/15 bg-[#0f5d4f]/12 text-[#0f5d4f] transition-all duration-300 group-hover:border-[#0f5d4f]/35 group-hover:bg-[#0f5d4f]/18">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-4xl font-semibold text-[#0f5d4f]/10">{`0${index + 1}`}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0b1f24]">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-[#2f494f]">{service.description}</p>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0f5d4f]/15 to-transparent" />
                    <ul className="space-y-3 text-sm text-[#2f494f]/90">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d6b35d]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mt-16 rounded-[2.5rem] border border-[#0f5d4f]/12 bg-white/80 px-10 py-10 text-center shadow-[0_35px_90px_-60px_rgba(15,61,79,0.6)] backdrop-blur md:text-left">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="max-w-2xl text-base text-[#2f494f]">
              Cada proyecto arranca con una auditoría completa de tus pólizas y un dossier ejecutivo con escenarios de
              ahorro, ampliación de coberturas y roadmap de implementación.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-[#0f5d4f]/30 bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0f5d4f] transition-all duration-300 hover:border-[#0f5d4f]/55 hover:shadow-md"
            >
              Agenda una reunión
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
