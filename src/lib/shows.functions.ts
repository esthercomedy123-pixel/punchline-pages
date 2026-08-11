import { createServerFn } from "@tanstack/react-start";
import { SHOWS_API_URL } from "@/config/shows";
import type { Show } from "@/data/site";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

/** Turns an ISO date (or already-formatted string) into e.g. "September 15, 2026". */
function formatDate(raw: unknown): string {
  if (typeof raw !== "string" && typeof raw !== "number") return "";
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return String(raw);
  // Sheet dates arrive as midnight in the sheet's timezone; read the calendar
  // day back out in UTC so the displayed date matches the sheet.
  const shifted = new Date(parsed.getTime() + 12 * 60 * 60 * 1000);
  return `${MONTHS[shifted.getUTCMonth()]} ${shifted.getUTCDate()}, ${shifted.getUTCFullYear()}`;
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
    const date = formatDate(item["date"]);
    return {
      id: `show-${index}`,
      date,
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
