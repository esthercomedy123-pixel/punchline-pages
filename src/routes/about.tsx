import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { about, profile } from "@/data/site";

const title = `About ${profile.name} — Comedy Style, Background & Stages`;
const description =
  "Who I am on stage, how I got here, where I perform, and what makes my comedy different. Told the way I'd tell it at the bar after the show.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-spotlight" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <SectionHeading
              kicker="About my comedy"
              title={
                <>
                  Hi, I'm <span className="text-gradient-hot">{profile.name}</span>
                </>
              }
              lead={about.intro}
            />
            <dl className="mt-10 grid grid-cols-3 gap-4">
              {about.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border-2 border-border bg-card p-5">
                  <dt className="text-xs tracking-widest text-muted-foreground uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl text-accent">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <img
              src={aboutImage}
              alt={`${profile.name} on stage with a microphone`}
              loading="lazy"
              width={1200}
              height={1504}
              className="aspect-4/5 w-full rotate-2 rounded-[2rem] border-[3px] border-ink object-cover shadow-pop"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {about.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 80}>
              <article className="h-full rounded-2xl border-2 border-border bg-card p-7 transition-[border-color,transform] hover:-translate-y-1 hover:border-accent">
                <span className="font-display text-sm tracking-[0.2em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-2xl">{card.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-wrap items-center gap-4 rounded-3xl border-[3px] border-ink bg-gradient-money p-8">
            <p className="font-display flex-1 text-2xl text-accent-foreground sm:text-3xl">
              Want me on your lineup?
            </p>
            <Button asChild variant="marquee" size="xl">
              <Link to="/book">
                Book me <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
