import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SocialLinks } from "@/components/site/SocialLinks";
import { profile } from "@/data/site";

const title = `Contact ${profile.name} — Booking, Coaching & Questions`;
const description =
  "Email, phone, and social links plus a contact form for booking requests, comedy coaching inquiries, and general questions.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-spotlight" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          kicker="Contact"
          title={
            <>
              Say <span className="text-gradient-hot">hello</span>
            </>
          }
          lead="Booking a show, signing up for coaching, or just have a question? Pick a lane and send it over."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid content-start gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl border-2 border-border bg-card p-5 transition-colors hover:border-accent"
            >
              <Mail className="size-5 text-primary" aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                  Email
                </span>
                <span className="font-display text-lg tracking-wide">{profile.email}</span>
              </span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-4 rounded-2xl border-2 border-border bg-card p-5 transition-colors hover:border-accent"
            >
              <Phone className="size-5 text-secondary" aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                  Phone
                </span>
                <span className="font-display text-lg tracking-wide">{profile.phone}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border-2 border-border bg-card p-5">
              <MapPin className="size-5 text-tangerine" aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                  Based in
                </span>
                <span className="font-display text-lg tracking-wide">{profile.homeBase}</span>
              </span>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">Follow along</p>
              <SocialLinks className="mt-4" showHandles />
            </div>
          </div>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}