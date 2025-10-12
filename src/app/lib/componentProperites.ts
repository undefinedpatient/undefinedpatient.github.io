import { ReactNode } from "react";

export interface ChapterLinkProperties {
    text: NonNullable<string>;
    description: NonNullable<string>;
    pageNumber: NonNullable<number>;
    url: NonNullable<string>;
    className?: string;
}
export interface PageFooterProperties {
    nextUrl: NonNullable<string>;
    previousUrl: NonNullable<string>;
    currentPage: NonNullable<number>;
}
export interface CardTableProperties {
    title: NonNullable<string>;
    subtitle: NonNullable<string>;
    children: ReactNode;
}
export interface ProgressBarProperties {
    progression: NonNullable<number>; // [0,1]
    proportions: NonNullable<number>;
}
export interface ProgressionCardProperties {
    title: NonNullable<string>;
    description: NonNullable<string>;
    progression: NonNullable<number>; // [0,1]
    proportions: NonNullable<number>;
    // collapsed: NonNullable<boolean>;
    // vertical: NonNullable<boolean>;
}
export interface GalleryCardProperties {
    title: NonNullable<string>;
    subtitle: NonNullable<string>;
    description: NonNullable<string>;
    src: NonNullable<string>;
}

export interface GalleryProperties {
    children: ReactNode;
}

export interface LinkPanelProperties {
    children: ReactNode;
}
