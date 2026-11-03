import Link from "next/link";
import type { BlogPost, HeaderData, LinkItem, ProjectsData, ServiceItem, SitemapData, SitemapGroup, SupportLink } from "@/types/templates.types";
import { PolicyLayout, PolicySection } from "@/components/sections/PolicyPage";

type Props = {
  data?: SitemapData;
  header?: HeaderData;
  services?: ServiceItem[];
  projects?: ProjectsData;
  posts?: BlogPost[];
  supportLinks?: SupportLink[];
};

const LinkList = ({ links, bullet, columns = true }: { links: LinkItem[]; bullet: string; columns?: boolean }) => (
  <ul className={`mt-16 ${columns ? "grid gap-12 sm:grid-cols-2" : "space-y-12"}`}>
    {links.map((link) => (
      <li key={link.id}>
        <Link href={link.url} className="text-[0.9375rem] font-medium text-coal transition-colors hover:text-copper leading-[1.75rem] xl:text-[1.0625rem]">
          {bullet} {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

export const Sitemap = ({ data: sitemap, header, services = [], projects, posts = [], supportLinks = [] }: Props) => {
  if (!sitemap) return null;

  const mainPages: LinkItem[] = [
    ...(header?.nav ?? []),
    ...(header ? [{ id: "quote", label: header.buttonText, url: header.buttonUrl }] : []),
    sitemap.testimonialsLink,
  ];
  const groups: (SitemapGroup & { id: string; links: LinkItem[]; columns?: boolean })[] = [
    { id: "main", ...sitemap.groups.main, links: mainPages },
    { id: "services", ...sitemap.groups.services, links: services.map((item) => ({ id: item.id, label: item.title, url: item.url })) },
    {
      id: "projects",
      ...sitemap.groups.projects,
      links: (projects?.categories ?? []).map((category) => ({ id: category, label: `${category} ${sitemap.projectLinkSuffix}`, url: sitemap.projectsUrl })),
    },
    { id: "blog", ...sitemap.groups.blog, links: posts.map((post) => ({ id: post.id, label: post.title.replace(/\n/g, " "), url: post.url })), columns: false },
    { id: "support", ...sitemap.groups.support, links: supportLinks },
  ];

  return (
    <PolicyLayout intro={sitemap.intro}>
      {groups.map((group, index) => (
        <PolicySection key={group.id} number={index + 1} title={group.title}>
          <p className="mt-10 text-[0.9375rem] text-slate leading-[1.625rem] xl:text-[1.0625rem] xl:leading-[1.75rem]">{group.text}</p>
          <LinkList links={group.links} bullet={sitemap.bullet} columns={group.columns ?? true} />
        </PolicySection>
      ))}
    </PolicyLayout>
  );
};
