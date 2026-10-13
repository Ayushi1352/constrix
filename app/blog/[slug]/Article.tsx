import Image from "next/image";
import { site as data } from "@/data";

const { blogDetail } = data;

type Post = (typeof data.blog.posts)[number];

export default function Article({ post }: { post?: Post }) {
  const title = post ? post.title.replace(/\n/g, " ") : blogDetail.introTitle;
  const image = post?.image || blogDetail.image;

  return (
    <article className="min-w-0 flex-1 xl:pt-5">
      <div className="relative aspect-[1022/454] overflow-hidden rounded-[6px] shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover"
        />
      </div>

      <h2 className="mt-24 font-rajdhani fs-28 leading-36 font-bold text-coal xl:mt-28 xl:fs-38 xl:leading-42">
        {title}
      </h2>
      <p className="mt-6 fs-16 leading-27 text-[#61717f] xl:mt-5 xl:fs-20 xl:leading-30 xl:tracking-[-0.015em] xl:whitespace-pre-line">
        {post?.text ? post.text.replace(/\n/g, " ") : blogDetail.intro}
      </p>

      <ol className="mt-28 space-y-28 xl:mt-37 xl:space-y-43">
        {blogDetail.steps.map((step, index) => (
          <li key={step.title} className="flex items-start gap-18 xl:gap-33">
            <span className="flex h-56 w-58 shrink-0 items-center justify-center rounded-[4px] bg-flame fs-22 font-semibold text-white shadow-[0_4px_10px_rgba(200,122,46,0.3)] xl:h-73 xl:w-75 xl:fs-27">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 xl:-mt-4">
              <h3 className="font-rajdhani fs-23 leading-30 font-bold text-coal xl:fs-31 xl:leading-34">
                {step.title}
              </h3>
              <p className="mt-6 fs-16 leading-27 text-[#61717f] xl:mt-5 xl:fs-19 xl:leading-31 xl:whitespace-pre-line">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-32 font-rajdhani fs-28 leading-36 font-bold text-coal xl:mt-30 xl:fs-38 xl:leading-42">
        {blogDetail.conclusionTitle}
      </h2>
      <p className="mt-6 fs-16 leading-27 text-[#61717f] xl:mt-10 xl:fs-20 xl:leading-30 xl:tracking-[-0.015em] xl:whitespace-pre-line">
        {blogDetail.conclusion}
      </p>
    </article>
  );
}
