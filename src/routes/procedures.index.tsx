import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { categories, clinic, procedures, type Category } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, Disclaimer, PageHero, Section } from "@/components/site/ui";
import { cn } from "@/lib/utils";

const title = `Procedures — ${clinic.shortName}`;
const description =
  "Surgical and non-surgical procedures across face, breast, body and non-surgical care, each planned individually in consultation.";

type Search = { category?: Category };

export const Route = createFileRoute("/procedures/")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const c = search["category"];
    return typeof c === "string" && (categories as string[]).includes(c)
      ? { category: c as Category }
      : {};
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/procedures" },
    ],
    links: [{ rel: "canonical", href: "/procedures" }],
  }),
  component: ProceduresPage,
});

function ProceduresPage() {
  const { category } = Route.useSearch();
  const list = useMemo(
    () => (category ? procedures.filter((p) => p.category === category) : procedures),
    [category],
  );

  return (
    <>
      <PageHero
        eyebrow="Procedures"
        title={
          <>
            A focused range,
            <span className="italic text-stone"> individually planned</span>
          </>
        }
        intro="Every procedure below is planned around anatomy, medical history and personal goals. Suitability is determined during consultation."
      />

      <Section className="bg-ivory">
        <Reveal className="flex flex-wrap items-center gap-3 border-b border-border pb-8">
          <Link
            to="/procedures"
            search={{}}
            className={cn(
              "border px-6 py-3 text-[0.68rem] uppercase tracking-[0.2em] transition-colors duration-500",
              !category
                ? "border-charcoal bg-charcoal text-ivory"
                : "border-border text-muted-foreground hover:border-charcoal hover:text-charcoal",
            )}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              to="/procedures"
              search={{ category: c }}
              className={cn(
                "border px-6 py-3 text-[0.68rem] uppercase tracking-[0.2em] transition-colors duration-500",
                category === c
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-border text-muted-foreground hover:border-charcoal hover:text-charcoal",
              )}
            >
              {c}
            </Link>
          ))}
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80} className={i % 3 === 1 ? "lg:mt-14" : ""}>
              <Link to="/procedures/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-beige">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category} procedure`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <span className="eyebrow mt-6 block">{p.category}</span>
                <h2 className="mt-2 flex items-center gap-2 text-2xl leading-tight">
                  {p.name}
                  <ArrowRight
                    aria-hidden
                    className="size-4 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </h2>
                <p className="mt-3 text-sm leading-[1.9] text-muted-foreground">{p.excerpt}</p>
                <p className="eyebrow mt-5">Recovery — {p.recovery}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-wrap items-center justify-between gap-10">
          <Disclaimer>
            Every procedure has potential risks and considerations. Individual results vary and
            suitability is determined during consultation.
          </Disclaimer>
          <ActionLink to="/contact" arrow>
            Book a Consultation
          </ActionLink>
        </Reveal>
      </Section>
    </>
  );
}
