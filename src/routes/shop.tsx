import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ExternalLink, GraduationCap, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { coachingPackages, payhipStoreUrl } from "@/data/site";

const title = "Shop — Merch & Comedy Coaching";
const description =
  "Grab comedy merch from the Payhip store and book coaching packages — one-on-one sessions, multi-session bundles, and group workshops for aspiring comedians.";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-spotlight" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            kicker="The shop"
            title={
              <>
                Stuff you'll actually <span className="text-gradient-hot">want to buy</span>
              </>
            }
            lead="Merch for the fans, coaching for the future headliners. Everything supports the show — and my rent."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-ink bg-gradient-money p-10 text-center text-accent-foreground shadow-pop sm:p-16">
            <ShoppingBag className="mx-auto size-12" aria-hidden="true" />
            <h2 className="mt-4 text-4xl sm:text-5xl">Wear the bit</h2>
            <p className="mx-auto mt-4 max-w-xl text-accent-foreground/80">
              The full merch store lives on Payhip — shirts, mugs, and whatever else I
              convince myself is a good idea. Secure checkout, straight from there.
            </p>
            <Button asChild variant="marquee" size="xl" className="mt-8">
              <a href={payhipStoreUrl} target="_blank" rel="noopener noreferrer">
                Shop the merch store <ExternalLink aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="border-y-2 border-border bg-primary/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              kicker="Comedy coaching"
              title="Coaching packages"
              lead="One-on-one work on your material, timing, and stage presence. Prices are placeholders — fill in the numbers that work for you."
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
          <ShoppingBag className="mx-auto size-10 text-accent" aria-hidden="true" />
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Questions about an <span className="text-gradient-hot">order</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sizing, shipping, coaching availability — send a message and I'll sort you out.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Contact me</Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/contact">
                <GraduationCap aria-hidden="true" /> Ask about coaching
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
