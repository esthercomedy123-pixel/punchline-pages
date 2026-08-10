import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border-2 border-accent/60 px-4 py-1.5 font-display text-xs tracking-[0.2em] text-accent uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  lead,
  align = "left",
  className,
}: {
  kicker?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {lead ? (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{lead}</p>
      ) : null}
    </div>
  );
}