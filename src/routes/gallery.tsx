import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { categories, clinic, galleryCases, galleryDisclaimer, type Category } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { ActionButton, ActionLink, Disclaimer, PageHero, Section } from "@/components/site/ui";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const title = `Gallery — ${clinic.shortName}`;
const description =
  "Selected case imagery shown for educational purposes. Individual outcomes vary and images are not a prediction of results.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [active, setActive] = useState<(typeof galleryCases)[number] | null>(null);
  const list = filter === "All" ? galleryCases : galleryCases.filter((c) => c.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Results, shown
            <span className="italic text-light-brown"> with context</span>
          </>
        }
        intro="Imagery is presented for education, with case detail rather than promotion. Individual results vary."
      />

      <Section className="bg-cream">
        <Reveal className="flex flex-wrap gap-3 border-b border-border pb-8">
          {(["All", ...categories] as const).map((c) => (
            <ActionButton
              key={c}
              variant="outline"
              onClick={() => setFilter(c as Category | "All")}
              aria-pressed={filter === c}
              className={cn(
                "px-6 py-3 hover:px-6",
                filter === c && "border-brown bg-brown text-cream",
              )}
            >
              {c}
            </ActionButton>
          ))}
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => setActive(c)}
                className="group block w-full text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                  <img
                    src={c.image}
                    alt={`${c.procedure} — case imagery`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-brown/0 transition-colors duration-700 group-hover:bg-brown/20" />
                </div>
                <span className="eyebrow mt-5 block">{c.category}</span>
                <h2 className="mt-2 text-xl">{c.procedure}</h2>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-10">
          <Disclaimer>{galleryDisclaimer}</Disclaimer>
          <ActionLink to="/contact" arrow>
            Discuss your goals
          </ActionLink>
        </Reveal>
      </Section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl rounded-none border-border bg-cream p-0">
          {active ? (
            <div className="grid md:grid-cols-[1.1fr_0.9fr]">
              <img
                src={active.image}
                alt={`${active.procedure} — case imagery`}
                className="h-full max-h-[70vh] w-full object-cover"
              />
              <div className="p-9">
                <span className="eyebrow">{active.category}</span>
                <DialogTitle className="mt-3 font-display text-3xl font-light">
                  {active.procedure}
                </DialogTitle>
                <DialogDescription className="mt-5 text-sm leading-[1.9] text-muted-foreground">
                  {active.caseInfo}
                </DialogDescription>
                <p className="mt-7 border-l border-gold/60 pl-4 text-xs leading-[1.9] text-muted-foreground">
                  {galleryDisclaimer}
                </p>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
