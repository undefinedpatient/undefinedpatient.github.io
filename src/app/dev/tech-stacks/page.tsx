import Image from "next/image";
import { fira_code } from "@/app/ui/fonts";
import PageFooter from "@/app/components/PageFooter";
import CardTable from "@/app/components/CardTable";
import ProgressionCard from "@/app/components/ProgressionCard";
import DevLinkPanel from "@/app/components/DevLinkPanel";

import paperImage from "@/../public/imgs/paper_texture.webp";
import SubSectionHeader from "@/app/components/SubSectionHeader";

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
                    <SubSectionHeader text="Tech Stacks" colour="blue" size="large" />
                    <CardTable title="Frontend" subtitle="Relative index based familities and interest and current focused">
                        <ProgressionCard title="[Nextjs]" description="Desiging" progression={0.3} proportions={8}/>
                        <ProgressionCard title="[React]" description="Using!" progression={0.4} proportions={8}/>
                        <ProgressionCard title="FastAPI" description="Going to use!" progression={0.1} proportions={8}/>
                        <ProgressionCard title="Docker/Docker Compose" description="Going to use!" progression={0.3} proportions={8}/>
                        <ProgressionCard title="Flutter" description="Only used in 1 project" progression={0.7} proportions={8}/>
                    </CardTable>

                </div>
                <div>
                    <CardTable title="Computer Graphics" subtitle="Relative index based familities and interest and current focused">
                        <ProgressionCard title="ThreeJS" description="Stall" progression={0.0} proportions={8}/>
                        <ProgressionCard title="[OpenGL]" description="I passed my first ever texBuffer!" progression={0.2} proportions={8}/>
                        <ProgressionCard title="WebGPU" description="Stall" progression={0.0} proportions={8}/>
                        <ProgressionCard title="Vulkan" description="Stall" progression={0.0} proportions={8}/>
                    </CardTable>
                </div>
            </section>
            <PageFooter previousUrl="/dev" currentPage={5} nextUrl="/art" />
        </main>
    )
}

export default TechStacksPage;