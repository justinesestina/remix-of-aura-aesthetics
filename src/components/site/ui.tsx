import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const base =
  "group/btn inline-flex items-center justify-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] font-normal transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] px-8 py-4 min-h-11 rounded-none";

const variants = {
  solid: "bg-brown text-cream hover:px-10 hover:bg-brown/90",
  outline: "border border-brown/25 text-brown hover:border-brown hover:px-10",
  light: "border border-cream/40 text-cream hover:border-cream hover:px-10",
  ghost: "px-0 py-2 text-brown hover:text-gold",
} as const;

type Variant = keyof typeof variants;

export function ActionLink({
  to,
  href,
  variant = "solid",
  className,
  children,
  arrow = false,
  ...rest
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
} & Omit<ComponentProps<"a">, "href">) {
  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          aria-hidden
          className="size-3.5 transition-transform duration-500 group-hover/btn:translate-x-1.5"
        />
      ) : null}
    </>
  );
  const classes = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  );
}

export function ActionButton({
  variant = "solid",
  className,
  children,
  arrow = false,
  ...rest
}: ComponentProps<"button"> & { variant?: Variant; arrow?: boolean }) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          aria-hidden
          className="size-3.5 transition-transform duration-500 group-hover/btn:translate-x-1.5"
        />
      ) : null}
    </button>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-3", className)}>
      <span aria-hidden className="rule-gold h-px w-8" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  index,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  index?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <div className={cn("flex items-baseline gap-6", align === "center" && "justify-center")}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        {index ? <span className="eyebrow hidden sm:inline">{index}</span> : null}
      </div>
      <h2 className="mt-6 text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.08] text-balance">{title}</h2>
      {intro ? (
        <p className="mt-6 max-w-xl text-[0.95rem] leading-[1.9] text-muted-foreground">{intro}</p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  ...rest
}: ComponentProps<"section">) {
  return (
    <section className={cn("px-6 py-24 md:px-10 md:py-32 lg:px-16", className)} {...rest}>
      <div className="mx-auto w-full max-w-[86rem]">{children}</div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <header className="border-b border-border bg-white px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48 lg:px-16">
      <div className="mx-auto w-full max-w-[86rem]">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6.4vw,5.2rem)] leading-[1.03] text-balance">
            {title}
          </h1>
          {intro ? (
            <p className="mt-8 max-w-xl text-[0.95rem] leading-[1.9] text-muted-foreground">{intro}</p>
          ) : null}
        </Reveal>
      </div>
    </header>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-2xl border-l border-gold/60 pl-5 text-xs leading-[1.9] tracking-wide text-muted-foreground">
      {children}
    </p>
  );
}
