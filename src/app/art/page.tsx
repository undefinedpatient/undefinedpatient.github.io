import Image from "next/image";
import { playfair_display } from "@/app/ui/fonts";
import PageFooter from "@/app/components/PageFooter";
import CardTable from "../components/CardTable";
import ProgressionCard from "../components/ProgressionCard";
import LinkPanel from "../components/LinkPanel";

function ArtPage() {
    //Shows array of page options
    return (
        <main className={`${playfair_display.className} main-pages`}>
            <Image src="/imgs/paper_texture.jpg" alt="" className="image-background" width={1920} height={1080}></Image>
            <LinkPanel>
                
            </LinkPanel>
            <section>
                <h3 className="shadowed">Art</h3>
            </section>
            <section className="section-pages">
                <div>
                    <Image src="/imgs/forest.jpg" alt="forest" width={612} height={408} className="image-header shadowed" />
                    <h5>Overview</h5>
                </div>
                <div>
                    <CardTable title="Blender" subtitle="# Relative index based on familities">
                        <ProgressionCard title="Modelling" description="Blender" progression={0.7} proportions={8}/>
                        <ProgressionCard title="Geonodes" description="Blender" progression={0.2} proportions={8}/>
                        <ProgressionCard title="Shadernodes" description="Blender" progression={0.6} proportions={8}/>
                        <ProgressionCard title="Rigging" description="Blender" progression={1} proportions={8}/>
                        <ProgressionCard title="Composition" description="Blender" progression={0.2} proportions={8}/>
                        <ProgressionCard title="Lighting" description="Blender" progression={0.7} proportions={8}/>
                        <ProgressionCard title="Set Building" description="Blender" progression={0.8} proportions={8}/>
                    </CardTable>
                </div>
            </section>
            <PageFooter previousUrl="/dev/tech-stacks" currentPage={6} nextUrl="/art/gallery" />
        </main>
    )
}

export default ArtPage;