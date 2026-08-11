import { createFileRoute, Link } from "@tanstack/react-router";
import { Receipt, ShoppingCart, TrendingUp } from "lucide-react";
import inflationImage from "@/assets/inflation-game.jpg";
import venueImage from "@/assets/venue-stage.jpg";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
import { YoutubeIcon } from "@/components/site/YoutubeIcon";
import { inflationGame } from "@/data/site";
import { ShowsList } from "@/components/site/ShowsList";

const title = "The Inflation Game — Live Streamed Comedy Game Show";
const description =
  "The Inflation Game is a live streamed stand-up game show about how absurdly expensive everything got. Guess the price, win something cheap, laugh about the receipts.";

export const Route = createFileRoute("/inflation-game")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: InflationGamePage,
});

const facts = [
  { icon: ShoppingCart, label: "Format", key: "format" as const },
  { icon: TrendingUp, label: "Runtime", key: "runtime" as const },
  { icon: Receipt, label: "Audience", key: "audience" as const },
];

function InflationGamePage() {
  return (
    <div className="bg-paper text-paper-foreground">
      <section className="relative overflow-hidden border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex rotate-[-2deg] items-center rounded-md border-[3px] border-ink bg-tangerine px-4 py-1.5 font-display text-xs tracking-[0.2em] text-tangerine-foreground uppercase shadow-pop">
              {inflationGame.kicker}
            </span>
            <h1 className="mt-7 text-6xl leading-[0.85] text-ink sm:text-7xl lg:text-8xl">
              The
              <span className="mx-2 inline-block rotate-[-1.5deg] border-[4px] border-ink bg-accent px-3">
                Inflation
              </span>
              Game
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-foreground/75">
              {inflationGame.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="pop" size="xl">
                <a href={inflationGame.streamUrl} target="_blank" rel="noreferrer">
                  <YoutubeIcon className="size-5" /> Join my stream
                </a>
              </Button>
              <Button asChild size="xl" variant="marquee">
                <a href="#dates">See stream dates</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={inflationImage}
              alt="Bold illustration of price tags, a shopping cart, receipts and a rising price chart"
              width={1408}
              height={1008}
              className="w-full rotate-1 rounded-2xl border-[4px] border-ink object-cover shadow-pop"
            />
          </div>
        </div>
      </section>

      <Marquee items={["Guess the price", "Real receipts", "Cheap prizes", "Everything costs more"]} />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-4xl text-ink sm:text-5xl">What audiences can expect</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {inflationGame.expectations.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="h-full rounded-2xl border-[3px] border-ink bg-paper p-7 transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl text-ink">{item.title}</h3>
                  <span className="rounded-md border-[3px] border-ink bg-gradient-money px-3 py-1 font-display text-sm">
                    $__
                  </span>
                </div>
                <p className="mt-3 leading-relaxed text-paper-foreground/70">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {facts.map(({ icon: Icon, label, key }) => (
            <Reveal key={label}>
              <div className="flex items-center gap-4 rounded-2xl border-[3px] border-ink bg-ink p-6 text-ink-foreground">
                <Icon className="size-6 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">
                    {label}
                  </p>
                  <p className="mt-1 text-sm">{inflationGame[key]}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="dates" className="border-y-[3px] border-ink bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl">
              Upcoming <span className="text-gradient-hot">Inflation Game</span> streams
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Dates come straight from my live schedule.
            </p>
          </Reveal>
          <div className="mt-10">
            <ShowsList
              emptyMessage="No stream dates listed right now — check back soon."
            />
          </div>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <a href={inflationGame.streamUrl} target="_blank" rel="noreferrer">
                  <YoutubeIcon className="size-5" /> Join my stream
                </a>
              </Button>
              <Button asChild variant="ghostOnDark" size="xl">
                <Link to="/schedule">See all shows</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative">
        <img
          src={venueImage}
          alt="Empty comedy club stage lit in blue and magenta"
          loading="lazy"
          width={1600}
          height={912}
          className="h-72 w-full object-cover sm:h-96"
        />
      </section>
    </div>
  );
}
