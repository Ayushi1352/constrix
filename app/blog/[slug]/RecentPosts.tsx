import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import { site as data } from "@/data";

const { blog, blogDetail } = data;

// newest posts first, without the one being read
export default function RecentPosts({ currentSlug }: { currentSlug: string }) {
  const posts = blog.posts.filter((post) => post.slug !== currentSlug).slice(-4).reverse();

  return (
    <div className="w-full rounded-[4px] border border-[#f0f0f0] bg-[#f9fbfc] p-20 xl:p-24">
      <h3 className="font-poppins text-[20px] font-bold text-coal sm:text-[22px]">
        {blogDetail.recentTitle}
      </h3>
      <ul className="mt-18 space-y-18">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group flex items-start gap-14 sm:gap-16">
              <span className="relative block aspect-[4/3] w-92 sm:w-100 shrink-0 overflow-hidden rounded-[3px]">
                <Image src={post.image} alt={post.title} fill sizes="100px" className="object-cover" />
              </span>
              <span className="min-w-0 pt-1">
                <span className="block text-[14.5px] font-bold text-[#111418] leading-[20px] transition-colors group-hover:text-flame">
                  {post.title.replace(/\n/g, " ")}
                </span>
                <span className="mt-6 flex items-center gap-6 text-[12.5px] text-[#6d727a]">
                  <Icon name="calendar" className="size-14 text-flame" strokeWidth={2.2} />
                  {post.day} {post.monthYear}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
