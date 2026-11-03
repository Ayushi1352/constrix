"use client";

import type { ContactFormData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { Field, SelectField, inputClass } from "@/components/ui/Field";
import { BarLabel } from "@/components/ui/SectionLabel";
import { useFormSubmit } from "@/components/ui/useFormSubmit";

export const ContactForm = ({ data: form }: { data: ContactFormData }) => {
  const { sent, onSubmit, onChange } = useFormSubmit();

  return (
    <div className="rounded-[4px] bg-panel px-20 py-36 sm:px-32 lg:w-[56%] xl:w-920 xl:shrink-0 xl:px-0 xl:pt-48 xl:pr-43 xl:pb-35 xl:pl-48">
      <BarLabel>{form.label}</BarLabel>
      <h2 className="mt-8 font-display text-[2.75rem] leading-48 font-bold text-[var(--color-white)] uppercase sm:text-[3.5rem] sm:leading-60 xl:mt-15 xl:text-[4.75rem] xl:leading-74">
        {form.title} <span className="text-flame">{form.highlight}</span>
      </h2>
      <p className="mt-10 text-[1rem] xl:text-[1.25rem] leading-26 text-[var(--color-white)] xl:mt-14 xl:leading-30">{form.text}</p>

      <form className="mt-24 grid gap-x-20 gap-y-20 sm:grid-cols-2 xl:mt-37 xl:gap-x-31 xl:gap-y-25" onSubmit={onSubmit} onChange={onChange}>
        <Field requiredMark={form.requiredMark} label={form.nameLabel}>
          <input type="text" name="name" required placeholder={form.namePlaceholder} className={`${inputClass} h-54 xl:h-68`} />
        </Field>
        <Field requiredMark={form.requiredMark} label={form.emailLabel}>
          <input type="email" name="email" required placeholder={form.emailPlaceholder} className={`${inputClass} h-54 xl:h-68`} />
        </Field>
        <Field requiredMark={form.requiredMark} label={form.phoneLabel}>
          <input type="tel" name="phone" required placeholder={form.phonePlaceholder} className={`${inputClass} h-54 xl:h-68`} />
        </Field>
        <Field requiredMark={form.requiredMark} label={form.subjectLabel}>
          <SelectField name="subject" placeholder={form.subjectPlaceholder} options={form.subjects} className="h-54 xl:h-68" />
        </Field>
        <Field requiredMark={form.requiredMark} label={form.messageLabel} className="sm:col-span-2">
          <textarea name="message" required placeholder={form.messagePlaceholder} className={`${inputClass} block h-150 py-16 xl:h-190 xl:py-22`} />
        </Field>
        <button
          type="submit"
          className="flex h-60 items-center justify-center gap-20 rounded-[4px] border border-flame bg-flame text-[1.125rem] xl:text-[1.3125rem] font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-flame sm:col-span-2 xl:-mt-5 xl:h-76 xl:gap-24"
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
