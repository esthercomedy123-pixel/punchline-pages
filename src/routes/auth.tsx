import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Mic } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { profile } from "@/data/site";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin sign in | Backstage" },
      {
        name: "description",
        content: "Private sign in for the site owner to review booking requests and messages.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Admin sign in | Backstage" },
      { property: "og:description", content: "Private sign in for the site owner." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin", replace: true });
    });
  }, [navigate]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      navigate({ to: "/admin", replace: true });
    } catch (error) {
      toast.error("Couldn't sign you in", {
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setBusy(false);
      toast.error("Google sign-in failed", { description: result.error.message });
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/admin", replace: true });
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md flex-col justify-center px-4 py-16">
      <div className="rounded-3xl border-2 border-border bg-card p-6 sm:p-8">
        <span className="grid size-11 place-items-center rounded-xl bg-gradient-hot">
          <Mic className="size-5 text-primary-foreground" aria-hidden="true" />
        </span>
        <h1 className="mt-5 font-display text-3xl tracking-wide uppercase">Backstage</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Private door. Sign in to read booking requests and messages.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="auth-email">Email</Label>
            <Input
              id="auth-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 rounded-xl border-2"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="auth-password">Password</Label>
            <Input
              id="auth-password"
              type="password"
              autoComplete="current-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 rounded-xl border-2"
            />
          </div>
          <Button type="submit" variant="hero" size="xl" disabled={busy}>
            {busy ? "One sec…" : "Sign in"}
          </Button>
        </form>

        <div className="my-5 flex items-center gap-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          <span className="h-px flex-1 bg-border" />
          or
          <span className="h-px flex-1 bg-border" />
        </div>

        <Button type="button" variant="outline" size="xl" className="w-full" disabled={busy} onClick={handleGoogle}>
          Continue with Google
        </Button>

        <p className="mt-6 text-xs text-muted-foreground">
          <Link to="/" className="underline-offset-4 hover:underline">
            Back to {profile.name}
          </Link>
        </p>
      </div>
    </main>
  );
}
