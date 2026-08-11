import { useQuery } from "@tanstack/react-query";
import { Reveal } from "@/components/site/Reveal";
import { ShowCard } from "@/components/site/ShowCard";
import { showsQueryOptions } from "@/lib/shows.functions";
import type { Show } from "@/data/site";

type ShowsListProps = {
  limit?: number;
  filter?: (show: Show) => boolean;
  emptyMessage?: string;
};

export function ShowsList({ limit, filter, emptyMessage }: ShowsListProps) {
  const { data, isPending, isError } = useQuery(showsQueryOptions);

  if (isPending) {
    return (
      <div className="grid gap-4" aria-busy="true" aria-live="polite">
        {Array.from({ length: limit ?? 3 }).map((_, index) => (
          <div
            key={index}
            className="h-40 animate-pulse rounded-2xl border-2 border-border bg-card sm:h-32"
          />
        ))}
        <span className="sr-only">Loading shows…</span>
      </div>
    );
  }

  if (isError) {
    return (
      <p
        role="alert"
        className="rounded-2xl border-2 border-dashed border-border p-10 text-center text-muted-foreground"
      >
        Couldn&apos;t load the schedule right now. Please try again in a moment.
      </p>
    );
  }

  let list = data ?? [];
  if (filter) list = list.filter(filter);
  if (limit) list = list.slice(0, limit);

  if (list.length === 0) {
    return (
      <p className="rounded-2xl border-2 border-dashed border-border p-10 text-center text-muted-foreground">
        {emptyMessage ??
          "No dates listed right now — check back soon, or get in touch about booking a show."}
      </p>
    );
  }

  return (
    <div className="grid gap-4">
      {list.map((show, index) => (
        <Reveal key={show.id} delay={index * 70}>
          <ShowCard show={show} />
        </Reveal>
      ))}
    </div>
  );
}
