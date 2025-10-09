interface ChapterLinkProperties{
    text: NonNullable<string>;
    description: NonNullable<string>;
    pageNumber: NonNullable<number>;
    url: NonNullable<string>;
    className?: string;
}
interface PageFooterProperties {
    nextUrl: NonNullable<string>;
    previousUrl: NonNullable<string>;
    currentPage: NonNullable<number>;
}
export type {ChapterLinkProperties, PageFooterProperties}