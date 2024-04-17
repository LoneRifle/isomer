import type {
  AccordionProps,
  ArticlePageHeaderProps,
  ButtonProps,
  CalloutProps,
  CardsProps,
  CollectionCardProps,
  ContentPageHeaderProps,
  ContentProps,
  FooterProps,
  HeaderProps,
  HeadingProps,
  HeroProps,
  ImageProps,
  InfoCardsProps,
  InfoColsProps,
  InfobarProps,
  InfopicProps,
  KeyStatisticsProps,
  MastheadProps,
  NavbarProps,
  NotificationProps,
  OrderedListProps,
  ParagraphProps,
  SearchProps,
  SidePaneProps,
  TableProps,
  UnorderedListProps,
} from "~/common"
import { SortDirection, SortKey } from "~/common/CollectionSort"
import { SiteConfigFooterProps } from "~/common/Footer"

type IsomerComponentProps =
  | AccordionProps
  | ButtonProps
  | CalloutProps
  | CollectionCardProps
  | CardsProps
  | ContentProps
  | FooterProps
  | HeadingProps
  | HeaderProps
  | HeroProps
  | ImageProps
  | InfobarProps
  | InfoCardsProps
  | InfoColsProps
  | InfopicProps
  | KeyStatisticsProps
  | MastheadProps
  | NavbarProps
  | OrderedListProps
  | ParagraphProps
  | SearchProps
  | SidePaneProps
  | TableProps
  | UnorderedListProps
  | NotificationProps

export type IsomerComponent = IsomerComponentProps & {
  sectionIdx?: number
  indexable?: string[]
}

export interface IsomerSitemap {
  title: string
  summary: string
  lastModified: string
  permalink: string
  children?: IsomerSitemap[]
}

interface IsomerSiteProps {
  siteName: string
  url?: string
  agencyName?: string
  siteMap: IsomerSitemap
  theme: "isomer-classic" | "isomer-next"
  logoUrl: string
  isGovernment?: boolean
  environment?: string
  favicon?: string
  lastUpdated: string
  search: NavbarProps["search"]
  navBarItems: NavbarProps["items"]
  footerItems: SiteConfigFooterProps
  notification?: string
}

interface BasePageProps {
  permalink: string
  title: string
  language?: "en"
  description?: string
  noIndex?: boolean
}

export interface ArticlePageProps extends BasePageProps {
  category: ArticlePageHeaderProps["category"]
  date: ArticlePageHeaderProps["date"]
  articlePageHeader: Pick<ArticlePageHeaderProps, "summary">
}
export interface CollectionPageProps extends BasePageProps {
  defaultSortBy: SortKey
  defaultSortDirection: SortDirection
  items: CollectionCardProps[]
  subtitle: string
}
export interface ContentPageProps extends BasePageProps {
  contentPageHeader: Pick<
    ContentPageHeaderProps,
    "summary" | "buttonLabel" | "buttonUrl"
  >
}
export interface HomePageProps extends BasePageProps {}
export interface NotFoundPageProps extends BasePageProps {}
export interface SearchPageProps extends BasePageProps {}

export interface BasePageSchema {
  version: string
  site: IsomerSiteProps
  content: IsomerComponent[]
  LinkComponent?: any // Next.js link
  ScriptComponent?: any // Next.js script
}

export interface ArticlePageSchema extends BasePageSchema {
  layout: "article"
  page: ArticlePageProps
}

export interface CollectionPageSchema extends BasePageSchema {
  layout: "collection"
  page: CollectionPageProps
}

export interface ContentPageSchema extends BasePageSchema {
  layout: "content"
  page: ContentPageProps
}

export interface HomePageSchema extends BasePageSchema {
  layout: "homepage"
  page: HomePageProps
}

export interface NotFoundPageSchema extends BasePageSchema {
  layout: "notfound"
  page: NotFoundPageProps
}

export interface SearchPageSchema extends BasePageSchema {
  layout: "search"
  page: SearchPageProps
}

export type IsomerPageSchema =
  | ArticlePageSchema
  | CollectionPageSchema
  | ContentPageSchema
  | HomePageSchema
  | NotFoundPageSchema
  | SearchPageSchema
