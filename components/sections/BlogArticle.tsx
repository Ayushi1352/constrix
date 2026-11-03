import Image from "next/image";
import type { BlogDetailData, BlogPost } from "@/types/templates.types";

export const BlogArticle = ({ data, post }: { data: BlogDetailData; post: BlogPost }) => {
  const image = data.image || post.image;

  return (
    <article className="min-w-0 flex-1">
      <div className="relative aspect-[1022/470] overflow-hidden rounded-[6px] shadow-[0_2px_10px_var(--color-shadow-black-8)]">
        <Image src={image} alt={post.title.replace(/\n/g, " ")} fill priority quality={90} sizes="(min-width: 1024px) 65vw, 100vw" className="object-cover" />
      </div>

      <h2 className="mt-24 font-main text-[1.75rem] xl:text-[2.375rem] font-bold text-coal xl:mt-28">{data.introTitle}</h2>
      <p className="mt-8 font-text text-[1rem] xl:text-[1.25rem] leading-[1.75rem] text-[var(--color-text-article)]">{data.intro}</p>

      <ol className="mt-28 space-y-24 sm:mt-32 sm:space-y-28">
        {data.steps.map((step, index) => (
          <li key={step.title} className="flex items-start gap-16 sm:gap-20">
            <span className="flex size-54 sm:size-60 shrink-0 items-center justify-center rounded-[4px] bg-flame text-[1.375rem] xl:text-[1.6875rem] font-bold text-[var(--color-white)] shadow">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 pt-2">
              <h3 className="font-main text-[1.4375rem] xl:text-[1.9375rem] font-bold text-coal leading-snug">{step.title}</h3>
              <p className="mt-4 font-text text-[1rem] xl:text-[1.1875rem] leading-[1.625rem] text-[var(--color-text-article)]">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-32 font-main text-[1.75rem] xl:text-[2.375rem] font-bold text-coal sm:mt-36">{data.conclusionTitle}</h2>
      <p className="mt-8 font-text text-[1rem] xl:text-[1.25rem] leading-[1.75rem] text-[var(--color-text-article)]">{data.conclusion}</p>
    </article>
  );
};
