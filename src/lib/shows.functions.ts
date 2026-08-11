import { createServerFn } from "@tanstack/react-start";
import { SHOWS_API_URL } from "@/config/shows";
import type { Show } from "@/data/site";

const TZ = "America/New_York";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: TZ,
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: TZ,
});

function formatDate(raw: unknown): { date: string; time?: string } {
  if (typeof raw !== "string" && typeof raw !== "number") return { date: "" };
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return { date: String(raw) };
  const localTime = timeFormatter.format(parsed);
  const hasTime = localTime !== "12:00 AM";
  return {
    date: dateFormatter.format(parsed),
    ...(hasTime ? { time: localTime } : {}),
  };
}

export const getShows = createServerFn({ method: "GET" }).handler(async (): Promise<Show[]> => {
  const response = await fetch(SHOWS_API_URL, { headers: { accept: "application/json" } });
  if (!response.ok) {
    throw new Error("Could not load the show schedule right now.");
  }
  const payload: unknown = await response.json();
  const rows = Array.isArray(payload)
    ? payload
    : Array.isArray((payload as { shows?: unknown[] })?.shows)
      ? (payload as { shows: unknown[] }).shows
      : [];

  return rows.map((row, index) => {
    const item = (row ?? {}) as Record<string, unknown>;
    const { date, time } = formatDate(item["date"]);
    return {
      id: `show-${index}`,
      date,
      ...(time ? { time } : {}),
      venue: typeof item["venue"] === "string" ? item["venue"] : "",
      city: typeof item["city"] === "string" ? item["city"] : "",
      showName: typeof item["showName"] === "string" ? item["showName"] : "",
      ticketUrl: typeof item["ticketLink"] === "string" ? item["ticketLink"] : "#",
    } satisfies Show;
  });
});

export const showsQueryOptions = {
  queryKey: ["shows"] as const,
  queryFn: () => getShows(),
  staleTime: 60_000,
};
