import Image from "next/image";
import { fira_code } from "../ui/fonts";
import ChapterOverviewCard from "../components/ChapterOverviewCard";
import Link from "next/link";
import { title } from "process";

function DevPage(){
    //Shows array of page options
    return (
        <main className={`${fira_code.className} main-dev`}>
            <Image src="/imgs/dev.jpg" alt="" className="image-background" width={1920} height={1080}></Image>
            <section className="section-dev-chapter-summary">
                <h1>Dev</h1>
                <h5>UndefinedPatient</h5>
                <hr />
            </section>
            <section className="section-dev-chapter-overviews">
                <ChapterOverviewCard title="Experiences" description=""/>
                <ChapterOverviewCard title="Tech Stacks" description=""/>
                <ChapterOverviewCard title="Goals" description=""/>
            </section>
            <footer>
                <hr />
                <Link href="/table-of-content" className="link-underline-animated text-xl">Back to Table of Contents</Link>
            </footer>
        </main>
    )
}

export default DevPage;