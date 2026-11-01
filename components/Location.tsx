import Icon from "@/components/Icon";
import { BarLabel } from "@/components/SectionLabel";
import { site as data, contactInfo, contactLines } from "@/data";
import { fill } from "@/components/text";

const { location } = data.contact;
const mapEmbedUrl = fill(data.site.map.embedUrl, { query: encodeURIComponent(contactInfo.address.join(" ")) });

export default function Location() {
  return (
    <div className="min-w-0 flex-1 bg-cream py-8 xl:pt-50 xl:pr-45 xl:pl-42">
      <BarLabel>{location.label}</BarLabel>
      <h2 className="mt-8 font-display text-[2.5rem] sm:text-[3.125rem] xl:text-[4.125rem] leading-44 font-bold text-coal uppercase sm:leading-54 xl:mt-17 xl:leading-60">
        {location.title} <span className="text-[var(--color-accent-location)]">{location.highlight}</span>
      </h2>
      <p className="mt-10 text-[1rem] xl:text-[1.1875rem] leading-27 text-[var(--color-text-location)] xl:mt-14 xl:leading-33 xl:whitespace-pre-line">{location.text}</p>

      <iframe
        src={mapEmbedUrl}
        title={location.mapTitle}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mt-22 block h-260 w-full rounded-[6px] border-0 xl:mt-26 xl:h-308"
      />

      <ul className="mt-28 xl:mt-41">
        {location.offices.map((office) => (
          <li
            key={office.title}
            className="flex items-start gap-18 border-b-2 border-[var(--color-border-location)] py-22 first:pt-0 last:border-0 last:pb-0 xl:gap-25 xl:py-24"
          >
            <span className="flex size-68 shrink-0 items-center justify-center rounded-[4px] bg-panel text-[var(--color-accent-field)] shadow-[0_4px_10px_var(--color-shadow-black-15)] xl:size-84">
              <Icon name="building" className="size-36 xl:size-42" strokeWidth={1.6} />
            </span>
            <div className="min-w-0">
              <h3 className="text-[1.125rem] leading-26 font-semibold text-[var(--color-heading-card)] xl:text-[1.25rem]">{office.title}</h3>
              <p className="mt-4 text-[0.9375rem] leading-25 text-[var(--color-text-card)] xl:mt-6 xl:text-[1.1875rem] xl:leading-31">
                {contactLines(office).map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
