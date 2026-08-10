export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y-[3px] border-ink bg-gradient-money py-3">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display text-lg tracking-[0.15em] whitespace-nowrap text-accent-foreground uppercase sm:text-xl"
          >
            {item}
            <span aria-hidden="true" className="pl-8 opacity-50">
              ★
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}