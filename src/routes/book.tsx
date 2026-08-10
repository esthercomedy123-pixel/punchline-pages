import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Building2, Mic, PartyPopper, Sparkles, Tent } from "lucide-react";
import { BookingForm } from "@/components/site/BookingForm";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { profile } from "@/data/site";

const title = "Book Me — Comedy Clubs, Corporate Events & Festivals";
const description =
  "Booking inquiries for comedy club sets, private and corporate events, festivals, hosting and MC work, and full productions of The Inflation Game.";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: BookPage,
});

const offerings = [
  { icon: Mic, title: "Comedy club sets", body: "Feature or headline spots, clean or club-standard." },
  { icon: PartyPopper, title: "Private events", body: "Birthdays, weddings, fundraisers, backyard chaos." },
  { icon: Building2, title: "Corporate events", body: "Tailored, room-appropriate, still actually funny." },
  { icon: Tent, title: "Festivals", body: "Showcases, late shows, and lineup spots." },
  { icon: Briefcase, title: "Hosting / MC work", body: "Warm up the room and keep the night moving." },
  { icon: Sparkles, title: "Special comedy shows", body: "Themed nights and The Inflation Game." },
];

function BookPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-spotlight" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            kicker="Booking"
            title={
              <>
                Want me at <span className="text-gradient-hot">your club?</span>
              </>
            }
            lead={`Send the details and I'll get back to you fast. Based in ${profile.homeBase} and happy to travel.`}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <h2 className="text-2xl">What I get booked for</h2>
          <ul className="mt-6 grid gap-3">
            {offerings.map(({ icon: Icon, title: t, body }, index) => (
              <Reveal key={t} delay={index * 60}>
                <li className="flex items-start gap-4 rounded-2xl border-2 border-border bg-card p-5 transition-colors hover:border-accent">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-hot">
                    <Icon className="size-5 text-primary-foreground" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-lg tracking-wide">{t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl">Booking request</h2>
          <div className="mt-6">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}