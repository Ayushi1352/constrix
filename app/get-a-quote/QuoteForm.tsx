"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/common/Icon";
import { Field, SelectField, inputClass } from "@/components/common/Field";
import { BarLabel } from "@/components/common/SectionLabel";
import { site as data } from "@/data";

const { form } = data.quote;

export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  const handleFormChange = () => {
    if (sent) {
      if (timerRef.current) clearTimeout(timerRef.current);
      setSent(false);
    }
  };

  return (
    <div className="rounded-[4px] bg-panel px-20 py-36 sm:px-32 lg:w-[52%] xl:w-820 xl:shrink-0 xl:px-0 xl:pt-41 xl:pr-39 xl:pb-31 xl:pl-52">
      <BarLabel className="xl:fs-19!">{form.label}</BarLabel>
      <h2 className="mt-8 font-rajdhani fs-40 leading-44 font-bold text-white uppercase sm:fs-50 sm:leading-54 xl:mt-18 xl:fs-56 xl:leading-64">
        {form.title} <span className="text-flame">{form.highlight}</span>
      </h2>
      <p className="mt-10 fs-15 leading-25 text-white xl:mt-9 xl:fs-20 xl:leading-28">{form.text}</p>

      <form
        className="mt-22 grid gap-x-20 gap-y-18 sm:grid-cols-2 xl:mt-33 xl:gap-x-30 xl:gap-y-24"
        onSubmit={handleSubmit}
        onChange={handleFormChange}
      >
          <Field label={form.nameLabel} className="xl:[&>span:first-child]:fs-18">
            <input type="text" name="name" required placeholder={form.namePlaceholder} className={`${inputClass} h-54 xl:h-64`} />
          </Field>
          <Field label={form.emailLabel} className="xl:[&>span:first-child]:fs-18">
            <input type="email" name="email" required placeholder={form.emailPlaceholder} className={`${inputClass} h-54 xl:h-64`} />
          </Field>
          <Field label={form.phoneLabel} className="xl:[&>span:first-child]:fs-18">
            <input type="tel" name="phone" required placeholder={form.phonePlaceholder} className={`${inputClass} h-54 xl:h-64`} />
          </Field>
          <Field label={form.typeLabel} className="xl:[&>span:first-child]:fs-18">
            <SelectField name="type" placeholder={form.typePlaceholder} options={form.types} className="h-54 xl:h-64" />
          </Field>
          <Field label={form.locationLabel} className="sm:col-span-2 xl:[&>span:first-child]:fs-18">
            <input type="text" name="location" required placeholder={form.locationPlaceholder} className={`${inputClass} h-54 xl:h-64`} />
          </Field>
          <Field label={form.detailsLabel} className="sm:col-span-2 xl:[&>span:first-child]:fs-18">
            <textarea
              name="details"
              required
              placeholder={form.detailsPlaceholder}
              className={`${inputClass} block h-130 py-16 xl:h-137 xl:py-20`}
            />
          </Field>
          <button
            type="submit"
            className="flex h-60 items-center justify-center gap-20 rounded-[4px] border border-flame bg-flame fs-18 font-semibold text-white transition-colors hover:bg-white hover:text-flame sm:col-span-2 xl:-mt-3 xl:h-71 xl:gap-24 xl:fs-20"
          >
            {form.button}
            <Icon name="arrowRight" className="size-22" strokeWidth={2.2} />
          </button>
          {sent && (
            <p role="status" className="fs-15 leading-24 text-copper-light sm:col-span-2 xl:fs-17">
              {form.success}
            </p>
          )}
        </form>
    </div>
  );
}
