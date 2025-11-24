import Link from "next/link";
import { ChapterLinkProperties } from "../lib/componentProperites";
import "@/app/ui/components/chapterLink.css"
function ChapterLink(props: ChapterLinkProperties){
    return (
        <div className="chapter-link">
            <Link href={props.url} className={props.className}>{props.text}</Link>
            <span>{props.pageNumber}</span>
        </div>
    )
}

export default ChapterLink;