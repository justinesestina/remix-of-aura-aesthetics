import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/data/site";
import { PageHero, Section } from "@/components/site/ui";

const title = `Privacy Policy — ${clinic.shortName}`;
const description = "How consultation enquiries and website information are handled.";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <><PageHero eyebrow="Legal" title="Privacy Policy" intro="Your privacy matters when you contact the practice." /><Section className="bg-cream"><div className="mx-auto max-w-3xl space-y-8 text-sm leading-[1.9] text-muted-foreground"><h2 className="text-2xl text-foreground">Information you share</h2><p>Information submitted through this website should only be used to respond to your enquiry and arrange a consultation. Please do not send sensitive medical information through the general contact form.</p><h2 className="text-2xl text-foreground">Your choices</h2><p>You may contact the clinic to ask about information you have shared or request its correction or deletion, subject to applicable medical and legal record requirements.</p></div></Section></>;
}