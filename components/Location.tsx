import Icon from "@/components/Icon";
import { BarLabel } from "@/components/SectionLabel";
import { site as data, contactInfo, contactLines } from "@/data";

const { location } = data.contact;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address.join(" "))}&z=15&output=embed`;

export default function Location() {
  return (
    <div className="min-w-0 flex-1 bg-cream py-8 xl:pt-50 xl:pr-45 xl:pl-42">
      <BarLabel className="xl:text-[1.25rem]!">{location.label}</BarLabel>
      <h2 className="mt-8 font-display text-[2.5rem] leading-44 font-bold text-coal uppercase sm:text-[3.125rem] sm:leading-54 xl:mt-17 xl:text-[3.5rem] xl:leading-60">
        {location.title} <span className="text-[#ff7c0b]">{location.highlight}</span>
      </h2>
      <p className="mt-10 text-[1rem] leading-27 text-[#41475d] xl:mt-14 xl:text-[1.25rem] xl:leading-33 xl:whitespace-pre-line">{location.text}</p>

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
            className="flex items-start gap-18 border-b-2 border-[#e6e3e0] py-22 first:pt-0 last:border-0 last:pb-0 xl:gap-25 xl:py-24"
          >
            <span className="flex size-68 shrink-0 items-center justify-center rounded-[4px] bg-panel text-[#fb7a15] shadow-[0_4px_10px_rgba(0,0,0,0.15)] xl:size-84">
              <Icon name="building" className="size-36 xl:size-42" strokeWidth={1.6} />
            </span>
            <div className="min-w-0">
              <h3 className="text-[1.125rem] leading-26 font-semibold text-[#111418] xl:text-[1.25rem]">{office.title}</h3>
              <p className="mt-4 text-[0.9375rem] leading-25 text-[#555b64] xl:mt-6 xl:text-[1.1875rem] xl:leading-31">
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
