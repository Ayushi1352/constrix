import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

// newest posts first, without the one being read
export const RecentPosts = ({ title, posts, currentId }: { title: string; posts: BlogPost[]; currentId: string }) => {
  const recent = posts.filter((post) => post.id !== currentId).slice(-4).reverse();

  return (
    <div className="w-full rounded-[4px] border border-[var(--color-border-light)] bg-mist p-20 xl:p-24">
      <h3 className="font-main text-[1.5625rem] xl:text-[1.875rem] font-bold text-coal">{title}</h3>
      <ul className="mt-18 space-y-18">
        {recent.map((post) => (
          <li key={post.id}>
            <Link href={post.url} className="group flex items-start gap-14 sm:gap-16">
              <span className="relative block aspect-[4/3] w-92 sm:w-100 shrink-0 overflow-hidden rounded-[3px]">
                <Image src={post.image} alt={post.title.replace(/\n/g, " ")} fill sizes="100px" className="object-cover" />
              </span>
              <span className="min-w-0 pt-1">
                <span className="block text-[0.9375rem] xl:text-[1rem] font-bold text-[var(--color-heading-card)] leading-[1.25rem] transition-colors group-hover:text-flame">
                  {post.title.replace(/\n/g, " ")}
                </span>
                <span className="mt-6 flex items-center gap-6 text-[0.75rem] xl:text-[0.8125rem] text-[var(--color-text-recent)]">
                  <Icon name="LuCalendar" className="size-14 text-flame" strokeWidth={2.2} />
                  {post.day} {post.monthYear}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
