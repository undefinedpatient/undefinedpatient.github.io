import Image from "next/image";
import { playfair_display } from "@/app/ui/fonts";
import PageFooter from "@/app/components/PageFooter";
import Gallery from "@/app/components/Gallery";
import GalleryCard from "@/app/components/GalleryCard";

function GalleryPage() {
    //Shows array of page options
    return (
        <main className={`${playfair_display.className} main-pages`}>
            <Image src="/imgs/paper-texture.jpg" alt="" className="image-background" width={1920} height={1080}></Image>
            <section>
                <h3 className="shadowed">Art</h3>
            </section>
            <section className="section-page-single">
                <h5>Gallery</h5>
                <Gallery>
                    <GalleryCard src="" title="title" description="description" subtitle="subtitle"/>
                    <GalleryCard src="" title="title" description="description" subtitle="subtitle"/>
                </Gallery>
            </section>
            <PageFooter previousUrl="/art" currentPage={7} nextUrl="/art/individual-arts" />
        </main>
    )
}

export default GalleryPage;