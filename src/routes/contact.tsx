import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { clinic, images, procedures } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { ActionButton, Disclaimer, Eyebrow, PageHero, Section } from "@/components/site/ui";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const title = `Contact & Consultation — ${clinic.shortName}`;
const description =
  "Request a private consultation, or contact the clinic by phone or email. Consultations are unhurried and without obligation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const fieldClass = "mt-3 rounded-none border-input bg-ivory h-12";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Enquiry received", {
      description: "This demo form does not send data. Connect a backend to receive enquiries.",
    });
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Begin with a
            <span className="italic text-stone"> conversation</span>
          </>
        }
        intro="Consultations are private and without obligation. Share as much or as little as you'd like below."
      />

      <Section className="bg-ivory">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <Reveal>
            <Eyebrow>Consultation Request</Eyebrow>
            <form onSubmit={onSubmit} className="mt-9 grid gap-7 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <Label htmlFor="name" className="eyebrow">
                  Full name
                </Label>
                <Input id="name" name="name" required autoComplete="name" className={fieldClass} />
              </div>
              <div className="sm:col-span-1">
                <Label htmlFor="email" className="eyebrow">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                />
              </div>
              <div className="sm:col-span-1">
                <Label htmlFor="phone" className="eyebrow">
                  Phone
                </Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
              </div>
              <div className="sm:col-span-1">
                <Label htmlFor="procedure" className="eyebrow">
                  Area of interest
                </Label>
                <select
                  id="procedure"
                  name="procedure"
                  className="mt-3 h-12 w-full border border-input bg-ivory px-3 text-sm text-foreground"
                  defaultValue=""
                >
                  <option value="">Not sure yet</option>
                  {procedures.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message" className="eyebrow">
                  How can we help?
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-3 rounded-none border-input bg-ivory"
                />
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center gap-6">
                <ActionButton type="submit" arrow>
                  {sent ? "Send another enquiry" : "Send enquiry"}
                </ActionButton>
                <p className="text-xs leading-[1.9] text-muted-foreground">
                  Please do not include sensitive medical details in this form.
                </p>
              </div>
            </form>
            <div className="mt-12">
              <Disclaimer>
                Submitting this form does not create a doctor–patient relationship. Suitability for
                any procedure is determined during consultation, and individual results vary.
              </Disclaimer>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal className="border border-border bg-sand p-9">
              <Eyebrow>Clinic</Eyebrow>
              <ul className="mt-7 space-y-4 text-sm">
                <li>
                  <a href={clinic.phoneHref} className="transition-colors hover:text-gold">
                    {clinic.phoneLabel}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="transition-colors hover:text-gold"
                  >
                    {clinic.email}
                  </a>
                </li>
                <li className="pt-2 text-muted-foreground">
                  {clinic.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </li>
              </ul>
            </Reveal>

            <Reveal delay={80} className="border border-border p-9">
              <Eyebrow>Opening Hours</Eyebrow>
              <dl className="mt-7 space-y-3 text-sm">
                {clinic.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-6">
                    <dt className="text-muted-foreground">{h.day}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={140} variant="clip">
              <div className="aspect-[4/3] overflow-hidden bg-beige">
                <img
                  src={images.clinicInterior}
                  alt="The clinic reception and consultation suite"
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
