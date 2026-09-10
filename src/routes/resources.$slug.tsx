import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { clinic, posts } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, Disclaimer, Eyebrow, Section } from "@/components/site/ui";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.post.title} — ${clinic.shortName}`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.post.excerpt },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/resources/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/resources/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.post.title,
            author: { "@type": "Person", name: loaderData.post.author },
            description: loaderData.post.excerpt,
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostDetail,
});

function PostNotFound() {
  return (
    <Section className="bg-cream pt-48">
      <h1 className="text-4xl">Article not found</h1>
      <p className="mt-5 text-sm text-muted-foreground">This article is unavailable or has moved.</p>
      <div className="mt-9">
        <ActionLink to="/resources" arrow>
          All resources
        </ActionLink>
      </div>
    </Section>
  );
}

function PostDetail() {
  const { post } = Route.useLoaderData();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <header className="border-b border-border bg-white px-6 pb-16 pt-36 md:px-10 md:pt-44 lg:px-16">
        <div className="mx-auto w-full max-w-[60rem]">
          <Reveal>
            <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap gap-2">
              <Link to="/" className="hover:text-gold">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link to="/resources" className="hover:text-gold">
                Journal
              </Link>
              <span aria-hidden>/</span>
              <span className="text-brown">{post.category}</span>
            </nav>
            <Eyebrow className="mt-9">
              {post.category} — {post.date}
            </Eyebrow>
            <h1 className="mt-6 text-[clamp(2.2rem,5.4vw,4.2rem)] leading-[1.05]">{post.title}</h1>
            <p className="mt-7 text-[0.95rem] leading-[1.95] text-muted-foreground">
              {post.excerpt}
            </p>
            <p className="eyebrow mt-8">By {post.author}</p>
          </Reveal>
        </div>
      </header>

      <Reveal variant="clip" className="bg-cream px-6 pt-16 md:px-10 lg:px-16">
        <div className="mx-auto aspect-[16/9] w-full max-w-[72rem] overflow-hidden bg-cream">
          <img src={post.image} alt={post.title} className="size-full object-cover" />
        </div>
      </Reveal>

      <Section className="bg-cream">
        <div className="mx-auto max-w-[44rem]">
          {post.body.map((section, i) => (
            <Reveal key={section.heading} delay={i * 60} className="mt-12 first:mt-0">
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-[1rem] leading-[1.95] text-muted-foreground">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
          <Reveal className="mt-14">
            <Disclaimer>
              This article is general information, not medical advice. Suitability is determined
              during consultation and individual results vary.
            </Disclaimer>
          </Reveal>
          <Reveal className="mt-10">
            <ActionLink to="/contact" arrow>
              Book a Consultation
            </ActionLink>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white">
        <Eyebrow>Continue reading</Eyebrow>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {more.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link to="/resources/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-[16/10] overflow-hidden bg-cream">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-2xl group-hover:text-gold">{p.title}</h3>
                <p className="mt-2 text-sm leading-[1.9] text-muted-foreground">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
