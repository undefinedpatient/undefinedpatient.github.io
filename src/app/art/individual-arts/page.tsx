import Image from "next/image";
import { playfair_display } from "@/app/ui/fonts";
import PageFooter from "@/app/components/PageFooter";

import paperImage from "@/../public/imgs/paper_texture.webp";
function IndividualArtPage() {
    //Shows array of page options
    return (
        <main className={`${playfair_display.className} main-pages`}>
            <Image src={paperImage} placeholder="blur" alt="" className="image-background" width={1920} height={1080}></Image>
            <section>
                <h3 className="shadowed">Art</h3>
            </section>
            <section className="section-under-construction">
                <h5 className="shadowed">Under Construction ,_,</h5>
            </section>
            <PageFooter previousUrl="/art/gallery" currentPage={8} nextUrl="/art/collaborative-arts" />
        </main>
    )
}

export default IndividualArtPage;