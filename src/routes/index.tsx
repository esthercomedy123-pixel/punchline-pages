import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, GraduationCap, Ticket } from "lucide-react";
import heroImage from "@/assets/hero-comedian.jpg";
import inflationImage from "@/assets/inflation-game.jpg";
import coachingImage from "@/assets/coaching.jpg";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
import { Kicker, SectionHeading } from "@/components/site/SectionHeading";
import { ShowCard } from "@/components/site/ShowCard";
import { about, inflationGame, profile, shows } from "@/data/site";

const title = `${profile.name} — Comedian, Comedy Coach & Entertainer`;
const description =
  "Stand-up comedy, the live game show The Inflation Game, and one-on-one comedy coaching. Book shows, grab tickets, or learn the craft.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-spotlight" />
        <div
          aria-hidden="true"
          className="animate-float-slow absolute -top-10 -right-16 size-72 rounded-full bg-secondary/25 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-12 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:pt-20 lg:pb-28">
          <div>
            <Kicker>Live • Loud • Funny</Kicker>
            <h1 className="mt-6 text-6xl leading-[0.85] sm:text-7xl lg:text-8xl">
              <span className="block">{profile.name}</span>
              <span className="text-gradient-hot block">Makes rooms</span>
              <span className="block">lose it.</span>
            </h1>
            <p className="mt-6 font-display text-lg tracking-[0.16em] text-accent uppercase sm:text-xl">
              {profile.headline}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/book">
                  Book me <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="pop" size="xl">
                <Link to="/coaching">
                  <GraduationCap aria-hidden="true" /> Learn comedy
                </Link>
              </Button>
              <Button asChild variant="ghostOnDark" size="xl">
                <Link to="/schedule">
                  <CalendarDays aria-hidden="true" /> See my schedule
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -rotate-3 rounded-[2rem] bg-gradient-hot opacity-70 blur-[2px]" />
            <img
              src={heroImage}
              alt={`${profile.name} performing stand-up comedy on stage`}
              width={1200}
              height={1504}
              className="relative aspect-4/5 w-full rounded-[2rem] border-[3px] border-ink object-cover"
            />
            <div className="absolute -bottom-6 -left-4 rotate-[-6deg] rounded-2xl border-[3px] border-ink bg-accent px-5 py-3 shadow-pop">
            </div>
            <p className="font-display text-sm tracking-[0.14em] text-accent-foreground uppercase">
              😂😂😂
            </p>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Stand-up",
          "The Inflation Game",
          "Comedy coaching",
          "Hosting & MC",
          "Corporate shows",
          "Festivals",
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            kicker="About my comedy"
            title={
              <>
                Jokes first. <span className="text-gradient-hot">Everything else second.</span>
              </>
            }
            lead={about.intro}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {about.cards.slice(0, 2).map((card, index) => (
            <Reveal key={card.title} delay={index * 90}>
              <article className="h-full rounded-2xl border-2 border-border bg-card p-7 transition-colors hover:border-accent">
                <h3 className="text-2xl">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <Button asChild variant="ghostOnDark" size="lg" className="mt-8">
            <Link to="/about">
              More about me <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>

      <section className="relative overflow-hidden border-y-[3px] border-ink bg-primary/15">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <Reveal>
            <div className="rotate-[-1.5deg] overflow-hidden rounded-[2rem] border-[3px] border-ink shadow-pop">
              <img
                src={inflationImage}
                alt="Illustration of price tags, receipts and rising costs for The Inflation Game"
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Kicker>{inflationGame.kicker}</Kicker>
            <h2 className="mt-5 text-5xl sm:text-6xl lg:text-7xl">
              The <span className="text-gradient-hot">Inflation</span> Game
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {inflationGame.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="pop" size="xl">
                <Link to="/inflation-game">
                  <Ticket aria-hidden="true" /> Get tickets
                </Link>
              </Button>
              <Button asChild variant="ghostOnDark" size="xl">
                <Link to="/book">Book the show</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border-2 border-border">
            <img
              src={coachingImage}
              alt="Comedians in a small comedy coaching workshop"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading
            kicker="Comedy coaching"
            title={
              <>
                Learn the <span className="text-gradient-hot">craft of comedy</span>
              </>
            }
            lead="Writing, timing, stage presence, and finding the version of you that's actually funniest. One-on-one sessions, packages, and group workshops."
          />
          <Button asChild variant="hero" size="xl" className="mt-8">
            <Link to="/coaching">
              Book a coaching session <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading kicker="Next up" title="Upcoming shows" />
        </Reveal>
        <div className="mt-10 grid gap-4">
          {shows.slice(0, 3).map((show, index) => (
            <Reveal key={show.id} delay={index * 80}>
              <ShowCard show={show} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="ghostOnDark" size="lg">
              <Link to="/schedule">Full schedule</Link>
            </Button>
            <Button asChild variant="hero" size="lg">
              <Link to="/book">Book me for your comedy club</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
