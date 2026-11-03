"use client";

import type { QuoteFormData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { Field, SelectField, inputClass } from "@/components/ui/Field";
import { BarLabel } from "@/components/ui/SectionLabel";
import { useFormSubmit } from "@/components/ui/useFormSubmit";

const label = "xl:[&>span:first-child]:text-[1.125rem]";

export const QuoteForm = ({ data: form }: { data: QuoteFormData }) => {
  const { sent, onSubmit, onChange } = useFormSubmit();

  return (
    <div className="rounded-[4px] bg-panel px-20 py-36 sm:px-32 lg:w-[52%] xl:w-820 xl:shrink-0 xl:px-0 xl:pt-41 xl:pr-39 xl:pb-31 xl:pl-52">
      <BarLabel className="xl:!text-[1.1875rem]">{form.label}</BarLabel>
      <h2 className="mt-8 font-display text-[2.5rem] leading-44 font-bold text-[var(--color-white)] uppercase sm:text-[3.125rem] sm:leading-54 xl:mt-18 xl:text-[3.5rem] xl:leading-64">
        {form.title} <span className="text-flame">{form.highlight}</span>
      </h2>
      <p className="mt-10 text-[0.9375rem] xl:text-[1.125rem] leading-25 text-[var(--color-white)] xl:mt-9 xl:leading-28">{form.text}</p>

      <form className="mt-22 grid gap-x-20 gap-y-18 sm:grid-cols-2 xl:mt-33 xl:gap-x-30 xl:gap-y-24" onSubmit={onSubmit} onChange={onChange}>
        <Field requiredMark={form.requiredMark} label={form.nameLabel} className={label}>
          <input type="text" name="name" required placeholder={form.namePlaceholder} className={`${inputClass} h-54 xl:h-64`} />
        </Field>
        <Field requiredMark={form.requiredMark} label={form.emailLabel} className={label}>
          <input type="email" name="email" required placeholder={form.emailPlaceholder} className={`${inputClass} h-54 xl:h-64`} />
        </Field>
        <Field requiredMark={form.requiredMark} label={form.phoneLabel} className={label}>
          <input type="tel" name="phone" required placeholder={form.phonePlaceholder} className={`${inputClass} h-54 xl:h-64`} />
        </Field>
        <Field requiredMark={form.requiredMark} label={form.typeLabel} className={label}>
          <SelectField name="type" placeholder={form.typePlaceholder} options={form.types} className="h-54 xl:h-64" />
        </Field>
        <Field requiredMark={form.requiredMark} label={form.locationLabel} className={`sm:col-span-2 ${label}`}>
          <input type="text" name="location" required placeholder={form.locationPlaceholder} className={`${inputClass} h-54 xl:h-64`} />
        </Field>
        <Field requiredMark={form.requiredMark} label={form.detailsLabel} className={`sm:col-span-2 ${label}`}>
          <textarea name="details" required placeholder={form.detailsPlaceholder} className={`${inputClass} block h-130 py-16 xl:h-137 xl:py-20`} />
        </Field>
        <button
          type="submit"
          className="flex h-60 items-center justify-center gap-20 rounded-[4px] border border-flame bg-flame text-[1.125rem] font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-flame sm:col-span-2 xl:-mt-3 xl:h-71 xl:gap-24 xl:text-[1.25rem]"
        >
          {form.button}
          <Icon name="LuArrowRight" className="size-22" strokeWidth={2.2} />
        </button>
        {sent && (
          <p role="status" className="text-[0.9375rem] leading-24 text-copper-light sm:col-span-2 xl:text-[1.0625rem]">
            {form.success}
          </p>
        )}
      </form>
    </div>
  );
};
