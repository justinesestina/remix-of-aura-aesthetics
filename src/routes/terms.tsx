import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/data/site";
import { PageHero, Section } from "@/components/site/ui";

const title = `Terms & Conditions — ${clinic.shortName}`;
const description = "Website terms for Dr. Brent Vicente's aesthetic medicine and cosmetic surgery practice.";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: TermsPage,
});

function TermsPage() {
  return <><PageHero eyebrow="Legal" title="Terms & Conditions" intro="General terms for using this website." /><Section className="bg-ivory"><div className="mx-auto max-w-3xl space-y-8 text-sm leading-[1.9] text-muted-foreground"><h2 className="text-2xl text-foreground">General information</h2><p>This website provides general information only. Content may be updated without notice and does not replace an individual consultation.</p><h2 className="text-2xl text-foreground">Appointments and services</h2><p>Treatment availability, fees, suitability, preparation and aftercare are confirmed directly by the clinic. No appointment is final until confirmed by the practice.</p></div></Section></>;
}