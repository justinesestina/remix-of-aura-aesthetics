import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { clinic, navLinks } from "@/data/site";
import { ActionLink } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-brown focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:text-cream"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "border-b border-border bg-cream/90 py-3 shadow-[0_1px_24px_-18px_oklch(0.32_0.03_55/0.6)] backdrop-blur-md"
            : "border-b border-transparent py-6",
        )}
      >
        <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between gap-6 px-6 md:px-10 lg:px-14">
          <Link
            to="/"
            className="font-display text-lg tracking-[0.32em] text-brown transition-opacity hover:opacity-70"
            aria-label={`${clinic.shortName} — home`}
          >
            {clinic.name}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="group relative py-1 text-[0.68rem] uppercase tracking-[0.2em] text-brown/80 transition-colors hover:text-brown"
                activeProps={{ className: "text-brown" }}
              >
                {link.label}
                <span
                  aria-hidden
                  className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full"
                />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-7 lg:flex">
            <a
              href={clinic.phoneHref}
              className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold"
            >
              {clinic.phoneLabel}
            </a>
            <ActionLink to="/contact" className="px-6 py-3.5">
              Book a Consultation
            </ActionLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center text-brown xl:hidden"
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </header>

      {/* Mobile / tablet overlay navigation */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[60] bg-cream transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-7 md:px-10">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg tracking-[0.32em]">{clinic.name}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-14 flex flex-1 flex-col justify-center gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className="border-b border-border/70 py-4 font-display text-[2.1rem] leading-tight text-brown transition-colors hover:text-gold"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 space-y-4">
            <ActionLink to="/contact" className="w-full" arrow>
              Book a Consultation
            </ActionLink>
            <a
              href={clinic.phoneHref}
              className="block text-center text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground"
            >
              {clinic.phoneLabel}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
