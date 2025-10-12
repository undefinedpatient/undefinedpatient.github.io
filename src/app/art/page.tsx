import Image from "next/image";
import { playfair_display } from "@/app/ui/fonts";
import PageFooter from "@/app/components/PageFooter";
import CardTable from "../components/CardTable";
import ProgressionCard from "../components/ProgressionCard";
import ArtLinkPanel from "../components/ArtLinkPanel";

import paperImage from "@/../public/imgs/paper_texture.jpg";
import forestImage from "@/../public/imgs/forest.jpg";
import Link from "next/link";
import SubSectionHeader from "../components/SubSectionHeader";
function ArtPage() {
    //Shows array of page options
    return (
        <main className={`${playfair_display.className} main-pages`}>
            <Image src={paperImage} placeholder="blur" alt="" className="image-background" width={1920} height={1080}></Image>
            <ArtLinkPanel />
            <section>
                <h3 className="shadowed">Art</h3>
            </section>
            <section className="section-pages">
                <div>
                    <Image src={forestImage} placeholder="blur" alt="forest" width={612} height={408} className="image-header shadowed" />
                    <SubSectionHeader text="Overview" colour="black" size="large" />
                    <p>
                        &emsp;&emsp;Hello! I am a apiring artist who focus in Blender and deliver art in blocky yet realistic style!<br />
                        &emsp;&emsp;Inspired by EnchantedMob, Ekscoaster, Squared Media and many other talented artists, I decided to
                        embark on the path of art since the very begining of my youth. Starting by learning
                        &nbsp;<Link target="_blank" href="https://www.mineimator.com/" className="underline">Mine-Imator</Link>
                        &nbsp;from around 2022, then hopped onto
                        &nbsp;<Link target="_blank" href="https://www.blender.org/" className="underline">Blender</Link>
                        &nbsp;at 2023 by the time I admitted into University, and now I have 2 years of Blender experiences!
                    </p>
                    <p>
                        &emsp;&emsp;Everyone loves Blender—and for me, it&#39;s part of my daily rhythm. I&#39;ve learned nearly everything through it. 
                        The process of creating art can be tedious and even painful at times, but the moment your characters come to life, every struggle becomes worth it.
                    </p>
                    <SubSectionHeader text="Commission" colour="green" size="medium" />
                    <p>
                        &emsp;&emsp;I have never tried Commissions and have a very low chance will be, cause I am overwhelmed by school works.
                    </p>
                    <br />
                    <SubSectionHeader text="Support Me!" colour="yellow" size="small" />
                    <p>
                        &emsp;&emsp;Simple! Check out the link at the top-right of your screen!
                        and follow where they might leading you to!
                        <br />
                        <br />
                        <br />
                        <br />
                    </p>
                </div>
                <div>
                    <CardTable title="Blender" subtitle="# Relative index based on familities">
                        <ProgressionCard title="Modelling" description="Blender" progression={0.7} proportions={8} />
                        <ProgressionCard title="Geonodes" description="Blender" progression={0.2} proportions={8} />
                        <ProgressionCard title="Shadernodes" description="Blender" progression={0.6} proportions={8} />
                        <ProgressionCard title="Rigging" description="Blender" progression={1} proportions={8} />
                        <ProgressionCard title="Composition" description="Blender" progression={0.2} proportions={8} />
                        <ProgressionCard title="Lighting" description="Blender" progression={0.7} proportions={8} />
                        <ProgressionCard title="Set Building" description="Blender" progression={0.8} proportions={8} />
                    </CardTable>
                </div>
            </section>
            <PageFooter previousUrl="/dev/tech-stacks" currentPage={6} nextUrl="/art/gallery" />
        </main>
    )
}

export default ArtPage;