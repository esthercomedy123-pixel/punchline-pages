import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const reasons = ["Book me", "Comedy coaching", "General question"] as const;

/** PLACEHOLDER SUBMIT — connect email delivery when ready. */
export function ContactForm() {
  const [reason, setReason] = useState<(typeof reasons)[number]>("Book me");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      toast.success(`Message captured — ${reason}`, {
        description: "Placeholder only — connect delivery to actually receive it.",
      });
      form.reset();
    }, 500);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-3xl border-2 border-border bg-card p-6 sm:p-8"
    >
      <fieldset className="grid gap-3">
        <legend className="font-display text-sm tracking-[0.18em] text-accent uppercase">
          What's this about?
        </legend>
        <div className="flex flex-wrap gap-2">
          {reasons.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={reason === option}
              onClick={() => setReason(option)}
              className={cn(
                "cursor-pointer rounded-full border-2 px-4 py-2 font-display text-sm tracking-wide uppercase transition-colors",
                reason === option
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent",
              )}
            >
              {option}
            </button>
          ))}
        </div>
        <input type="hidden" name="reason" value={reason} />
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input id="contact-name" name="name" required className="h-11 rounded-xl border-2" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            className="h-11 rounded-xl border-2"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="Tell me what you've got in mind."
          className="rounded-xl border-2"
        />
      </div>

      <Button type="submit" variant="pop" size="xl" disabled={submitting}>
        {submitting ? "Sending…" : "Send message"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Placeholder form — no email is sent yet.
      </p>
    </form>
  );
}