import Image from "next/image";
import { playfair_display } from "@/app/ui/fonts";
import PageFooter from "@/app/components/PageFooter";

function ArtPage() {
    //Shows array of page options
    return (
        <main className={`${playfair_display.className} main-pages`}>
            <Image src="/imgs/paper-texture.jpg" alt="" className="image-background" width={1920} height={1080}></Image>
            <section>
                <h3 className="shadowed">Art</h3>
            </section>
            <section className="section-pages">
                <div>
                    <Image src="/imgs/forest.jpg" alt="forest" width={612} height={408} className="image-header shadowed" />
                    <h5>Overview</h5>
                </div>
                <div>
                </div>
            </section>
            <PageFooter previousUrl="/dev/tech-stacks" currentPage={6} nextUrl="/art/gallery" />
        </main>
    )
}

export default ArtPage;