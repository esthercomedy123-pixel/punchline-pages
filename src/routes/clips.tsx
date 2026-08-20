import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { YoutubeIcon } from "@/components/site/YoutubeIcon";
import { clips, profile } from "@/data/site";

const title = `Comedy Clips — ${profile.name}`;
const description =
  "Watch stand-up sets, crowd work and clips from The Inflation Game live stream, all in one place.";

export const Route = createFileRoute("/clips")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClipsPage,
});

/** Pull the video id out of any YouTube URL shape (watch, youtu.be, shorts, embed). */
function youtubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{6,})/,
  );
  return match ? match[1]! : null;
}

function ClipsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-border bg-spotlight">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            kicker="Comedy clips"
            title={
              <>
                Watch me <span className="text-gradient-hot">work a room</span>
              </>
            }
            lead="Sets, crowd work, and the best bits from the streams. New clips get added as they happen."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {clips.length === 0 ? (
          <p className="text-muted-foreground">
            No clips up yet — check back soon.
          </p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            {clips.map((clip, index) => {
              const id = youtubeId(clip.url);
              return (
                <Reveal key={clip.url + index} delay={(index % 2) * 90}>
                  <article className="h-full overflow-hidden rounded-2xl border-2 border-border bg-card transition-colors hover:border-accent">
                    {id ? (
                      <div className="aspect-video w-full bg-ink">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${id}`}
                          title={clip.title}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="size-full"
                        />
                      </div>
                    ) : (
                      <a
                        href={clip.url}
                        target="_blank"
                        rel="noreferrer"
                        className="grid aspect-video w-full place-items-center bg-gradient-hot"
                      >
                        <span className="font-display text-lg tracking-[0.16em] text-primary-foreground uppercase">
                          Watch the clip
                        </span>
                      </a>
                    )}
                    <div className="p-6">
                      <h2 className="text-2xl">{clip.title}</h2>
                      {clip.blurb ? (
                        <p className="mt-2 leading-relaxed text-muted-foreground">{clip.blurb}</p>
                      ) : null}
                      <Button asChild variant="ghostOnDark" size="lg" className="mt-5">
                        <a href={clip.url} target="_blank" rel="noreferrer">
                          {id ? (
                            <YoutubeIcon className="size-5" />
                          ) : (
                            <ExternalLink aria-hidden="true" />
                          )}
                          Open clip
                        </a>
                      </Button>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}