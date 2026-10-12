import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import { site as data } from "@/data";

const { blogDetail } = data;

export default function RecentPosts() {
  return (
    <div className="border border-[#f1f1f1] bg-mist px-18 pt-18 pb-22 xl:w-425 xl:px-20 xl:pt-17 xl:pb-23">
      <h3 className="font-rajdhani fs-25 leading-34 font-bold text-coal xl:fs-30 xl:leading-38">
        {blogDetail.recentTitle}
      </h3>
      <ul className="mt-12 space-y-22 xl:mt-15 xl:space-y-30">
        {blogDetail.recentPosts.map((post) => (
          <li key={post.title}>
            <Link href={post.href} className="group flex items-start gap-16 xl:gap-17">
              <span className="relative block aspect-[136/107] w-116 shrink-0 overflow-hidden rounded-[3px] xl:w-136">
                <Image src={post.image} alt={post.title} fill sizes="136px" className="object-cover" />
              </span>
              <span className="min-w-0 pt-2">
                <span className="block fs-15 leading-22 font-semibold text-[#111418] transition-colors group-hover:text-copper xl:fs-16 xl:leading-23 xl:whitespace-pre-line">
                  {post.title}
                </span>
                <span className="mt-8 flex items-center gap-10 fs-12 leading-18 text-[#6d727a] xl:mt-10 xl:fs-13">
                  <Icon name="calendar" className="size-16 text-copper xl:size-18" strokeWidth={2.2} />
                  {post.date}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
