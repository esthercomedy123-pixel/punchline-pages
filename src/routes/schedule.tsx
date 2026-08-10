import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ShowCard } from "@/components/site/ShowCard";
import venueImage from "@/assets/venue-stage.jpg";
import { shows } from "@/data/site";

const title = "Schedule — Upcoming Stand-Up Comedy Shows";
const description =
  "Dates, times, venues and cities for upcoming stand-up sets and The Inflation Game, plus ticket links for every show.";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-border">
        <img
          src={venueImage}
          alt="Comedy club stage with a microphone under colored lights"
          width={1600}
          height={912}
          className="h-64 w-full object-cover sm:h-80"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
            <SectionHeading kicker="Schedule" title="Upcoming shows" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {shows.length > 0 ? (
          <div className="grid gap-4">
            {shows.map((show, index) => (
              <Reveal key={show.id} delay={index * 70}>
                <ShowCard show={show} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border-2 border-dashed border-border p-10 text-center text-muted-foreground">
            No dates listed right now — check back soon, or get in touch about booking a show.
          </p>
        )}

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-3xl border-[3px] border-ink bg-gradient-hot p-8 sm:p-10">
            <h2 className="max-w-2xl text-3xl text-primary-foreground sm:text-4xl">
              Book me for your comedy club
            </h2>
            <p className="mt-3 max-w-xl text-primary-foreground/85">
              Clubs, theaters, festivals, corporate rooms, private events — send the details and
              let's put a date on the calendar.
            </p>
            <Button asChild variant="pop" size="xl" className="mt-7">
              <Link to="/book">Book me</Link>
            </Button>
          </div>
        </Reveal>

        <p className="mt-8 text-xs text-muted-foreground">
          All dates, venues and ticket links are placeholders — they live in one file so they're
          quick to add, edit or remove.
        </p>
      </section>
    </>
  );
}