import { Icon } from "@/components/ui/Icon";

// Shared look of the white inputs used on the dark Contact and Quote forms.
export const inputClass =
  "w-full rounded-[4px] border border-transparent bg-[var(--color-white)] px-18 text-[0.9375rem] text-[var(--color-text-field)] outline-none placeholder:text-[var(--color-text-placeholder)] focus:border-[var(--color-accent-field)] xl:px-22 xl:text-[1.0625rem]";

export function Field({
  label,
  requiredMark,
  children,
  className = "",
}: {
  label: string;
  /** shown after the label of a required field (templates.json) */
  requiredMark: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[1rem] leading-24 font-semibold text-[var(--color-white)] xl:text-[1.1875rem] xl:leading-28">
        {label} <span className="text-[var(--color-accent-field)]">{requiredMark}</span>
      </span>
      <span className="mt-8 block xl:mt-10">{children}</span>
    </label>
  );
}

export function SelectField({
  name,
  placeholder,
  options,
  className = "",
}: {
  name: string;
  placeholder: string;
  options: string[];
  className?: string;
}) {
  return (
    <span className="relative block">
      <select
        name={name}
        required
        defaultValue=""
        className={`${inputClass} ${className} appearance-none pr-48 invalid:text-[var(--color-text-placeholder)]`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-[var(--color-text-field)]">
            {option}
          </option>
        ))}
      </select>
      <Icon
        name="LuChevronDown"
        className="pointer-events-none absolute top-1/2 right-20 size-20 -translate-y-1/2 text-[var(--color-text-field)]"
        strokeWidth={2.4}
      />
    </span>
  );
}
