import Image from "next/image";
import { site as data } from "@/data";

const { blogDetail } = data;

type Post = (typeof data.blog.posts)[number];

export default function Article({ post }: { post?: Post }) {
  const image = blogDetail.image || post?.image || "/images/blog-detail.webp";

  return (
    <article className="min-w-0 flex-1">
      <div className="relative aspect-[1022/470] overflow-hidden rounded-[6px] shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
        <Image
          src={image}
          alt={blogDetail.introTitle}
          fill
          priority
          sizes="(min-width: 1024px) 65vw, 100vw"
          className="object-cover"
        />
      </div>

      <h2 className="mt-24 font-poppins text-[26px] sm:text-[30px] font-bold text-coal xl:mt-28">
        {blogDetail.introTitle}
      </h2>
      <p className="mt-8 font-figtree text-[15px] sm:text-[16px] leading-[28px] text-[#61717f]">
        {blogDetail.intro}
      </p>

      <ol className="mt-28 space-y-24 sm:mt-32 sm:space-y-28">
        {blogDetail.steps.map((step, index) => (
          <li key={step.title} className="flex items-start gap-16 sm:gap-20">
            <span className="flex size-54 sm:size-60 shrink-0 items-center justify-center rounded-[4px] bg-flame text-[20px] font-bold text-white shadow-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 pt-2">
              <h3 className="font-poppins text-[19px] sm:text-[21px] font-bold text-coal leading-snug">
                {step.title}
              </h3>
              <p className="mt-4 font-figtree text-[15px] sm:text-[15.5px] leading-[26px] text-[#61717f]">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-32 font-poppins text-[26px] sm:text-[30px] font-bold text-coal sm:mt-36">
        {blogDetail.conclusionTitle}
      </h2>
      <p className="mt-8 font-figtree text-[15px] sm:text-[16px] leading-[28px] text-[#61717f]">
        {blogDetail.conclusion}
      </p>
    </article>
  );
}
