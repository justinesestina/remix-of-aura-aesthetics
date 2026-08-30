import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { clinic, generalFaqs, procedures } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, Disclaimer, Eyebrow, Section } from "@/components/site/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/procedures/$slug")({
  loader: ({ params }) => {
    const procedure = procedures.find((p) => p.slug === params.slug);
    if (!procedure) throw notFound();
    return { procedure };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.procedure.name} — ${clinic.shortName}`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.procedure.excerpt },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.procedure.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/procedures/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/procedures/${params.slug}` }],
    };
  },
  notFoundComponent: ProcedureNotFound,
  component: ProcedureDetail,
});

function ProcedureNotFound() {
  return (
    <Section className="bg-ivory pt-48">
      <h1 className="text-4xl">Procedure not found</h1>
      <p className="mt-5 text-sm text-muted-foreground">
        This procedure page is unavailable or has moved.
      </p>
      <div className="mt-9">
        <ActionLink to="/procedures" arrow>
          All procedures
        </ActionLink>
      </div>
    </Section>
  );
}

function ProcedureDetail() {
  const { procedure } = Route.useLoaderData();
  const related = procedures
    .filter((p) => p.category === procedure.category && p.slug !== procedure.slug)
    .slice(0, 3);

  const blocks = [
    { title: "Who it may suit", items: procedure.candidate },
    { title: "What to expect", items: procedure.expect },
    { title: "Recovery", items: procedure.recoveryNotes },
    { title: "Risks & considerations", items: procedure.considerations },
  ];

  return (
    <>
      <header className="border-b border-border bg-sand px-6 pb-16 pt-36 md:px-10 md:pt-44 lg:px-16">
        <div className="mx-auto w-full max-w-[86rem]">
          <Reveal>
            <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap gap-2">
              <Link to="/" className="hover:text-gold">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link to="/procedures" search={{}} className="hover:text-gold">
                Procedures
              </Link>
              <span aria-hidden>/</span>
              <span className="text-charcoal">{procedure.name}</span>
            </nav>
          </Reveal>
          <div className="mt-10 grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal delay={80}>
              <Eyebrow>{procedure.category}</Eyebrow>
              <h1 className="mt-7 text-[clamp(2.4rem,6vw,4.8rem)] leading-[1.03]">
                {procedure.name}
              </h1>
              <p className="mt-7 max-w-lg text-[0.95rem] leading-[1.95] text-muted-foreground">
                {procedure.excerpt}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <ActionLink to="/contact" arrow>
                  Book a Consultation
                </ActionLink>
                <ActionLink href={clinic.phoneHref} variant="outline">
                  {clinic.phoneLabel}
                </ActionLink>
              </div>
            </Reveal>
            <Reveal variant="clip" delay={140}>
              <div className="aspect-[5/4] overflow-hidden bg-beige">
                <img
                  src={procedure.image}
                  alt={`${procedure.name} procedure imagery`}
                  className="size-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <Section className="bg-ivory">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <div className="mt-7 space-y-6 text-[0.98rem] leading-[1.95] text-muted-foreground">
                {procedure.overview.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            </Reveal>

            <div className="mt-16 space-y-14">
              {blocks.map((block, i) => (
                <Reveal key={block.title} delay={i * 60} className="border-t border-border pt-8">
                  <h2 className="text-2xl leading-tight">{block.title}</h2>
                  <ul className="mt-6 space-y-4">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 text-sm leading-[1.9] text-muted-foreground"
                      >
                        <span aria-hidden className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <h2 className="text-2xl">Frequently asked</h2>
              <Accordion type="single" collapsible className="mt-6">
                {generalFaqs.slice(0, 4).map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="text-left font-display text-lg">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-[1.9] text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <Reveal className="border border-border bg-sand p-9">
              <Eyebrow>At a glance</Eyebrow>
              <dl className="mt-7 space-y-5 text-sm">
                <div>
                  <dt className="eyebrow">Category</dt>
                  <dd className="mt-1">{procedure.category}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Recovery</dt>
                  <dd className="mt-1">{procedure.recovery}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Anaesthesia</dt>
                  <dd className="mt-1">Discussed in consultation</dd>
                </div>
                <div>
                  <dt className="eyebrow">Facility</dt>
                  <dd className="mt-1">Accredited surgical facility</dd>
                </div>
              </dl>
              <div className="mt-9">
                <ActionLink to="/contact" className="w-full" arrow>
                  Request Consultation
                </ActionLink>
              </div>
            </Reveal>
            <Reveal delay={100} className="mt-9">
              <Disclaimer>
                This page is general information, not medical advice. Suitability is determined
                during consultation and individual results vary.
              </Disclaimer>
            </Reveal>
          </aside>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section className="bg-sand">
          <Eyebrow>Related — {procedure.category}</Eyebrow>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link to="/procedures/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="aspect-[4/3] overflow-hidden bg-beige">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 text-xl group-hover:text-gold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-[1.9] text-muted-foreground">{p.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
