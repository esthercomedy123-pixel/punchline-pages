import { Link } from "@tanstack/react-router";
import { Menu, Mic, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems, profile } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b-2 border-border bg-background/90 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
          aria-label={`${profile.name} — home`}
        >
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-hot transition-transform group-hover:-rotate-12">
            <Mic className="size-5 text-primary-foreground" aria-hidden="true" />
          </span>
          <span className="font-display text-xl tracking-wide">{profile.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="lg">
            <Link to="/book">Book me</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 cursor-pointer place-items-center rounded-xl border-2 border-border bg-card lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t-2 border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-accent border-accent" }}
                    className="block rounded-xl border-2 border-transparent px-4 py-3 font-display text-lg tracking-wide"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="xl" className="mt-4 w-full">
              <Link to="/book" onClick={() => setOpen(false)}>
                Book me
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}