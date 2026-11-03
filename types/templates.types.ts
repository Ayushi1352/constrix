export interface ThemeFonts {
  primary: string;
  heading: string;
  alt: string;
  display: string;
  ui: string;
  text: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SeoData {
  title: string;
  description: string;
}

export interface SiteMetadataData {
  title: string;
  siteName: string;
  description: string;
  icon: string;
  lang: string;
}

/** Name, logos, phone, email and address: shared by the header, footer and contact page. */
export interface CompanyData {
  name: string;
  logo: string;
  logoWhite: string;
  logoAlt: string;
  logoUrl: string;
  logoWidth: number;
  logoHeight: number;
  phone: string;
  email: string;
  address: string[];
  /** "{query}" is filled with the address */
  mapEmbedUrl: string;
  mapOpenUrl: string;
}

/** Screen-reader labels and small shared texts; "{n}" / "{title}" are filled in by the components. */
export interface GlobalUIData {
  breadcrumbLabel: string;
  breadcrumbSeparator: string;
  breadcrumbImage: string;
  openMenu: string;
  closeMenu: string;
  goToSlide: string;
  previousSlide: string;
  nextSlide: string;
  goToBlogPage: string;
  previousBlogPage: string;
  nextBlogPage: string;
  goToServicesPage: string;
  previousServicesPage: string;
  nextServicesPage: string;
  goToPage: string;
  previousPage: string;
  nextPage: string;
  previousProjects: string;
  nextProjects: string;
  viewProjectImage: string;
  closeImage: string;
  previousImage: string;
  nextImage: string;
  previousTestimonial: string;
  /** "{category} · {current} / {total}" under the open project image */
  viewerCaption: string;
  nextTestimonial: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface BreadcrumbData {
  title: string;
  seo?: SeoData;
  paths: LinkItem[];
}

export interface NotFoundData {
  seo: SeoData;
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface ButtonData {
  buttonText: string;
  buttonUrl: string;
}

export interface SocialLink extends LinkItem {
  icon: string;
}

export interface SupportLink extends LinkItem {
  legal: boolean;
}

export interface FooterData {
  text: string;
  quickLinksTitle: string;
  quickLinks: LinkItem[];
  servicesTitle: string;
  supportLinks: SupportLink[];
  contactTitle: string;
  /** "{year}" is replaced with the current year */
  copyrightText: string;
  socialLinks: SocialLink[];
}

export interface CommonData {
  theme: ThemeData;
  metadata: SiteMetadataData;
  company: CompanyData;
  globalUI: GlobalUIData;
  aboutBreadcrumb: BreadcrumbData;
  servicesBreadcrumb: BreadcrumbData;
  serviceDetailBreadcrumb: BreadcrumbData;
  projectsBreadcrumb: BreadcrumbData;
  blogsBreadcrumb: BreadcrumbData;
  blogDetailBreadcrumb: BreadcrumbData;
  contactBreadcrumb: BreadcrumbData;
  quoteBreadcrumb: BreadcrumbData;
  testimonialsBreadcrumb: BreadcrumbData;
  faqBreadcrumb: BreadcrumbData;
  termsBreadcrumb: BreadcrumbData;
  privacyBreadcrumb: BreadcrumbData;
  sitemapBreadcrumb: BreadcrumbData;
  notFound: NotFoundData;
  Footer: FooterData;
}

// ── Sections ──

export interface HeaderData extends ButtonData {
  callLabel: string;
  emailLabel: string;
  nav: LinkItem[];
}

export interface HeroSlide {
  id: string;
  label: string;
  titleTop: string;
  titleBottom: string;
  image: string;
}

export interface HeroData {
  slides: HeroSlide[];
}

export interface AboutUsData extends ButtonData {
  label: string;
  titleTop: string;
  titleBottom: string;
  highlight: string;
  text: string;
  points: string[];
  moreText: string;
  imageLeft: string;
  imageLeftAlt: string;
  imageRight: string;
  imageRightAlt: string;
  badgeValue: string;
  badgeText: string;
}

export interface ServiceItem {
  id: string;
  url: string;
  icon: string;
  title: string;
  text: string;
  image: string;
  showInGrid: boolean;
  showInMenu: boolean;
  showInNav: boolean;
  showInFooter: boolean;
  detail: {
    titleTop: string;
    titleBottom: string;
    highlight: string;
    text: string;
    image: string;
  };
}

export interface ServicesData extends ButtonData {
  label: string;
  titleTop: string;
  titleBottom: string;
  highlight: string;
  text: string;
  homeCount: number;
  pageSize: number;
  items: ServiceItem[];
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  text: string;
}

export interface HelpBoxData extends ButtonData {
  title: string;
  text: string;
}

export interface ServiceDetailData {
  overviewLabel: string;
  featuresLabel: string;
  featuresTitleTop: string;
  featuresTitleBottom: string;
  features: FeatureItem[];
  sidebarTitle: string;
  help: HelpBoxData;
}

export interface ModernBandData extends ButtonData {
  label: string;
  titleTop: string;
  highlight: string;
  text: string;
  image: string;
  imageAlt: string;
}

export interface WhyChooseUsData {
  label: string;
  titleTop: string;
  highlight: string;
  titleBottom: string;
  text: string;
  image: string;
  imageAlt: string;
  points: { title: string; text: string }[];
}

export interface ProjectItem {
  title: string;
  category: string;
  image: string;
}

export interface ProjectsData extends ButtonData {
  label: string;
  title: string;
  highlight: string;
  watermark: string;
  allLabel: string;
  categories: string[];
  items: ProjectItem[];
  pageSize: number;
}

export interface ProcessStep {
  id: string;
  icon: string;
  title: string;
  text: string;
  image: string;
}

export interface ProcessData {
  label: string;
  title: string;
  highlight: string;
  text: string;
  steps: ProcessStep[];
}

export interface TestimonialsData {
  label: string;
  title: string;
  highlight: string;
  backgroundImage: string;
  /** wraps the quote, e.g. "“{quote}”" */
  quoteFormat: string;
  items: { name: string; role: string; image: string; quote: string }[];
}

export interface ClientReviewsData {
  label: string;
  title: string;
  highlight: string;
  text: string;
  items: { name: string; role: string; rating: number; quote: string }[];
}

export interface CtaData extends ButtonData {
  label: string;
  titleTop: string;
  highlight: string;
  text: string;
  image: string;
}

export interface BlogPost {
  id: string;
  url: string;
  day: string;
  monthYear: string;
  category: string;
  title: string;
  text: string;
  image: string;
}

export interface BlogsData extends ButtonData {
  label: string;
  title: string;
  highlight: string;
  text: string;
  readMore: string;
  homeCount: number;
  pageSize: number;
  posts: BlogPost[];
}

export interface BlogDetailData {
  image: string;
  introTitle: string;
  intro: string;
  steps: { title: string; text: string }[];
  conclusionTitle: string;
  conclusion: string;
  recentTitle: string;
  help: ButtonData & {
    titleTop: string;
    titleMiddle: string;
    highlight: string;
    text: string;
    image: string;
  };
}

/** A card either carries its own `lines` or points at a company field ("phone", "email", "address") with `source`. */
export interface ContactLinesSource {
  source?: string;
  lines?: string[];
}

export interface ContactCard extends ContactLinesSource {
  id: string;
  icon: string;
  title: string;
}

export interface ContactFormData {
  label: string;
  title: string;
  highlight: string;
  text: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  subjects: string[];
  messageLabel: string;
  messagePlaceholder: string;
  button: string;
  requiredMark: string;
  success: string;
}

export interface LocationData {
  label: string;
  title: string;
  highlight: string;
  text: string;
  offices: (ContactLinesSource & { title: string })[];
  mapTitle: string;
}

export interface ContactData {
  cards: ContactCard[];
  form: ContactFormData;
  location: LocationData;
}

export interface QuoteFormData {
  label: string;
  title: string;
  highlight: string;
  text: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  typeLabel: string;
  typePlaceholder: string;
  types: string[];
  locationLabel: string;
  locationPlaceholder: string;
  detailsLabel: string;
  detailsPlaceholder: string;
  button: string;
  requiredMark: string;
  success: string;
}

export interface QuoteData {
  label: string;
  titleTop: string;
  highlight: string;
  titleBottom: string;
  text: string;
  features: FeatureItem[];
  form: QuoteFormData;
  benefits: { id: string; icon: string; title: string; lines: string[] }[];
}

export interface FaqData {
  intro: string;
  items: { question: string; answer: string }[];
}

export interface PolicyData {
  intro: string;
  items: { title: string; content: string }[];
}

export interface SitemapGroup {
  title: string;
  text: string;
}

export interface SitemapData {
  intro: string;
  bullet: string;
  testimonialsLink: LinkItem;
  projectLinkSuffix: string;
  projectsUrl: string;
  groups: {
    main: SitemapGroup;
    services: SitemapGroup;
    projects: SitemapGroup;
    blog: SitemapGroup;
    support: SitemapGroup;
  };
}

type Section<Name extends string, T> = { variants: { [K in `Construction${Name}1`]?: T } };

export interface ConstructionSections {
  Header?: Section<"Header", HeaderData>;
  Hero?: Section<"Hero", HeroData>;
  AboutUs?: Section<"AboutUs", AboutUsData>;
  Services?: Section<"Services", ServicesData>;
  ServiceDetail?: Section<"ServiceDetail", ServiceDetailData>;
  ModernBand?: Section<"ModernBand", ModernBandData>;
  WhyChooseUs?: Section<"WhyChooseUs", WhyChooseUsData>;
  Projects?: Section<"Projects", ProjectsData>;
  Process?: Section<"Process", ProcessData>;
  Testimonials?: Section<"Testimonials", TestimonialsData>;
  ClientReviews?: Section<"ClientReviews", ClientReviewsData>;
  Cta?: Section<"Cta", CtaData>;
  Blogs?: Section<"Blogs", BlogsData>;
  BlogDetail?: Section<"BlogDetail", BlogDetailData>;
  Contact?: Section<"Contact", ContactData>;
  Quote?: Section<"Quote", QuoteData>;
  Faq?: Section<"Faq", FaqData>;
  Terms?: Section<"Terms", PolicyData>;
  PrivacyPolicy?: Section<"PrivacyPolicy", PolicyData>;
  Sitemap?: Section<"Sitemap", SitemapData>;
}

export interface ConstructionTemplateData {
  common: CommonData;
  categories: {
    Construction: {
      sections: ConstructionSections;
    };
  };
}
