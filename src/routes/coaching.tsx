import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, GraduationCap } from "lucide-react";
import coachingImage from "@/assets/coaching.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { coachingPackages, coachingSkills } from "@/data/site";

const title = "Comedy Coaching — Learn the Craft of Comedy";
const description =
  "One-on-one comedy coaching, multi-session packages, and group workshops covering joke writing, timing, stage presence, and finding your comedic voice.";

export const Route = createFileRoute("/coaching")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CoachingPage,
});

function CoachingPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-spotlight" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <SectionHeading
              kicker="Comedy coaching"
              title={
                <>
                  Learn the <span className="text-gradient-hot">craft of comedy</span>
                </>
              }
              lead="I work with aspiring and developing comedians who want to get funnier on purpose instead of by accident. We build your material, tighten your timing, and get you comfortable owning a room."
            />
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/contact">
                <GraduationCap aria-hidden="true" /> Book a coaching session
              </Link>
            </Button>
          </div>
          <img
            src={coachingImage}
            alt="Comedy workshop with comedians taking notes while one performs"
            loading="lazy"
            width={1408}
            height={1008}
            className="w-full rounded-[2rem] border-[3px] border-ink object-cover shadow-pop"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading kicker="What we work on" title="The whole toolkit" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coachingSkills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 60}>
              <article className="h-full rounded-2xl border-2 border-border bg-card p-6 transition-[border-color,transform] hover:-translate-y-1 hover:border-accent">
                <h3 className="text-xl">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-border bg-primary/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              kicker="Lessons & packages"
              title="Pick your pace"
              lead="Prices are placeholders — fill in the numbers that work for you."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {coachingPackages.map((pkg, index) => (
              <Reveal key={pkg.name} delay={index * 90}>
                <article
                  className={`flex h-full flex-col rounded-3xl border-[3px] p-7 ${
                    pkg.featured
                      ? "border-ink bg-gradient-money text-accent-foreground shadow-pop"
                      : "border-border bg-card"
                  }`}
                >
                  {pkg.featured ? (
                    <span className="mb-3 inline-flex w-fit rounded-full border-2 border-ink px-3 py-1 font-display text-xs tracking-[0.2em] uppercase">
                      Most popular
                    </span>
                  ) : null}
                  <h3 className="text-2xl">{pkg.name}</h3>
                  <p
                    className={`mt-2 text-sm ${pkg.featured ? "text-accent-foreground/80" : "text-muted-foreground"}`}
                  >
                    {pkg.blurb}
                  </p>
                  <p className="mt-6 font-display text-5xl">{pkg.price}</p>
                  <p
                    className={`mt-1 text-xs tracking-widest uppercase ${pkg.featured ? "text-accent-foreground/70" : "text-muted-foreground"}`}
                  >
                    {pkg.unit}
                  </p>
                  <ul className="mt-6 grid flex-1 gap-3 text-sm">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          className={`mt-0.5 size-4 shrink-0 ${pkg.featured ? "" : "text-accent"}`}
                          aria-hidden="true"
                        />
                        <span className={pkg.featured ? "" : "text-muted-foreground"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={pkg.featured ? "marquee" : "pop"}
                    size="xl"
                    className="mt-8 w-full"
                  >
                    <Link to="/contact">Book a session</Link>
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl">
            Ready to get <span className="text-gradient-hot">funnier</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell me where you're at — first open mic, first ten minutes, or first paid gig.
          </p>
          <Button asChild variant="hero" size="xl" className="mt-8">
            <Link to="/contact">Book a coaching session</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}