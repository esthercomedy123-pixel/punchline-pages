import { Facebook, Instagram, Music2, Youtube } from "lucide-react";
import { socials } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = {
  instagram: Instagram,
  tiktok: Music2,
  youtube: Youtube,
  facebook: Facebook,
};

export function SocialLinks({
  className,
  showHandles = false,
}: {
  className?: string;
  showHandles?: boolean;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {socials.map((social) => {
        const Icon = icons[social.icon];
        return (
          <li key={social.label}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.label}: ${social.handle}`}
              className="group inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="size-4" aria-hidden="true" />
              <span>{showHandles ? social.handle : social.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}