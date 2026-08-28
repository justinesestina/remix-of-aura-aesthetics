import { createFileRoute } from "@tanstack/react-router";
import { clinic, credentials, images, principles, carePath } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, Eyebrow, PageHero, Section, SectionHeading } from "@/components/site/ui";

const title = `About — ${clinic.shortName}`;
const description =
  "The practice, the surgeon and the principles behind consultation-led cosmetic surgery and aesthetic medicine.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A private practice built on
            <span className="italic text-stone"> conversation</span>
          </>
        }
        intro="Consultation-led care, conservative planning and aftercare that continues the same conversation."
      />

      <Section className="bg-ivory">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>The Surgeon</Eyebrow>
              <h2 className="mt-7 text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.08]">
                {clinic.surgeon.name}
              </h2>
              <p className="mt-3 text-lg italic text-stone">{clinic.surgeon.specialty}</p>
            </Reveal>
            <div className="mt-9 space-y-6 text-[0.95rem] leading-[1.95] text-muted-foreground">
              <Reveal delay={60} as="p">
                [Biography placeholder.] Practice focuses on a deliberately narrow range of
                surgical and non-surgical procedures, performed frequently and planned individually.
              </Reveal>
              <Reveal delay={120} as="p">
                Every plan begins with an unhurried consultation covering goals, anatomy, medical
                history, alternatives and the potential risks and considerations involved.
                Suitability is determined in consultation, and individual results vary.
              </Reveal>
              <Reveal delay={180} as="p">
                [Training and appointments placeholder.] Surgery is performed in an accredited
                facility with a consistent clinical team.
              </Reveal>
            </div>
            <div className="mt-12 grid gap-x-10 gap-y-7 border-t border-border pt-9 sm:grid-cols-2">
              {[
                { k: "Certification", v: clinic.surgeon.credentials },
                { k: "Education", v: clinic.surgeon.education },
                { k: "Memberships", v: clinic.surgeon.memberships.join(", ") },
                { k: "Facility", v: "Accredited surgical facility" },
              ].map((row, i) => (
                <Reveal key={row.k} delay={i * 70}>
                  <p className="eyebrow">{row.k}</p>
                  <p className="mt-2 text-sm">{row.v}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="clip">
            <div className="aspect-[4/5] overflow-hidden bg-sand lg:sticky lg:top-32">
              <img
                src={images.surgeonPortrait}
                alt={`Portrait of ${clinic.surgeon.name}`}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-sand">
        <SectionHeading
          eyebrow="Principles"
          title="How the practice works"
          intro="The same four principles apply whether a plan is surgical, non-surgical or a recommendation to do nothing at all."
        />
        <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.number} delay={i * 80} className="border-t border-border pt-7">
              <span className="eyebrow">{p.number}</span>
              <h3 className="mt-4 text-2xl leading-tight">{p.title}</h3>
              <p className="mt-4 text-sm leading-[1.95] text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-charcoal text-ivory">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal variant="clip">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={images.clinicInterior}
                alt="The clinic consultation suite"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow className="text-ivory/50">The Clinic</Eyebrow>
              <h2 className="mt-7 text-[clamp(1.9rem,4vw,3rem)] leading-[1.1]">
                A calm, private environment
              </h2>
              <p className="mt-7 max-w-lg text-[0.95rem] leading-[1.95] text-ivory/65">
                Consultation rooms are designed for privacy and unhurried conversation. Procedures
                are carried out in an accredited facility with a consistent clinical team, and
                aftercare is scheduled before anything is booked.
              </p>
            </Reveal>
            <ul className="mt-10 grid gap-x-10 gap-y-4 border-t border-ivory/15 pt-8 sm:grid-cols-2">
              {credentials.map((c, i) => (
                <Reveal key={c} as="li" delay={i * 60} className="text-sm text-ivory/75">
                  {c}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-ivory">
        <SectionHeading eyebrow="Patient Journey" title="What to expect, stage by stage" />
        <ol className="mt-14 border-t border-border">
          {carePath.map((s, i) => (
            <Reveal
              key={s.step}
              as="li"
              delay={i * 60}
              className="group grid gap-4 border-b border-border py-8 md:grid-cols-[6rem_18rem_1fr] md:items-baseline"
            >
              <span className="font-display text-2xl text-beige transition-colors duration-500 group-hover:text-gold">
                {s.step}
              </span>
              <h3 className="text-xl">{s.title}</h3>
              <p className="text-sm leading-[1.9] text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12">
          <ActionLink to="/contact" arrow>
            Book a Consultation
          </ActionLink>
        </Reveal>
      </Section>
    </>
  );
}
