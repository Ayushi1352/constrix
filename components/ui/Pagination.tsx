import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  previousLabel: string;
  nextLabel: string;
  /** "Go to page {n}" */
  pageLabel: string;
  /** light: on a white section, dark: on the dark projects section */
  tone?: "light" | "dark";
  className?: string;
};

const tones = {
  light: {
    arrow: "border-[var(--color-border-card)] bg-[var(--color-white)] text-coal",
    page: "bg-[var(--color-surface-warm)] text-coal",
    numbers: "text-coal",
  },
  dark: {
    arrow: "border-[var(--color-white-20)] bg-[var(--color-white-5)] text-[var(--color-white)]",
    page: "bg-[var(--color-white-5)] text-[var(--color-white-80)]",
    numbers: "text-[var(--color-white)]",
  },
};

export const Pagination = ({ page, totalPages, onChange, previousLabel, nextLabel, pageLabel, tone = "light", className = "" }: Props) => {
  if (totalPages < 2) return null;
  const style = tones[tone];
  const arrow = `flex size-40 items-center justify-center rounded-full border transition-colors enabled:hover:border-copper enabled:hover:bg-copper enabled:hover:text-[var(--color-white)] disabled:cursor-not-allowed disabled:opacity-40 ${style.arrow}`;

  return (
    <div className={`flex items-center justify-center gap-10 ${className}`}>
      <button type="button" onClick={() => onChange(Math.max(1, page - 1))} disabled={page === 1} className={arrow} aria-label={previousLabel}>
        <Icon name="LuChevronLeft" className="size-18" strokeWidth={2.4} />
      </button>
      <div className={`flex items-center gap-8 text-[0.9375rem] ${style.numbers}`}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
          <button
            key={number}
            type="button"
            onClick={() => onChange(number)}
            aria-current={page === number ? "page" : undefined}
            className={`flex size-34 items-center justify-center rounded-full transition-colors ${page === number ? "bg-copper text-[var(--color-white)]" : `${style.page} hover:bg-copper hover:text-[var(--color-white)]`}`}
            aria-label={fill(pageLabel, { n: number })}
          >
            {number}
          </button>
        ))}
      </div>
      <button type="button" onClick={() => onChange(Math.min(totalPages, page + 1))} disabled={page === totalPages} className={arrow} aria-label={nextLabel}>
        <Icon name="LuChevronRight" className="size-18" strokeWidth={2.4} />
      </button>
    </div>
  );
};
