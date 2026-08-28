import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  clinic,
  credentials,
  images,
  principles,
  procedures,
  categories,
  carePath,
  testimonials,
  posts,
  galleryCases,
  galleryDisclaimer,
} from "@/data/site";
import { Reveal, useParallax } from "@/components/site/Reveal";
import { ActionLink, Disclaimer, Eyebrow, Section, SectionHeading } from "@/components/site/ui";

const title = `${clinic.shortName} — ${clinic.tagline}`;
const description = clinic.description;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Hero() {
  const parallax = useParallax<HTMLImageElement>(50);
  return (
    <section className="relative overflow-hidden bg-ivory pt-36 md:pt-44">
      <div className="mx-auto grid w-full max-w-[92rem] items-end gap-14 px-6 pb-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-14 lg:pb-28">
        <div>
          <Reveal>
            <Eyebrow>{clinic.tagline}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-8 text-[clamp(2.8rem,7.4vw,6.4rem)] leading-[0.98] tracking-[-0.02em] text-balance">
              Surgical precision,
              <span className="block italic text-stone">quietly considered.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-9 max-w-md text-[0.98rem] leading-[1.95] text-muted-foreground">
              {clinic.description}
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-11 flex flex-wrap items-center gap-4">
            <ActionLink to="/contact" arrow>
              Book a Consultation
            </ActionLink>
            <ActionLink to="/procedures" variant="outline">
              Explore Procedures
            </ActionLink>
          </Reveal>
        </div>

        <Reveal variant="clip" delay={120} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <img
              ref={parallax}
              src={images.heroPortrait}
              alt="Editorial portrait representing the clinic's aesthetic approach"
              className="size-full scale-[1.12] object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -left-4 bottom-8 hidden bg-ivory px-8 py-6 md:block lg:-left-16">
            <p className="font-display text-4xl leading-none">18+</p>
            <p className="eyebrow mt-3">Years of practice</p>
          </div>
        </Reveal>
      </div>

      <div className="overflow-hidden border-y border-border bg-sand py-5">
        <ul className="no-scrollbar flex gap-14 overflow-x-auto px-6 md:justify-center md:px-10">
          {credentials.map((c) => (
            <li key={c} className="eyebrow whitespace-nowrap">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <Section className="bg-ivory">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Philosophy"
          index="01"
          title={
            <>
              Care shaped around
              <span className="italic text-stone"> the individual</span>
            </>
          }
          intro="Four principles guide every consultation, every plan and every stage of recovery."
        />
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.number} delay={i * 90} className="border-t border-border pt-7">
              <span className="eyebrow">{p.number}</span>
              <h3 className="mt-4 text-2xl leading-tight">{p.title}</h3>
              <p className="mt-4 text-sm leading-[1.95] text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProceduresPreview() {
  const featured = categories.map((c) => procedures.find((p) => p.category === c)!).filter(Boolean);
  return (
    <Section className="bg-sand">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Procedures"
          index="02"
          title={
            <>
              A focused range,
              <span className="italic text-stone"> practised often</span>
            </>
          }
        />
        <Reveal>
          <ActionLink to="/procedures" variant="ghost" arrow>
            All procedures
          </ActionLink>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80} className={i % 2 === 1 ? "lg:mt-16" : undefined}>
            <Link to="/procedures/$slug" params={{ slug: p.slug }} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-beige">
                <img
                  src={p.image}
                  alt={`${p.category} procedures — ${p.name}`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <span className="eyebrow mt-6 block">{p.category}</span>
              <h3 className="mt-2 flex items-center gap-2 text-2xl leading-tight">
                {p.name}
                <ArrowRight
                  aria-hidden
                  className="size-4 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </h3>
              <p className="mt-3 text-sm leading-[1.9] text-muted-foreground">{p.excerpt}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function SurgeonFeature() {
  return (
    <Section className="bg-charcoal text-ivory">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal variant="clip">
          <div className="aspect-[4/5] overflow-hidden bg-stone">
            <img
              src={images.surgeonPortrait}
              alt={`Portrait of ${clinic.surgeon.name}`}
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow className="text-ivory/50">The Surgeon</Eyebrow>
            <h2 className="mt-7 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.08]">
              {clinic.surgeon.name}
              <span className="mt-3 block text-lg italic tracking-wide text-ivory/60">
                {clinic.surgeon.specialty}
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-[0.95rem] leading-[1.95] text-ivory/65">
              Practice is built on unhurried consultation and conservative, individually planned
              surgery. Suitability is always determined in consultation, and the reasons not to
              proceed are discussed as openly as the reasons to.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-6 border-t border-ivory/15 pt-8 sm:grid-cols-2">
            {[
              { k: "Certification", v: clinic.surgeon.credentials },
              { k: "Education", v: clinic.surgeon.education },
              { k: "Memberships", v: clinic.surgeon.memberships.join(", ") },
              { k: "Facility", v: "Accredited surgical facility" },
            ].map((row, i) => (
              <Reveal key={row.k} delay={i * 70}>
                <p className="eyebrow text-ivory/45">{row.k}</p>
                <p className="mt-2 text-sm text-ivory/80">{row.v}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-10">
            <ActionLink to="/about" variant="light" arrow>
              About the practice
            </ActionLink>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function CarePath() {
  return (
    <Section className="bg-ivory">
      <SectionHeading
        eyebrow="Patient Journey"
        index="03"
        title={
          <>
            Five stages,
            <span className="italic text-stone"> clearly explained</span>
          </>
        }
      />
      <ol className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
        {carePath.map((s, i) => (
          <Reveal key={s.step} delay={i * 70} as="li" className="group bg-ivory p-8 transition-colors duration-700 hover:bg-sand">
            <span className="font-display text-3xl text-beige transition-colors duration-700 group-hover:text-gold">
              {s.step}
            </span>
            <h3 className="mt-6 text-xl leading-tight">{s.title}</h3>
            <p className="mt-3 text-sm leading-[1.9] text-muted-foreground">{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

function GalleryTeaser() {
  return (
    <Section className="bg-sand">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Results"
          index="04"
          title={
            <>
              A record of
              <span className="italic text-stone"> considered outcomes</span>
            </>
          }
        />
        <Reveal>
          <ActionLink to="/gallery" variant="ghost" arrow>
            View gallery
          </ActionLink>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryCases.slice(0, 3).map((c, i) => (
          <Reveal key={c.id} variant="clip" delay={i * 90}>
            <div className={`overflow-hidden bg-beige ${i === 1 ? "aspect-[3/4] lg:mt-12" : "aspect-[4/5]"}`}>
              <img src={c.image} alt={`${c.procedure} case study`} loading="lazy" className="size-full object-cover" />
            </div>
            <p className="eyebrow mt-5">{c.procedure}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12">
        <Disclaimer>{galleryDisclaimer}</Disclaimer>
      </Reveal>
    </Section>
  );
}

function Voices() {
  return (
    <Section className="bg-ivory">
      <SectionHeading eyebrow="Patient Voices" index="05" align="center" title="In their words" />
      <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2">
        {testimonials.slice(0, 4).map((t, i) => (
          <Reveal key={t.initials} delay={i * 80} className="border-t border-border pt-8">
            <p className="font-display text-[1.5rem] leading-[1.55] text-charcoal">“{t.quote}”</p>
            <p className="eyebrow mt-6">
              {t.initials} — {t.procedure}
            </p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-14">
        <ActionLink to="/testimonials" variant="ghost" arrow>
          More patient experiences
        </ActionLink>
      </Reveal>
    </Section>
  );
}

function Journal() {
  return (
    <Section className="bg-sand">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading eyebrow="Journal" index="06" title="Notes & patient guides" />
        <Reveal>
          <ActionLink to="/resources" variant="ghost" arrow>
            All resources
          </ActionLink>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {posts.slice(0, 3).map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <Link to="/resources/$slug" params={{ slug: p.slug }} className="group block">
              <div className="aspect-[16/11] overflow-hidden bg-beige">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                />
              </div>
              <span className="eyebrow mt-6 block">
                {p.category} — {p.date}
              </span>
              <h3 className="mt-3 text-2xl leading-tight group-hover:text-gold">{p.title}</h3>
              <p className="mt-3 text-sm leading-[1.9] text-muted-foreground">{p.excerpt}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ClosingCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={images.clinicInterior}
        alt="Interior of the clinic consultation suite"
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="relative mx-auto w-full max-w-[86rem] px-6 py-32 text-ivory md:px-10 md:py-44 lg:px-16">
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-ivory/60">Consultation</Eyebrow>
          <h2 className="mt-7 text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[1.05]">
            Begin with a conversation,
            <span className="italic text-ivory/70"> not a decision.</span>
          </h2>
          <p className="mt-7 max-w-lg text-[0.95rem] leading-[1.95] text-ivory/70">
            Consultations are private, unhurried and without obligation. Every procedure has
            potential risks and considerations; suitability is determined in consultation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ActionLink to="/contact" variant="light" arrow>
              Request a Consultation
            </ActionLink>
            <ActionLink href={clinic.phoneHref} variant="light">
              {clinic.phoneLabel}
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <h1 className="sr-only">
        {clinic.shortName} — {clinic.tagline}
      </h1>
      <Hero />
      <Philosophy />
      <ProceduresPreview />
      <SurgeonFeature />
      <CarePath />
      <GalleryTeaser />
      <Voices />
      <Journal />
      <ClosingCta />
    </>
  );
}
