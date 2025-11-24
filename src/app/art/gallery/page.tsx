import Image from "next/image";
import { playfair_display } from "@/app/ui/fonts";
import PageFooter from "@/app/components/PageFooter";
import Gallery from "@/app/components/Gallery";
import GalleryCard from "@/app/components/GalleryCard";
import ArtLinkPanel from "@/app/components/ArtLinkPanel";

import paperImage from "@/../public/imgs/paper_texture.webp";

import lightingImage from "@/../public/imgs/lighting.jpg";
import riggingImage from "@/../public/imgs/rigging.jpg";
import modellingImage from "@/../public/imgs/modelling.jpg";
import animatingImage from "@/../public/imgs/animating.jpg";
import texturingImage from "@/../public/imgs/texturing.jpg";
import setBuildingImage from "@/../public/imgs/setBuilding.jpg";
import compositionImage from "@/../public/imgs/composition.jpg";
import posterImage from "@/../public/imgs/poster_making.jpg";
function GalleryPage() {
    //Shows array of page options
    return (
        <main className={`${playfair_display.className} main-pages`}>
            <Image src={paperImage} placeholder="blur" alt="" className="image-background" width={1920} height={1080}></Image>
            <ArtLinkPanel />
            <section>
                <h3 className="shadowed">Art Gallery</h3>
            </section>
            <section className="section-page-single">
                <Gallery>
                    <GalleryCard 
                    src={lightingImage}
                    title="Lighting" 
                    description="Well I am naturally more sensitive to protons." 
                    subtitle="" />
                    <GalleryCard 
                    src={riggingImage}
                    title="Rigging" 
                    description="Rig it! Make your characters!" 
                    subtitle="" />
                    <GalleryCard 
                    src={modellingImage}
                    title="Modelling" 
                    description="Somehow this must learn skill was skipped when I started learning Blender, but now i am picking up the pieces!" 
                    subtitle="" />
                    <GalleryCard
                    src={animatingImage}
                    title="Animating" 
                    description="This is very tedious yet rewarding process, if things go smoothly, you will hyped for a while. In short, high risk high return." 
                    subtitle="" />
                    <GalleryCard 
                    src={texturingImage}
                    title="Texturing" 
                    description="Mostly of the time I leverage both hand paint and shader procedural material. You know, to save my time." 
                    subtitle="" />
                    <GalleryCard 
                    src={setBuildingImage}
                    title="Set Building" 
                    description="Isn't it captivating watching your imagined world comes alive?" 
                    subtitle="" />
                    <GalleryCard 
                    src={compositionImage}
                    title="Composition" 
                    description="I rarely heavily rely on this during production, unless special effect like VHS or colour grading, normally it won't be touched." 
                    subtitle="" />
                    <GalleryCard 
                    src={posterImage}
                    title="Poster Design" 
                    description="Suprised? Blender can actually do poster designs with eevee!" 
                    subtitle="" />
                </Gallery>
            </section>
            <PageFooter previousUrl="/art" currentPage={7} nextUrl="/" />
        </main>
    )
}

export default GalleryPage;