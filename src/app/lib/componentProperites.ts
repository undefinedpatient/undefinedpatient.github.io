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
    children: ReactNode;
}
interface ProgressBarProperties {
    progression: NonNullable<number>; // [0,1]
}
interface ProgressionCardProperties {
    title: NonNullable<string>;
    description: NonNullable<string>;
    progression: NonNullable<number>; // [0,1]
    // collapsed: NonNullable<boolean>;
    // vertical: NonNullable<boolean>;
}
export type { ChapterLinkProperties, PageFooterProperties, CardTableProperties, ProgressBarProperties, ProgressionCardProperties }
