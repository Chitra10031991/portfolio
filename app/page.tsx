import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Decision Layer",
    description:
      "Behind every personalized customer experience is a platform that decides what to show, how to measure it, and whether it actually works. I spearheaded the unification of experimentation across a leading grocery retailer by building a shared decision layer that standardized assignment, instrumentation, and measurement across frontend applications, backend services, and AI-powered recommendation systems. Today, I build AI-native platforms that help organizations learn faster, make better decisions, and scale customer impact with confidence.",
    href: "/decision-layer.html",
    image: "/decision-layer.jpg",
  },
  {
    title: "Blue Zone Index",
    description:
      "An interactive essay and feedback simulator that coins the Blue Zone Index, a metric tracking how personalization collapses catalog diversity over time. CTR rises while CPU converges to monoculture. Built to make the hidden cost of recommendation loops visible to PMs and researchers.",
    href: "https://blue-zone-index-anuuhpwoz-chitra.vercel.app",
    image: "/blue-zone-index.jpg",
  },
  {
    title: "Evenslate.ai",
    description:
      "A pre-ship evaluation engine for grocery search result pages. Before a merged organic + sponsored slate reaches customers, Evenslate scores it across relevance, diversity, and monetization. Catch bad results before they cost you trust or revenue.",
    href: "https://evenslate-p2u3iyc5y-chitra.vercel.app",
    image: "/evenslate.jpg",
  },
  {
    title: "heft",
    description:
      "An auto-experimentation platform built for non-technical operators. Describe a hypothesis in plain language and heft designs the experiment, sets guardrails, and surfaces results. No SQL, no analyst required. Built on Claude Sonnet to make rigorous A/B testing accessible to anyone.",
    href: "https://heft-1vf81zgwb-chitra.vercel.app",
    image: "/heft.jpg",
  },
  {
    title: "Incrementality Simulator",
    description:
      "A self-serve tool that converts platform-reported retail media metrics into true incremental lift with Bayesian credible intervals. Covers onsite sponsored search, display, Meta, TikTok, Pinterest, and in-store. So you know what actually drove the sale, not just what the platform claims.",
    href: "https://v0-incrementality-simulator-i76bxvr99-chitra.vercel.app",
    image: "/incrementality.jpg",
  },
];

const passionProjects = [
  {
    title: "Saved, Sorted, Mapped",
    description:
      "My Instagram saves were a graveyard of good intentions. Hundreds of bookmarked cafés, bakeries, vintage shops, and exhibitions I'd never see again. So I pointed Claude at my saved collections: it read 300+ posts, extracted and verified ~450 places across eight cities, researched every address and neighborhood, and scored each spot from 'local gem' to 'tourist trap.' The output: interactive city maps I actually use to plan trips. A weekend experiment in turning algorithmic clutter into something with intention.",
    image: "/passion-maps.jpg" as string | null,
    links: [
      { label: "Paris", href: "/maps/paris.html" },
      { label: "Copenhagen", href: "/maps/copenhagen.html" },
      { label: "Tokyo", href: "/maps/tokyo.html" },
      { label: "London", href: "/maps/london.html" },
      { label: "Stockholm", href: "/maps/stockholm.html" },
      { label: "Osaka", href: "/maps/osaka.html" },
      { label: "Madrid", href: "/maps/madrid.html" },
      { label: "LA", href: "/maps/la.html" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-6">
        <a
          href="#work"
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors font-mono"
        >
          Work
        </a>
        <span className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-cinzel)] font-semibold">
          Chitra Sunderrajan
        </span>
        <a
          href="mailto:chitrarajan91@gmail.com"
          className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors font-mono"
        >
          Contact
        </a>
      </nav>

      {/* Hero headline */}
      <section className="max-w-4xl mx-auto px-10 pt-16 pb-14">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.01em] leading-[1.2] font-[family-name:var(--font-fraunces)]">
          Build products for more meaningful,<br className="hidden md:block" /> wholesome customer experiences.
        </h1>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-10 pb-24">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="shrink-0">
            <Image
              src="/chitra.jpg"
              alt="Chitra Sunderrajan"
              width={200}
              height={200}
              className="rounded-2xl object-cover object-top w-44 h-44 md:w-52 md:h-52"
              unoptimized
              priority
            />
          </div>
          <div className="flex-1 pt-1">
            <p className="text-lg md:text-xl italic leading-relaxed text-foreground mb-5 max-w-xl">
              👋 Hi, I&rsquo;m Chitra. I have 10+ years of experience turning human behavior into products and platforms people love. 7.5 of those at Albertsons, and the years before that wearing every hat possible at early-stage startups.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-4">
              I&rsquo;ve built experimentation systems, AI tools, and personalization engines that help millions of shoppers find exactly what they need. My work lives at the intersection of people, data, and rigorous product thinking. I believe the best decisions start with understanding humans. The data just helps you prove it to everyone else.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-4">
              When I&rsquo;m not thinking about products, I&rsquo;m doodling, decorating my space, or hunting for the next thing to make a room feel just right ☕ (espresso, preferably single origin).
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              🤝 Let&rsquo;s build something worth shipping.
            </p>
            <div className="flex gap-5 mt-7 text-sm">
              <a
                href="https://www.linkedin.com/in/chitrarajan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn <ArrowUpRight className="h-3 w-3" />
              </a>
              <span className="text-border">·</span>
              <a
                href="https://github.com/Chitra10031991"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub <ArrowUpRight className="h-3 w-3" />
              </a>
              <span className="text-border">·</span>
              <a
                href="mailto:chitrarajan91@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                chitrarajan91@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Work */}
      <section id="work" className="max-w-4xl mx-auto px-10 pb-24">
        <h2 className="text-xs tracking-[0.2em] uppercase font-mono text-muted-foreground mb-12">
          Current Work
        </h2>

        <div className="flex flex-col divide-y divide-border">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col md:flex-row gap-8 md:gap-12 py-12 first:pt-0"
            >
              {/* Screenshot */}
              <div className="md:w-[55%] shrink-0 overflow-hidden rounded-xl border border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={560}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>

              {/* Meta */}
              <div className="flex flex-col justify-center md:w-[45%]">
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-fraunces)] tracking-[-0.01em]">
                  {project.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-[oklch(0.72_0.18_112)] transition-colors w-fit"
                >
                  View project <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Passion Projects */}
      <section id="passion" className="max-w-4xl mx-auto px-10 pb-24">
        <h2 className="text-xs tracking-[0.2em] uppercase font-mono text-muted-foreground mb-12">
          Passion Projects
        </h2>

        <div className="flex flex-col divide-y divide-border">
          {passionProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col md:flex-row gap-8 md:gap-12 py-12 first:pt-0"
            >
              {/* Diagram — decorative; the city pills below open each map */}
              {project.image && (
                <div className="md:w-[55%] shrink-0 self-start overflow-hidden rounded-xl border border-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
              )}

              {/* Meta */}
              <div
                className={`flex flex-col justify-center ${
                  project.image ? "md:w-[45%]" : "w-full"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-fraunces)] tracking-[-0.01em]">
                  {project.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-[oklch(0.72_0.18_112)] hover:border-[oklch(0.72_0.18_112)] transition-colors"
                    >
                      {link.label} <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-border px-10 py-8">
        <p className="text-xs text-muted-foreground font-mono text-center">
          Built with Next.js · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
