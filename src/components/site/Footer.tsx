import { Link } from "@tanstack/react-router";
import { clinic, categories } from "@/data/site";
import { Eyebrow } from "./ui";

const columns = [
  {
    title: "Navigation",
    links: [
      { label: "About", to: "/about" },
      { label: "Procedures", to: "/procedures" },
      { label: "Gallery", to: "/gallery" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Resources", to: "/resources" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-brown text-cream">
      <div className="mx-auto w-full max-w-[86rem] px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-xl tracking-[0.3em]">{clinic.name}</p>
            <p className="mt-6 max-w-xs text-sm leading-[1.9] text-cream/60">{clinic.description}</p>
            <ul className="mt-8 flex gap-6">
              {clinic.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-[0.68rem] uppercase tracking-[0.2em] text-cream/60 transition-colors hover:text-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <Eyebrow className="text-cream/50">{col.title}</Eyebrow>
              <ul className="mt-7 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream/70 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Procedures">
            <Eyebrow className="text-cream/50">Procedures</Eyebrow>
            <ul className="mt-7 space-y-3">
              {categories.map((c) => (
                <li key={c}>
                  <Link
                    to="/procedures"
                    search={{ category: c }}
                    className="text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Eyebrow className="text-cream/50">Contact</Eyebrow>
            <ul className="mt-7 space-y-3 text-sm text-cream/70">
              <li>
                <a href={clinic.phoneHref} className="transition-colors hover:text-gold">
                  {clinic.phoneLabel}
                </a>
              </li>
              <li>
                <a href={`mailto:${clinic.email}`} className="transition-colors hover:text-gold">
                  {clinic.email}
                </a>
              </li>
              <li className="pt-2">
                {clinic.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
              <li className="pt-2">
                {clinic.hours.map((h) => (
                  <span key={h.day} className="block text-cream/55">
                    {h.day} — {h.time}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-20 select-none border-t border-cream/10 pt-10 font-display text-[clamp(2.4rem,11vw,9rem)] leading-none tracking-[0.06em] text-cream/10"
        >
          {clinic.name}
        </p>

        <div className="mt-10 flex flex-col gap-5 border-t border-cream/10 pt-8 text-[0.68rem] uppercase tracking-[0.18em] text-cream/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.shortName}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-6">
            <Link to="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-gold">
              Terms &amp; Conditions
            </Link>
            <Link to="/medical-disclaimer" className="transition-colors hover:text-gold">
              Medical Disclaimer
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
