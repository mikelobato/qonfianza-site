import { TrendingDownIcon, ShieldIcon, ClockIcon, CheckCircleIcon } from "./icons"

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
    <section id="beneficios" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[#d6b35d]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-[#0f5d4f]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0f5d4f]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#0f5d4f]/70">
              Valor diferencial
            </span>
            <h2 className="text-4xl leading-tight text-[#0b1f24] lg:text-5xl">
              Delega tu tranquilidad en una correduría{' '}
              <span className="text-[#0f5d4f]">independiente</span>
            </h2>
            <p className="text-lg text-[#385057]">
              Qonfianza nace para simplificar la gestión integral de seguros personales y corporativos, integrando
              experiencia técnica, cercanía y negociación con las principales aseguradoras del mercado.
            </p>
            <div className="rounded-3xl border border-[#d6b35d]/30 bg-[#d6b35d]/10 p-8 text-[#0b1f24] shadow-sm backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f5d4f]/70">Compromiso boutique</p>
              <p className="mt-3 text-lg leading-relaxed">
                Acompañamos cada siniestro y revisión de pólizas como si fuera propio, con la confidencialidad y
                discreción que exige un servicio de alto nivel.
              </p>
            </div>
          </div>

          <div className="relative rounded-[2.5rem] border border-[#0f5d4f]/15 bg-white/70 p-10 shadow-[0_40px_100px_-60px_rgba(15,61,79,0.55)] backdrop-blur">
            <span className="absolute inset-x-10 top-12 h-px bg-gradient-to-r from-transparent via-[#0f5d4f]/10 to-transparent" />
            <div className="relative mt-4 grid gap-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.title} className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#0f5d4f]/20 bg-[#0f5d4f]/10 text-[#0f5d4f]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#0b1f24]">{benefit.title}</h3>
                      <p className="text-base leading-relaxed text-[#385057]">{benefit.description}</p>
                    </div>
                    {index !== benefits.length - 1 && (
                      <span className="absolute left-6 top-12 h-[90%] w-px bg-gradient-to-b from-[#0f5d4f]/20 via-[#0f5d4f]/10 to-transparent" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="relative mt-24 overflow-hidden rounded-[2.75rem] border border-[#0f5d4f]/10 bg-gradient-to-br from-[#0f5d4f] via-[#0b3b32] to-[#0a2722] px-8 py-14 text-center text-white shadow-[0_40px_120px_-50px_rgba(7,46,39,0.85)]">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <h3 className="text-3xl font-semibold lg:text-4xl">Solicita tu estudio personalizado sin coste</h3>
            <p className="text-lg text-white/75">
              Analizamos tu situación actual, diseñamos alternativas comparativas y te entregamos un dossier ejecutivo con
              recomendaciones claras.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white/95 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#0f5d4f] transition-all duration-300 hover:bg-white"
              >
                Coordinar llamada
              </a>
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/60">
                Respuesta en menos de 24h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
