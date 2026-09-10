import { createFileRoute } from "@tanstack/react-router";
import { clinic, testimonials, carePath } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, Disclaimer, PageHero, Section, SectionHeading } from "@/components/site/ui";

const title = `Patient Experiences — ${clinic.shortName}`;
const description =
  "Anonymised patient reflections on consultation, surgery and aftercare at the practice. Individual results vary.";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Voices"
        title={
          <>
            Experiences,
            <span className="italic text-light-brown"> in their words</span>
          </>
        }
        intro="Reflections shared with permission and anonymised. Testimonials describe individual experiences and are not a prediction of results."
      />

      <Section className="bg-cream">
        <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.initials} delay={(i % 2) * 90} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <figure className="border-t border-border pt-9">
                <span aria-hidden className="font-display text-5xl leading-none text-cream">
                  &ldquo;
                </span>
                <blockquote className="mt-4 font-display text-[1.65rem] leading-[1.5] text-brown">
                  {t.quote}
                </blockquote>
                <figcaption className="eyebrow mt-7">
                  {t.initials} — {t.procedure}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="What Care Looks Like"
          title="The same process, for everyone"
          intro="Each experience above followed the same structured path through consultation, planning and follow-up."
        />
        <ol className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
          {carePath.map((s, i) => (
            <Reveal key={s.step} as="li" delay={i * 60} className="bg-white p-8">
              <span className="font-display text-3xl text-cream">{s.step}</span>
              <h3 className="mt-5 text-xl leading-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-[1.9] text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-10">
          <Disclaimer>
            Testimonials reflect individual experiences. Individual results vary and suitability is
            determined during consultation.
          </Disclaimer>
          <ActionLink to="/contact" arrow>
            Book a Consultation
          </ActionLink>
        </Reveal>
      </Section>
    </>
  );
}
