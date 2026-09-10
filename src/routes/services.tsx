import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories, clinic, procedures, treatmentPosters, images } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, Disclaimer, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { cn } from "@/lib/utils";

const title = `Services — ${clinic.shortName}`;
const description =
  "Medical-grade, FDA-cleared procedures personally tailored by Dr. Brent Vicente to enhance your natural harmony.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const flagshipProcedure = procedures[0];

  if (!flagshipProcedure) return null;

  return (
    <>
      <PageHero
        eyebrow="Treatment Portfolio"
        title="Services"
        intro="Medical-grade, FDA-cleared procedures personally tailored by Dr. Brent Vicente to enhance your natural harmony."
      />

      {/* Featured Flagship Treatment */}
      <Section className="bg-ivory">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal className="flex flex-col justify-center">
            <span className="eyebrow">Flagship Procedure</span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.08]">
              <Link to="/procedures/$slug" params={{ slug: flagshipProcedure.slug }} className="transition-colors hover:text-gold">
                {flagshipProcedure.name}
              </Link>
            </h2>
            <p className="mt-4 text-lg leading-[1.8] text-muted-foreground">
              {flagshipProcedure.excerpt}
            </p>
            
            <div className="mt-8 space-y-3">
              {flagshipProcedure.overview.slice(0, 3).map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-gold">✦</span>
                  <p className="text-sm leading-[1.8]">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <ActionLink to="/contact">Book {flagshipProcedure.name}</ActionLink>
              <Link
                to="/procedures/$slug"
                params={{ slug: flagshipProcedure.slug }}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-charcoal"
              >
                View Full Details <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal variant="clip" delay={100}>
            <div className="aspect-[4/5] overflow-hidden bg-beige rounded-3xl">
              <img
                src={flagshipProcedure.image}
                alt={flagshipProcedure.name}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Treatment Posters Grid */}
      <Section className="bg-sand">
        <SectionHeading
          eyebrow="Signature Treatments"
          title="Comprehensive Treatment Menu"
          intro="Explore our spectrum of surgical, non-surgical, and medical skin therapies."
        />
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatmentPosters.map((poster, i) => (
            <Reveal key={poster.title} delay={i * 80} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-beige rounded-2xl">
                <img
                  src={poster.image}
                  alt={poster.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl leading-tight">{poster.title}</h3>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* All Procedures Grid */}
      <Section className="bg-ivory">
        <div className="section-intro-header">
          <span className="eyebrow">All Procedures</span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.08]">
            Complete Treatment Catalog
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-[1.8] text-muted-foreground">
            Explore our full range of surgical and non-surgical procedures across face, breast, body and non-surgical care.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80} className={i % 3 === 1 ? "lg:mt-14" : ""}>
              <Link to="/procedures/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-beige rounded-2xl">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category} procedure`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="eyebrow">{p.category}</span>
                  <span className="text-gold">✦</span>
                </div>
                <h3 className="mt-3 flex items-center gap-2 text-2xl leading-tight">
                  {p.name}
                  <ArrowRight
                    aria-hidden
                    className="size-4 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </h3>
                <p className="mt-3 text-sm leading-[1.9] text-muted-foreground">{p.excerpt}</p>
                <p className="eyebrow mt-5">Recovery — {p.recovery}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 rounded-2xl bg-charcoal p-12 text-ivory">
          <h3 className="text-2xl leading-tight">Unsure Which Treatment Is Right For You?</h3>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-[1.95] text-ivory/70">
            Dr. Brent Vicente provides comprehensive diagnostic assessments during your consultation to determine your ideal treatment plan.
          </p>
          <div className="mt-8">
            <ActionLink to="/contact" className="bg-ivory text-charcoal hover:bg-ivory/90">
              Schedule Your Diagnostic Visit
            </ActionLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
