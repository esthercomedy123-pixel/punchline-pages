import { useQuery } from "@tanstack/react-query";
import { RefreshCw } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ShowCard } from "@/components/site/ShowCard";
import { Button } from "@/components/ui/button";
import { showsQueryOptions } from "@/lib/shows.functions";
import type { Show } from "@/data/site";

type ShowsListProps = {
  limit?: number;
  filter?: (show: Show) => boolean;
  emptyMessage?: string;
  showRefresh?: boolean;
};

export function ShowsList({
  limit,
  filter,
  emptyMessage,
  showRefresh,
}: ShowsListProps) {
  const { data, isPending, isError, isFetching, refetch } =
    useQuery(showsQueryOptions);

  const refreshButton = showRefresh ? (
    <div className="flex justify-end">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => refetch()}
        disabled={isFetching}
        aria-label="Refresh shows"
      >
        <RefreshCw
          className={`mr-2 h-4 w-4 ${isFetching ? "animate-spin" : ""}`}
          aria-hidden="true"
        />
        {isFetching ? "Refreshing…" : "Refresh shows"}
      </Button>
    </div>
  ) : null;

  const wrap = (children: React.ReactNode) => (
    <div className="grid gap-4">
      {refreshButton}
      {children}
    </div>
  );

  if (isPending) {
    return wrap(
      <div className="grid gap-4" aria-busy="true" aria-live="polite">
        {Array.from({ length: limit ?? 3 }).map((_, index) => (
          <div
            key={index}
            className="h-40 animate-pulse rounded-2xl border-2 border-border bg-card sm:h-32"
          />
        ))}
        <span className="sr-only">Loading shows…</span>
      </div>,
    );
  }

  if (isError) {
    return wrap(
      <p
        role="alert"
        className="rounded-2xl border-2 border-dashed border-border p-10 text-center text-muted-foreground"
      >
        Couldn&apos;t load the schedule right now. Please try again in a moment.
      </p>,
    );
  }

  let list = data ?? [];
  if (filter) list = list.filter(filter);
  if (limit) list = list.slice(0, limit);

  if (list.length === 0) {
    return wrap(
      <p className="rounded-2xl border-2 border-dashed border-border p-10 text-center text-muted-foreground">
        {emptyMessage ??
          "No dates listed right now — check back soon, or get in touch about booking a show."}
      </p>,
    );
  }

  return wrap(
    <div className="grid gap-4">
      {list.map((show, index) => (
        <Reveal key={show.id} delay={index * 70}>
          <ShowCard show={show} />
        </Reveal>
      ))}
    </div>,
  );
}
