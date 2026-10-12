import Icon from "@/components/common/Icon";

// Shared look of the white inputs used on the dark Contact and Quote forms.
export const inputClass =
  "w-full rounded-[4px] border border-transparent bg-white px-18 fs-15 text-[#1b2026] outline-none placeholder:text-[#8d9298] focus:border-[#fb7a15] xl:px-22 xl:fs-17";

export function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block fs-16 leading-24 font-semibold text-white xl:fs-19 xl:leading-28">
        {label} <span className="text-[#fb7a15]">*</span>
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
        className={`${inputClass} ${className} appearance-none pr-48 invalid:text-[#8d9298]`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-[#1b2026]">
            {option}
          </option>
        ))}
      </select>
      <Icon
        name="chevronDown"
        className="pointer-events-none absolute top-1/2 right-20 size-20 -translate-y-1/2 text-[#1b2026]"
        strokeWidth={2.4}
      />
    </span>
  );
}
