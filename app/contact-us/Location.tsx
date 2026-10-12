import Icon from "@/components/common/Icon";
import { BarLabel } from "@/components/common/SectionLabel";
import { site as data, contactInfo, contactLines } from "@/data";

const { location } = data.contact;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address.join(" "))}&z=15&output=embed`;

export default function Location() {
  return (
    <div className="min-w-0 flex-1 bg-cream py-8 xl:pt-48 xl:pr-45 xl:pl-42">
      <BarLabel>{location.label}</BarLabel>
      <h2 className="mt-8 font-rajdhani fs-40 leading-44 font-bold text-coal uppercase sm:fs-50 sm:leading-54 xl:mt-10 xl:fs-66 xl:leading-70">
        {location.title} <span className="text-[#ff7c0b]">{location.highlight}</span>
      </h2>
      <p className="mt-10 fs-16 leading-27 text-[#41475d] xl:mt-9 xl:fs-19 xl:leading-32 xl:whitespace-pre-line">{location.text}</p>

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
              <h3 className="fs-18 leading-26 font-semibold text-[#111418] xl:fs-20">{office.title}</h3>
              <p className="mt-4 fs-15 leading-25 text-[#555b64] xl:mt-6 xl:fs-19 xl:leading-31">
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
