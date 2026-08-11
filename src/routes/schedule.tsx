import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ShowsList } from "@/components/site/ShowsList";
import venueImage from "@/assets/venue-stage.jpg";

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
        <ShowsList />

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
          Dates, venues and ticket links are pulled live from my show schedule.
        </p>
      </section>
    </>
  );
}