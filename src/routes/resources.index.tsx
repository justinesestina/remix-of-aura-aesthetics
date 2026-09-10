import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { clinic, generalFaqs, posts, postCategories } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { ActionButton, ActionLink, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = `Resources & Journal — ${clinic.shortName}`;
const description =
  "Patient guides, recovery notes and clinic writing on aesthetic planning, consultation and aftercare.";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const [cat, setCat] = useState<string>("All");
  const list = cat === "All" ? posts : posts.filter((p) => p.category === cat);
  const [lead, ...rest] = list;

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title={
          <>
            Guides, notes and
            <span className="italic text-light-brown"> clinic writing</span>
          </>
        }
        intro="Plain-language reading on consultation, recovery and aesthetic planning."
      />

      <Section className="bg-cream">
        <Reveal className="flex flex-wrap gap-3 border-b border-border pb-8">
          {["All", ...postCategories].map((c) => (
            <ActionButton
              key={c}
              variant="outline"
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={cn(
                "px-6 py-3 hover:px-6",
                cat === c && "border-brown bg-brown text-cream",
              )}
            >
              {c}
            </ActionButton>
          ))}
        </Reveal>

        {lead ? (
          <Reveal className="mt-16">
            <Link
              to="/resources/$slug"
              params={{ slug: lead.slug }}
              className="group grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            >
              <div className="aspect-[16/10] overflow-hidden bg-cream">
                <img
                  src={lead.image}
                  alt={lead.title}
                  className="size-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                />
              </div>
              <div>
                <span className="eyebrow">
                  {lead.category} — {lead.date}
                </span>
                <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] group-hover:text-gold">
                  {lead.title}
                </h2>
                <p className="mt-5 max-w-lg text-[0.95rem] leading-[1.95] text-muted-foreground">
                  {lead.excerpt}
                </p>
                <span className="eyebrow mt-7 block">Read the guide</span>
              </div>
            </Link>
          </Reveal>
        ) : null}

        <div className="mt-20 grid gap-x-10 gap-y-14 md:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <Link to="/resources/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-cream">
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

      <Section className="bg-white">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <Reveal>
            <Accordion type="single" collapsible>
              {generalFaqs.map((f) => (
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
            <div className="mt-10">
              <ActionLink to="/contact" arrow>
                Ask the clinic
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
