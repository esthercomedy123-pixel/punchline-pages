import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Show } from "@/data/site";

export function ShowCard({ show }: { show: Show }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent sm:p-7">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-hot opacity-70 transition-opacity group-hover:opacity-100"
      />
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-5">
          <div className="grid min-w-20 place-items-center rounded-xl bg-gradient-money px-3 py-3 text-center">
            <span className="font-display text-sm leading-tight text-accent-foreground uppercase">
              {show.date}
            </span>
          </div>
          <div>
            <h3 className="text-2xl">{show.showName}</h3>
            <dl className="mt-3 grid gap-1.5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarDays className="size-4 text-primary" aria-hidden="true" />
                <dt className="sr-only">Date</dt>
                <dd>{show.date}</dd>
              </div>
              {show.time ? (
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-secondary" aria-hidden="true" />
                  <dt className="sr-only">Time</dt>
                  <dd>{show.time}</dd>
                </div>
              ) : null}
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-tangerine" aria-hidden="true" />
                <dt className="sr-only">Venue</dt>
                <dd>
                  {show.venue} — {show.city}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <Button asChild variant="pop" size="lg" className="shrink-0">
          <a href={show.ticketUrl} target="_blank" rel="noreferrer">
            <Ticket aria-hidden="true" />
            {show.ticketLabel ?? "Tickets"}
          </a>
        </Button>
      </div>
    </article>
  );
}