import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { bookingTypes } from "@/data/site";

/**
 * PLACEHOLDER SUBMIT: this form validates and confirms in the browser only.
 * Hook it up to email/database delivery when you're ready.
 */
export function BookingForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      toast.success("Booking request captured", {
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your name" />
        <Field label="Email" name="email" type="email" required placeholder="you@email.com" />
        <Field label="Phone (optional)" name="phone" type="tel" placeholder="(___) ___-____" />
        <Field label="Venue / organization" name="venue" required placeholder="Where you're booking for" />
        <Field label="Event date" name="date" type="date" required />
        <Field label="Event location" name="location" required placeholder="City, state" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="booking-type">Type of event</Label>
        <select
          id="booking-type"
          name="eventType"
          required
          defaultValue=""
          className="h-11 w-full rounded-xl border-2 border-input bg-background px-3 text-sm focus-visible:border-ring focus-visible:outline-none"
        >
          <option value="" disabled>
            Choose one
          </option>
          {bookingTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="booking-details">Additional information</Label>
        <Textarea
          id="booking-details"
          name="details"
          rows={5}
          placeholder="Set length, budget range, lineup, audience size, anything else."
          className="rounded-xl border-2"
        />
      </div>

      <Button type="submit" variant="hero" size="xl" disabled={submitting}>
        {submitting ? "Sending…" : "Send booking request"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Placeholder form — no email is sent yet. Ask to connect delivery when you're ready.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={`booking-${name}`}>{label}</Label>
      <Input
        id={`booking-${name}`}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-xl border-2"
      />
    </div>
  );
}