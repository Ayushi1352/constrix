import siteData from "./site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type ConstrixSchema = typeof siteData.Constrix;
export type ConstrixSections = ConstrixSchema["sections"];
export type ConstrixTemplateComponents = ConstrixSchema["templateComponents"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type ConstrixHeaderData =
  ConstrixSections["Header"]["variants"]["ConstrixHeader1"];
export type ConstrixFooterData =
  ConstrixSections["Footer"]["variants"]["ConstrixFooter1"];
export type ConstrixBannerData =
  ConstrixSections["Banner"]["variants"]["ConstrixBanner1"];
export type ConstrixPageBannerData =
  ConstrixSections["PageBanner"]["variants"]["ConstrixPageBanner1"];
export type ConstrixAboutData =
  ConstrixSections["About"]["variants"]["ConstrixAbout1"];
export type ConstrixServicesData =
  ConstrixSections["Services"]["variants"]["ConstrixServices1"];
export type ConstrixWhyChooseUsData =
  ConstrixSections["WhyChooseUs"]["variants"]["ConstrixWhyChooseUs1"];
export type ConstrixProjectsData =
  ConstrixSections["Projects"]["variants"]["ConstrixProjects1"];
export type ConstrixProcessData =
  ConstrixSections["Process"]["variants"]["ConstrixProcess1"];
export type ConstrixTestimonialData =
  ConstrixSections["Testimonial"]["variants"]["ConstrixTestimonial1"];
export type ConstrixCtaData =
  ConstrixSections["Cta"]["variants"]["ConstrixCta1"];
export type ConstrixBlogData =
  ConstrixSections["Blog"]["variants"]["ConstrixBlog1"];
export type ConstrixContactData =
  ConstrixSections["Contact"]["variants"]["ConstrixContact1"];
export type ConstrixQuoteData =
  ConstrixSections["Quote"]["variants"]["ConstrixQuote1"];
export type ConstrixFAQData =
  ConstrixSections["FAQ"]["variants"]["ConstrixFAQ1"];
export type ConstrixTermsData =
  ConstrixSections["Terms"]["variants"]["ConstrixTerms1"];
export type ConstrixPrivacyPolicyData =
  ConstrixSections["PrivacyPolicy"]["variants"]["ConstrixPrivacyPolicy1"];
export type ConstrixSitemapData =
  ConstrixSections["Sitemap"]["variants"]["ConstrixSitemap1"];

// ── Item-level types inferred from site.json ──
export type ConstrixNavLink = ConstrixHeaderData["nav"][number];
export type ConstrixServiceItem = ConstrixServicesData["items"][number];
export type ConstrixServiceDetail = ConstrixServicesData["detail"];
export type ConstrixProjectItem = ConstrixProjectsData["items"][number];
export type ConstrixProcessStep = ConstrixProcessData["steps"][number];
export type ConstrixBlogPost = ConstrixBlogData["posts"][number];
export type ConstrixBlogDetail = ConstrixBlogData["detail"];
export type ConstrixFaqItem = ConstrixFAQData["items"][number];
export type ConstrixTermsItem = ConstrixTermsData["items"][number];
export type ConstrixPrivacyPolicyItem =
  ConstrixPrivacyPolicyData["items"][number];
export type ConstrixTestimonialItem =
  ConstrixTestimonialData["home"]["items"][number];

// ── Legacy Site Map for Standalone Constrix Site ──
const sec = siteData.Constrix.sections;

const site = {
  header: sec.Header.variants.ConstrixHeader1.header,
  nav: sec.Header.variants.ConstrixHeader1.nav,
  site: sec.Header.variants.ConstrixHeader1.site,
  navbar: sec.Header.variants.ConstrixHeader1,
  hero: sec.Banner.variants.ConstrixBanner1,
  banner: sec.Banner.variants.ConstrixBanner1,
  pageBanner: sec.PageBanner.variants.ConstrixPageBanner1,
  about: sec.About.variants.ConstrixAbout1,
  aboutUsSection: sec.About.variants.ConstrixAbout1,
  services: sec.Services.variants.ConstrixServices1,
  ourServicesSection: sec.Services.variants.ConstrixServices1,
  serviceDetail: sec.Services.variants.ConstrixServices1.detail,
  whyChoose: sec.WhyChooseUs.variants.ConstrixWhyChooseUs1,
  whyChooseUsSection: sec.WhyChooseUs.variants.ConstrixWhyChooseUs1,
  projects: sec.Projects.variants.ConstrixProjects1,
  projectsSection: sec.Projects.variants.ConstrixProjects1,
  process: sec.Process.variants.ConstrixProcess1,
  processSection: sec.Process.variants.ConstrixProcess1,
  testimonial: sec.Testimonial.variants.ConstrixTestimonial1,
  testimonialSection: sec.Testimonial.variants.ConstrixTestimonial1,
  homeTestimonials: sec.Testimonial.variants.ConstrixTestimonial1.home,
  testimonialsPage: sec.Testimonial.variants.ConstrixTestimonial1.page,
  cta: sec.Cta.variants.ConstrixCta1,
  ctaSection: sec.Cta.variants.ConstrixCta1,
  blog: sec.Blog.variants.ConstrixBlog1,
  blogSection: sec.Blog.variants.ConstrixBlog1,
  blogDetail: sec.Blog.variants.ConstrixBlog1.detail,
  footer: sec.Footer.variants.ConstrixFooter1,
  contact: sec.Contact.variants.ConstrixContact1,
  contactPage: sec.Contact.variants.ConstrixContact1,
  quote: sec.Quote.variants.ConstrixQuote1,
  quoteSection: sec.Quote.variants.ConstrixQuote1,
  faq: sec.FAQ.variants.ConstrixFAQ1,
  faqPage: sec.FAQ.variants.ConstrixFAQ1,
  terms: sec.Terms.variants.ConstrixTerms1,
  termsPage: sec.Terms.variants.ConstrixTerms1,
  privacy: sec.PrivacyPolicy.variants.ConstrixPrivacyPolicy1,
  privacyPolicyPage: sec.PrivacyPolicy.variants.ConstrixPrivacyPolicy1,
  sitemap: sec.Sitemap.variants.ConstrixSitemap1,
  sitemapPage: sec.Sitemap.variants.ConstrixSitemap1,
  Constrix: siteData.Constrix,
};

// Also export individual sections for convenience
export const header = site.header;
export const nav = site.nav;
export const siteInfo = site.site;
export const navbar = site.navbar;
export const hero = site.hero;
export const banner = site.banner;
export const pageBanner = site.pageBanner;
export const about = site.about;
export const services = site.services;
export const serviceDetail = site.serviceDetail;
export const whyChoose = site.whyChoose;
export const projects = site.projects;
export const process = site.process;
export const testimonial = site.testimonial;
export const homeTestimonials = site.homeTestimonials;
export const testimonialsPage = site.testimonialsPage;
export const cta = site.cta;
export const blog = site.blog;
export const blogDetail = site.blogDetail;
export const footer = site.footer;
export const contact = site.contact;
export const quote = site.quote;
export const faq = site.faq;
export const terms = site.terms;
export const privacy = site.privacy;
export const sitemap = site.sitemap;

export type SiteData = typeof site;
export { site };
export default siteData;
