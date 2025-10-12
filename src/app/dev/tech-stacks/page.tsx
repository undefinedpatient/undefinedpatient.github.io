import Image from "next/image";
import { fira_code } from "@/app/ui/fonts";
import PageFooter from "@/app/components/PageFooter";
import CardTable from "@/app/components/CardTable";
import ProgressionCard from "@/app/components/ProgressionCard";
import DevLinkPanel from "@/app/components/DevLinkPanel";

import paperImage from "@/../public/imgs/paper_texture.jpg";

function TechStacksPage() {
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
                    <h5 className="letter-spacing-animated">Tech Stacks</h5>
                    <hr className="hr-animated-lr" />
                    <CardTable title="Languages" subtitle="Relative index based familities and interest and current focused">
                        <ProgressionCard title="C++" description="I want this" progression={0.3} proportions={8}/>
                        <ProgressionCard title="Javascript" description="Weak type!" progression={0.6} proportions={8}/>
                        <ProgressionCard title="Typescript" description="Strong type!" progression={0.3} proportions={8}/>
                        <ProgressionCard title="Java" description="Rarely used" progression={0.5} proportions={8}/>
                        <ProgressionCard title="Dart" description="Refer to my projects" progression={0.8} proportions={8}/>
                        <ProgressionCard title="Scala3" description="Course focused langauge" progression={0.5} proportions={8}/>
                        <ProgressionCard title="Python" description="Course focused language" progression={0.1} proportions={8}/>
                        <ProgressionCard title="C" description="Course focused language" progression={0.1} proportions={8}/>
                    </CardTable>

                </div>
                <div>
                    <CardTable title="Frontend" subtitle="Relative index based familities and interest and current focused">
                        <ProgressionCard title="Nextjs" description="Using!" progression={0.3} proportions={8}/>
                        <ProgressionCard title="React" description="Using!" progression={0.4} proportions={8}/>
                        <ProgressionCard title="Nestjs" description="Going to use!" progression={0.1} proportions={8}/>
                        <ProgressionCard title="Antd" description="Going to use!" progression={0.1} proportions={8}/>
                        <ProgressionCard title="Docker/Docker Compose" description="Going to use!" progression={0.3} proportions={8}/>
                        <ProgressionCard title="Flutter" description="Only used in 1 project" progression={0.7} proportions={8}/>
                    </CardTable>
                    <CardTable title="Computer Graphics" subtitle="Relative index based familities and interest and current focused">
                        <ProgressionCard title="ThreeJS" description="I crave for it" progression={0.0} proportions={8}/>
                        <ProgressionCard title="WebGPU" description="I crave for it" progression={0.0} proportions={8}/>
                        <ProgressionCard title="Vulkan" description="I crave for it" progression={0.0} proportions={8}/>
                    </CardTable>
                </div>
            </section>
            <PageFooter previousUrl="/dev/experiences" currentPage={5} nextUrl="/art" />
        </main>
    )
}

export default TechStacksPage;