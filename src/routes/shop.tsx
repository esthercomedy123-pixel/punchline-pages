import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, GraduationCap, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { coachingPackages, products } from "@/data/site";

const title = "Shop — Merch & Comedy Coaching";
const description =
  "Grab comedy merch and book coaching packages — one-on-one sessions, multi-session bundles, and group workshops for aspiring comedians.";

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
          <SectionHeading
            kicker="Merch"
            title="Wear the bit"
            lead="New drops when I get around to it. Prices are placeholders until the real store links go live."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-border bg-card transition-[border-color,transform] hover:-translate-y-1 hover:border-accent">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center bg-gradient-money p-8 text-center">
                    <span className="font-display text-2xl tracking-wide text-accent-foreground uppercase">
                      {product.name}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl">{product.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {product.blurb}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="font-display text-3xl">{product.price}</span>
                    {product.url ? (
                      <Button asChild variant="pop">
                        <a href={product.url} target="_blank" rel="noopener noreferrer">
                          Buy <ArrowRight aria-hidden="true" />
                        </a>
                      </Button>
                    ) : (
                      <Button asChild variant="pop">
                        <Link to="/contact">
                          Ask to buy <ArrowRight aria-hidden="true" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
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
