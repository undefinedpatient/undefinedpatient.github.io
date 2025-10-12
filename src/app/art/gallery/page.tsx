import Image from "next/image";
import { playfair_display } from "@/app/ui/fonts";
import PageFooter from "@/app/components/PageFooter";
import Gallery from "@/app/components/Gallery";
import GalleryCard from "@/app/components/GalleryCard";

function GalleryPage() {
    //Shows array of page options
    return (
        <main className={`${playfair_display.className} main-pages`}>
            <Image src="/imgs/paper_texture.jpg" alt="" className="image-background" width={1920} height={1080}></Image>
            <section>
                <h3 className="shadowed">Art Gallery</h3>
            </section>
            <section className="section-page-single">
                <Gallery>
                    <GalleryCard 
                    src="/imgs/lighting.jpg" 
                    title="Lighting" 
                    description="Well I am naturally more sensitive to protons." 
                    subtitle="" />
                    <GalleryCard 
                    src="/imgs/rigging.jpg" 
                    title="Rigging" 
                    description="Rig it! Make your characters!" 
                    subtitle="" />
                    <GalleryCard 
                    src="/imgs/modelling.jpg" 
                    title="Modelling" 
                    description="Somehow this must learn skill was skipped when I started learning Blender, but now i am picking up the pieces!" 
                    subtitle="" />
                    <GalleryCard
                    src="/imgs/animating.jpg" 
                    title="Animating" 
                    description="This is very tedious yet rewarding process, if things go smoothly, you will hyped for a while. In short, high risk high return." 
                    subtitle="" />
                    <GalleryCard 
                    src="/imgs/texturing.jpg" 
                    title="Texturing" 
                    description="Mostly of the time I leverage both hand paint and shader procedural material. You know, to save my time." 
                    subtitle="" />
                    <GalleryCard 
                    src="/imgs/setBuilding.jpg" 
                    title="Set Building" 
                    description="Isn't it captivating watching your imagined world comes alive?" 
                    subtitle="" />
                    <GalleryCard 
                    src="/imgs/composition.jpg" 
                    title="Composition" 
                    description="I rarely heavily rely on this during production, unless special effect like VHS or colour grading, normally it won't be touched." 
                    subtitle="" />
                    <GalleryCard 
                    src="/imgs/poster_making.jpg" 
                    title="Poster Design" 
                    description="Suprised? Blender can actually do poster designs with eevee!" 
                    subtitle="" />
                </Gallery>
            </section>
            <PageFooter previousUrl="/art" currentPage={7} nextUrl="/art/individual-arts" />
        </main>
    )
}

export default GalleryPage;