import Image from "next/image";
import { fira_code } from "../ui/fonts";
import PageFooter from "../components/PageFooter";
import DevLinkPanel from "../components/DevLinkPanel";
import paperImage from "@/../public/imgs/paper_texture.jpg";
import mountainImage from "@/../public/imgs/mountain0.jpg";
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
                    <SubSectionHeader text="Frontend Development" colour="blue" size="medium" />
                    <p>
                        &emsp;&emsp; This is my second most interested topic, not just because of the visual aspect
                        of frontend development can bring pleasing user experiences when they use the applications. But
                        also I want to solve some problems.
                    </p>
                    <SubSectionHeader text="HurdleOver (2025)" colour="blue" size="small" />
                    <p>
                        &emsp;&emsp; This served as my first glance into frontend development, as a tutorial-following project, I got a taste of
                        web development with React, ExpressJs and MongoDB, and eventaully built &#40;but not deploy&#41; my first ever blog-like website!
                    </p>
                    <Link target="_blank" href="https://github.com/undefinedpatient/hurdleOver" className="underline">Github Repository</Link>
                    <SubSectionHeader text="IdeaCache (2025)" colour="blue" size="small" />
                    <p>
                        &emsp;&emsp; This project aimed to solved the problem that I always forgot what to do; using flutter framework I built
                        a window/android crossplatform application where you can store your own ideas quickly before they faded away!
                    </p>
                    <Link target="_blank" href="https://github.com/undefinedpatient/idea_cache" className="underline">Github Repository</Link>
                    <SubSectionHeader text="Computer Graphics" colour="red" size="medium" />
                    <p>
                        &emsp;&emsp; One day, where everything is settled, I will dive deep into it as one of my side hobbies.
                    </p>

                </div>
                <div>
                    <CardTable title="Programming Languages" subtitle="Relative index based familities and interest and current focused">
                        <ProgressionCard title="C++" description="I want this" progression={0.3} proportions={8} />
                        <ProgressionCard title="Javascript" description="Weak type!" progression={0.6} proportions={8} />
                        <ProgressionCard title="Typescript" description="Strong type!" progression={0.3} proportions={8} />
                        <ProgressionCard title="Java" description="Rarely used" progression={0.5} proportions={8} />
                        <ProgressionCard title="Dart" description="Refer to my project" progression={0.8} proportions={8} />
                        <ProgressionCard title="Scala3" description="Course focused langauge" progression={0.5} proportions={8} />
                        <ProgressionCard title="Python" description="Course focused language" progression={0.1} proportions={8} />
                        <ProgressionCard title="C" description="Course focused language" progression={0.1} proportions={8} />
                    </CardTable>
                </div>
            </section>
            <PageFooter previousUrl="/philosophy" currentPage={3} nextUrl="/dev/experiences" />
        </main>
    )
}

export default DevPage;