import type { ReactNode } from "react";

export type PolicyItem = { title: string; content: string };

/** Text page layout shared by the FAQ, Terms, Privacy Policy and Sitemap pages: an intro callout, then numbered sections. */
export const PolicyLayout = ({ intro, children }: { intro: string; children: ReactNode }) => {
  return (
    <section className="py-48 sm:py-64 lg:py-80 bg-[var(--color-white)]">
      <div className="mx-auto w-full max-w-1000 px-16 sm:px-24 md:px-32">
        {/* intro callout with vertical bar */}
        <div className="border-l-4 border-copper py-6 pl-18 sm:pl-24">
          <p className="text-[0.9375rem] leading-[1.75rem] text-[var(--color-text-body-dark)] xl:text-[1.0625rem] xl:leading-[1.875rem]">{intro}</p>
        </div>
        <div className="mt-40 space-y-36 sm:mt-48 sm:space-y-44">{children}</div>
      </div>
    </section>
  );
};

export const PolicySection = ({ number, title, children }: { number: number; title: string; children: ReactNode }) => {
  return (
    <section className="border-t border-[var(--color-border-light)] pt-32 sm:pt-36">
      <h2 className="font-main text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] leading-[1.875rem] font-bold text-coal sm:leading-[2rem] lg:leading-[2.125rem]">
        <span className="text-copper">{number}.</span> {title}
      </h2>
      {children}
    </section>
  );
};

/** `values` fills "{phone}" / "{email}" placeholders in the text (privacy policy). */
export const PolicyPage = ({ data, values = {} }: { data?: { intro: string; items: PolicyItem[] }; values?: Record<string, string> }) => {
  if (!data) return null;
  const fillValues = (text: string) => text.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
  return (
    <PolicyLayout intro={data.intro}>
      {data.items.map((item, index) => (
        <PolicySection key={item.title} number={index + 1} title={item.title}>
          <p className="mt-14 text-[0.9375rem] leading-[1.75rem] text-[var(--color-text-legal)] sm:mt-16 xl:text-[1.0625rem] xl:leading-[1.875rem]">{fillValues(item.content)}</p>
        </PolicySection>
      ))}
    </PolicyLayout>
  );
};
