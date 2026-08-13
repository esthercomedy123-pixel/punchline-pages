import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { navItems, profile } from "@/data/site";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-border">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gradient-hot" />
      <div className="bg-spotlight">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <h2 className="text-4xl sm:text-5xl">{profile.name}</h2>
            <p className="mt-3 font-display text-sm tracking-[0.18em] text-accent uppercase">
              {profile.headline}
            </p>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground italic">
              {profile.footerJoke}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer">
            <h3 className="text-lg">Quick links</h3>
            <ul className="mt-4 grid gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-lg">Get in touch</h3>
            <ul className="mt-4 grid gap-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {profile.phone}
                </a>
              </li>
              <li className="text-muted-foreground">{profile.homeBase}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-3">
              <a href="/auth" className="transition-colors hover:text-accent">
                Admin
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
