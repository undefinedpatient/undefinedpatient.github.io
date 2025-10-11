import { ReactNode } from "react";

interface ChapterLinkProperties {
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
interface CardTableProperties {
    title: NonNullable<string>;
    subtitle: NonNullable<string>;
    children: ReactNode;
}
interface ProgressBarProperties {
    progression: NonNullable<number>; // [0,1]
    proportions: NonNullable<number>;
}
interface ProgressionCardProperties {
    title: NonNullable<string>;
    description: NonNullable<string>;
    progression: NonNullable<number>; // [0,1]
    proportions: NonNullable<number>;
    // collapsed: NonNullable<boolean>;
    // vertical: NonNullable<boolean>;
}
interface GalleryCardProperties {
    title: NonNullable<string>;
    subtitle: NonNullable<string>;
    description: NonNullable<string>;
    src: NonNullable<string>;
}

interface GalleryProperties {
    children: ReactNode;
}
export type { ChapterLinkProperties, PageFooterProperties, CardTableProperties, ProgressBarProperties, ProgressionCardProperties, GalleryCardProperties, GalleryProperties }
