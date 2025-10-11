import Link from "next/link";
import { PageFooterProperties } from "../lib/componentProperites";
import "@/app/ui/components/pageFooter.css";

function PageFooter(props: PageFooterProperties) {
    return (
        <section className="page-footer col-span-full">
            {props.previousUrl == "" ?
                <span></span>
                :
                <Link href={props.previousUrl} className="link-underline-animated-to-left">&larr; Previous Page</Link>
            }
            <span>{props.currentPage}</span>
            {props.nextUrl == "" ?
                <span></span>
                :
                <Link href={props.nextUrl} className="link-underline-animated-to-right">Next Page &rarr;</Link>
            }
        </section>
    )
}

export default PageFooter;