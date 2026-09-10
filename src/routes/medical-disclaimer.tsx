import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/data/site";
import { PageHero, Section } from "@/components/site/ui";

const title = `Medical Disclaimer — ${clinic.shortName}`;
const description = "Important medical information about aesthetic and cosmetic treatment content.";

export const Route = createFileRoute("/medical-disclaimer")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: MedicalDisclaimerPage,
});

function MedicalDisclaimerPage() {
  return <><PageHero eyebrow="Patient Information" title="Medical Disclaimer" intro="Online information is not a substitute for personal medical advice." /><Section className="bg-cream"><div className="mx-auto max-w-3xl space-y-8 text-sm leading-[1.9] text-muted-foreground"><h2 className="text-2xl text-foreground">Consultation is essential</h2><p>Information on this site is educational and does not diagnose, treat or establish a doctor–patient relationship. Suitability is determined only after an individual medical assessment.</p><h2 className="text-2xl text-foreground">Results and risk</h2><p>Every medical and surgical procedure has potential risks. Results, recovery and treatment response vary between individuals. Images and testimonials are not guarantees of outcome.</p><h2 className="text-2xl text-foreground">Urgent concerns</h2><p>This website does not provide emergency care. Contact local emergency services for urgent medical concerns.</p></div></Section></>;
}