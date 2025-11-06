import { CheckCircleIcon, ClockIcon, ShieldIcon, TrendingDownIcon } from "./icons"

const benefits = [
  {
    icon: TrendingDownIcon,
    title: "Optimización de primas",
    description: "Auditamos tus pólizas con visión técnica y negociamos mejores condiciones con aseguradoras top tier.",
  },
  {
    icon: ShieldIcon,
    title: "Cobertura superior",
    description: "Configuramos garantías exclusivas adaptadas a activos de alto valor y riesgos corporativos complejos.",
  },
  {
    icon: ClockIcon,
    title: "Respuesta inmediata",
    description: "Gestión delegada de siniestros y soporte continuo en todas las fases del ciclo asegurador.",
  },
  {
    icon: CheckCircleIcon,
    title: "Sin compromiso",
    description: "Estudio gratuito de coberturas con transparencia absoluta y sin obligaciones contractuales.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-emerald-50/40 to-white" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-emerald-900/70">
              Valor diferencial
            </span>
            <div className="space-y-6">
              <h2 className="font-heading text-4xl leading-tight text-slate-900 sm:text-[2.8rem]">
                Delega tu tranquilidad en una correduría <span className="text-emerald-700">independiente</span>
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Qonfianza nace para simplificar la gestión integral de seguros personales y corporativos, integrando
                experiencia técnica, negociación especializada y una relación directa contigo.
              </p>
            </div>

            <div className="rounded-[2rem] border border-emerald-100 bg-white/90 p-8 shadow-[0_32px_80px_-55px_rgba(12,116,93,0.35)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800/70">Compromiso boutique</p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Acompañamos cada siniestro y revisión de pólizas como si fuera propio, actuando como tu socio estratégico
                y confidencial.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.title}
                    className="rounded-[1.5rem] border border-emerald-100 bg-white/95 p-6 shadow-[0_24px_60px_-50px_rgba(12,116,93,0.35)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl text-slate-900">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="rounded-[2.25rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-700 p-[1px] shadow-[0_38px_90px_-45px_rgba(12,116,93,0.65)]">
              <div className="rounded-[2.2rem] bg-slate-900/75 px-10 py-12 text-center text-white sm:px-16">
                <h3 className="font-heading text-3xl leading-tight">Solicita tu estudio personalizado sin coste</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  Analizamos tu situación actual, diseñamos alternativas comparativas y te entregamos un dossier ejecutivo
                  con recomendaciones claras.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 transition-colors hover:text-emerald-900"
                  >
                    Coordinar llamada
                  </a>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white/70">
                    Respuesta en menos de 24h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
