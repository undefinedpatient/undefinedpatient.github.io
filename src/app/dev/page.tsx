import Image from "next/image";
import { fira_code } from "../ui/fonts";
import PageFooter from "../components/PageFooter";
import DevLinkPanel from "../components/DevLinkPanel";
import paperImage from "@/../public/imgs/paper_texture.webp";
import mountainImage from "@/../public/imgs/mountain0.webp";
import SubSectionHeader from "../components/SubSectionHeader";
import CardTable from "../components/CardTable";
import ProgressionCard from "../components/ProgressionCard";
import Link from "next/link";

function DevPage() {
    //Shows array of page options
    return (
        <main className={`${fira_code.className} main-pages`}>
            <Image src={paperImage} placeholder="blur" alt="" className="image-background" width={1920} height={1080}></Image>
            <DevLinkPanel />
            <section>
                <h3 className="shadowed">Dev</h3>
            </section>
            <section className="section-pages">
                <div>
                    <Image src={mountainImage} placeholder="blur" alt="mountain0" width={612} height={408} className="image-header shadowed" />
                    <SubSectionHeader text="Overview" colour="black" size="large" />
                    <p>
                        &emsp;&emsp;This is Ethan, as previously mentioned, I am currently an undergraduate studying in HKUST,
                        My first ever programming experiences was in my high school having my ICT teacher teaching C++, and inspired and
                        captivated by the vast possibility offered by Computer Sciences, especially in the area of Computer Graphics and Frontend Developement
                        I soon enrolled into Compuer Sciences Major in my university.
                    </p>
                    <SubSectionHeader text="Projects" colour="black" size="large" />
                    <SubSectionHeader text="Cursor Snap (2026) [ongoing]" colour="blue" size="small" />
                    <p>
                        &emsp;&emsp; There are so many features that need to be implemented within Blender, I have many ideas, this is the beginning.
                    </p>
                    <Link target="_blank" href="https://github.com/undefinedpatient/snap-tool" className="underline">Github Repository</Link>
                    <SubSectionHeader text="smath (2026) [active]" colour="blue" size="small" />
                    <p>
                        &emsp;&emsp; Have to build my own math library, to force me to learn! 
                    </p>
                    <Link target="_blank" href="https://github.com/undefinedpatient/smath" className="underline">Github Repository</Link>
                    <SubSectionHeader text="IdeaCache (2025) [archived]" colour="blue" size="small" />
                    <p>
                        &emsp;&emsp; This project was designed to solve a personal challenge: I often forgot what I needed to do. Using the Flutter framework, 
                        I developed a cross-platform application for Windows and Android that allows users to quickly capture and store their ideas before they fade away.
                    </p>
                    <Link target="_blank" href="https://github.com/undefinedpatient/hurdleOver" className="underline">Github Repository</Link>
                    <SubSectionHeader text="HurdleOver (2025) [archived]" colour="blue" size="small" />
                    <p>
                        &emsp;&emsp; This served as my first glance into frontend development, as a tutorial-following project, I got a taste of
                        web development with React, ExpressJs and MongoDB, and eventaully built &#40;but not deploy&#41; my first ever blog-like website!
                    </p>
                    <Link target="_blank" href="https://github.com/undefinedpatient/idea_cache" className="underline">Github Repository</Link>

                </div>
                <div>
                    <CardTable title="Programming Languages (Active)" subtitle="I begin to know what I need to stick with.">
                        <ProgressionCard title="C++" description="smath && retina" progression={0.6} proportions={8} />
                        <ProgressionCard title="Python" description="blender addon" progression={0.4} proportions={8} />
                    </CardTable>
                    <CardTable title="Programming Languages (Inactive)" subtitle="Simple, the languages I am currently not using/leaving because I no longer get a chance to use!">
                        <ProgressionCard title="Javascript" description="Weird" progression={0.2} proportions={8} />
                        <ProgressionCard title="Scala3" description="LP" progression={0.6} proportions={8} />
                        <ProgressionCard title="C" description="pthread" progression={0.2} proportions={8} />
                        <ProgressionCard title="Typescript" description="Strong type?" progression={0.1} proportions={8} />
                        <ProgressionCard title="Java" description="Rarely used" progression={0.5} proportions={8} />
                        <ProgressionCard title="Dart" description="Refer to my project" progression={0.5} proportions={8} />
                        <ProgressionCard title="C?r?o?" description="10+ of year experience perferred" progression={0.0} proportions={8} />
                    </CardTable>
                </div>
            </section>
            <PageFooter previousUrl="/philosophy" currentPage={3} nextUrl="/dev/tech-stacks" />
        </main>
    )
}

export default DevPage;